---
author: Tyler Weaver
comments: false
date: 2020-09-28
layout: post
title: MoveIt is now officially available in ROS Noetic
media_type: image
media_link: /assets/images/blog_posts/noetic.png
description: We are proud to announce that MoveIt is now available as an official package for the latest, and last version of ROS 1.0, ROS Noetic.
categories:
- moveit
- ros
- noetic
---

We are proud to announce that MoveIt is now available as a Debian download for the ROS 1.0 distribution Noetic Ninjemys. This long term support (LTS) version of MoveIt 1.0 will be supported until [May 2025](http://wiki.ros.org/Distributions), although future development of MoveIt will now focus on MoveIt 2.0 (for ROS 2). Because this is the [last distribution of ROS 1](https://www.openrobotics.org/blog/2020/5/23/noetic-ninjemys-the-last-official-ros-1-release), we are not promising API stability for at least the next 6 months. Instead, we will continue to add new features and improvements to MoveIt Noetic as they are developed in the development branch.

## What's new in Noetic?

All the latest features of MoveIt that we have been developing over the last 2 years since the release of ROS Melodic are now available for Ubuntu 20.04, which includes full Python 3 support along with many other major features:

- Benchmarking tooling
- Servo (former JogArm) for real-time Jacobian control
- MoveItCpp for convenient access to low-level classes in MoveIt
- Bullet collision detection
- Allowing different controllers for execution
- Improvements to Trajectory Execution
- Unified collision environment (no more split between Robot and Environment)
- Named frames in CollisionObjects (`bottle/tip`, `screwdriver/handle`, …)
- Improved responsiveness of PlanningSceneDisplay
Default velocity/acceleration scaling factors in Move Group (do not always execute with full-speed - unless requested)
- Improvements to RViz integration
- No more implicit SVD in Eigen::Transforms (use Eigen::Transform::linear() instead of rotation())
- Cleanup of MoveGroupInterface

## What does it take to Migrate to Noetic?

Full migration notes are [available here](https://github.com/moveit/moveit/blob/master/MIGRATION.md), but some important changes include:

- RobotModel no longer overrides empty URDF collision geometry
- Planned trajectories are now slow by default - you can set the default yourself.
- CollisionRobot and CollisionWorld are combined into a single CollisionEnv class.
- Extended the return value of MoveItCommander.MoveGroup.plan()
Requests to get_planning_scene service without explicitly setting "components" now return full - scene
- moveit_ros_planning no longer depends on moveit_ros_perception
RobotTrajectory provides a copy constructor that allows a shallow (default) and deep copy of - waypoints
Replace the redundant namespaces robot_state:: and robot_model:: with the actual namespace - moveit::core::

## Should I migrate to MoveIt Noetic or MoveIt 2 Foxy?

The MoveIt 2 Foxy release [is already available](https://moveit.ros.org/moveit2/ros2/foxy/release/2020/09/04/moveit2-foxy-release.html), so to best future proof yourself we recommend "pulling off the bandaid" now and switching to MoveIt 2 Foxy. Especially if you are planning long-term and are aiming for running your robot application in a production environment at some point, it’s advisable to invest in running ROS 2 rather early than later. However, if you already have significant investment in ROS 1, you will find the migration to Noetic much easier as ROS 2 is a full rewrite of the middleware. Both releases require upgrading to Ubuntu 20.04, so using Noetic as a stepping stone to ROS 2 may also be a good idea as the latest version is synced with the Foxy branch to maintain feature-parity during the transition phase

## Final Notes

Thank you to all the [maintainers and contributors](https://moveit.ros.org/about/) of MoveIt who made this release possible! We encourage you to [get involved](https://moveit.ros.org/documentation/contributing/) with the project by contributing code and bug fixes!
