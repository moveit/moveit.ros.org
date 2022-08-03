---
author: Tyler Weaver
comments: false
date: 2022-07-22 00:00:00 -0600
layout: post
slug: Declaritive-ROS-2-Parameters
title: Declarative ROS 2 Parameters
media_type: image
media_link: /assets/images/blog_posts/declarative_ros2_parameters.png
description: PickNik is excited to announce the release of the generate_parameter_library ROS package, which has been developed to address many of the issues the MoveIt project has faced using ROS 2 parameters in C++.

categories:
- ROS

---

PickNik is excited to announce the release of the [generate_parameter_library](https://github.com/PickNikRobotics/generate_parameter_library) ROS package, which has been developed to address many of the issues the MoveIt project has faced using ROS 2 parameters in C++.

Over the last two years, many of us from PickNik have attempted to improve our usage of ROS 2 parameters in C++.
We have created patterns for usage and made several attempts at building libraries that would abstract declaring, getting, validating, and updating parameters that might be dynamic.
The primary pain points we kept running into are:
* How to collect a set of parameters, a struct, member variables, etc.?
* How to validate parameter values and errors with helpful error messages to invalid configs?
* How to reduce the boilerplate needed to declare type, description, default value, and update function with validation?
* How to respond to dynamic parameter updates?
* How to map the structure of the config file to structures in C++?

While working on a new Admittance Control library for ros2_control, PickNik intern [Paul Gesel](https://github.com/pac48) developed the initial version of what is now the [generate_parameter_library](https://github.com/PickNikRobotics/generate_parameter_library).
Over the summer he has collaborated with others to make it easy to use, robust, and solve the major pain points of the ROS 2 parameter interface.

Not satisfied with the results of using gentler approaches to this problem, generate_parameter_library uses a heavy-handed approach.
This package generates a C++ library from a YAML file. A CMake function takes the YAML file input, calls a python executable to generate C++ source files, and then builds those source files into a library target.

If you have also found that using ROS 2 parameter interface in rclcpp results in lots of copy-pasta, we invite you to try using the tool we are developing for use in MoveIt and ros2_control.

This package is released into ROS 2 Humble and Rolling. Backporting to Galactic and Foxy is possible but not planned at this time.
