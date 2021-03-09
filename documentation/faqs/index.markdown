---
author: admin
comments: false
date: 2013-11-20 04:52:13+00:00
layout: page
slug: faqs
title: FAQs
---

# Frequently Asked Questions

<img style="float:right;" src="/assets/install_page/docker-illustration.png"/>

## Getting Started

_I'm totally new, how do I get started?_

  * See the [tutorials](http://moveit2_tutorials.picknik.ai/) &#128540;

_What version of MoveIt should I use?_

  * For most developers, we recommend building the [master](https://github.com/ros-planning/moveit) branch from source.
  * If you are a beginner, installing the Noetic LTS release from Debian is the easiest and fastest.
  * You can also use a [Docker container](/install/docker/) for a virtual setup.

_Should I build from source or install the Debians?_

  * If you are an intermediate to advanced user ready to contribute code, then install from source of course!
  * If you are a beginner, the pre-built Debians for ROS Melodic and ROS Noetic are the easiest.
  * Note however that the last ROS Distro was released almost 2 years ago, so the latest features are only on the *master* branch built from source.

_What kind of computer do I need?_

  * ROS 1.0 works best on a Linux computer, particularly Ubuntu 16.04 or 18.04. [Some Windows support](/install/) is also available.
  * If you are running another operating system, we recommend to try dual booting, [installing on Docker](/install/docker/), or using a virtual machine (see [notes](/install/)).

_Where is the source code?_

  * See the cute Octocat at the top right corner of this webpage. Or just go to [MoveIt's Github](https://github.com/ros-planning/moveit).

_How do I create a pull request?_

  * [Contributing](/documentation/contributing/) fixes and features back to MoveIt is not as hard as it may seem, everyone is encouraged to do it!
  * The high level is:
    * Create a [Github fork](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/working-with-forks) of MoveIt
    * [Clone the repo](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository) locally
    * Make the changes to the code
    * [Commit the change](https://help.github.com/en/github/using-git)
    * [Push the updated branch](https://help.github.com/en/github/using-git/pushing-commits-to-a-remote-repository) to your fork
    * Finally open a [pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests).

_Where can I find the changelogs for MoveIt?_

  * The changelogs for MoveIt can be found directly on the [MoveIt ROS Wiki page](http://wiki.ros.org/moveit). Announcements on the mailing list also inform users of the latest changes.

## Terminology

_What is the difference between MoveIt 1 and MoveIt 2?_

  * MoveIt 2 is currently (April 2020) a straight port of MoveIt 1 but for ROS 2.
  * ROS 2 is a total rewrite of the popular robotics middleware that addresses many unfulfilled needs of industry / commercial users in ROS 1.
  * MoveIt 2 will hopefully fork from MoveIt 1 soon to take advantage of the new features in ROS 2. See the [roadmap](/documentation/contributing/roadmap/).

_What is the difference between MoveIt and ROS?_

  * MoveIt runs on top of ROS (Robot Operating System).
  * ROS is an open-source meta-operating system for robots that provides low-level functionality like a build system, message passing, device drivers and some integrated capabilities like navigation.
  * MoveIt is a primary source of the functionality for manipulation (and mobile manipulation) in ROS.
  * MoveIt builds on the ROS messaging and build systems and utilizes some of the common tools in ROS like the ROS Visualizer (Rviz) and the ROS robot format (URDF).
  * MoveIt is a common entry point into ROS, especially through the use of the MoveIt Setup Assistant for configuring new robots.

_What is the difference between MoveIt and OMPL?_

  * [OMPL](http://ompl.kavrakilab.org) is an open-source motion planning library that is used by MoveIt for motion planning.
  * MoveIt uses an extensible plugin architecture and other motion planning libraries can also easily be integrated with MoveIt.
  * OMPL provides a variety of high-quality well-tested randomized planners.

_What is the difference between MoveIt and PickNik?_

  * MoveIt is an open source project that started at Willow Garage (see [history](/about/)) and is now led by [PickNik Robotics](https://picknik.ai/).
  * PickNik was founded by lead MoveIt maintainer Dave Coleman with the mission of growing the MoveIt project through community building and contract consulting.

_What is the difference between MoveIt and ROS-Industrial?_

  * The ROS-Industrial consortium aims to use the advanced tools in MoveIt and ROS to build and demonstrate advanced applications in industry.
  * ROS-Industrial also develops and maintains ROS drivers for industrial robots.

## Bugs/Issues

_I have a fix for a bug in the MoveIt tutorials. What should I do?_

  * The MoveIt tutorials are hosted on [this Github repo](https://github.com/ros-planning/moveit_tutorials).
  * To improve the tutorials, fork that package on Github, make the corrections, and create a pull request.

_I have a found a bug in MoveIt itself. What should I do?_

  * See [Contributing](/documentation/contributing/)

## Robots

_I would like to add a new robot to the list of robots using MoveIt. What should I do?_

  * Create a pull request to [moveit.ros.org's Github repo](https://github.com/ros-planning/moveit.ros.org) or email [PickNik Robotics](http://picknik.ai/connect) for additional assitance.

_What robots does MoveIt support?_

  * MoveIt has been used on over 100 robots. To find a list of robots that MoveIt has been used with, check the [Robots](/robots/) page.
  * Its not too difficult to setup any custom robots you may have, using the MoveIt Setup Assistant.

## Community

_How do I hear the latest announcements on MoveIt?_

  * Watch the [MoveIt Category on ROS Discourse](https://discourse.ros.org/c/moveit)
  * Follow the [MoveIt blog](/blog).
  * Follow <a href="https://twitter.com/PickNikRobotics" target="_blank" data-proofer-ignore>@PickNikRobotics</a> on Twitter.

## Legal

_What kind of open source license does MoveIt use?_

 * MoveIt is released under the business-friendly [BSD License v3](https://opensource.org/licenses/BSD-3-Clause). Each individual file in the MoveIt source code should contain a copy of the license.

_How can I use the MoveIt logo?_

 * See [Logo Guidelines](/about/press_kit)
