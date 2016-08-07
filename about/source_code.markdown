---
author: admin
comments: false
date: 2013-11-20 04:37:44+00:00
layout: page
slug: packages
title: Source Code
---

# Source Code

MoveIt! code is hosted on github in the [ros-planning organization](http://github.com/ros-planning) in the following repos:

  * [moveit](https://github.com/ros-planning/moveit) - Main repo of MoveIt!, contains the following packages:
    * moveit_core - Core C++ libraries
    * moveit_ros - Metapackage
    * moveit_ros_benchmarks
    * moveit_ros_benchmarks_gui
    * moveit_ros_manipulation - High level pick and place pipeline
    * moveit_ros_move_group - Central ROS node for MoveIt!
    * moveit_ros_perception - Octomap and other perception plugins
    * moveit_ros_planning - Core ROS components and IK solvers
    * moveit_ros_planning_interface - Python and ROS interfaces
    * moveit_ros_robot_interaction - Interative marker tools for Rviz
    * moveit_ros_visualization - Rviz tools
    * moveit_ros_warehouse - Database connection
    * moveit_planners - Metapackage
    * moveit_planners_ompl - Open Motion Planning Library plugin
    * moveit_setup_assistant - GUI for quickly setting up MoveIt!
    * moveit_plugins - interfaces to controllers and other common functionality
    * moveit_ikfast - setup tools for creating a analyical IK solver via OpenRave
    * moveit_commander - terminal-based control interface
  * [moveit_msgs](https://github.com/ros-planning/moveit_msgs) - MoveIt! messages
  * [moveit_pr2](https://github.com/ros-planning/moveit_pr2) - PR2 specific MoveIt! configuration and plugins
  * [moveit_robots](https://github.com/ros-planning/moveit_robots) - Robot specific MoveIt! files
  * [moveit_resources](https://github.com/ros-planning/moveit_resources) - large file assets such as testing robots
  * [moveit_advanced](https://github.com/ros-planning/moveit_advanced) - Experimental advanced capabilities of MoveIt!
  * [srdfdom](https://github.com/ros-planning/srdfdom) - Semantic Robot Description Format
  * [warehouse_ros](https://github.com/ros-planning/warehouse_ros) - Abstract interface for persisting ROS message data

# Code Health

We use [Travis](https://travis-ci.org/ros-planning/) continous integration for testing pull requests and overall code health. Travis status badges should be visible on the README.md of every MoveIt! repository.

To see an overview of the activity for MoveIt! check our [Open HUB Project Summary](https://www.openhub.net/p/moveit_).
