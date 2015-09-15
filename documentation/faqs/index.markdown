---
author: admin
comments: false
date: 2013-11-20 04:52:13+00:00
layout: page
slug: faqs
title: FAQs
wordpress_id: 93
---

## General


_Who manages MoveIt!?_




  * MoveIt! is currently coordinated and managed by Sachin Chitta.


_How do I install MoveIt!?_




  * Follow the [Installation instructions](/install/).


_What operating systems does MoveIt! work with?_




  * The primary operating system that MoveIt! is developed against is Ubuntu Linux.


_What is the difference between MoveIt! and ROS?_




  * ROS (Robot Operating System) is an open-source meta-operating system for robots that provides low-level functionality like a build system, message passing, device drivers and some integrated capabilities like navigation. MoveIt! provides functionality for kinematics, motion/path planning, collision checking, 3D perception, robot interaction and much, much more. MoveIt! is a primary source of a lot of the functionality for manipulation (and mobile manipulation) in ROS. MoveIt! builds on the ROS messaging and build systems and utilizes some of the common tools in ROS like the ROS Visualizer (Rviz) and the ROS robot format (URDF). MoveIt! is fast becoming the entry point into ROS, especially through the use of the MoveIt! Setup Assistant for configuring new robots.


_What is the difference between MoveIt! and Arm Navigation?_




  * Arm Navigation was the predecessor to MoveIt!. MoveIt! is significantly different to Arm Navigation in system architecture and implementation, especially in terms of performance and extensibility. MoveIt! moved away from the process based architecture that Arm Navigation used, mainly to lower the cost of maintaining a representation of the world in multiple nodes. MoveIt! also takes advantage of the parallelization provided by collision checkers like FCL.


_What is the difference between MoveIt! and ROS-Industrial?_




  * The ROS-Industrial consortium aims to use the advanced tools in MoveIt! and ROS to build and demonstrate advanced applications in industry. They were inspired by the success of Arm Navigation (MoveIt!'s predecessor) on the PR2 robot. ROS-Industrial also develops and maintains ROS drivers for industrial robots (using the PR2 drivers as a template in several cases).


_What is the difference between MoveIt! and OMPL?_




  * [OMPL](http://ompl.kavrakilab.org) is an open-source motion planning library that is used by MoveIt! for motion planning. MoveIt! uses an extensible plugin architecture and other motion planning libraries can also easily be integrated with MoveIt!. OMPL provides a variety of high-quality well-tested randomized planners.


_Where can I find the current status of MoveIt!?_




  * You can find a list of components in MoveIt! and their status on the [Status](/about/moveit-status/) page.




## Bugs/Issues


_I have a fix for a bug in the MoveIt! tutorials. What should I do?_




  * The MoveIt! tutorials now live next to the code for each package. To correct the tutorials, fork the appropriate package (on github), make the corrections and do a pull request.


_I have a fix for a bug in MoveIt! itself. What should I do?_




  * To correct the code, fork the appropriate repository (on github), make the corrections and do a pull request.


_I found a bug in the MoveIt! code itself, what should I do?_




  * Put an issue report in the corresponding repository on github (see the [Support page](/support/) for a list of repos).




## Robots


_I would like to add a new robot to the list of robots using MoveIt!. What should I do?_




  * Send an email to the moveit-users mailing list with the following information: Name of the robot, Your name, Your affiliation, Location of URDF package for robot, Location of MoveIt! package for the robot, Any additional instructions for running MoveIt! with your robot (e.g. installing additional packages, robot-specific configuration, etc.)


_I would like to be listed as an official maintainer for a robot. What are my responsibilities?_




  * You need to have access to the robot and be willing to maintain its MoveIt! configuration package, the MoveIt! interface and any associated components. Other responsibilities may include answering questions on the moveit-users mailing list.


_What robots does MoveIt! support?_




  * MoveIt! has been used on over 65 robots. To find a list of robots that MoveIt! has been used with, check the [Robots](/robots/) page.




## Community


_How do I join the moveit-users mailing list?_




  * Use this link: [Join the MoveIt! users mailing list](https://groups.google.com/forum/#!forum/moveit-users/join) (moveit-users _at_ googlegroups _dot_ com)




## Code


_Is there a style guide for MoveIt!?_




  * We use the [ROS Style guide](http://wiki.ros.org/CppStyleGuide) for all development.


_Where can I find the changelogs for MoveIt!?_




  * The change logs for MoveIt! can be found directly on the [MoveIt! ROS Wiki page](http://wiki.ros.org/moveit).
