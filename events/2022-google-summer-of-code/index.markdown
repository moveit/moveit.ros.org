---
author: Mark Moll
comments: false
date: 2022-02-17 00:00:00 -0700
layout: page
slug: 2022-google-summer-of-code
title: 2022 Google Summer of Code
---
# 2022 Google Summer of Code

MoveIt is planning to participate again in the [Google Summer of Code](https://summerofcode.withgoogle.com). Below is a tentative list of project ideas. If you have your own project idea, feel free to create a pull request on the [repository for this page](https://github.com/ros-planning/moveit.ros.org). Unlike previous years, there are now two different project sizes. Medium projects are 175 hours, while large projects are 350 hours. See the [Google Summer of Code FAQ](https://developers.google.com/open-source/gsoc/faq) for details.

## Project ideas

### Bullet collision checking integration

* Bullet support is partially done, but more work is needed. Support for continuous collision checking would be nice.
* Project size: medium
* Mentors: ???

### Python bindings for MoveIt 2

* Use [pybind11](https://pybind11.readthedocs.io/en/latest) to create python bindings for a subset of the MoveIt C++ API.
* Project size: large
* Mentors: Henning Kayser

### Improved benchmarking Support in MoveIt

* Continue the work from last year's Google Summer of Code project to create more benchmarking capabilities.
* Project size: large
* Mentors: Michael Görner

### Add ability to attach/detach end-effector links

* Add functionality to MoveIt to programmatically attach and detach grippers from a manipulator. See [this issue](https://github.com/ros-planning/moveit2/issues/208) for a more detailed discussion.
* Project size: large
* Mentor: Andy Zelenak

### Tutorial for multiple robot arms

* While there are some ROS Answers posts and examples floating around, there is no definitive resource on how to set up multiple manipulators with MoveIt (and especially MoveIt2). The goal of this project is to write a tutorial that should become the reference.
* Project size: medium
* Mentor: Tyler Weaver, Andy Zelenak

## Tips for writing a successful Google Summer of Code application for MoveIt

* Be specific in describing your experience. Rather than saying "experienced C++ programmer," point us to code that you have written.
* Describe your background and experience in robotics and ROS.
* Tell us what you hope to get out of the Summer of Code experience.
