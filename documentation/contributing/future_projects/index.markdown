---
author: davetcoleman
comments: true
date: 2017-4-9 02:13:26+00:00
layout: page
slug: code
title: Code Sprints
---

# Potential Code Sprints and Future Projects

<img src="/assets/images/logo/moveit_logo-black.png" width="300"/>

This page lists potential projects that would greatly benefit the MoveIt! project. This is by no means an exhaustive list, but is meant to serve as a discussion starting point for code sprints and other efforts. Please contact [PickNik Consulting](https://picknik.ai/connect/) for further information or sponsorship opportunities.

## TrajOpt Integration

TrajOpt is a motion planning framework from UC Berkeley for generating robot trajectories by local optimization. Integration of TrajOpt into the MoveIt! framework would require API changes to how MoveIt! stores and accesses information about the kinematic chain and changes to the MoveIt! collision checking API to support integration with the Bullet collision checker for convex to convex contact checking.

## Improved Integration with ROS-Controls and Controller Switching

Utilize low-level controller switching (position/velocity/force-torque) during execution of MoveIt! plans. Improve the [ROSControlInterface plugin](https://github.com/ros-planning/moveit/tree/melodic-devel/moveit_plugins/moveit_ros_control_interface). Documentation on how to combine the components.

## Perception Pipeline Improvements

MoveIt! is not a perception library, but does come with support for using octomaps with point clouds. This functionality has not been well maintained and needs extensive improvements:

- Improve speed of plugins, fix locking issues
- Create tutorials and documentation for using this functionality
- Add support for object segmentation, table detection, etc
- Possible integration of Neural Networks for image recognition

## Improve MoveIt! Grasps Library

MoveIt! has long lacked a good grasping library for generating candidate object grasps for manipulation. With the release of [MoveIt! Grasps] (https://github.com/PickNikRobotics/moveit_grasps/), we are working to fill this gap. Although MoveIt! Grasps is a big step up from the pick-and-place pipeline, it is far from perfect. Improvements to MoveIt! grasps could include:

  - Integration with a machine-learning-based grasp generator and/or grasp scoring package such as [Agile Grasps](http://wiki.ros.org/agile_grasp)
  - Improve tutorials and documentation for grasping in MoveIt!
  - Improve test coverage, especially for grasp generation

## Cartesian Planning improvements

The default cartesian planner in MoveIt! is extremely naive and has enormous room for improvement. Improvements to the cartesian planner could include:

- Moving the Cartesian planner out of [RobotState](https://github.com/ros-planning/moveit/blob/0ba091ce1faf6e11896fd0d06bea8234cf642ca3/moveit_core/robot_state/include/moveit/robot_state/robot_state.h#L1129) and into a more apropriate location eg: [moveit_planners](https://github.com/ros-planning/moveit/tree/master/moveit_planners).
- Integration with [Descartes](https://github.com/ros-industrial-consortium/descartes).
- Fix the long standing [orientation constraint joint flip bug](https://github.com/ros-planning/moveit/issues/562) in free-space planning.


## Add More Motion Planning Libraries

MoveIt! was designed to be highly plugin-based and originally supported 3 planning libraries. Today that number has shrunk to basically 1. There are many good alternative motion planning libraries that could be (re)added to MoveIt!, including:

  - SBPL
  - STOMP
  - ITOMP
  - [DRAKE](https://github.com/RobotLocomotion/drake/issues/459)

## Improve Warehouse Support

MoveIt supports storing Constraints, PlanningScenes and RobotStates in a database, termed "warehouse" within MoveIt. This interface was recently changed to support plugins, but currently there are no plugins available that compile/work with a standard linux distribution out of the box.

- Implementation of a warehouse-plugin that works with a standard database system that is supported in major Linux distributions
- Create tutorials and example code that demonstrates how to use the warehouse interface

## MoveIt-OMPL Planning Interface

Currently, MoveIt supports the OMPL planning library via a C++ based binding system in the package `ompl_interface`. This should be deprecated in favor of a plugin-based system, that eases configuration of different planners within OMPL. In effect, the plugin allows new planning algorithms derived from the abstract Planner API in OMPL to be loaded via a yaml file. It also allows users to easily create new planning configurations for existing planning algorithms in OMPL via such a yaml. Most of the work for this is already done and has been used extensively in ROS Indigo. This is a great project for someone who wants to better understand the connection between MoveIt! And OMPL.

- More information can be found [here](https://github.com/ros-planning/moveit/issues/117)
- The new system needs to be documented in tutorials
- It would be nice if, as a proof of concept, some additional basic planning algorithms could be implemented as a plugin. Ideally, this would include at least one algorithm that is not sampling-based, just to demonstrate that this can be done

## MoveIt! Continuous Collision Checking

MoveIt! currently only checks for collisions at discrete steps in a planned trajectory. This has the downside that if the discretization is too large, then potential collisions may be missed when planning in tight or constrained environments. This project involves using the flexible-collision-library (FCL) to add continuous collision checking to mitigate collisions in constrained spaces.

## Mobile base integration

The goal is to provide a standard way for integrating mobile base into move group that typically handles arms. While there's a non-standard way to incorporate holonomic drive that requires modifying your robot model ([example](https://groups.google.com/forum/#%21searchin/moveit-users/virtual$20base/moveit-users/G7vG7r23YzI/vpMUoa1hza4J)), customization your robot package for such a common functionality is not ideal at all. We also extend to cover non-holonomic drive robots. This is [an FAQ](https://github.com/ros-planning/moveit/issues/375) among MoveIt! users.

