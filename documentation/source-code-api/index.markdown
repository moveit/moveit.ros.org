---
author: admin
comments: false
date: 2016-10-19 04:37:44+00:00
layout: page
slug: packages
title: Source Code & API
---

## License

MoveIt! is open source and released under the [BSD License v3](https://opensource.org/licenses/BSD-3-Clause). Each individual file in the MoveIt! source code should contain a copy of the license.

# Source Code

MoveIt! code is hosted on github in the [ros-planning organization](http://github.com/ros-planning) in the following repos:

- [moveit](https://github.com/ros-planning/moveit) - Main repo of MoveIt!, contains the following packages:
  - moveit - Metapackage
  - moveit_core - Core functionality including RobotModel, RobotState, collision checking
  - moveit_ros_planning - planning components, execution manager, plugin loaders
  - moveit_ros_move_group - The `move_group` main node for using MoveIt! via ROS messages
  - moveit_ros_planning_interface - Python and ROS msg interfaces to communicate with `move_group`
  - moveit_ros_perception - Octomap and other perception plugins
  - moveit_ros_manipulation - High level pick and place pipeline
  - moveit_ros_robot_interaction - Interative marker tools for Rviz
  - moveit_ros_visualization - Rviz tools
  - moveit_ros_warehouse - Database plugins for storing scene and configuration data
  - moveit_ros_benchmarks - Benchmarking using PlannerArena
  - moveit_ros - Metapackage
  - moveit_planners - Metapackage
  - moveit_planners_ompl - Open Motion Planning Library plugin
  - moveit_commander - terminal-based control interface using Python-like syntax
  - moveit_setup_assistant - GUI for quickly setting up MoveIt!
  - moveit_plugins - plugins for controller managers
  - chomp_motion_planner - Gradient Optimization Techniques for Efficient Motion Planning
  - chomp_interface - adapter for using CHOMP with MoveIt!
- [moveit_msgs](https://github.com/ros-planning/moveit_msgs) - ROS messages
- [moveit_robots](https://github.com/ros-planning/moveit_robots) - Robot specific MoveIt! configuration packages
- [moveit_resources](https://github.com/ros-planning/moveit_resources) - large file assets such as testing robots
- [moveit_task_constructor](https://github.com/ros-planning/moveit_task_constructor) - An approach to hierarchical, multi-stage manipulation planning
- [moveit_visual_tools](https://github.com/ros-planning/moveit_visual_tools) - display and debugging data in Rviz
- [moveit_advanced](https://github.com/ros-planning/moveit_advanced) - Experimental advanced capabilities
- [moveit_pr2](https://github.com/ros-planning/moveit_pr2) - PR2 specific MoveIt! configuration and plugins
- [rqt_moveit](https://github.com/ros-visualization/rqt_moveit/) - Plugin for the GUI framework of ROS, RQT
- [srdfdom](https://github.com/ros-planning/srdfdom) - Semantic Robot Description Format
- [warehouse_ros](https://github.com/ros-planning/warehouse_ros) - Abstract interface for persisting ROS message data
- [random_numbers](https://github.com/ros-planning/random_numbers) - package for generating random numbers

For completeness, the following two repos are where documentation can be found:

- [moveit.ros.org](https://github.com/ros-planning/moveit.ros.org) - this main website
- [moveit_tutorials](https://github.com/ros-planning/moveit_tutorials) - step by step examples for learning MoveIt!

In addition, the following repos exist for testing:

- [moveit_ci](https://github.com/ros-planning/moveit_ci) - script to run with Travis for continuous integration
- [moveit_kinematics_tests](https://github.com/ros-planning/moveit_kinematics_tests) - experimental repo with tests

# Code Health

We use [Travis](https://travis-ci.org/ros-planning/) continous integration combined with the [moveit_ci](https://github.com/ros-planning/moveit_ci) for testing pull requests and overall code health. Travis status badges should be visible on the README.md of every MoveIt! repository.

## ROS Melodic Code API

### Move Group Interface

- [MoveGroupInterface class](http://docs.ros.org/melodic/api/moveit_ros_planning_interface/html/classmoveit_1_1planning__interface_1_1MoveGroupInterface.html) - the main C++ interface to the _move_group_node_.
  `MoveGroupInterface` is the successor to the `MoveGroup` class from previous releases, which is [now deprecated](https://github.com/ros-planning/moveit/issues/37).
- [PlanningSceneInterface class](http://docs.ros.org/melodic/api/moveit_ros_planning_interface/html/classmoveit_1_1planning__interface_1_1PlanningSceneInterface.html) - a C++ interface to the planning scene
- [MoveIt! commander](http://docs.ros.org/melodic/api/moveit_commander/html/index.html) - documentation for the MoveIt! commander.

### MoveIt! ROS

_This API is meant for advanced developers. Most users should use the Move Group interface (above)._

- [Planning](http://docs.ros.org/melodic/api/moveit_ros_planning/html) - The planning components in MoveIt! ROS, especially the planning scene, kinematics and monitors
- [Move Group](http://docs.ros.org/melodic/api/moveit_ros_move_group/html) - The _move_group_node_
- [Perception](http://docs.ros.org/melodic/api/moveit_ros_perception/html) - The perception components in MoveIt! ROS
- [Robot Interaction](http://docs.ros.org/melodic/api/moveit_ros_robot_interaction/html) - The Interactivity components in MoveIt! ROS

### MoveIt! Core

_This API is meant for advanced developers. Most users should use the Move Group interface (above)._

- [Core](http://docs.ros.org/melodic/api/moveit_core/html) - The core components in MoveIt! for kinematics, planning scene, constraints, motion planning, collision checking and plugin interfaces

### MoveIt! OMPL Interface

_This API is meant for advanced developers. Most users should use the Move Group interface (above)._

- [OMPL Interface](http://docs.ros.org/melodic/api/moveit_planners_ompl/html) - The set of classes that allow MoveIt! to talk with OMPL.

---

## ROS Indigo Code API

### Move Group Interface

- [MoveGroup class](http://docs.ros.org/indigo/api/moveit_ros_planning_interface/html/classmoveit_1_1planning__interface_1_1MoveGroup.html) - the main C++ interface to the _move_group_node_
- [PlanningSceneInterface class](http://docs.ros.org/indigo/api/moveit_ros_planning_interface/html/classmoveit_1_1planning__interface_1_1PlanningSceneInterface.html) - a C++ interface to the planning scene
- [MoveIt! commander](http://docs.ros.org/indigo/api/moveit_commander/html/index.html) - documentation for the MoveIt! commander.

### MoveIt! ROS

_This API is meant for advanced developers. Most users should use the Move Group interface (above)._

- [Planning](http://docs.ros.org/indigo/api/moveit_ros_planning/html) - The planning components in MoveIt! ROS, especially the planning scene, kinematics and monitors
- [Move Group](http://docs.ros.org/indigo/api/moveit_ros_move_group/html) - The _move_group_node_
- [Perception](http://docs.ros.org/indigo/api/moveit_ros_perception/html) - The perception components in MoveIt! ROS
- [Robot Interaction](http://docs.ros.org/indigo/api/moveit_ros_robot_interaction/html) - The Interactivity components in MoveIt! ROS

### MoveIt! Core

_This API is meant for advanced developers. Most users should use the Move Group interface (above)._

- [Core](http://docs.ros.org/indigo/api/moveit_core/html) - The core components in MoveIt! for kinematics, planning scene, constraints, motion planning, collision checking and plugin interfaces

### MoveIt! OMPL Interface

_This API is meant for advanced developers. Most users should use the Move Group interface (above)._

- [OMPL Interface](http://docs.ros.org/indigo/api/moveit_planners_ompl/html) - The set of classes that allow MoveIt! to talk with OMPL.
