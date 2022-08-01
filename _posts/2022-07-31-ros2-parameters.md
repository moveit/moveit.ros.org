---
author: Tyler Weaver
comments: false
date: 2022-07-22 00:00:00 -0600
layout: post
slug: Declaritive-ROS-2-Parameters
title: Declarative ROS 2 Parameters
media_type: image
media_link: /assets/images/blog_posts/i_choose_violence.gif
description: Specify what your parameters are

categories:
- ROS

---

Over the last two years, many of us from PickNik have attempted to improve our usage of ROS 2 parameters in C++.
We have created patterns for usage and made several attempts at building libraries that would abstract declaring, getting, validating, and updating parameters that might be dynamic.
The primary pain points we kept running into are:
* How to collect a set of parameters, a struct, member variables, etc.?
* How to validate parameter values and errors with helpful error messages to invalid configs?
* How to reduce the boilerplate needed to declare type, description, default value, and update function with validation?
* How to respond to dynamic parameter updates?
* How to map the structure of the config file to structures in C++?

While working on Admittance Control, [Paul](https://github.com/pac48) developed the initial version of what would become [generate_parameter_library](https://github.com/PickNikRobotics/generate_parameter_library).
Unable to make a significant dent in the amount of boilerplate we needed to copy and paste through other means, we chose an approach of last resort.
This package generates C++ code from a YAML file.
A CMake function takes the YAML file input, calls a python executable to generate C++ source files, and then builds those source files into a library target.

If you have also found that using ROS 2 parameter interface in `rclcpp` results in lots of copy-pasta, we invite you to try using the tool we are developing for use in MoveIt and ros2_control.

This package into ROS 2 Humble and Rolling. Backporting to Galactic and Foxy is possible but not planned at this time.
