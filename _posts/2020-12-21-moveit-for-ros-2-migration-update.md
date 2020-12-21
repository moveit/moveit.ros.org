---
date: 2020-12-21 09:48:22 -0700
layout: post
author: Henning Kayser
comments: false
title: MoveIt for ROS 2 Migration Update
media_type: image
media_link: "/assets/images/blog_posts/2020-12-21-ros-2-tsc-moveit-2-update.png"
description: Progress update and learnings about the MoveIt 2 Migration progress as
  shared at the TSC in December 2020.
categories:
- MoveIt
- ROS 2
- TSC

---
With the end of the year right around the corner we’ve taken a look back on the progress and challenges of the ROS 2 migration of MoveIt. Check out our [latest presentation on MoveIt 2](https://docs.google.com/presentation/d/1pcW9v-ynGKuSqNtY-QJ4Ts5SkRZS6DmRARFYPisIqSU/edit?usp=sharing).

**Milestone 1 - Straight Migration** - was completed and resulted in feature-parity with the ROS 1 versions and three new example demos to showcase MoveItCpp, MoveGroup and MoveIt Servo. There is still plenty of work to be done, especially regarding the launch and parameter setup and related redesign of the MoveIt Setup Assistant but more importantly, we are shifting our focus from basic conversion to real world adoption and new features.

**Milestone 2** **-** **Realtime Support -** is being addressed with the port of MoveIt Servo’s PoseTracking API and the new exciting Hybrid Planning architecture. The new Foxy 2.1 version marks the start of many new releases scheduled every 6 weeks, facilitated by an upcoming switch to Rolling Ridley on the main branch. But most importantly, we are finally pushing for more hardware support, featuring the ROS 2 port of the Universal Robots ROS driver, a demo with HelloRobot’s mobile manipulator “Fetch”, and a micro-ROS integration demo in collaboration with eProsima.