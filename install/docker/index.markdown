---
author: davetcoleman, felixvd
comments: false
date: 2016-8-5 20:43:44+00:00
layout: page
slug: docker_install
title: Docker Install
---

# Using Docker Containers with MoveIt

Docker is an open-source project that automates the deployment of Linux applications inside software containers. See [https://www.docker.com/](https://www.docker.com/).

Docker can help you easily evaluate someone else's code changes without changing your local setup, as well as test on versions of Linux other than your locally installed one. MoveIt has an [official MoveIt Docker build](https://hub.docker.com/r/moveit/moveit/) that lets you quickly run MoveIt in a local container.

## Installing Docker

Before starting this tutorial, please complete the installation as described in [Docker's installation instructions](https://docs.docker.com/install/). Installation instructions are available for multiple operating systems.

Note that for recent Linux distros, the installation is basically just a single wget command. You may also want [add your user to the docker group](https://docs.docker.com/engine/installation/linux/ubuntulinux/#/create-a-docker-group) to avoid having to use sudo permissions when you use the docker command.

### Ubuntu

If you are running a recent version of Ubuntu (e.g. 16.04, 18.04) it can be as simple as:

    sudo apt-get install curl
    curl -sSL https://get.docker.com/ | sh
    sudo usermod -aG docker $(whoami)

And you will likely need to log out and back into your user account for the changes to take effect.

## Running MoveIt Containers

To use Rviz (and other GUIs), you probably want to set up hardware acceleration for Docker as described [here](http://wiki.ros.org/docker/Tutorials/Hardware%20Acceleration).

Then, the wrapper script `gui-docker` can be used to correctly setup the docker environment for graphics support.
For example, you can run the MoveIt docker container using the following command:

    ./gui-docker -it --rm moveit/moveit:melodic-release /bin/bash

You can test that the GUI works by running rviz:

    roscore > /dev/null & rosrun rviz rviz

If you specify a container name (via `-c <name>`), you can also continue or re-enter a previously started container:

    ./gui-docker -c my_container -it moveit/moveit:melodic-release /bin/bash

As the previous command dropped the `--rm` option, the container will be persistent, so changes you make inside the container will remain.
Running `gui-docker` in multiple terminals will connect them all to the same container.
For convienency, the script defines sensible defaults. So, just running

    ./gui-docker

will run an interactive bash inside the `melodic-release` container and make it persistent with the name `default_moveit_container`.
To stop and remove the container, just issue the following commands:

    docker stop default_moveit_container && docker rm default_moveit_container

If you want to use the command line only (without GUI interfaces like Rviz) in a non-persistent container, simply run this command:

    docker run -it --rm moveit/moveit:master-source bash

## MoveIt Container Types

There are many variants of the MoveIt Docker available as documented [here](http://moveit.ros.org/documentation/contributing/continuous_integration/). For example, any of the two current distros work: [kinetic, melodic]. Other variations include:

- **moveit/moveit:master-source** contains a full MoveIt workspace downloaded and built to ~/ws_moveit/src. This container is useful for developers wanting to test or develop in a sandbox.
- **moveit/moveit:melodic-release** builds ontop of the CI image, the full debian-based install of MoveIt using apt-get.
- **moveit/moveit:master-ci** an image optimized for running continuous integration with Travis
- **moveit/moveit:master-ci-shadow** an image optimized for running continuous integration with Travis using the latest unreleased build of ROS

## Troubleshooting

- `Error response from daemon: OCI runtime create failed...`

Your container may have an issue. Try deleting it by `docker stop default_container && docker rm default_container` and running `gui-docker` again. 

## Advanced features

### Linking local folders
You can link a folder on your hard disk to the Docker container, so you can edit them with your favorite tools on the host, with the `volume` option, e.g.:

    -v ~/moveit_ws:/root/linked_ws_moveit

Use this option when you first create the container (or after deleting it with `docker rm my-moveit-container`), like this:

    ./gui-docker -c my_container -v ~/moveit_ws:/root/linked_moveit_ws

After the container is created, the folder will stay linked. So you can simply enter it on subsequent calls like this:

    ./gui-docker -c my_container

Files created inside the Docker container are usually owned by root. Check and fix permissions, if you run into issues.

### Convenience
The Docker container does not contain development and testing tools. You might want to install some in the container:

    apt-get install less ssh bash-completion tree nano

### Modify and build images locally

MoveIt's docker containers are built automatically on dockerhub.com, but you can modify the `Dockerfile` and build locally if desired with the following command:

    cd moveit/.docker/source
    docker build -t moveit/moveit:master-source .
