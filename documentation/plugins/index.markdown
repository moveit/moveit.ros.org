---
author: v4hn
comments: false
date: 2016-08-03 20:00:00+00:00
layout: page
slug: plugins
title: Plugins
---

# Plugin Interfaces

MoveIt connects a number of different fields and provides a lot of interfaces so that users can override different parts of the framework and implement new concepts without having to touching the core of the framework.
The following lists the different types of plugins and provides an overview over the use of them within the framework.

## move_group::MoveGroupCapability



### Usage

By implementing the [move_group_capability.h](https://github.com/ros-planning/moveit/blob/4ac0c7432d335f57aab6836cbcaaac3fccf4b6f9/moveit_ros/move_group/include/moveit/move_group/move_group_capability.h) interface it is possible to realize functionalities that are executed frequently. Each capability has access to the [move group context](https://github.com/ros-planning/moveit/blob/4ac0c7432d335f57aab6836cbcaaac3fccf4b6f9/moveit_ros/move_group/include/moveit/move_group/move_group_context.h) including e.g. obstacle for collision avoidance.

### Field of Application

Plugins usually create communication functionallity in form of a ros-service or a simple ros-topic and can operate on the move group context. Therefore, can be the possible applications very diverse. 

### Interface Description

The interface is defined in the [move_group_capability.h](https://github.com/ros-planning/moveit/blob/4ac0c7432d335f57aab6836cbcaaac3fccf4b6f9/moveit_ros/move_group/include/moveit/move_group/move_group_capability.h). It mainly consits of an initialize function which has to be overwritten.

### Concrete Implementation

An example for a specific pluging is the [cartesian_path_service_capability](https://github.com/ros-planning/moveit/blob/3c207ad694ab6fb94a428145ab53810ced74a262/moveit_ros/move_group/src/default_capabilities/cartesian_path_service_capability.cpp). This particular plugin can be used to compute a cartesian path. 
