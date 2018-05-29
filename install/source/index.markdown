---
author: davetcoleman
comments: false
date: 2016-8-4 20:43:44+00:00
layout: page
slug: source_install
title: Source Install
redirect_from: "/install/source_install.html"
---

# Source Installation Instructions

**Virtual Machines:** There have been many reports of problems with the ROS visualization tool RViz when used in virtual machines.
We therefore discourage the use of virtual machines with MoveIt! unless you are not interested in visualization support.

## Prerequisites

Install ROS [Indigo](http://www.ros.org/wiki/indigo/Installation/Ubuntu), [Kinetic](http://www.ros.org/wiki/kinetic/Installation/Ubuntu), or [Lunar](http://www.ros.org/wiki/lunar/Installation/Ubuntu). Please make sure you have followed all steps and have the latest versions of packages installed:

    rosdep update
    sudo apt-get update
    sudo apt-get dist-upgrade

Source installation requires [wstool](http://wiki.ros.org/wstool), [catkin_tools](https://catkin-tools.readthedocs.io/en/latest/), and optionally clang-format:

    sudo apt-get install python-wstool python-catkin-tools clang-format-3.8

Optionally create a new workspace, you can name it whatever:

    mkdir -p ~/ws_moveit/src
    cd ~/ws_moveit/src

Follow the instructions below for either Indigo, Kinetic, or Lunar:

## Indigo

Pull down required repositories and build from within the ``/src`` directory of your catkin workspace:

    wstool init .
    wstool merge https://raw.githubusercontent.com/ros-planning/moveit/indigo-devel/moveit.rosinstall
    wstool update
    rosdep install -y --from-paths . --ignore-src --rosdistro indigo
    cd ..
    catkin config --extend /opt/ros/indigo --cmake-args -DCMAKE_BUILD_TYPE=Release
    catkin build

See final section below **Source The Catkin Workspace**. Optionally for MongoDB, OMPL, or FCL source installs, see [Building Common MoveIt! Dependencies from Source in Catkin](/install/source/dependencies/).

## Kinetic

Pull down required repositories and build from within the ``/src`` directory of your catkin workspace:

    wstool init .
    wstool merge https://raw.githubusercontent.com/ros-planning/moveit/kinetic-devel/moveit.rosinstall
    wstool update
    rosdep install -y --from-paths . --ignore-src --rosdistro kinetic
    cd ..
    catkin config --extend /opt/ros/kinetic --cmake-args -DCMAKE_BUILD_TYPE=Release
    catkin build

See final section below **Source The Catkin Workspace**. Optionally for MongoDB, OMPL, or FCL source installs, see [Building Common MoveIt! Dependencies from Source in Catkin](/install/source/dependencies/).

## Melodic

> **Note:** Melodic support is still in beta

Pull down required repositories and build from within the ``/src`` directory of your catkin workspace:

    wstool init .
    wstool merge https://raw.githubusercontent.com/ros-planning/moveit/melodic-devel/moveit.rosinstall
    wstool update
    rosdep install -y --from-paths . --ignore-src --rosdistro melodic
    cd ..
    catkin config --extend /opt/ros/melodic --cmake-args -DCMAKE_BUILD_TYPE=Release
    catkin build

See final section below **Source The Catkin Workspace**. Optionally for MongoDB, OMPL, or FCL source installs, see [Building Common MoveIt! Dependencies from Source in Catkin](/install/source/dependencies/).

## Source the Catkin Workspace

Setup your environment - you can do this every time you work with this particular source install of the code, or you can add this to your ``.bashrc``:

    source ~/ws_moveit/devel/setup.bash # or .zsh, depending on your shell
