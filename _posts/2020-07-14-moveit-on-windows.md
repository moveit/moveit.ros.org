---
author: Dave Coleman, PhD
comments: false
date: 2020-07-14
layout: post
title: MoveIt now available on Windows
media_type: image
media_link: /assets/images/blog_posts/moveit_windows/ros_windows.png
description: Thanks to recent work by Microsoft's Windows IoT team, in collaboration with PickNik Robotics, preliminary support for Windows 10 IoT is now available for MoveIt 1.
categories:
- MoveIt
- ROS
- Microsoft
- Windows
---

##### Program your robotic arms while avoiding Linux entirely.

One of the original objectives of the Robot Operating System middleware is to provide a cross platform and cross language communication standard for various brands of robot hardware and software. While ROS has done a tremendous job of improving collaboration between robotics researchers and connecting various manufacturers of sensors and actuators, support for multiple operating systems has been a much more difficult journey.

Because of the overhead of supporting Linux, Windows, and macOS for open source volunteers, development of ROS has primarily been on Ubuntu Linux. This makes sense given Linux's free, open source nature and ubiquity in running the world's cloud infrastructure. However, many end user developers and roboticists prefer to run Windows or macOS on their desktops and laptops.

Thanks to recent work by <a href="https://github.com/seanyen" target="_blank">Sean Yen</a> and <a href="https://github.com/lilustga" target="_blank">Lior Lustgarten</a>, in collaboration with PickNik Robotics, preliminary support for <a href="https://www.microsoft.com/en-us/WindowsForBusiness/windows-iot" target="_blank">Microsoft Windows 10 IoT</a> is now available for MoveIt 1. The Windows IoT team at Microsoft has been <a href="https://www.therobotreport.com/ros-for-windows-microsoft-robotics/" target="_blank">leading the way to supporting all of ROS for Windows</a>, continuing Microsoft's new commitment to open source communities.

Future work includes hardening the MoveIt 1 build for Windows by having more users test and help improve the software. Beyond that, we look forward to adding Windows support for MoveIt 2, built on ROS 2. This should be easier given that ROS 2 has been built from the ground up to support all three major operating systems, being careful not to overly optimize design decisions for Ubuntu as happened in ROS 1.

Currently binary and source install instructions for Windows 10 IoT are now available on the <a href="https://moveit.ros.org/install/" target="_blank">MoveIt website install page</a>. The binary installation leverages the Chocolatey package manager, and the source install leverages ROS's catkin build tool.

##### Useful Links
- <a href="https://moveit.ros.org/install/" target="_blank">MoveIt Binary Install Instructions for Windows</a>
- <a href="https://moveit.ros.org/install/source-windows/" target="_blank">MoveIt Source Build Instructions for Windows</a>
- <a href="http://wiki.ros.org/Installation/Windows" target="_blank">ROS Build Instructions for Windows</a>
