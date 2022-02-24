---
layout: install
slug: source_install_moveit2_windows
title: MoveIt 2 Source Build - Windows
---
{% include install-feedback.html %}

# MoveIt 2 Source Build - Windows

Installing MoveIt 2 from source is the first step in contributing new features, optimizations, and bug fixes back to the open source project. Thanks for getting involved!

<img class="docker-img" src="/assets/install_page/docker-illustration.png"/>

## Prerequisites

### Install <img src="/assets/install_page/ros_logo.jpeg"/>

Install the `ros-foxy-desktop` metapackage. You can can install it with the [ROS on Windows Installation Instructions](http://wiki.ros.org/Installation/Windows).

### Create Workspace and Source

Create a colcon workspace:

    set COLCON_WS=C:\ws_moveit2\
    mkdir %COLCON_WS%\src
    cd %COLCON_WS%\src

## Download Source Code

Download the foxy branch of the moveit2 repository. The required dependencies to build moveit2 are included in `ros-foxy-desktop`.
### Foxy

    git clone https://github.com/ros-planning/moveit2.git -b foxy

## Build MoveIt

Currently `warehourse_ros_mongo` is not supported on windows so it is ignored when building:

    set IGNORED_PACKAGES=warehouse_ros_mongo

Configure and build the workspace:

    cd %COLCON_WS%
    colcon build --packages-skip-by-dep %IGNORED_PACKAGES%  --packages-skip %IGNORED_PACKAGES% --event-handlers desktop_notification- status- --cmake-args -DCMAKE_BUILD_TYPE=Release

### Source the Colcon Workspace

    %COLCON_WS%/install/setup.bat

### Quick Start

Check out the MoveIt 2 Tutorials on how to get started with simple demo packages.

<a href="https://moveit.picknik.ai/" target="_blank">
  <span class="link-with-background">
    MoveIt 2 Tutorials
  </span>
</a>
