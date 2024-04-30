---
author: Rob Coleman
comments: false
date: 2019-11-18
layout: post
title: PickNik and Rapyuta Team Up to Release MoveIt Grasps
media_type: image
media_link: /assets/images/blog_posts/moveit_grasps/moveit_grasps.png
description: "Bringing a major new feature to MoveIt: a grasping library for manipulation"
categories:
- MoveIt
- ROS
---

[//]: # (Image References)
[picknik_logo]: /assets/images/blog_posts/moveit_grasps/picknik_logo.png
[rapyuta_logo]: /assets/images/blog_posts/moveit_grasps/rapyuta_logo.png

We are pleased to officially announce a major new feature to MoveIt: a default grasping library for manipulation called [MoveIt Grasps](https://github.com/moveit/moveit_grasps). This package is the successor to the deprecated moveit_simple_grasps project and was originally developed by Dave Coleman and Andy McEvoy at the University of Colorado Boulder.

Over the past year, through a close partnership between [Rapyuta Robotics](https://www.rapyuta-robotics.com) and [PickNik Robotics](https://picknik.ai), the MoveIt Grasps package underwent a significant refactor and is now being released to the open-source community.

**Features:**

* Support for both parallel finger and suction grippers
* An extensible framework for grasp generation, filtering, scoring, and selection
* Support for virtually any robot arm and gripper pair via YAML configuration
* Fast parallel processing for filtering hundreds of grasp candidates
* Extensive debugging and visualization tools
* Easy to run and modifiable demos

Because of Rapyuta's and PickNik's commitment to open source, this package has been made available to the community.

**More Info**

* You can find out more about the package [here](https://github.com/moveit/moveit_grasps).


|----------------|------------------|
|![rapyuta_logo] |  ![picknik_logo] |
|                |                  |
|                |                  |


**About Rapyuta Robotics**

Rapyuta Robotics, an ETH Zurich spin-off, is a global technology startup with long term ambitions to develop a cloud robotics platform that will become the backbone of a new technology hub that unites hardware developers, software developers, businesses and end-users to build the next generation of robotics solutions. For more details visit [https://www.rapyuta-robotics.com](https://www.rapyuta-robotics.com)
