---
author: sharronliu
comments: false
date: 2018-10-24 20:00:00+00:00
layout: page
slug: related_projects
title: Related Projects
---

# MoveIt! Related Projects

MoveIt! is designed to be easily extensible as separate plugins or projects. Below is a list of related projects that have been aligned with the MoveIt! framework, in alphabetical order of project names. This is by no means exhaustive. Please create pull-requests in the repository [moveit.ros.org](https://github.com/ros-planning/moveit.ros.org) to *add* other projects related to MoveIt!. Or if not sure about the relevance, please post on the [ROS Discourse category](https://discourse.ros.org/c/moveit).

## bio_ik
A MoveIt! kinematics_base plugin based on Particle Optimization & Genetic Algorithms. For ease of use and compatibility with existing code, the bio-ik algorithm is encapsulated as a Moveit kinematics plugin. Therefore, bio-ik can be used as a direct replacement of the default Orocos/KDL-based IK solver. Given the name of an end-effector and a 6-DOF target pose, bio-ik will search a valid robot joint configuration that reaches the given target. [More Info](https://github.com/TAMS-Group/bio_ik)

<img src="/wordpress/wp-content/uploads/2018/bio_ik.png" height="500"/>

## descartes
ROS-Industrial Special Project: Cartesian Path Planner. Descartes performs path-planning on under-defined Cartesian trajectories. It uses trajectory points, robot models, and planners to generate an joint-trajectory that complies with the constraints of a given process. [More Info](https://github.com/ros-industrial-consortium/descartes)

<iframe width="800" height="500" src="https://www.youtube.com/embed/cZxt00uoyBo" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## moveit_gpd_pick_object
A sample implementation as MoveIt "GraspPlanning" plugin, to perform grasps detection by [GPD](https://github.com/atenpas/gpd). GPD detects 6-DOF grasp poses for a 2-finger grasp (e.g. a parallel jaw gripper) in 3D point clouds. Grasp pose detection consists of three steps: sampling a large number of grasp candidates, classifying these candidates as viable grasps or not, and clustering viable grasps which are geometrically similar. [More Info](https://github.com/TAMS-Group/moveit_gpd_pick_object)

<img src="/wordpress/wp-content/uploads/2018/place_holder.png" height="300"/>

## moveit_grasps
Geometric grasping generator library for cuboids. A basic grasp generator for objects such as blocks or cylinders for use with the MoveIt! pick and place pipeline. Does not consider friction cones or other dynamics.

Its current implementation takes as input a pose vector (postition and orientation) and generates a large number of potential grasp approaches and directions. Also includes a grasp filter for removing kinematically infeasible grasps via threaded IK solvers. [More Info](https://github.com/PickNikRobotics/moveit_grasps)

<img src="/wordpress/wp-content/uploads/2018/moveit_grasps.png" height="500"/>

## move_group_online_collision_predictor
MoveGroupCapability that does simple extrapolation to check for possible collisions. If it detects a possible collision at a specified horizon, it notifies the ecosystem by message and extrapolate current state into the future to predict possible collisions. [More Info](https://github.com/TAMS-Group/move_group_online_collision_predictor)

<img src="/wordpress/wp-content/uploads/2018/place_holder.png" height="300"/>

## trac_ik
Provide an alternative Inverse Kinematics solver to the popular inverse Jacobian methods in KDL. Specifically, KDL's convergence algorithms are based on Newton's method, which does not work well in the presence of joint limits --- common for many robotic platforms. [More Info](https://bitbucket.org/traclabs/trac_ik)

<img src="/wordpress/wp-content/uploads/2018/place_holder.png" height="300"/>
