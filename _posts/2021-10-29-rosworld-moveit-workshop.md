---
author: Mark Moll
comments: false
date: 2021-10-29
layout: post
title: Hands-on training with MoveIt 2 and the Stretch mobile manipulator
media_type: image
media_link: /assets/images/stretch_pick_place_mtc.gif
description: Mobile Manipulation with MoveIt 2 Workshop at ROS World 2021
categories:
- ROS
- MoveIt
- Events
---

PickNik and Hello Robot organized a 4-hour virtual workshop recently on [Mobile Manipulation with MoveIt 2 and Hello Robot](/events/rosworld-2021-workshop/) as part of ROS World 2021. We had about 50 people participate. The workshop alternated between presentations and breakout sessions where participants practiced in small groups with MoveIt 2, with facilitators providing assistance where needed. We had created a Docker container for this workshop that contained everything participants would need. There was also a hardware demonstration from the Hello Robot team. The PickNik team has been working closely with the Hello Robot team to make sure that the Stretch mobile manipulator is well-supported within ROS 2 and MoveIt 2.

Below are some videos demos of the code that the participants played around with. For more details (including all the slides from the presentations and all the code that was used) see [the workshop page](/events/rosworld-2021-workshop/).

* A demonstration of the MoveIt motion planning panel in RViz:<br>
  {% include video.html youtube="MwDs_uX6SKw" %}
* A basic pick & place demo [[code]](https://github.com/AndyZe/stretch_ros2/blob/ros_world2021/stretch_roscon_demos/src/move_group_interface_demo.cpp):<br>
  {% include video.html youtube="auazxjtOjsY" %}
* An advanced pick & place demo using the MoveIt Task Constructor [[code]](https://github.com/PickNikRobotics/stretch_moveit_plugins/tree/main/pick_place_task):<br>
  {% include video.html youtube="Tm93GFlT234" %}
* Whole body planning with execution in a complex environment in Ignition:<br>
  {% include video.html youtube="pmpdBpE_Rng" %}
