---
author: Wyatt Rees
comments: false
date: 2022-07-22 00:00:00 -0600
layout: post
slug: MoveIt-Servo-Inverse-Kinematics
title: MoveIt Servo Inverse Kinematics Improvements
media_type: gif
media_link: /assets/images/blog_posts/ee_swirl.gif
description: Inverse kinematics has been overhauled in MoveIt Servo

categories:
- MoveIt
- ROS

---

A new, exciting improvement has made it into MoveIt Servo!
Until now, MoveIt Servo has used the inverse Jacobian method for computing inverse kinematics.
While this may work in many situations, a significant portion of robotics research has been dedicated to more performant algorithms for computing inverse kinematics.
A primary focus of this research is _redundancy resolution_, in which robots with redundant degrees of freedom may utilize alternative joint configurations to achieve the same end-effector pose.
By doing so, robots may be enabled to better avoid singularies, avoid collisions, and lower power consumption, to name a few benefits.

In order to take advantage of these ongoing innovations in inverse kinematics, MoveIt Servo now has the capability to use a plugin architecture for computing inverse kinematics.
If you have an idea for a new way to compute inverse kinematics, you can now easily integrate it into MoveIt!
Given the modularity of a plugin architecture, MoveIt can be agnostic to exactly how the inverse kinematics is computed&mdash;allowing each user to decide what's best for their application.

**Where can I find one of these _kinematics plugins_?**

MoveIt comes packaged with a few kinematics plugins:

* [Cached IK Kinematics Plugin](https://github.com/ros-planning/moveit2/tree/main/moveit_kinematics/cached_ik_kinematics_plugin): Use a persistent cache to speed up similar inverse kinematics calculations
* [IKFast](https://github.com/ros-planning/moveit2/tree/main/moveit_kinematics/ikfast_kinematics_plugin): automatically analyze any complex kinematic chain for common patterns that allow for an analytic solution
* [KDL](https://github.com/ros-planning/moveit2/tree/main/moveit_kinematics/kdl_kinematics_plugin), [LMA](https://github.com/ros-planning/moveit2/tree/main/moveit_kinematics/lma_kinematics_plugin): Wrappers around the numerical inverse kinematics solver provided by Orocos
* [SRV](https://github.com/ros-planning/moveit2/tree/main/moveit_kinematics/srv_kinematics_plugin): A client for querying for IK solutions from a ROS service.

Another popular inverse kinematics plugin, external to MoveIt, is [bio_ik](https://github.com/PickNikRobotics/bio_ik), which was recently ported to ROS 2.
This plugin provides the ability to specify cost functions that can prioritize certain solutions to the inverse kinematics problem, as well as provide custom position & orientation constraints.
This plugin provides a rich set of ways one can specify their priorities when solving inverse kinematics.
We expect it to be the most common choice for Servo in the future.
