---
author: davetcoleman
comments: false
date: 2016-8-5 20:43:44+00:00
layout: page
slug: docker_install
title: Docker Install
---

# Using Docker Containers with MoveIt!

Docker is an open-source project that automates the deployment of Linux applications inside software containers. See [https://www.docker.com/](https://www.docker.com/).

Docker can help you easily evaluate someone else's code changes without breaking your local setup, as well as test on versions of Linux other than your local installed version. MoveIt! has an [official MoveIt! Docker build](https://hub.docker.com/r/moveit/moveit/) that lets you quickly get a MoveIt! setup in a local container.

## Installing Docker

Before starting this tutorial please complete installation as described in [Docker's installation instructions](https://docs.docker.com/engine/installation/). Installation instructions are available for multiple operating systems.

Note that for recent Linux distros, the installation is basically just a single wget command. You may also want [add your user to the docker group](https://docs.docker.com/engine/installation/linux/ubuntulinux/#/create-a-docker-group) to avoid having to use sudo permissions when you use the docker command.

### Ubuntu

If you are running a recent version of Ubuntu (e.g. 14.04, 16.04) it can be as simple as:

    sudo apt-get install curl
    curl -sSL https://get.docker.com/ | sh
    sudo usermod -aG docker $(whoami)

And you will likely need to log out and back into your user account for the changes to take affect.

## Running MoveIt! Containers

To run a Debian-installed container of MoveIt! with graphics support:

    wget https://raw.githubusercontent.com/ros-planning/moveit/kinetic-devel/.docker/gui-docker gui-docker && chmod +x gui-docker
    ./gui-docker -it --rm moveit/moveit:kinetic-release /bin/bash

This will attempt to use nvidia-docker if hardware and drivers are available.

**Command-Line Only**

    docker run -it moveit/moveit:kinetic-release

## MoveIt! Container Types

There are many variants of the MoveIt! Docker available as documented [here](http://moveit.ros.org/documentation/contributing/continuous_integration/). For example, any of the three current distros work: [indigo, kinetic, lunar]. Over variations include:

- **moveit/moveit:kinetic-source** contains a full MoveIt! workspace downloaded and built to ~/ws_moveit/src. This container is useful for developers wanting to test or develop in a sandbox.
- **moveit/moveit:kinetic-release** builds ontop of the CI image, the full debian-based install of MoveIt! using apt-get.
- **moveit/moveit:kinetic-ci** an image optimized for running continuous integration with Travis
- **moveit/moveit:kinetic-ci-shadow** an image optimized for running continuous integration with Travis using the latest unreleased build of ROS

## Advanced

To make the source container more useful for developing and testing code, we recommend you install the following extra dependencies because the docker container is very bare-bones:

    apt-get install less ssh bash-completion tree nano

MoveIt!'s docker containers are built automatically on dockerhub.com, but you can modify and build locally if desired with the following command:

    cd moveit/.docker/kinetic/source
    docker build -t moveit/moveit:kinetic-source .
