---
author: admin
comments: false
date: 2013-11-20 04:52:13+00:00
layout: page
slug: faqs
title: FAQs
---

# Frequently Asked Questions

## General

_What is the difference between MoveIt! and ROS?_

  * MoveIt! runs on top of ROS (Robot Operating System).
  * ROS is an open-source meta-operating system for robots that provides low-level functionality like a build system, message passing, device drivers and some integrated capabilities like navigation. MoveIt! provides functionality for kinematics, motion/path planning, collision checking, 3D perception, robot interaction and much, much more. MoveIt! is a primary source of a lot of the functionality for manipulation (and mobile manipulation) in ROS. MoveIt! builds on the ROS messaging and build systems and utilizes some of the common tools in ROS like the ROS Visualizer (Rviz) and the ROS robot format (URDF). MoveIt! is fast becoming the entry point into ROS, especially through the use of the MoveIt! Setup Assistant for configuring new robots.

_What is the difference between MoveIt! and ROS-Industrial?_

  * The ROS-Industrial consortium aims to use the advanced tools in MoveIt! and ROS to build and demonstrate advanced applications in industry. They were inspired by the success of Arm Navigation (MoveIt!'s predecessor) on the PR2 robot.
  * ROS-Industrial also develops and maintains ROS drivers for industrial robots (using the PR2 drivers as a template in several cases).

_What is the difference between MoveIt! and OMPL?_

  * [OMPL](http://ompl.kavrakilab.org) is an open-source motion planning library that is used by MoveIt! for motion planning. MoveIt! uses an extensible plugin architecture and other motion planning libraries can also easily be integrated with MoveIt!. OMPL provides a variety of high-quality well-tested randomized planners.

_What kind of open source license does MoveIt! use?_

 * MoveIt! is released under the buisness-friendly [BSD License v3](https://opensource.org/licenses/BSD-3-Clause). Each individual file in the MoveIt! source code should contain a copy of the license.

## Bugs/Issues

_I have a fix for a bug in the MoveIt! tutorials. What should I do?_

  * The MoveIt! tutorials live in [moveit_tutorials](https://github.com/ros-planning/moveit_tutorials). To correct the tutorials, fork that package (on github), make the corrections and create a pull request.


_I have a found a bug in MoveIt! itself. What should I do?_


  * See [Contributing](http://moveit.ros.org/documentation/contributing/)


## Robots

_I would like to add a new robot to the list of robots using MoveIt!. What should I do?_

  * Create a pull request to [moveit.ros.org's Github repo](https://github.com/ros-planning/moveit.ros.org) or email [PickNik Consulting](http://picknik.ai/connect) for additional assitance.

_I would like to be listed as an official maintainer for a robot. What are my responsibilities?_

  * You need to have access to the robot and be willing to maintain its MoveIt! configuration package, the MoveIt! interface and any associated components.

_What robots does MoveIt! support?_

  * MoveIt! has been used on over 100 robots. To find a list of robots that MoveIt! has been used with, check the [Robots](/robots/) page.

## Community

_How do I hear the latest announcements on MoveIt!?_

  * Watch the <a href="https://discourse.ros.org/c/moveit">MoveIt! Category on ROS Discourse</a>

## Code

_Where can I find the changelogs for MoveIt!?_

  * The change logs for MoveIt! can be found directly on the [MoveIt! ROS Wiki page](http://wiki.ros.org/moveit). Announcements on the mailing list also inform users of the latest changes.
