---
author: admin
comments: false
date: 2016-8-5 20:43:44+00:00
layout: page
slug: install
title: Install
---

# Binary Installation Instructions

MoveIt! is released every month or so into Ubuntu debian packages via the ROS infrastructure. For more information see the [target platforms](http://www.ros.org/reps/rep-0003.html).

MoveIt! is currently released into ROS **Indigo** and **Jade**. ROS **Kinetic** is not yet released but is under active development.

**Developers:** see [source install](source/) instructions.

## Prerequisite: Install ROS

Follow all the instructions to install ROS [Indigo](http://www.ros.org/wiki/indigo/Installation/Ubuntu), [Jade](http://www.ros.org/wiki/jade/Installation/Ubuntu), or [Kinetic](http://www.ros.org/wiki/kinetic/Installation/Ubuntu). Please make sure you have followed all steps, including calls to ``rosdep``.

Choose your ROS distribution below:

* * *

## ROS Indigo

*Note for Ubuntu 13.04 32 bit users*: There is a bug with GCC 4.7 on Ubuntu 13.04 32bit with Eigen 3.1.2. It's not likely to be fixed, so upgrade/downgrade your system to 13.04 64 bit resp. 12.04.

### Install Ubuntu Packages

Simply run:

    sudo apt-get install ros-indigo-moveit-full

### Optional: Install PR2 Ubuntu Packages for MoveIt!

    sudo apt-get install ros-indigo-moveit-full-pr2

### Setup your environment

    source /opt/ros/indigo/setup.bash

See bottom of page for quick start

* * *

## ROS Jade

### Install Ubuntu Packages

Simply run:

    sudo apt-get install ros-jade-moveit

### Setup your environment

    source /opt/ros/jade/setup.bash

See bottom of page for quick start

* * *

## ROS Kinetic

MoveIt! for Kinetic is not yet released, see [Github Issue](https://github.com/ros-planning/moveit/issues/18).

* * *

## Previous ROS Versions

See [Source Installation Instructions for unsupported versions of MoveIt!](deprecated)

* * *

## Quick Start

Try planning in Rviz with the PR2 move_group demo: [MoveIt! Rviz Plugin Tutorial](http://docs.ros.org/indigo/api/moveit_tutorials/html/doc/ros_visualization/visualization_tutorial.html)
