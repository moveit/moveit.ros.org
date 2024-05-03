---
author: mlautman
comments: false
date: 2019-04-12
layout: post
title: MoveIt Descartes Integration
media_type: image
media_link: /assets/images/descartes-moveit-4-12-19.png
description: Announcing a Move Group Cartesian planning capability built with Descartes
categories:
- MoveIt!
- ROS
- Descartes
---


[PickNik](http://picknik.ai/) and [Carbon Robotics](https://carbon.ai/) are excited to be releasing a standalone Move Group capability for planning semi-constrained Cartesian paths with [Descartes](https://github.com/ros-industrial-consortium/descartes). This capability is a drop-in replacement for Move Group's [MoveGroupCartesianPathService](https://github.com/moveit/moveit/blob/master/moveit_ros/move_group/src/default_capabilities/cartesian_path_service_capability.h) which uses a thin wrapper around Descartes instead of the very simple Cartesian planner in MoveIt Core.


Check it out on [GitHub](https://github.com/PickNikRobotics/descartes_capability)!
