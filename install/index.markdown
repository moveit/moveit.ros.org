---
author: admin
comments: false
date: 2016-8-5 20:43:44+00:00
layout: page
slug: install
title: Install
---

# Install MoveIt

MoveIt is supported on the following systems:

* Ubuntu 17.10, 18.04 / [ROS Melodic](http://www.ros.org/wiki/melodic/Installation/Ubuntu)
* Ubuntu 15.10, 16.04 / [ROS Kinetic](http://www.ros.org/wiki/kinetic/Installation/Ubuntu)
* Ubuntu 14.04 / [ROS Indigo](http://www.ros.org/wiki/indigo/Installation/Ubuntu)
* Windows 10 - experimental

### Prereq: Install ROS

Follow all the instructions to [install ROS](http://wiki.ros.org/ROS/Installation), including calls to ``rosdep``. Choose your version of ROS below:

## Install on Ubuntu

### ROS Melodic - *latest*

    sudo apt-get install ros-melodic-moveit

### ROS Kinetic

    sudo apt-get install ros-kinetic-moveit

### ROS Indigo

    sudo apt-get install ros-indigo-moveit

## Install on Windows

See [Getting Started with MoveIt and UR3 on Windows](https://ms-iot.github.io/ROSOnWindows/Moveit/UR3.html).

## Quick Start

Start planning in Rviz with with the [MoveIt Getting Started Tutorial](https://ros-planning.github.io/moveit_tutorials/doc/getting_started/getting_started.html)

---

## Other Setups

- Source Build

    See [building from source](http://moveit.ros.org/install/source/)

- Docker

    See [Docker instructions](http://moveit.ros.org/install/docker/)

- Virtual Machines

    We recommend developing with MoveIt on a native Ubuntu install. If you are unable to run Linux natively on your machine, the next best thing would be to set up a virtual machine using VMware. There are known issues with the ROS visualization tool RViz when used with VirtualBox - be sure to enable virtualization in your BIOS.

- Older Versions

    For previous versions, see [Source Installation Instructions for unsupported versions of MoveIt](deprecated)

## About Our Release Process

MoveIt is released every few months into Ubuntu debian packages via the ROS infrastructure. For more information see the [ROS target platforms](http://www.ros.org/reps/rep-0003.html) and [MoveIt's release process](http://moveit.ros.org/documentation/contributing/pullrequests/)
