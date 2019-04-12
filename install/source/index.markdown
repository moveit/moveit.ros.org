---
author: davetcoleman
comments: false
date: 2016-8-4 20:43:44+00:00
layout: page
slug: source_install
title: Source Install
---

# Build MoveIt! From Source

MoveIt! is mainly supported on Linux, in particular:

* Ubuntu 17.10, 18.04 / [ROS Melodic](http://www.ros.org/wiki/melodic/Installation/Ubuntu)
* Ubuntu 15.10, 16.04 / [ROS Kinetic](http://www.ros.org/wiki/kinetic/Installation/Ubuntu)
* Ubuntu 14.04 / [ROS Indigo](http://www.ros.org/wiki/indigo/Installation/Ubuntu)

As of February 2019, [MoveIt for ROS 2.0](https://github.com/ros-planning/moveit2) development has begun but is not ready yet.

## Prerequisites

### Install ROS

Follow all the instructions to [install ROS](http://wiki.ros.org/ROS/Installation). Please make sure you have followed all steps and have the latest versions of packages installed:

    rosdep update
    sudo apt-get update
    sudo apt-get dist-upgrade

Source installation requires [wstool](http://wiki.ros.org/wstool), [catkin_tools](https://catkin-tools.readthedocs.io/en/latest/), and optionally [clang-format](https://clang.llvm.org/docs/ClangFormat.html):

    sudo apt-get install python-wstool python-catkin-tools clang-format-3.9

### Create Workspace and Source

Optionally create a new workspace, you can name it whatever:

    mkdir ~/ws_moveit
    cd ~/ws_moveit

Next, source your ROS workspace to load the necessary environment variables, depending on what version of ROS you installed.

Choose one of the three:

    source /opt/ros/melodic/setup.bash
    source /opt/ros/kinetic/setup.bash
    source /opt/ros/indigo/setup.bash

This will load the ``${ROS_DISTRO}`` variable, needed for the next step.

## Download Source Code

By default, we will assume you are building the latest branch -  `master`.
This branch builds for ROS Kinetic and newer, e.g. on Ubuntu 16.04 and newer.
If you would like to build an older release of MoveIt! from source, see the section below.

Pull down required repositories and build from within the root directory of your catkin workspace:

    wstool init src
    wstool merge -t src https://raw.githubusercontent.com/ros-planning/moveit/master/moveit.rosinstall
    wstool update -t src
    rosdep install -y --from-paths src --ignore-src --rosdistro ${ROS_DISTRO}
    catkin config --extend /opt/ros/${ROS_DISTRO} --cmake-args -DCMAKE_BUILD_TYPE=Release

## Optional: Excluding Packages from a Build

MoveIt is a large project and the default compile time can easily take around 30 minutes.
If you would like to reduce your compile time or only need to build a subset of all the packages, `catkin` allows you to configure only a subset of packages to include in a build.
Be careful not to disable packages that are needed by others (ie: are a dependency of other packages).
You can exclude packages from a build in several ways:

 - ``catkin-tools --blacklist`` (recommended)
 - ``touch /path/to/package/directory/CATKIN_IGNORE``
 - ``rm -rf /path/to/package/directory``

Here we show some examples using ``catkin_tools``. Note: If you have already built these packages in your workspace you will need to use ``catkin clean`` first.

### Disable All High-Level User Interfaces (optional)

    catkin config --blacklist \
         moveit_commander \
         moveit_setup_assistant \
         moveit_ros_robot_interaction \
         moveit_ros_visualization \
         moveit_ros_benchmarks \
         moveit_controller_manager_example \
         moveit_ros_warehouse \
         moveit_ros_manipulation \
         moveit_visual_tools \
         rviz_visual_tools

### Disable CHOMP Motion Planer (optional)

Note, every command to ``catkin config --blacklist`` will override the previous list by default. Using the option ``--append-args`` you can augment the existing blacklist.

    catkin config --blacklist \
         moveit_chomp_optimizer_adapter \
         moveit_planners_chomp \
         chomp_motion_planner

## Build MoveIt

    catkin build

### Source the Catkin Workspace

Setup your environment - you can do this every time you work with this particular source install of the code, or you can add this to your ``.bashrc`` (recommended):

    source ~/ws_moveit/devel/setup.bash # or .zsh, depending on your shell

## Quick Start

Start planning in Rviz with with the [MoveIt! Getting Started Tutorial](https://ros-planning.github.io/moveit_tutorials/doc/getting_started/getting_started.html)

---

## Advanced

### Building Older Releases Of MoveIt!

It's best to contribute to our latest branch, even if you're still on an earlier version of Ubuntu. However our latest branch does not support older versions of ROS such as ROS Indigo. Use the following command to build older releases from source:

    wstool init src
    wstool merge -t src https://raw.githubusercontent.com/ros-planning/moveit/${ROS_DISTRO}-devel/moveit.rosinstall
    wstool update -t src
    rosdep install -y --from-paths src --ignore-src --rosdistro ${ROS_DISTRO}
    catkin config --extend /opt/ros/${ROS_DISTRO} --cmake-args -DCMAKE_BUILD_TYPE=Release
    catkin build

### Build Dependencies From Source

For MongoDB, OMPL, or FCL source installs, see [Building Common MoveIt! Dependencies from Source in Catkin](/install/source/dependencies/).
