---
author: davetcoleman
comments: true
date: 2016-9-14 02:13:26+00:00
layout: page
slug: contributing
title: Continuous Integration
redirect_from: "/documentation/contributing/continuous_integration.html"
---

# MoveIt!'s Continuous Integration

Here we outline the current setup of MoveIt!'s continuous integration setup, including Docker files and Travis configuration.

## Docker

For each ROS distribution there are up to 4 containers, built on top of a standard [ros:kinetic-ros-base](https://hub.docker.com/_/ros/) (or other distro version) image. We use Dockerhub to automatically build new versions of the containers each time a code change is commited to the ``moveit`` repo (but only for the corresponding branch).

### CI Container

An image optimized for running continuous integration with Travis. This container downloads all of the MoveIt! source code, using MoveIt!'s rosinstall file, and then installs all the required dependencies for that source code. It then removes the source code before saving the image. It uses ``ros-shadow-fixed`` and runs ``apt-get dist-upgrade`` to ensure it has the latest code.

## Source Container

Builds ontop of the CI image, contains a full MoveIt! workspace downloaded and built to ``~/ws_moveit/src``. This container is useful for developers wanting to test or develop in a sandbox.

## Release Container

Builds ontop of the CI image, the full debian-based install of MoveIt! using ``apt-get``.

## Experimental Container

Adds experimental packages to the source install. Use this if you want a working warehouse database.

## Travis

MoveIt! has its own Travis script located at [moveit_ci](https://github.com/ros-planning/moveit_ci). The script starts by spawning the MoveIt! Docker image for the targeted distro to test. Within that Docker image the ``moveit_ci`` script is called a second time, which then begins to download the source of the target repo and any dependencies specified in the rosinstall file.

After gathering the source code, the ``moveit_ci`` script downloads any further dependencies via ``rosdep``. Then it builds the entire workspace using ``catkin_tools`` build command and the ``--install`` option.

Finally, if no errors have been detected yet, the ``moveit_ci`` script rebuilds the workspace with tests enabled and then runs all of MoveIt!'s tests.
