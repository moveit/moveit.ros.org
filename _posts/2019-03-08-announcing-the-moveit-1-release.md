---
author: henningkayser
comments: false
date: 2019-03-08
layout: post
title: Announcing MoveIt 1.0 and a Master Branch
media_type: image
media_link: /assets/images/moveit_1_release.png
description: MoveIt has been in beta since 2013 (6 years), but today we're excited to announce MoveIt is all grown up. We are releasing MoveIt 1.0 for ROS Melodic.
categories:
- MoveIt!
- ROS
---

MoveIt has been in beta since 2013 (6 years), but today we're excited to announce MoveIt is all grown up.
We are releasing MoveIt 1.0 for ROS Melodic.

What does this mean for you? The MoveIt maintainer team is moving towards clearer release schedules with better understood API breakage rational.
Notably, we are now doing all our development in a master branch rather than the melodic-devel branch, etc.
This will allow us to add exciting new features, even if it means we have to break API in certain areas and refactor the code to support new motion planning paradigms.
See Dave Coleman's [Open Letter To MoveIt Community](https://discourse.ros.org/t/open-letter-to-moveit-community/6779) for more reasoning.

It also allows us to break ground on MoveIt 2.0, which will provide support for the exciting ROS 2.0 framework.
The port of MoveIt to ROS 2 has already begun, as described in [this recent blog post](https://moveit.ros.org/moveit!/ros/2019/03/01/announcing-the-moveit-2-port.html).
For a full roadmap of MoveIt versioning, see the [MoveIt 1.0 release plan](https://discourse.ros.org/t/versioning-roadmap-moveit-1-0-release-plan/7437).

**What's New In MoveIt 1.0?**

There have been lots of new features being added to MoveIt the past year that we're really excited about.
Beyond features, a ton of code cleanup has occurred (clang-tidy, catkin lint) and we have a lot more code coverage.
For more info, see [Migration Notes](https://github.com/moveit/moveit/blob/master/MIGRATION.md).

Highlights of changes:

* [KDL Inverse Kinematic speedups](https://github.com/moveit/moveit/pull/1321)
* [Improved support for Gazebo](https://github.com/moveit/moveit/pull/1051)
* [Improved integration with ROS Control](https://github.com/moveit/moveit/pull/994)
* [CHOMP planning adapter for optimizing result of other planners](https://github.com/moveit/moveit/pull/1012)
* [Interpolation and motion validation consistency with OMPL](https://github.com/moveit/moveit/pull/869)
* [Improved quality of Cartesian paths](https://github.com/moveit/moveit/pull/1293)
* [Tool to generate constraint approximation databases](https://github.com/moveit/moveit/pull/1253)
* [Improved iterative spline parameterization](https://github.com/moveit/moveit/pull/1298)
* [IKFast](https://github.com/moveit/moveit/pull/1320) and [LMA IK](https://github.com/moveit/moveit/pull/1318) improvements
* [FCL shape cache thread-local for speedup](https://github.com/moveit/moveit/pull/1316)
* [Iterative cubic spline algorithm](https://github.com/moveit/moveit/pull/853)
* [Improved benchmarking](https://github.com/moveit/moveit/pull/992)
* [Computation speedups with Eigen::Isometry3d](https://github.com/moveit/moveit/pull/1096)
* [Migration to TF2](https://github.com/moveit/moveit/pull/830)
* [Improved Python 3 support](https://github.com/moveit/moveit/pull/1054)
* [Constrained Cartesian planning using moveit commander](https://github.com/moveit/moveit/pull/805)
* [Allow multiple eefs per planning group](https://github.com/moveit/moveit/pull/1347)
* [Support for fcl 0.6](https://github.com/moveit/moveit/pull/1156)
* [CartesianPath planning check box](https://github.com/moveit/moveit/pull/1238)
* [Improved Rviz motion planning plugin](https://github.com/moveit/moveit/pull/1198)
* [Add namespace capabilities to moveit_commander](https://github.com/moveit/moveit/pull/835)
* [Command line utility tool to print planning scene info](https://github.com/moveit/moveit/pull/1239)
* [Remove TinyXML-based API](https://github.com/moveit/moveit/pull/1254)
* [Added locale support](https://github.com/moveit/moveit/pull/1099)

**Thanks to all our contributors!**

MoveIt is a vibrant open source community with a rapidly improving codebase.
Our [maintainer team](https://moveit.ros.org/about/) is awesome, particularly Robert Haschke and Michael Görner, both hailing from Germany.

We've had 158 contributors to date that have made MoveIt 1.0 possible.
We've come a long way from the early days of MoveIt at Willow Garage.
MoveIt is now a huge international effort with contributors from research labs and companies around the world.
See our [2017 montage](https://moveit.ros.org/moveit!/ros/2017/06/20/videoMontage2017.html) for some of the impressive applications using MoveIt.

Under [PickNik Consulting](https://picknik.ai/)'s guidance, we're encouraging more people to get involved --  including you!
Our third year of [World MoveIt Day](https://moveit.ros.org/moveit!/ros/2018/11/20/wordlmoveitdayreport3.html) had approximately 310 participants from 13 locations around the globe.
Together with Open Robotics, PickNik sponsored three Google Summer of Code students to [work on MoveIt](https://moveit.ros.org/moveit!/ros/2018/05/08/google-summer-of-code.html) last summer.
We've also put in a ton of effort making MoveIt easier to use, from the [MoveIt Setup Assistant 2.0](https://moveit.ros.org/moveit!/ros/2018/10/23/gsoc-2018-setup-assistant-v2.html) to [new tutorials using the Franka Emika Panda robot](https://github.com/moveit/moveit_tutorials/pull/166).

We hope MoveIt 1.0 continues to support the worldwide open source robotics effort and the ideals of ROS.
