---
outline: deep
---

# Pico 4 Ultra: So close, yet so far

<!-- Banner image here-->

I have owned the Pico 4 Ultra now for over 4 months, over these past months I have used the device for hours nearly every day be it inside, outside or in the car. I've put this device through it's upper limits.

This article is more of an overview and review of the device, what it is capable of and what I like about it as well as the things that could still be improved upon. It's an amazing device with some less so amazing quirks.

## Specs

Let's begin with specs, I won't bore you with the technical details, however I will quickly write about topics such as Optics, Image Quality, Processor and so on.

### Optics

the Pico 4 Ultra has Pancake Lenses, which are known for their enchanced image clarity compared to Fresnel lenses, however these do come with the downside of efficiency, even Pico 4 Ultra with it's LCD panels is only capable of 25% light efficiency at best, which makes optics very dim in comparison to alternatives.

Optics which Pico 4 Ultra uses have amazing binocular overlap which I've measured consistently as over 90%+ using [wimfov](https://boll.itch.io/wimfov) with a Field of View of roughly 102 for both Horizontal and Vertical which is impressive.

<!-- wimfov measurement image here -->

Brightness on the Pico 4 Ultra has been improved over it's predecessor Pico 4 which has improved brightness up to 25% which makes Pico 4 Ultra comfortably bright, but it's still lacking in comparison to other devices I have tried.

While the Pico 4 Ultra does have a reasonably huge sweetspot which I do not find fault in, it does not have the best E2EC (Edge to Edge Clarity) I'm seeing some blur on the last 5% of the outer visible FoV in my vision which I don't find as annoying.

I would like to also mention, I have IPD of 56 mm which falls below the 58mm minimum range of Pico, some users are able to use smaller IPD than their physical IPD which allows achieving perfect 100% binocular overlap.

### Displays

The Pico 4 Ultra uses a pair of SHARP 2.6" 2160x2160 RGB Stripe Oxide TFT-LCD panel with WLED backlight the panel is rated for 520 nit. The panel has the following colour gamut coverages; 100% sRGB, 87% DCI-P3 and 62% Rec.2020.

<!-- NOTE: specs may be wrong -->

However, once you put the device on those specifications become utterly useless, as they don't tell the whole story. Optics and Displays are Intervened in a way that both affect each others performance.

The colours are no longer washed out as they were on the Pico 4, thanks to the new colour calibration process they are vibrant and they provide a great viewing experience in both dark and bright scenes.

The displays are high resolution at 2160x2160 which eliminates SDE (Screen-Door-Effect) and I cannot perceive Mura on the display, but due to the Pico optic properties, it causes the black dots between the pixels to be perceivable if you pay attention to it.

<!-- Picture of Black dot pattern -->

### Processing

the Pico 4 Ultra uses Snapdragon XR2 Gen 2 with a proper thermal solution, which allows you to push the XR2 Gen 2 to it's limits and achieving extremely impressive performance.

the device has 12 GB of RAM which means developers have more resources to build their experiences which for example may allow higher fidelity textures.

the device has of 256 GB of inbuilt UFS 3.2 storage, that is enough to fit Super Mario 64 32,768 times into your device.

### Weight

#### Headset

the Pico 4 Ultra weights roughly 580 grams which is evenly distributed on the front and rear, the processing, optics, displays and such are on the front, where as the battery of the device is in the back.

#### Controllers

Each controller weights roughly around 166 grams.

## Tracking

The tracking on the Pico 4 Ultra is a mixed bag of feelings, the performance is disappointing sometimes but we need to look at the bigger picture to come to an conclusion.

### Headset

The tracking is powered by a SLAM tracking algorithm which is used to know where the device currently is. 

it doesn't quite work in low-light conditions which is really an issue under certain conditions, it may also perform poorly in clean environments as the tracking algorithm benefits from noise (unique patterns, unpredictability, noise, etc)

<!-- THE TRACKING DOES NOT WORK WITH LIGHTHOUSES OR MIXED VR WELL AT ALL -->

### Controllers

Controller tracking used IR-Constellation based tracking with the same cameras that are used for SLAM.

The controllers are able to track even if Headset Tracking is turned off without an issue, but if you have Headset Tracking enabled, the algorithm will fuse Hand Tracking and Controller Tracking together for improved tracking accuracy.

The tracking is generally very precise, I can play fast-phased games without no issue. But the tracking accuracy may suffer if the controller is partially covered or goes too much behind your back, as the Pico 4 Ultra controllers no longer have tracking rings which improved tracking capability in these edge cases.

There is a bug, where sometimes when the controller doesn't move for a certain period, it will attach to your hand as it uses this information to help tracking data when the controller may not be able to track itself precisely.

### Hand Tracking

while Hand Tracking on the Pico 4 Ultra is constantly being improved I am writing this as of PicoOS 5.13.3 and it is usable for basic interaction.

The tracking FoV is not great, it's on par with the original Leapmotion Controller 1 which was roughly 120 degrees, the algorithm also has a lot of latency that doesn't make it particularly enjoyable for more interactive experiences.

It can track your fingers pretty reliably if you aren't doing less common gestures such as crossing fingers, pulling back joints or convering your fingers partially.

### Full Body Tracking

The Pico Motion Trackers are affordable Full Body Tracking solution which uses combination of IR-Constellation for calibration, and IMU trackers with a ML model for pose prediction, it can track all the 11 joints of human body.

The tracking accuracy is okay, it's not quite accurate of course but for walking, standing, sitting and other common motions the trackers work extremely well, however the trackers seem to struggle in tracking above your knee, so if you pull your leg up at some point the tracking will stop, which is seemingly a limitation in the training data.

You can sit or laydown with the trackers without them drifting, it is possible to cover the trackers for long period with a blanket, however this will prevent the occasional automatic drift correction from working correctly which may cause accumplated yaw drift over time.

## Controllers

### Layout

On both controllers you find a system button, which can be used to open the system dock or to recenter your game during game play.

On the left controller you have a menu button, which can be used for anything by the developers, in Streaming this button is used as a binding for the SteamVR overlay, you can also find a XY buttons for general inputs with a trigger, side trigger and a thumbstick, all of these buttons contain capacitive sensor, except the side trigger.

On the right controller you have a screenshot or record button, which allows you to at any moment of time take a screenshot or start screen recording, I personally have found this really useful. And then we have the rest of the buttons just like on the left controller.

### Battery & Charging

The controllers are powered with dual AA batteries which last over two months without having to charge, or replace the batteries.

### Ergonomics

The controllers are shaped for a comfortable grip and they feel great in your hand, they are not too large or small, but this may wary for you as people have different sized hands.

## Headset

### Ergonomics

The Pico 4 Ultra is relatively comfortable out of the box, one of the best I have tried thanks to the balanced design, however the stock faceplate and rearpad are not comfortable for long term wear in my opinion, this waries on shape of your face and other factors.

They do also provide a glasses space in the box, which lets users with glasses wear the headset more comfortably.

### Audio

Audio is subjective, so I can only give my own impression here, and describe what it sounds like to me, you may not end up liking the sound that they produce so you can take this section with a grain of salt.

#### Speakers

The Pico 4 Ultra contains dual stereo speakers which honestly to me sound just fine, they contain the right amount of bass, the right amount of vocals and the right amount of treble and it is pleasant to listen to.

The speakers give a good sense of 3D audio perception which sounds really good when content uses binaural audio.

#### Microphone

The Pico 4 Ultra has dual micrphone array positioned right on top of your mouth for a clear sound of your voice.

<!-- a microphone test here -->

### Passthrough

the passthrough of the Pico 4 Ultra is way better any of the other devices I have tried, excluding Apple Vision Pro.

it is clear enough to be able to used for everyday tasks such as looking at your monitor, phone and just wearing it while cooking or walking outside, even watching TV was not an issue in my books although I don't recommend you to do what I do.

however, the device performs it's best during high ambient light conditions such as living room with a lot of light coming out of windows, an office environment with well lit enviroment or outdoors usage. In sitatuations where light may be lacking the passthrough becomes noticeably more grainy but it's still perfectly usable.

there is also some distortion in the passthrough which may be noticed in situations with weird geometry, such as when you're moving across rooms it may distro when walking through a door frame, it may also distort when you're looking at a very symmetrical geometry though these distortion are very minor and not noticeable unless you look for them.

the passthrough still doesn't handle certain edge cases of contrast, for example you're sitting in a room and there is a window, because the headset corrects the passthrough for the current ambient light the window will look very bloomy until you get closer to it which the headset then is able to adjust the lighting conditions.

I have noticed during outdoor use the passthrough resolution is very great when you're looking things in a reasonable distance, such as anything inside your home, but when you go outside you may notice objects such as trees or buildings will start lacking detail and may even look bit soft.

### Software

#### OOBE (Out-of-box experience)

The Pico 4 Ultra does not enforce account or cloud services for the device operation.

When you first boot the device it asks you for a few things: Your language, Your IPD and do you concept to giving analytics.

Once the setup process is done, you are free to use the system however you like, it does bundle three demoes you can try out though.

Without account however, some of the OS experience may be limited or non-functional but you can use the Headset in PCVR through PICO Connect without an account without an issue if you wish to do so.

#### Developer Mode

You do not need account,  credit card or to verify your phone number to get access to the Developer Mode, which can be enabled through Settings -> About -> Software Version and clicking it a few times.

Developer mode enables USB Debug which lets you connect the Headset to your PC through ADB.

Developer mode also has a Performance Tuner which lets you adjust the resolution, refresh rate, CPU/GPU levels and ffr on per-application basis for tweaking performance and quality.

#### Virtual Environments

The Pico 4 Ultra contains four exclusive high quality virtual environments with audio, and as well the old environments from the older headsets.

However thanks to the community efforts you can now download a wide range of custom environments using [PicoThemeManager](https://github.com/Nyabsi/PicoThemeManager).

#### Android Support

Pico 4 Ultra has first-party support for Android applications, so you can download Aurora Store and install things like Discord, Twitch or Netflix directly on the device from Google Play, which makes the device great for content consumption.

However, it is not possible as of right now, to change the orientation of applications so if you have an application that does not respect landscape mode it may seem bit odd on the Pico.

Pico 4 Ultra also provides L1 widevine certificate for apps such as Netflix that require it for drm protected content playback.

#### Window Management

Pico 4 Ultra provides a flexible Window Management system called "PanoScreen" this allows you to have up to 20 applications displayed either in a dome, or freely in a 6 DoF position placement.

Some applications may also if explictly set, display in the Dock, one of such applications is the system settings.

I personally don't like how the 6 DoF windows behave as of right now you cannot adjust them freely, the transformation is still tied to the Dock and the rotation angle is bit low for my taste. There is still a lot of room for improvement.

If window is too close to you, right now you cannot make the window smaller which is a bit of annoying.

#### Screen Capture

Pico 4 Ultra lets you record footage in three different formats: raw, monoscopic, spatial.

supported resolutions are 1920x1080 or 720x1280 with 1:1 or 16:9 aspect ratio.

unique feature of Pico 4 Ultra is it's capability to take Spatial images and videos captures through the Screen Capture feature which allows you to seamlessly capture gaming footage, passthrough or anything else that is seen in your screen.

I personally use this feature a lot and it's amazing.

#### PCVR Streaming

PICO Connects supports up to 1000 Mbps H.264 / 150 Mbps HEVC with Wired connection and 300 Mbps H.264 / 150 Mbps Wireless.

Using PICO Connect with a wire at 1000 Mbps H.264 is the best PCVR visual clarity you can get out of the device, but if you prefer using wireless then 300 Mbps H.264 is also a great option.

The PICO Connect has a lot of latency, which really for me personally makes it unbearable for fast-phased games like Beat Saber on Steam but some people are less prone to it.

#### Desktop Multi-Tasking

PICO Connect also supports streaming up to 3 monitors, and if you only have one, two or no monitors, no worries PICO Connect got you covered with upto 3 virtual monitors that you can create.

When using PICO Connect with Desktop, you can optionally have a on-screen keyboard in the Headset that can be used to interact with the Desktop.

#### Spatial Content

Pico can record and view spatial content inside the headset, but it is also capable of importing foreign spatial content.

The Pico is completely intercompatible with the Spatial format recorded by the Apple Vision Pro and iPhone 16, as other vendors that may exist.

You can easily import this content by connecting the device to PC and dragging the content to the DCIM folder, you may also optionally import the content through the PICO phone application.

The headset also can convert existing photos into spatial photos, and PICO phone app has cloud conversion from normal videos to MV-HEVC (spatial) videos.

#### Pico Motion Trackers

You can pair the trackers through the Trackers application by following the instructions.

Once the trackers are paired, you can put them on, the order doesn't matter, it will automatically determine which tracker belongs to which body part, You click, "Calibrate" and then stand up, look down, and the calibration is done. This is by far the easiest FBT I have ever used in my entire life.

The convinience of these trackers is truly what makes them worth purchasing, if you own or plan to own a Pico 4 Ultra, these are a must buy.
