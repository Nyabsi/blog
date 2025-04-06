---
outline: deep

# disable navigation
prev: false
next: false
---

> [!NOTE]
> You can read this [here](/entries/fi/miksi-kaytan-vive-pro-laseja-vuonna-2025.html) in Finnish.

# Why do I use a Vive Pro in 2025?

In 2016, the first Virtual Reality devices (Oculus Rift, HTC Vive) were commercialized for the consumer market, such devices were marketed towards entertainment. These devices boasted specifications that for the first time in history made Virtual Reality actually enjoyable and immersive experience.

Oculus implemented their own proprietary tracking, whereas Valve made their lighthouse tracking licensable by any vendor who wishes to use the tracking and technology in their products.

Since then there has been bi-yearly *ish* releases of new hardware by various of vendors, vendors had two choices: (A) they lease Valve's technology at a fee, only accounting for mandatory training (B) They implement their own technology for head and controller tracking.

At the beginning, everyone adopted Valve's tracking system, which was able to provide true room-scale tracking at reliability that could not be matched by the competition at the time.

A new problem arised, people were happy with their existing hardware, so they did not want to spend what seemed like an foolish amount for an incremental upgrade. During this time, Oculus started focusing more on Standalone hardware, which meant the Headset would not have to rely on a dedicated computer powering the headset, this was able to cut the cost of entry into the technology.

In 2018, Oculus released the Oculus Go which was able to provide a 3 DoF stationary VR experience at low cost, without any requirement for additional compute. This was beginning of the standalone revolution.

In 2019, Oculus released their first ever 6 DoF room-scale standalone device called the Oculus Quest, this was an massive improvement over the Oculus Go, people now could play all of their immersive room-scale VR games on a device that doesn't need separate compute or sensors.

This caused a shift in the focus of the market, companies started producing more hardware that is geared towards standalone and lighthouse compatible hardware production started to stagnate which left customers with no good choice.

### Specs of the Vive Pro

#### Lenses

Vive Pro has Fresnel lenses that are not that great, the clarity is heavily reduced due to the Fresnel elements, and it doesn;t have great edge to edge clarity. The lenses also contain a lot of glare which causes high contrast scenes to be slightly annoying.

Which I've replaced with the GearVR optical lenses for enchanced clarity.

<div align="center">
  <img src="https://raw.githubusercontent.com/Nyabsi/blog/refs/heads/main/static/vp1_ramble/images/lensshot.jpg" width="80%" height="80%"/>
  <p>Picture: My Vive Pro lenses, Source: Me</p>
</div>

#### Displays

Vive Pro uses a 1440x1600 OLED panel with Pentile layout, which at the time was good, the colour constrast and brightness are okay I think the display is still lacking in black depth, I have seen better displays and it also suffers from SDE (Screen Door Effect) which I personally don't mind.

#### Tracking

Vive Pro uses Lighthouse tracking system which has advantages in Full Body Tracking and ability to track in dark, this is my preferred tracking system as each object holds indepedent position so controllers or even trackers don't need to be in line of sight with the headset.

#### Comfort

the Vive Pro strap is not the best, it takes a lot of tinkering and adjusting to get it right, even then it's not really comfortable for long periods of time, I would recommend modding the strap to something else.

#### Passthrough

The passthrough boasts a whopping 640x480 stereo camera which is not great, it can be used for quickly taking a drink of avoiding collision with objects, but it's not really great for detail.

<div align="center">
  <video loop autoplay muted>
    <source src="https://github.com/Nyabsi/blog/raw/refs/heads/main/static/vp1_ramble/videos/passthrough_vp1.mp4" type="video/mp4">
  </video>
  <p>Video: Vive Pro Passthrough in action, Source: Me</p>
</div>

#### Controllers

The Vive Pro comes with the Vive Hands, but as I use the Valve knuckles I have not tried the controllers, they lack a Thumbstick and have a untypical layout which is undesirable.

### So, why the Vive Pro?

I have investing into a Lighthouse system for VR due to it's unique advantages and I required a cheap headset so when I saw a second hand Vive Pro for a relatively reasonable price, I decided to buy one. 

I think the technical specifications of the device are usable in 2025, would I buy one unless it's really cheap? Not really. But I do enjoy using the device as an temporary device before foreseeable upgrade.

I know there is other Lighthouse device HMDs but these are outrageously expensive which I don't think I will be purchasing as I'm not one to take part in financial irresponsibility. Bigscreen has recently released with Beyond 2 which seems to be my next step in my journey of PCVR.

Of course a massive weight for my decision of the purchase was it being Lighthouse compatible. I do development for lighthouse compatible hardware and I use Vive Trackers.

There is a community solution called [OpenVR-SpaceCalibrator](https://github.com/hyblocker/OpenVR-SpaceCalibrator) which allows using Lighthouse hardware like Tundra or Vive Trackers or Valve Knuckles on headsets that are not lighthouse tracked, but this method has a quirks that make it particularly annoying to use.

I am also fan of tethered displays, as this allows extremely low latency artifact free image and this is appreciated in more fast phased games such as Beat Saber. And not having compression artifacts make certain experiences like Half Life Alyyx, BONEWORKS and such more immersive.
