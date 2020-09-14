---
author: Tyler Weaver
comments: false
date: 2020-08-04
layout: post
title: 'MoveIt Melodic Release (1.0.5)'
description: A new release of MoveIt for Melodic
categories:
- MoveIt
- ROS
---

Many of the awesome features and bug fixes only available to people building MoveIt on master from source are coming to an apt repo near you. Along with all these great features come bug fixes and some new tests that helped find those bugs.

## Highlighted features

### moveit_servo (Formally moveit_jog_arm)
Real-time robot arm control. [So cool, we even got a smile from a famous person while using it.](https://www.youtube.com/watch?v=uwYtwQtoOh0)

![thank_you_servo](/assets/images/blog_posts/2020_08_01_servo.gif)

[Here is an tutorial for getting started with it. ](https://ros-planning.github.io/moveit_tutorials/doc/realtime_servo/realtime_servo_tutorial.html)

### moveit_cpp
There is a new high level API for users who want convenient access to MoveIt's functionality via C++ classes. [Here is the tutorial for using it.](https://ros-planning.github.io/moveit_tutorials/doc/moveit_cpp/moveitcpp_tutorial.html)

## Additional features
* Allow parameterization of input trajectory density of Time Optimal trajectory generation (#2185)
* Add support for hybridize/interpolate flags in ModelBasedPlanningContext via ompl_planning.yaml (#2171)
* Improve responsiveness of PlanningSceneDisplay (#2049)
* Use plan_request_params in PlanningComponent (#2033)
* Ask for scaling large meshes in rviz (#2142)
* Speed up PlanningSceneDisplay (#2049)
* Add support for PS4 joystick (#2060)
* Add use_rviz to demo.launch in setup_assistant (#2019)

## Bug fixes
* Behaviors (#2113, #2054, #2157, #2076, #2082, #2120)
* Segfaults (#2104, #2106)
* Memory leaks (#2138)
* Python 3 (#2030)

## Contributors
* Jafar Abdi
* Patrick Beeson
* Constantinos
* Felix von Drigalski
* Michael Görner
* Robert Haschke
* Henning Kayser
* Jere Liukkonen
* Wolfgang Merkt
* Mark Moll
* Simon Schmeisser
* John Stechschulte
* TrippleBender
* Tyler Weaver
* Yeshwanth
* Andy Zelenak
