---
author: davetcoleman
comments: true
date: 2017-4-9 02:13:26+00:00
layout: page
slug: code
title: Future Projects
---

# Potential Code Sprints and Future Projects <!-- omit in toc -->
<br />
<p align="center">
<img src="/assets/images/people_page/people-illustration.png">
</p>
<br />
<br />
This page lists potential projects that would greatly benefit the MoveIt project. This is by no means an exhaustive list, but is meant to serve as a discussion starting point for code sprints and other efforts.

If you would like to contribute to these efforts, have a look at the related Github issues and ask for clarifications on [Github](https://github.com/ros-planning/moveit/issues) or [Discord](https://discord.gg/vqwEXwYU3N).

Feel free to contact [PickNik Robotics](https://picknik.ai/connect/) for further information or sponsorship opportunities.

**Note:** If you are looking at this list for a Google Summer of Code application, you should become familiar with the issue and codebase before starting the project in order to succeed within the new 10-week time frame.

## Table of Contents <!-- omit in toc -->
- [TrajOpt Integration and Related Work on Trajectory Optimization Methods](#trajopt-integration-and-related-work-on-trajectory-optimization-methods)
- [Simultaneous Trajectory Execution](#simultaneous-trajectory-execution)
- [Grasp Pose Generation](#grasp-pose-generation)
- [Tutorial for multiple robot arms](#tutorial-for-multiple-robot-arms)
- [Scene graph support](#scene-graph-support)
- [Creation of a Benchmark Suite for Evaluating MoveIt Performance](#creation-of-a-benchmark-suite-for-evaluating-moveit-performance)
- [MoveIt 2 Tutorials](#moveit-2-tutorials)
- [Improved Integration with ROS-Controls and Controller Switching](#improved-integration-with-ros-controls-and-controller-switching)
- [Mobile Base Integration](#mobile-base-integration)

## TrajOpt Integration and Related Work on Trajectory Optimization Methods

- **Prerequisites**: ROS, some motion planning background
- **Programming skills**: C++
- **Difficulty**: Medium
- **Potential mentors**: Omid Heidari
- **Description**: TrajOpt is a motion planning framework from UC Berkeley for generating robot trajectories by local optimization. Integration of TrajOpt into the MoveIt framework would require API changes to how MoveIt stores and accesses information about the kinematic chain and changes to the MoveIt collision checking API to support integration with the Bullet collision checker for convex to convex contact checking.

  Some initial work was performed by Omid Heidari during an internship at PickNik in 2019, but more work is needed to cleanly integrate the framework with MoveIt. The collision checking interface for MoveIt has changed significantly. Implementing a collision cost using this unified interface for collision checking backends is one of the major remaining issues.

  MoveIt also contains implementations of other trajectory optimization methods: STOMP and CHOMP. These implementations all contain their own way of computing trajectories, but share a lot of common ideas, such as using a signed distance field to compute collision cost. Refactoring this code to use common code for the same ideas would help in making the code more maintainable. It is also a first step to making it possible to provide callback hooks for a user-configurable trajectory cost function that can be used with any of the trajectory optimization methods, which is currently not possible.

## Simultaneous Trajectory Execution

- **Prerequisites**: some ROS
- **Programming skills**: C++
- **Difficulty**: Medium
- **Potential mentors**: -
- **Description**: MoveIt currently only supports the execution of one robot trajectory (although the trajectory can involve multiple planning groups, e.g. two arms). However, to run e.g. a robot workcell efficiently, each robot arm has to move independently.

  The goal of this project is to allow multiple trajectories to be started, executed and stopped independently from one another. The main difficulty is that the arms may collide with one another, so additional checks will be necessary, such as:
  - Do two trajectories intersect at all?
  - Does the next position in a trajectory collide with another robot arm?
  - What are the next positions of the other currently active robot arms?

- **Related Github issues**: [2287](https://github.com/ros-planning/moveit/issues/2287)

## Grasp Pose Generation

- **Prerequisites**: ROS
- **Programming skills**: C++, Python
- **Difficulty**: Medium
- **Potential mentors**: Mark Moll
- **Description**: Improve grasp pose synthesis within MoveIt and the MoveIt Task constructor. Current grasp synthesis algorithms pair deep neural networks and sampling point clouds, see [GPD](https://github.com/atenpas/gpd) and [Dex-Net](https://berkeleyautomation.github.io/dex-net/). An initial effort using the previous grasping methods includes a [demo](https://github.com/PickNikRobotics/deep_grasp_demo) and a [tutorial](https://ros-planning.github.io/moveit_tutorials/doc/moveit_deep_grasps/moveit_deep_grasps_tutorial.html). Further work is required to harden this implementation, see [PR 196](https://github.com/ros-planning/moveit_task_constructor/pull/196).

- **Related Github issues**: [188](https://github.com/ros-planning/moveit_task_constructor/issues/188)

## Tutorial for multiple robot arms

- **Prerequisites**: ROS
- **Programming skills**: C++, Python
- **Difficulty**: Low-Medium
- **Potential mentors**: -
- **Description**: While there are some ROS Answers posts and examples floating around, there is no definitive resource on how to set up multiple robot (arms) with MoveIt. The goal of this project is to write a tutorial that should become the reference. This project is a good preparation for the one above.

- **Related Github issues**: [465](https://github.com/ros-planning/moveit_tutorials/issues/465)

## Scene graph support

- **Prerequisites**: ROS
- **Programming skills**: C++
- **Difficulty**: Medium-High
- **Potential mentors**: -
- **Description**: The planning scene in MoveIt is currently represented as a flat list of transforms from the origin. In this project, the planning scene should be extended with a scene graph or kinematic tree, so that it allows e.g. picking up a tray or rack with other items in/on it, or the dynamic attachment or removal of a hand to a robot arm.

  As a blueprint for the implementation, it is worth looking at [Tesseract](https://github.com/ros-industrial-consortium/tesseract) (forked from MoveIt) and [TMKit](https://github.com/kavrakilab/tmkit.git) (no ROS support).
- **Related Github issues**: [202](https://github.com/ros-planning/moveit/issues/202), [202](https://github.com/ros-planning/moveit/issues/202)

## Creation of a Benchmark Suite for Evaluating MoveIt Performance

- **Prerequisites**: ROS, some motion planning background
- **Programming skills**: C++
- **Difficulty**: Medium
- **Potential mentors**: Mark Moll, Henning Kayser
- **Description**: It would be a set of benchmark tasks to serve as examples, and to run as part of continuous tests.
For this, we need to identify and implement standard tasks at varying levels of difficulty that can be achieved with several robots for which a MoveIt configuration is available. E.g.:
  - Moving to a goal position in uncluttered space
  - Picking and placing items from/in cluttered shelves
  - Following paths with orientation constraints
- **Related Github issues**: [2124](https://github.com/ros-planning/moveit/issues/2124)

## MoveIt 2 Tutorials

- **Prerequisites**: ROS, some motion planning background
- **Programming skills**: C++
- **Difficulty**: Medium
- **Potential mentors**: Henning Kayser, Mark Moll
- **Description**: One of the reasons MoveIt is so popular is that the tutorials make it very easy to get started. MoveIt 2 has been released and the tutorials needs to be updated for this new version. This can be a project for multiple people, each taking on one or more tutorials.

## Improved Integration with ROS-Controls and Controller Switching

- **Prerequisites**: ROS, some background in control theory
- **Programming skills**: C++
- **Difficulty**: Medium
- **Potential mentors**: Andy Zelenak, Robert Haschke
- **Description**: Utilize low-level controller switching (position/velocity/force-torque) during execution of MoveIt plans. Remove the deprecated [ROSControlInterface plugin](https://github.com/ros-planning/moveit/tree/master/moveit_plugins/moveit_ros_control_interface). Improve the ability to trigger other events during trajectory execution.

## Port Inverse Kinematic Solver Libraries to MoveIt 2

- **Prerequisites**: ROS, basic understanding of inverse kinematics
- **Programming skills**: C++
- **Difficulty**: Medium
- **Potential mentors**: Andy Zelenak, Henning Kayser
- **Description**: There are several Inverse Kinematics libraries that need to be ported to MoveIt 2. Prime candidates are [BioIK](https://github.com/TAMS-Group/bio_ik) and [TRAC-IK](https://bitbucket.org/traclabs/trac_ik/src/master/).

## MoveIt Wrapper for Reinforcement Learning

- **Prerequisites**: ROS, MoveIt, reinforcement learning
- **Programming skills**: C++
- **Difficulty**: Medium
- **Potential mentors**: Andy Zelenak, Mark Moll
- **Description**: Conduct a brief survey of reinforcement learning methods that could be implemented over the summer. Choose one and implement it. One possibility is described in "Operator training for preferred manipulator trajectories" by Sharp, Horn, & Pryor.

<!--
## Improve MoveIt Grasps Library

- **Prerequisites**: ROS, some motion planning background
- **Programming skills**: C++
- **Difficulty**: Medium
- **Potential mentors**: Mike Lautman
- **Description**: MoveIt has long lacked a good grasping library for generating candidate object grasps for manipulation. With the release of [MoveIt Grasps](https://github.com/PickNikRobotics/moveit_grasps/), we are working to fill this gap. Although MoveIt Grasps is a big step up from the pick-and-place pipeline, it is far from perfect. Improvements to MoveIt grasps could include:
  - Integration with a machine-learning-based grasp generator and/or grasp scoring package such as the [Grasp Pose Detection](https://github.com/atenpas/gpd) package or Intel's [ROS 2 Grasp Library](https://github.com/intel/ros2_grasp_library).
  - Improve tutorials and documentation for grasping in MoveIt
  - Improve test coverage, especially for grasp generation

## Cartesian Planning improvements

- **Prerequisites**: ROS, good motion planning background
- **Programming skills**: C++
- **Difficulty**: High
- **Potential mentors**: Mark Moll, Dave Coleman
- **Description**: The default cartesian planner in MoveIt is naive and has enormous room for improvement. Improvements to the Cartesian planner could include:

  - Integration with [OMPL's constrained planning capabilities](http://ompl.kavrakilab.org/constrainedPlanning.html). (Constrained planning can be thought of as a generalized notion of Cartesian planning.) This requires translating end effector constraints into a callback constraint function that can be passed to OMPL. Using the Jacobian, it should be possible to create an analytic derivative of this constraint function, which can be used to speed up constrained planning.
  - Moving the Cartesian planner out of [RobotState](https://github.com/ros-planning/moveit/blob/0ba091ce1faf6e11896fd0d06bea8234cf642ca3/moveit_core/robot_state/include/moveit/robot_state/robot_state.h#L1129) and into a more appropriate location eg: [moveit_planners](https://github.com/ros-planning/moveit/tree/master/moveit_planners).
  - Integration with [Descartes](https://github.com/ros-industrial-consortium/descartes).
  - Fix the long standing [orientation constraint joint flip bug](https://github.com/ros-planning/moveit/issues/562) in free-space planning.
- **Related Github issues**: [2092](https://github.com/ros-planning/moveit/issues/2092)

## Improve Warehouse Support

- **Prerequisites**: ROS
- **Programming skills**: C++
- **Difficulty**: Medium
- **Potential mentors**: Henning Kayser
- **Description**: MoveIt supports storing Constraints, PlanningScenes and RobotStates in a database, termed "warehouse" within MoveIt. This interface was recently changed to support plugins, but currently there are no plugins available that compile/work with a standard linux distribution out of the box.

  - Implementation of a warehouse-plugin that works with a standard database system that is supported in major Linux distributions
  - Create tutorials and example code that demonstrates how to use the warehouse interface
- **Related Github issues**: [123](https://github.com/ros-planning/moveit/issues/123)

## MoveIt-OMPL Planning Interface

- **Prerequisites**: ROS, some motion planning background
- **Programming skills**: C++
- **Difficulty**: Medium
- **Potential mentors**: Mark Moll
- **Description**: Currently, MoveIt supports the OMPL planning library via a C++ based binding system in the package `ompl_interface`. This should be deprecated in favor of a plugin-based system, that eases configuration of different planners within OMPL. In effect, the plugin allows new planning algorithms derived from the abstract Planner API in OMPL to be loaded via a yaml file. It also allows users to easily create new planning configurations for existing planning algorithms in OMPL via such a yaml. Most of the work for this is already done and has been used extensively in the latest versions. This is a great project for someone who wants to better understand the connection between MoveIt And OMPL.

  - More information can be found [here](https://github.com/ros-planning/moveit/issues/117)
  - The new system needs to be documented in tutorials
  - It would be nice if, as a proof of concept, some additional basic planning algorithms could be implemented as a plugin. Ideally, this would include at least one algorithm that is not sampling-based, just to demonstrate that this can be done
-->

## Mobile Base Integration

- **Prerequisites**: ROS, some motion planning background
- **Programming skills**: C++
- **Difficulty**: Medium
- **Potential mentors**: Mark Moll, David Lu!!
- **Description**: The goal is to provide a standard way for integrating mobile base into move group that typically handles arms. While there's a non-standard way to incorporate holonomic drive that requires modifying your robot model ([example](https://groups.google.com/forum/#%21searchin/moveit-users/virtual$20base/moveit-users/G7vG7r23YzI/vpMUoa1hza4J)), customizing your robot package for such a common functionality is not ideal at all. We also extend to cover non-holonomic drive robots. [This is an FAQ](https://github.com/ros-planning/moveit/issues/375) among MoveIt users. Some initial work for this is currently underway for the [Hello Robot Stretch platform](https://hello-robot.com/product), but more work is needed to generalize to other types of mobile bases.
