---
author: admin
comments: false
date: 2013-12-08 02:13:26+00:00
layout: page
slug: tutorials
title: Tutorials
wordpress_id: 120
---

# Beginner's Tutorials


These tutorials will run you through how to use MoveIt! with your robot. It is assumed that you have already configured MoveIt! for your robot - check the [list of robots running MoveIt!](/robots) to see whether MoveIt! is already available for your robot. (Otherwise, skip to the tutorial on Setting up MoveIt! for your robot).

The primary user interface to MoveIt! is through the _move_group_interface_. You can use this interface both through C++ and Python. A GUI-based interface is available through the use of the MoveIt! Rviz Plugin. We will walk through each of these interfaces in detail.

Tutorial | Level | Description
------------ |:------------- |-------------|
[The move_group_interface (C++)](http://docs.ros.org/indigo/api/pr2_moveit_tutorials/html/planning/src/doc/move_group_interface_tutorial.html) | User | This tutorial will explain how to use the C++ interface to the _move_group_ node in your code
[The move_group_interface (Python)](http://docs.ros.org/indigo/api/pr2_moveit_tutorials/html/planning/scripts/doc/move_group_python_interface_tutorial.html) |User|This tutorial will run you through using the python interface to the _move_group_ node for scripting advanced behaviors
[The MoveIt! Rviz Plugin (Rviz)](http://docs.ros.org/indigo/api/moveit_ros_visualization/html/doc/tutorial.html) | User |This tutorial will run you through the process of moving your robot using the MoveIt! Rviz plugin.

# Advanced Tutorials


This set of advanced tutorials is meant for developers who are using MoveIt!'s C++ API. Most users wanting to access MoveIt! in C++ or Python should use the _move_group_interface_ (above).

Tutorial | Level | Description
------------ |------------- |-------------|
[Kinematics - RobotState and RobotModel (C++)](http://docs.ros.org/indigo/api/pr2_moveit_tutorials/html/kinematics/src/doc/kinematics_tutorial.html) | Advanced | This tutorial introduces the kinematics C++ API for forward and inverse kinematics, setting and getting joint values, dealing with joint limits and computing jacobians
[Kinematics - Configuration](http://docs.ros.org/indigo/api/pr2_moveit_tutorials/html/kinematics/src/doc/kinematics_configuration.html) | Advanced | This tutorial presents the configuration parameters for the Kinematics components in MoveIt!, including setting up position only IK.
[Planning Scene (C++)](http://docs.ros.org/indigo/api/pr2_moveit_tutorials/html/planning/src/doc/planning_scene_tutorial.html) | Advanced | This tutorial shows how to use the planning scene C++ API for collision checking, checking constraints or for specifying user constraints
[Planning Scene (ROS)](http://docs.ros.org/indigo/api/pr2_moveit_tutorials/html/planning/src/doc/planning_scene_ros_api_tutorial.html) | Advanced | This tutorial shows how to use the planning scene ROS API for adding objects into the world, removing objects form the world and attaching and detaching objects from the robot
[Motion Planning (C++)](http://docs.ros.org/indigo/api/pr2_moveit_tutorials/html/planning/src/doc/motion_planning_api_tutorial.html) | Advanced | This tutorial illustrates the basics of loading a motion planner (using the ROS pluginlib library), calling it and setting joint space goals, pose goals and kinematic constraints
[Motion Planning Pipeline(C++)](http://docs.ros.org/indigo/api/pr2_moveit_tutorials/html/planning/src/doc/planning_pipeline_tutorial.html) | Advanced | This tutorial illustrates the basics of loading a motion planning pipeline and the use of planning request adapters for pre-processing and post-processing






# Integrating a new robot with MoveIt!


First, check whether your robot has already been integrated with MoveIt! (see the list of [robots using MoveIt! here](/robots/)). Otherwise, follow the tutorials in this section to integrate your robot with MoveIt! (and share your results on the MoveIt! mailing list)

Tutorial | Level | Description
------------ |------------- |-------------|
[MoveIt! Setup Assistant](http://docs.ros.org/indigo/api/moveit_setup_assistant/html/doc/tutorial.html) |User|Configure MoveIt! for a new robot using the MoveIt! Setup Assistant and interact with a visualized model of the robot in Rviz
[Control](http://docs.ros.org/indigo/api/pr2_moveit_tutorials/html/planning/src/doc/controller_configuration.html)|User|Setup MoveIt! to talk to the existing controllers on your robot
[Perception](http://docs.ros.org/indigo/api/pr2_moveit_tutorials/html/planning/src/doc/perception_configuration.html) | User | Setup perception with MoveIt! and the sensors on your robot
[Rviz Integration](http://docs.ros.org/indigo/api/moveit_ros_visualization/html/doc/tutorial.html) | User |The Rviz Motion Planning Interface: Beginner's Tutorial
[MoveIt! IKFast Tutorial](http://docs.ros.org/indigo/api/moveit_ikfast/html/doc/ikfast_tutorial.html) (Optional) | User | Creating and integrating an IKFast Kinematics Plugin with MoveIt!
