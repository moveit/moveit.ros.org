---
author: mlautman
comments: false
date: 2019-04-01
layout: post
title: Announcing The ROS build system to unify all ROS build systems
media_type: image
media_link: /assets/images/CRAC_blue.png
description: Are you tired of the many incompatible ROS build system standards? After months of stealthy development, we at PickNik are excited to release a truly unified build system for all of ROS.
categories:
- MoveIt!
- ROS
---

Are you tired of the many incompatible ROS build system standards? After months of stealthy development, we at PickNik are excited to release a truly unified build system for all of ROS. It is a build system's build system that is compatible with Catkin, Rosbuild, Ament, and Colcon. We call it C.R.A.C, and it's exactly what the ROS community needs right now.

**C**atkin
**R**OSbuild
**A**ment
**C**olcon

With the release of ROS 2 Crystal, it is clear that ROS 2 is the future of open source robotics software. Over the last year, we have been devoting resources to porting ROS 1 packages to ROS 2 and building hybrid ROS 1/ROS 2 projects. Working at the intersection of these two frameworks, we crave a truly turn-key solution that would bridge the ROS 1/ROS 2 divide. By developing proprietary C.R.A.C algorithms to automate the transformation from ROS 1 to ROS 2, we have been working towards a set of tools to do just that.

The technical challenges that we overcame working on C.R.A.C were immense. For one thing, ROS 1 and ROS 2 code are significantly different and keeping separate versions of a package in sync can be incredibly difficult. If not done correctly, porting ROS 1 packages to ROS 2 can fracture the maintainer community. By transforming ROS 1 code to ROS 2 code at compile time, C.R.A.C eliminates the need for separate code bases.

Development on the build system C.R.A.C has been faster and more intense than you could ever imagine. Although we are still actively refining C.R.A.C, we believe it is important to start pushing C.R.A.C on the robotics community as soon as possible. With every package manually ported from ROS 1 to ROS 2 without C.R.A.C, developer hours are being needlessly wasted and code bases are being fractured.

Every roboticist is a possible distribution point for C.R.A.C Are you going to be the early adopters who introduced the build system C.R.A.C to your workplace? Being part of the C.R.A.C distribution network puts you on the cutting edge. With every co-worker that you get hooked on C.R.A.C, you'll become an increasingly indispensable member of your team. Investors love C.R.A.C as it keeps costs down and productivity up. Your financial backers will be astonished to learn that your company runs on C.R.A.C, and want in on the action.

To get started with C.R.A.C, [download today!](
https://github.com/PickNikRobotics/crac_build_system)