---
author: sharronliu
comments: false
date: 2018-10-24 20:00:00+00:00
layout: page
slug: related_projects
title: Related Projects
---

# MoveIt Related Projects

MoveIt is designed to be easily extensible as separate plugins or projects. Below is a list of related projects that have been aligned with the MoveIt framework, in alphabetical order of project names. This is by no means exhaustive. Please create pull-requests in the repository [moveit.ros.org](https://github.com/ros-planning/moveit.ros.org) to **add** other projects to this list. Or if not sure about the relevance, please post on the [ROS Discourse category](https://discourse.ros.org/c/moveit).

## Cartesian Path Planner Plug-In for MoveIt!

[ROS Industrial](https://rosindustrial.org/) has created a user friendly [Cartesian Path Planner Plug-In for MoveIt](https://rosindustrial.org/news/2014/9/5/cartesian-path-planner-plug-in-for-moveit). In the current version of the project, the user can simultaneously interact with a Qt Widget and the RViz environment to define and set Cartesian Way-Points, which can then be passed to the Cartesian Planner of the MoveIt package and executed both on a simulated and real robot.

<iframe width="800" height="500" src="https://www.youtube-nocookie.com/embed/jQc3z7FQwHw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Descartes

ROS-Industrial Special Project: Cartesian Path Planner. Descartes performs path-planning on under-defined Cartesian trajectories. It uses trajectory points, robot models, and planners to generate an joint-trajectory that complies with the constraints of a given process. [More Info](https://github.com/ros-industrial-consortium/descartes)

<iframe width="800" height="500" src="https://player.vimeo.com/video/142622435" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## IK Plugin `bio_ik`

A MoveIt kinematics_base plugin based on Particle Optimization & Genetic Algorithms. For ease of use and compatibility with existing code, the bio-ik algorithm is encapsulated as a Moveit kinematics plugin. Therefore, bio-ik can be used as a direct replacement of the default Orocos/KDL-based IK solver. Given the name of an end-effector and a 6-DOF target pose, bio-ik will search a valid robot joint configuration that reaches the given target. [More Info](https://github.com/TAMS-Group/bio_ik)

<img src="/assets/images/related_projects/bio_ik.png" height="500"/>

## Motoman MoveIt Matlab Interface

The [Nishida Takeshi Lab](http://lab.cntl.kyutech.ac.jp/) in Fukuoka, Japan supports a suite of ROS packages for working with the Motoman line of Robots from [Yaskawa](https://www.motoman.com/) through a number of interfaces including Matlab. You can explore some of these interfaces in the [motoman_apps](https://github.com/ntl-ros-pkg/motoman_apps) repository.

<img src="/assets/images/related_projects/motoman_apps.png" height="500"/>

## MoveGroup Online Collision Predictor

MoveGroupCapability that does simple extrapolation to check for possible collisions. If it detects a possible collision at a specified horizon, it notifies the ecosystem by message and extrapolate current state into the future to predict possible collisions. [More Info](https://github.com/TAMS-Group/move_group_online_collision_predictor)

<img src="/assets/images/related_projects/place_holder.png" height="300"/>

## MoveIt Dynamic Programming Redundancy Resolution

[UNISA Automatic Control Group](http://www.automatica.unisa.it/) in *Globally Optimal Redundancy Resolution with Dynamic Programming for Robot Planning: A ROS Implementation*, published on [MDPI Robotics](https://www.mdpi.com/2218-6581/10/1/42), provides an optimal kineto-dynamic trajectory planner for kinematically redundant robots, based on dynamic programming. Demos on a 4R planar robot and Franka Emika's Panda robot are provided. MoveIt planning capabilities are extended by computing optimal joint-space trajectories for redundant robots along pre-scribed workspace paths, considering actuation limits. [More info](https://github.com/unisa-acg/moveit_dp_redundancy_resolution)

<img src="/assets/images/related_projects/moveit_dp_redundancy_resolution.png" height="300"/>

## MoveIt GPD Grasping

A sample implementation as MoveIt "GraspPlanning" plugin, to perform grasps detection by [GPD](https://github.com/atenpas/gpd). GPD detects 6-DOF grasp poses for a 2-finger grasp (e.g. a parallel jaw gripper) in 3D point clouds. Grasp pose detection consists of three steps: sampling a large number of grasp candidates, classifying these candidates as viable grasps or not, and clustering viable grasps which are geometrically similar. [More Info](https://github.com/TAMS-Group/moveit_gpd_pick_object)

<img src="/assets/images/related_projects/place_holder.png" height="300"/>

## MoveIt Grasps

Geometric grasping generator library for cuboids. A basic grasp generator for objects such as blocks or cylinders for use with the MoveIt pick and place pipeline. Does not consider friction cones or other dynamics.

Its current implementation takes as input a pose vector (position and orientation) and generates a large number of potential grasp approaches and directions. Also includes a grasp filter for removing kinematically infeasible grasps via threaded IK solvers. [More Info](https://github.com/PickNikRobotics/moveit_grasps)

<img src="/assets/images/related_projects/moveit_grasps.png" height="500"/>

## MoveIt Pro

PickNik's MoveIt Pro Developer Platform enables robotics engineers and robot field operators to more quickly build advanced applications that include manipulator arms. Designed with a user-friendly interface, it includes a set of pre-built tools that make it easy to build and debug behavior trees, inspect trajectories, diagnose failures, and provide robot recovery. [Click here to learn more](https://picknik.ai/pro/).

<img src="/assets/images/related_projects/moveit_studio.png" height="500"/>

## Pilz Industrial Motion

Most industrial robot manipulators supported in ROS come with a MoveIt configuration. The MotionPlanning plugin for RViz allows simple and visualized planning and execution of free-space motion. Planning and obstacle avoidance work mostly out-of-the-box. In pilz_industrial_motion Cartesian motion is addressed: existing libraries for Cartesian trajectory generation lacked a user-friendly interface.

The project implements a trajectory generator with a MoveIt-interface for easy planning and execution of Cartesian standard-paths (LIN, PTP, CIRC). In addition, the blending of multiple sequential motion commands is realized.
[More Info](https://github.com/PilzDE/pilz_industrial_motion)

<img src="/assets/images/related_projects/pilz_industrial_motion.jpeg" height="300"/>

## Robotic Evaluation And Comparison Heuristic (REACH)

[REACH](https://github.com/ros-industrial/reach) is a tool that allows users to visualize and quantitatively evaluate the reach capability of a robot system for a given workpiece.

<img src="/assets/images/related_projects/reach_study.png" height="500"/>

## ROS Control

A set of packages that include controller interfaces, controller managers, transmissions and hardware_interfaces. The ros_control packages are a rewrite of the [pr2_mechanism](http://wiki.ros.org/pr2_mechanism) packages to make controllers generic to all robots beyond just the PR2. The ros_control packages takes as input the joint state data from your robot's actuator's encoders and an input set point. It uses a generic control loop feedback mechanism, typically a PID controller, to control the output, typically effort, sent to your actuators. ros_control gets more complicated for physical mechanisms that do not have one-to-one mappings of joint positions, efforts, etc but these scenarios are accounted for using transmissions.

<img src="/assets/images/related_projects/ros_control.png" height="500"/>

## ROS2 Grasp Library

ROS2 Grasp Library enables state-of-the-art CNN based deep learning grasp detection algorithms on ROS2 for visual based industrial robot manipulation.
This package provides ROS2 interfaces compliant with the MoveIt motion planning framework which is supported by most of the robot models in ROS industrial.
[More Info](https://github.com/intel/ros2_grasp_library)

<img src="/assets/images/related_projects/ros2_grasp_library.png" height="300"/>

## TracIK

Provide an alternative Inverse Kinematics solver to the popular inverse Jacobian methods in KDL. Specifically, KDL's convergence algorithms are based on Newton's method, which does not work well in the presence of joint limits --- common for many robotic platforms. [More Info](https://bitbucket.org/traclabs/trac_ik)

<img src="/assets/images/related_projects/place_holder.png" height="300"/>
