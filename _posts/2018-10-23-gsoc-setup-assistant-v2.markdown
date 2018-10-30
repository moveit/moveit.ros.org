---
author: nbbrooks
comments: false
date: 2018-10-23 15:50:00+00:00
layout: post
slug: gsoc-2018-setup-assistant-v2
title: Google Summer of Code Improvements to Setup Assistant
media_type: image
media_link: http://moveit.ros.org/assets/images/gsoc.png
description: Summary of Google Summer of Code improvements to the MoveIt! Setup Assistant.
categories:
- MoveIt!
- ROS
---

Submitted by: Mohamad Ayman, Cairo University

For this year's Google Summer of Code Project (GSoC) 2018, in collaboration with PickNik Consulting, Open Source Robotics Foundation (OSRF), Dave Coleman, and Andy McEvoy, the Setup Assistant 2.0 has been developed.

The focus of this research was to improve the Setup Assistant.  The idea was to add more features to the Moveit! Setup Assistant as well as to simplify setting up robots for simulations and other tasks. This blog post will further explain how to simulate your Moveit! Controlled robot in Gazebo using the upgraded setup assistant and act as a tutorial

### Overview
A sneak peak at the end result:
[<img src="{{ site.url }}/assets/images/gsoc18/simulation.gif" width="500" style="margin-right:20px"/>]({{ site.url }}/assets/images/gsoc18/simulation.gif)

Say you are using the Panda robot with MoveIt! and you want to see your plan being executed in Gazebo. First open the `moveit_setup_assistant` and load the [panda_moveit_config](https://github.com/ros-planning/panda_moveit_config)  package. Then navigate to the ROS Control screen and add the Follow Joint Controllers for each planning group using the “Auto Add FollowJointsTrajectory Controllers ...” [button]({{ site.url }}/assets/images/gsoc18/control_screen.png). Next navigate to the Simulation screen to generate a Gazebo compatible URDF; the Simulation screen adds the missing inertia and transmission elements required by Gazebo. The Simulation screen also adds the `gazebo_ros_control` plugin to the end of the URDF.

### Outcomes
The outcomes, successes, and key metrics of improvement:

Instead of writing many configuration files manually, you can now simulate your motion planning in Rviz along side Gazebo by using a few clicks in the MoveIt! Setup Assistant!

### Useful resources / links
For further reading look at the [GitHub issue of the project](https://github.com/ros-planning/moveit/issues/894) and [MoveIt! Tutorial](http://docs.ros.org/kinetic/api/moveit_tutorials/html/doc/setup_assistant/setup_assistant_tutorial.html).
The GitHub issue for the project is [here](https://github.com/ros-planning/moveit/issues/894) and an overview of the relationship between simulation, hardware, controllers, and transmissions is [here](http://gazebosim.org/tutorials/?tut=ros_control).


[<img src="{{ site.url }}/assets/images/gsoc18/control_screen.png" width="500" style="margin-right:20px"/>]({{ site.url }}/assets/images/gsoc18/control_screen.png)

[<img src="{{ site.url }}/assets/images/gsoc18/perception_screen.png" width="500" style="margin-right:20px"/>]({{ site.url }}/assets/images/gsoc18/perception_screen.png)

[<img src="{{ site.url }}/assets/images/gsoc18/simulation_screen.png" width="500" style="margin-right:20px"/>]({{ site.url }}/assets/images/gsoc18/simulation_screen.png)

[<img src="{{ site.url }}/assets/images/gsoc18/start_screen.png" width="500" style="margin-right:20px"/>]({{ site.url }}/assets/images/gsoc18/start_screen.png)

