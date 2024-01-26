---
author: tylerjw
comments: false
date: 2019-04-16
layout: post
title: Announcing Realtime Robotics RapidPlan Integration
media_type: image
media_link: /assets/images/plan_visualization.png
description: Boston-area startup Realtime Robotics has just released RapidPlan, its innovative solution for collision-free motion planning and we’re happy to announce that there is already a MoveIt integration in place.
categories:
- MoveIt!
- ROS
---

Boston-area startup [Realtime Robotics](https://rtr.ai/) has just released RapidPlan, its innovative solution for collision-free motion planning and we’re happy to announce that there is already a MoveIt integration in place.
Over the last couple of weeks [PickNik Robotics](https://picknik.ai/) implemented a planning plugin for MoveIt that allows running Rapidplan using the familiar planner interface.

RapidPlan enables machines to navigate dynamic environments smoothly and quickly through high-frequency collision checking and planning using roadmaps. The framework can handle occupancy sensor data like point clouds and check for collisions in all roadmap edges at the same time using the **RapidPlan** _Motion Planning Accelerator_ (MPA), a dedicated FPGA hardware board. The FPGA uses pre-generated roadmaps of states and edges, which encode the robot’s potential motion within an occupied space. RapidPlan comes with a graph-based path planner that together with the MPA enables planning rates of up to 1kHz. This makes RapidPlan highly equipped for a wide range of robotic applications that require low latency collision checking and short reaction times.

To allow seamless integration with existing robot setups, [PickNik Robotics](https://picknik.ai/) implemented a _RapidPlan_ motion planning plugin for MoveIt. The plugin should offer the full planning and collision checking capabilities via the common motion planning interface. The main challenge was the task of joining the two different methodologies. For instance: the plugin supports converting the collision objects in the planning scene to an occupancy voxel grid that can be processed by _RapidPlan_. Conversions of these types naturally come with a computational overhead that can reduce the planning rate. Other steps like converting motion planning requests, goal constraints, and processing the solution path also play into this. When using point clouds, the plugin can produce solutions with a rate of up to 700 hz which is more than appropriate for most real-time planning applications.

The collaboration with [Realtime Robotics](https://rtr.ai/) has shown that MoveIt is adaptable to new planning methodologies. Reliable real-time planning and collision checking are a long expected key features required by modern robot applications and also a driving factor for the development of [ROS 2.0](https://docs.ros.org/en/iron/The-ROS2-Project.html). The project has set out the importance of online-planning capabilities in current MoveIt versions and the just started implementation of [MoveIt2](https://moveit.ros.org/moveit!/ros/2019/03/01/announcing-the-moveit-2-port.html).
