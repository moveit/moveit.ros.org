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

Note that for recent Linux distros, the installation really just boils down to running a single wget command. You may also want [add your user to the docker group](https://docs.docker.com/engine/installation/linux/ubuntulinux/#/create-a-docker-group) to avoid having to use sudo permissions when you use the docker command.

## Pulling MoveIt! Images

Now that you have Docker installed, lets pull down a MoveIt! container image:

    docker pull moveit/moveit

This will pull the latest tagged image of MoveIt! from Docker Hub onto your local host machine.

Take a look at the MoveIt! Repo and you'll find additional tag names you can use to help specify what exact ROS version you'd like to use. For example:

    docker pull moveit/moveit:indigo-source

## Running MoveIt! Containers

### New Users

For a debian-installed image of MoveIt:

    docker run -it moveit/moveit:kinetic-release

### Developers

For a built-by-source image of MoveIt:

    docker run -it moveit/moveit:kinetic-source

Any of the three current distros work: [indigo, jade, kinetic]

## Build

MoveIt!'s docker images are built automatically on dockerhub.com, but you can modify and build locally if desired with the following command:

    cd kinetic/source
    docker build -t moveit/moveit:kinetic-source .

## Using GUI's with Docker

For more details see the [ROS tutorial](http://wiki.ros.org/docker/Tutorials/GUI):

    # This is not the safest way however, as you then compromise the access control to X server on your host
    xhost +local:root # for the lazy and reckless

    docker run -it --env="DISPLAY" --env="QT_X11_NO_MITSHM=1" --volume="/tmp/.X11-unix:/tmp/.X11-unix:rw" moveit/moveit:kinetic-source
    export containerId=$(docker ps -l -q)

    # Close security hole:
    xhost -local:root
