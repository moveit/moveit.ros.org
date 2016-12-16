---
author: 130s
comments: false
date: 2016-12-15 00:00:00+00:00
layout: post
slug: firstkineticrelease
title: MoveIt! officially released into ROS Kinetic
media_type: image
media_link: http://www.ros.org/news/2016/05/23/kinetic.png
description: MoveIt! is now released into ROS [Kinetic](http://wiki.ros.org/kinetic) LTS (Long Term Support)! Kinetic is now the recommended ROS version that comes with the newest capabilities and bug fixes for MoveIt!.
categories:
- MoveIt!
- ROS
---

We are happy to announce MoveIt! is now released into ROS [Kinetic](http://wiki.ros.org/kinetic) LTS (Long Term Support)! Kinetic is now the recommended ROS version that comes with the newest capabilities and bug fixes for MoveIt!.

Notably, in Kinetic, C++11 is now fully utilized for MoveIt! -- which means you *must* build all packages that include MoveIt! headers with support for C++11.

Some new features and bug-fixes added since the [last release into Jade](http://moveit.ros.org/moveit!/ros/2016/09/02/firstjaderelease.html), :

- [Trajectory safety validation before execution](https://github.com/ros-planning/moveit/pull/63) (Kinetic onward only)
- New planners in [OMPL](http://ompl.kavrakilab.org/) are now available from MoveIt! (geometric::{FMT, BFMT, PDST, STRIDE, BiTRRT, LBTRRT, BiEST, ProjEST, LazyPRM, LazyPRMstar, SPARS, SPARStwo}) ([see PR for detail](https://github.com/ros-planning/moveit/pull/338))
- [MoveGroup's default capabilities are now added by default](https://github.com/ros-planning/moveit/pull/359).
- [New benchmarking using PlanningArena](https://github.com/ros-planning/moveit/pull/228)
- [Separate Pick request without Grasps from Grasp Planning request](https://github.com/ros-planning/moveit/pull/328)
- [Increase collision checking reliability for newly created moveit_config packages](https://github.com/ros-planning/moveit/pull/337)
- [IK solvers consolidated into a new moveit_kinematics package](https://github.com/ros-planning/moveit/pull/247)
- [Fix unreasonable "Invalid Trajectory: start point deviates" error](https://github.com/ros-planning/moveit/issues/283)
- Fedora support is added. Feedback (and fix if necessary) welcomed!

If you're running your robot packages with ROS Kinetic, and/or if you want to try the newest MoveIt!, start at [moveit.ros.org/install](http://moveit.ros.org/install/)

Update on ROS Indigo
====================

While future releases will primarily target Kinetic, the maintainers are working towards a new binary release into Indigo as well. ABI-compatible changes are still being released into previous ROS distros.

--Your friendly MoveIt! maintenance team.
