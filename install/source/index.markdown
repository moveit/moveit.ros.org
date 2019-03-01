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

### Prereq: Install ROS

Follow all the instructions to [install ROS](http://wiki.ros.org/ROS/Installation). Please make sure you have followed all steps and have the latest versions of packages installed:

    rosdep update
    sudo apt-get update
    sudo apt-get dist-upgrade

Source installation requires [wstool](http://wiki.ros.org/wstool), [catkin_tools](https://catkin-tools.readthedocs.io/en/latest/), and optionally clang-format:

    sudo apt-get install python-wstool python-catkin-tools clang-format-3.9

Optionally create a new workspace, you can name it whatever:

    mkdir ~/ws_moveit
    cd ~/ws_moveit

Next, source your ROS workspace to load the necessary environment variables, depending on what version of ROS you installed.

**Choose one of the three:**

    source /opt/ros/melodic/setup.bash
    source /opt/ros/kinetic/setup.bash
    source /opt/ros/indigo/setup.bash

This will load the ``${ROS_DISTRO}`` variable, needed for the next step.

## Download and Build MoveIt!

By default we will assume you are building on the *latest* branch, we currently use *master* as our ROS 1.0 branch. This branch builds for ROS Kinetic and newer, e.g. Ubuntu 16.04 and newer. If you would like to build an older release of MoveIt! from source, see the section below.

Pull down required repositories and build from within the root directory of your catkin workspace:

    wstool init src
    wstool merge -t src https://raw.githubusercontent.com/ros-planning/moveit/master/moveit.rosinstall
    wstool update -t src
    rosdep install -y --from-paths src --ignore-src --rosdistro ${ROS_DISTRO}
    catkin config --extend /opt/ros/${ROS_DISTRO} --cmake-args -DCMAKE_BUILD_TYPE=Release
    catkin build

## Source the Catkin Workspace

Setup your environment - you can do this every time you work with this particular source install of the code, or you can add this to your ``.bashrc`` (recommended):

    source ~/ws_moveit/devel/setup.bash # or .zsh, depending on your shell

## Quick Start

Start planning in Rviz with with the [MoveIt! Getting Started Tutorial](https://ros-planning.github.io/moveit_tutorials/doc/getting_started/getting_started.html)

---

## Advanced: Speedup Compile Time

Note that to make development easier, the MoveIt! is consolidated in a large code repository. If you would like to reduce the compile time, you can disable certain unneeded packages from being built using ``catkin-tools``. Here is an example list, but be careful not to disable needed packages:

    catkin config --blacklist moveit_commander moveit_setup_assistant moveit_fake_controller_manager  moveit_ros_benchmarks moveit_controller_manager_example

If you have already built these packages in your workspace you will also need to use ``catkin clean`` such as the following example:

    catkin clean moveit_commander moveit_setup_assistant moveit_fake_controller_manager  moveit_ros_benchmarks moveit_controller_manager_example chomp_motion_planner moveit_planners_chomp

## Advanced: Building Older Releases Of MoveIt!

Its best to contribute to our latest branch, even if you're still on an earlier version of Ubuntu. However our latest branch does not support older versions of ROS such as ROS Indigo. Use the following command to build from source older releases:

    wstool init src
    wstool merge -t src https://raw.githubusercontent.com/ros-planning/moveit/${ROS_DISTRO}-devel/moveit.rosinstall
    wstool update -t src
    rosdep install -y --from-paths src --ignore-src --rosdistro ${ROS_DISTRO}
    catkin config --extend /opt/ros/${ROS_DISTRO} --cmake-args -DCMAKE_BUILD_TYPE=Release
    catkin build

## Advanced: Build Dependencies From Source

For MongoDB, OMPL, or FCL source installs, see [Building Common MoveIt! Dependencies from Source in Catkin](/install/source/dependencies/).
