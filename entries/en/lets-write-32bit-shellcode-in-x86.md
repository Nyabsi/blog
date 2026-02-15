---
outline: deep

# disable navigation
prev: false
next: false
---

# Let's write 32-bit shellcode in x86!

For a long time, I've been intrigued by computers; that's why I enjoy working with low-level languages such as C++. But I came to the realization that I am actually just still programming with interfaces such as the Win32 API.

So, I began looking at how LoadLibraryA works internally or how a program resolves library exports from them. This is where I stumbled eventually upon the concept of position-independent code (PIC). What this means is it's code that can execute from memory regardless of its current position. It comes with restrictions such as not being able to use dynamic linking or dynamic addressing.

## Chapter 1: The Process Environment Block

When we write position-independent code (PIC), we cannot use dynamic addressing, linking, or such conveniences.

So resolving functions such as `LoadLibraryA`, `MessageBoxA` and `ShellExecuteA` becomes impossible, or does it? Lucky for us. The process environment block contains a `Ldr` (loaderData) section that imports system libraries, i.e., `NTDLL.dll` and `KERNEL32.dll`.


We can parse the PE header manually to resolve function exports from these system libraries to use the Win32 API. We can access this from the FS segment register at `0x30` on x86 Win32:

```asm
    mov eax, fs: [0x30]
```

Now that we have the PEB structure pointer, let's take a look at the PEB struct so we know where to access the `Ldr` member.

```c
typedef struct _PEB {
  BYTE                          Reserved1[2];
  BYTE                          BeingDebugged;
  BYTE                          Reserved2[1];
  PVOID                         Reserved3[2];
  PPEB_LDR_DATA                 Ldr;
  PRTL_USER_PROCESS_PARAMETERS  ProcessParameters;
  PVOID                         Reserved4[3];
  PVOID                         AtlThunkSListPtr;
  PVOID                         Reserved5;
  ULONG                         Reserved6;
  PVOID                         Reserved7;
  ULONG                         Reserved8;
  ULONG                         AtlThunkSListPtr32;
  PVOID                         Reserved9[45];
  BYTE                          Reserved10[96];
  PPS_POST_PROCESS_INIT_ROUTINE PostProcessInitRoutine;
  BYTE                          Reserved11[128];
  PVOID                         Reserved12[1];
  ULONG                         SessionId;
} PEB, *PPEB;
```

As we can see, the `Ldr` is the fifth member of the `PEB` structure. Since guessing the offset is stupid, we can use a bit of C to figure out the offset:

```c
printf("PEB->Ldr: %02x\n", offsetof(PEB, Ldr));
```

The result is `0c`.

```asm
    mov eax, fs: [0x30]             ; Process Information Block
    mov eax, [eax + 0xC]            ; PEB->Ldr
```

So we can access the Ldr by dereferencing eax with the offset of `0xC`.

```c
typedef struct _PEB_LDR_DATA {
  BYTE       Reserved1[8];
  PVOID      Reserved2[3];
  LIST_ENTRY InMemoryOrderModuleList;
} PEB_LDR_DATA, *PPEB_LDR_DATA;
```

Next we do the same for `InMemoryOrderModuleList` in `PEB_LDR_DATA`, once we know `Ldr` is `0xC` and `InMemoryOrderModuleList` is `0x14`. We can load the effective address of `InMemoryOrderModuleList` and iterate through it.

```asm
    mov eax, fs: [0x30]             ; Process Information Block
    mov eax, [eax + 0xC]            ; PEB->Ldr
    lea edi, [eax + 0x14]           ; PEB->Ldr->InMemoryOrderModuleList
```

There is something to note: `LDR_DATA_TABLE_ENTRY` does not contain an entry where only the DLL name is listed officially; however, it seems that `Reserved4` seems to contain a `UNICODE_STRING` that contains only the DLL name, i.e., `NTDLL.DLL` or `KERNEL32.DLL`.

```c
typedef struct _LDR_DATA_TABLE_ENTRY {
    PVOID Reserved1[2];
    LIST_ENTRY InMemoryOrderLinks;
    PVOID Reserved2[2];
    PVOID DllBase;
    PVOID Reserved3[2];
    UNICODE_STRING FullDllName;
    BYTE Reserved4[8];
    PVOID Reserved5[3];
    union
    {
        ULONG CheckSum;
        PVOID Reserved6;
    };
    ULONG TimeDateStamp;
} LDR_DATA_TABLE_ENTRY, *PLDR_DATA_TABLE_ENTRY;
```

So we use that instead and compare if the length of the `UNICODE_STRING` is 24 to find `KERNEL32.DLL` because there should never be two DLLs with the same length, and due to it being Unicode, the actual size of the string is multiplied by two, so if `KERNEL32.DLL` is 12 characters long, our comparison is 24.

```asm
    mov esi, [edi]                  ; Flink
loop_til_kernel32_found:
    cmp esi, edi                    ; Current != Head
    je cleanup                      ; If loops ends before we find KERNEL32.dll, jump to cleanup

    mov ebx, esi                    ; Copy esi to ebx
    sub ebx, 0x8                    ; Subtract InMemoryOrderLinks

    lea ecx, [ebx + 0x2C]           ; UNICODE_STRING Reserved4
    movzx edx, word ptr [ecx]       ; Copy Length from UNICODE_STRING
    cmp edx, 24                     ; Length of KERNEL32.DLL
    jne not_kernel32

    mov eax, [ebx + 0x18]           ; DllBase
    jmp found_kernel32
not_kernel32:
    mov esi, [esi]
    jmp loop_til_kernel32_found
```

Now that we have loaded the `DllBase` to we have to start parsing the PE header.

## Chapter 3: PE Header & Data Directories

The PE header can be considered the "metadata" of a file; it tells us what it embeds, where the code is located, and whether it imports or exports libraries. By parsing this file, we can get access to other Win32 functionality through KERNEL32.dll.

Let's walk through the process of implementing GetProcAddr from scratch:

First we should get the PE header offset (`e_lfanew`) from the DOS header and read the NT header.

```c
IMAGE_DOS_HEADER* dosHeader = reinterpret_cast<IMAGE_DOS_HEADER*>(modlib);
IMAGE_NT_HEADERS32* ntHeader = reinterpret_cast<IMAGE_NT_HEADERS*>(
    (reinterpret_cast<BYTE*>(modlib) + dosHeader->e_lfanew)
);
```

Then we should read the `DataDirectory` from *OptionalHeader*.

```c
MAGE_OPTIONAL_HEADER32 optionalHeader ntHeader->OptionalHeader;
IMAGE_DATA_DIRECTORY dataDirectory = optionalHeader.DataDirectory[IMAGE_DIRECTORY_ENTRY_EXPORT];
```

Take the relative virtual address from `DataDirectory` and convert it to a virtual address.

```c
PIMAGE_EXPORT_DIRECTORY exportDirectory = reinterpret_cast<PIMAGE_EXPORT_DIRECTORY>((reinterpret_cast<BYTE*>(modlib) + dataDirectory.VirtualAddress));
```

Now that we have a valid address`` we should loop through each function export and try to match LoadLibraryA.

```c
DWORD* AddressOfNames = reinterpret_cast<DWORD*>(
    (reinterpret_cast<BYTE*>(modlib) + exportDirectory->AddressOfNames)
);

DWORD* AddressOfFunctions = reinterpret_cast<DWORD*>(
    (reinterpret_cast<BYTE*>(modlib) + exportDirectory->AddressOfFunctions)
);

WORD* AddressOfNameOrdinals = reinterpret_cast<WORD*>(
    (reinterpret_cast<BYTE*>(modlib) + exportDirectory->AddressOfNameOrdinals)
);

for (int i = 0; i < exportDirectory->NumberOfNames; i++) {
    const char* name = reinterpret_cast<const char*>(
        reinterpret_cast<BYTE*>(modlib) + AddressOfNames[i]
    );
    if (strcmp(name, "LoadLibraryA") == 0) {
        auto function = reinterpret_cast<void*>(
            reinterpret_cast<BYTE*>(modlib) + AddressOfFunctions[AddressOfNameOrdinals[i]]
        );
        // ...
    }
}
```

Now that we have a reference of how this is implemented in C++, how do we implement this in assembly? Let's say that `eax = DllBase`.

```asm
    mov ebx, [eax + 0x3C]           ; IMAGE_DOS_HEADER e_lfanew
    add ebx, eax                    ; IMAGE_NT_HEADERS32
```

First we load the NT header to `ebx` by loading e_lfanew from the DOS header at offset `0x3C` then we add `eax` to ensure `ebx` is pointing at the NT header.

```asm
    mov edx, [ebx + 0x78]           ; OptionalHeader->DataDirectory[0]
    add edx, eax                    ; RVA -> VA
```

Next, load `IMAGE_DIRECTORY_ENTRY_EXPORT` from `ebx` which is pointing to the NT header. We can do this by knowing that OptionalHeader is at `0x60` and is within `0x18` in DataDirectory, then converting the relative address to absolute.

```asm
    mov ebx, [edx + 0x18]           ; NumberOfNames
    dec ebx
```

Since we're implementing a reverse loop, we move the number of exports to `ebx` and immediately decrement the register to ensure we don't get an out-of-bounds check.

```asm
    mov esi, [edx + 0x20]           ; AddressOfNames
    add esi, eax
```

We are loading the base pointer of `AddressOfNames` outside of the loop, so we don't have to recalculate it every everytime.

```asm
loop_til_loadlibrary_found:
    test ebx, ebx
    je cleanup
```

Check if `ebx` is zero; if it is, it means we did not find LoadLibraryA before `AddressOfNames` ran out, so just clean up.

```asm
    mov edi, [esi + ebx * 4]        ; AddressOfNames[ebx]
    add edi, eax
    mov ecx, [edi]
```

Load the `AddressOfNames` based on the current index of `ebx` and convert the relative address to absolute.

```asm
    cmp ecx, 0x64616F4C             ; Load
    jne not_loadlibrary

    mov ecx, [edi + 4]
    cmp ecx, 0x7262694C             ; Libr
    jne not_loadlibrary

    mov ecx, [edi + 8]
    cmp ecx, 0x41797261             ; aryA
    jne not_loadlibrary

    jmp loadlibrary_found
```

Compare DWORD in chunks to `edi` which holds the current export name; if all of them match, then we found our match; otherwise, continue the loop.

```asm
not_loadlibrary:
    dec ebx
    jmp loop_til_loadlibrary_found
```

Decrement the `ebx` register and jump back to the top of the loop, as this routine only triggers when a match was not found.

```asm
loadlibrary_found:
    mov esi, [edx+0x24]             ; AddressOfNameOrdinals
    add esi, eax
    movzx edi, word ptr [esi + ebx * 2]

    mov esi, [edx+0x1C]             ; AddressOfFunctions
    add esi, eax

    mov ecx, [esi + edi * 4]
    add ecx, eax
```

Load the current ordinal into the `esi` register and then use the ordinal to get the function pointer and store it to `ecx` And there it is; that's how we can manually implement functionality equivalent to GetProcAddr without having to use it.

## Chapter 3: Calling Conventions

Now that we have an address to our function, we need to figure out how to invoke it. This can widely differ depending on the calling convention of the function; Win32 uses  `__stdcall`.

When using `__stdcall` we don't have to clean the stack, so we only have to clean our own allocation:

```asm
    sub esp, 12
    /* ... */
    lea ebx, [esp]                  ; shell32.dll
    push ebx
    call ecx
    add esp, 12
```

If this was `__cdecl` we would have to add `+4` because the caller is responsible for clearing esp:

```asm
    sub esp, 12
    /* ... */
    lea ebx, [esp]                  ; shell32.dll
    push ebx
    call ecx
    add esp, 16
```

But since 32-bit uses `__stdcall` we do not have to worry about this.

## Chapter 4: Pushing Stack

Let's say we have `ShellExecuteA` which has the following API definition:

```c
HINSTANCE ShellExecuteA(
  [in, optional] HWND   hwnd,
  [in, optional] LPCSTR lpOperation,
  [in]           LPCSTR lpFile,
  [in, optional] LPCSTR lpParameters,
  [in, optional] LPCSTR lpDirectory,
  [in]           INT    nShowCmd
);
```

To call it in C, we would write something like this.

```c
ShellExecuteA(0, "open", "calc", 0, 0, 0);
```

Now, you would assume when pushing to assembly we would do something like this:

```asm
push 0      ; hwnd
push eax    ; lpOperation
push ebx    ; lpFile
push 0      ; lpParameters
push 0      ; lpDirectory
push 0      ; nShowCmd
call ShellExecuteA
```

For the sake of example, let's assume `eax = "open"` and `ebx = "calc"` which both have been allocated on the stack. This code does not work, because in assembly the way to push a stack is actually reversed compared to the programmatic definition of the same function.

So the way it would be done is:

```asm
push 0      ; nShowCmd
push 0      ; lpDirectory
push 0      ; lpParameters
push ebx    ; lpFile
push eax    ; lpOperation
push 0      ; hwnd
call ShellExecuteA
```

And this would invoke the function correctly.

## Chapter 5: Putting it all together

Now that we understand the individual concepts, we can stick everything together to build a final code.

### 1. Get a list of modules from PEB loaderData

```asm
    mov eax, fs: [0x30]             ; Process Information Block
    mov eax, [eax + 0xC]            ; PEB->Ldr
    lea edi, [eax + 0x14]           ; PEB->Ldr->InMemoryOrderModuleList
```

### 2. Loop through InMemoryOrderModuleList til we find KERNEL32.dll

```asm
    mov esi, [edi]                  ; Flink
loop_til_kernel32_found:
    cmp esi, edi                    ; current != head
    je cleanup

    mov ebx, esi
    sub ebx, 0x8                    ; subtract InMemoryOrderLinks

    lea ecx, [ebx + 0x2C]           ; UNICODE_STRING BaseDllName
    movzx edx, word ptr [ecx]
    cmp edx, 24                     ; KERNEL32.DLL
    jne not_kernel32

    mov eax, [ebx + 0x18]           ; DllBase
    jmp found_kernel32
not_kernel32:
    mov esi, [esi]
    jmp loop_til_kernel32_found
found_kernel32:
    mov ebx, [eax + 0x3C]           ; IMAGE_DOS_HEADER e_lfanew
    add ebx, eax                    ; IMAGE_NT_HEADERS32
    
    mov edx, [ebx + 0x78]           ; OptionalHeader->DataDirectory[0]
    add edx, eax                    ; RVA -> VA
```

### 3. Iterate through IMAGE_DIRECTORY_ENTRY_EXPORT from KERNEL32.dll to find LoadLibrary and resolve the address

```asm
    mov ebx, [edx + 0x18]           ; NumberOfNames
    dec ebx

    mov esi, [edx + 0x20]           ; AddressOfNames
    add esi, eax
loop_til_loadlibrary_found:
    test ebx, ebx
    je cleanup

    mov edi, [esi + ebx * 4]        ; AddressOfNames[ebx]
    add edi, eax
    mov ecx, [edi]

    cmp ecx, 0x64616F4C             ; Load
    jne not_loadlibrary

    mov ecx, [edi + 4]
    cmp ecx, 0x7262694C             ; Libr
    jne not_loadlibrary

    mov ecx, [edi + 8]
    cmp ecx, 0x41797261             ; aryA
    jne not_loadlibrary

    jmp loadlibrary_found
not_loadlibrary:
    dec ebx
    jmp loop_til_loadlibrary_found
loadlibrary_found:
    mov esi, [edx+0x24]             ; AddressOfNameOrdinals
    add esi, eax
    movzx edi, word ptr [esi + ebx * 2]

    mov esi, [edx+0x1C]             ; AddressOfFunctions
    add esi, eax

    mov ecx, [esi + edi * 4]
    add ecx, eax
```

### 4. Use the LoadLibrary function to resolve SHELL32.dll base address

```asm
    sub esp, 12
    mov byte ptr [esp], 0x73
    mov byte ptr [esp + 1], 0x68
    mov byte ptr [esp + 2], 0x65
    mov byte ptr [esp + 3], 0x6C
    mov byte ptr [esp + 4], 0x6C
    mov byte ptr [esp + 5], 0x33
    mov byte ptr [esp + 6], 0x32
    mov byte ptr [esp + 7], 0x2E
    mov byte ptr [esp + 8], 0x64
    mov byte ptr [esp + 9], 0x6C
    mov byte ptr [esp + 10], 0x6C
    mov byte ptr [esp + 11], 0x00
    lea ebx, [esp]                  ; shell32.dll

    push ebx

    call ecx
    
    add esp, 12
    test eax, eax
    jz cleanup
```

### 5. Iterate through IMAGE_DIRECTORY_ENTRY_EXPORT from SHELL32.dll to find ShellexecuteA and resolve the address

```asm
    mov ebx, [eax + 0x3C]
    add ebx, eax

    mov edx, [ebx + 0x78]
    add edx, eax

    mov ebx, [edx + 0x18]
    dec ebx

    mov esi, [edx + 0x20]
    add esi, eax
loop_til_shellexecute_found:
    test ebx, ebx
    je cleanup

    mov edi, [esi + ebx * 4]
    add edi, eax

    mov ecx, [edi]
    cmp ecx, 0x6C656853             ; Shel
    jne not_shellexecute

    mov ecx, [edi + 4]
    cmp ecx, 0x6578456C             ; lExe
    jne not_shellexecute

    mov ecx, [edi + 8]
    cmp ecx, 0x65747563             ; cute
    jne not_shellexecute

    cmp byte ptr [edi + 12], 0x41   ; A
    jne not_shellexecute

    jmp shellexecute_found
not_shellexecute:
    dec ebx
    jmp loop_til_shellexecute_found
shellexecute_found :
    mov esi, [edx + 0x24]
    add esi, eax
    movzx edi, word ptr [esi + ebx * 2]

    mov esi, [edx + 0x1C]
    add esi, eax
    mov ecx, [esi + edi * 4]
    add ecx, eax
```

### 6. invoke ShellExecuteA

```asm
    sub esp, 10
    mov byte ptr [esp], 0x6F
    mov byte ptr [esp + 1], 0x70
    mov byte ptr [esp + 2], 0x65
    mov byte ptr [esp + 3], 0x6E
    mov byte ptr [esp + 4], 0x00
    lea ebx, [esp]                  ; open

    mov byte ptr [esp + 5], 0x63
    mov byte ptr [esp + 6], 0x61
    mov byte ptr [esp + 7], 0x6C
    mov byte ptr [esp + 8], 0x63
    mov byte ptr [esp + 9], 0x00
    lea edx, [esp + 5]              ; calc

    push 0                          ; nShowCmd
    push 0                          ; lpDirectory
    push 0                          ; lpParameters
    push edx                        ; lpFile
    push ebx                        ; lpOperation

    push 0                          ; hwnd
    call ecx
    add esp, 10
```

### 7. Cleanup registers

```asm
cleanup:
    xor eax, eax
    xor ebx, ebx
    xor ecx, ecx
    xor edx, edx
    xor esi, esi
    xor edi, edi
```

### Chapter 6: Final words

This was an interesting journey of learning more about OS internals and how to write position-independent code.

However, my implementation is far from perfect, it is the result of two days of experimentation and it's not intended to work on all environments.

It has been tested and ran on Windows 11 but I cannot guarantee it working on any other system.

If you want to see the full code, you can do it at https://gist.github.com/Nyabsi/e3d279fa1b544df8bc7ca7e7de62eba2
