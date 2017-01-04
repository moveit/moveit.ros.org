---
author: 130s
comments: false
date: 2017-01-03 00:00:00+00:00
layout: post
slug: firstIndigoRelease
title: First MoveIt! release in 2017 into ROS Indigo
description: First update for Indigo since 6 months ago including many features.
categories:
- MoveIt!
- ROS
---

We are happy to announce that a lot of improvements are now released into MoveIt! on ROS [Indigo](http://wiki.ros.org/indigo) LTS (Long Term Support)! It's been 6 months since the last release into Indigo back in June 2016.

During this time, MoveIt! maintenance has been refurbished and we now [consolidated development repositories](https://github.com/ros-planning/moveit) of many packages whose repos were previously separated. For ROS [Jade](http://moveit.ros.org/moveit!/ros/2016/09/02/firstjaderelease.html) and [Kinetic](http://moveit.ros.org/moveit!/ros/2016/12/15/firstkineticrelease.html) MoveIt! has been already released from this single repo, and Indigo finally made a new release out from the same single repo.

Change to installation
======================

Now you can install the binaries of all the basic libraries by a single line of command without specifying many packages:

```
$ apt-get install ros-indigo-moveit
```

If you want to build MoveIt! from source instead of binaries, then simply clone the single repo:

```
$ cd %YOUR_CATKIN_WS%/src
$ git clone https://github.com/ros-planning/moveit.git   (http)
$ git clone git@github.com:ros-planning/moveit.git       (ssh)
```

For more info about installation, check the tutorial [moveit.ros.org/install](http://moveit.ros.org/install/).

Changelog
=========

Among many changes added since the last Indigo release, some notable ones are listed as follows. Because the new feature development is mainly now happening for ROS Kinetic (as mentioned upon the latest [Kinetic release](http://moveit.ros.org/moveit!/ros/2016/12/15/firstkineticrelease.html)), some changes are only available in newer ROS distros and thus unavailable in Indigo mainly due to the following reasons:

- unmet dependency
- ABI brekage (it is avoided as much as possible, desite exceptional cases)

The table below aims to better visualize the available changes recently introduced into MoveIt! among ROS distros.

|          Changes made         | Available in Indigo? | Jade? | Kinetic? |
| ----------------------------- | -------------------- | -------------------- | -------------------- |
| You can stop a trajectory while it's being executed via RViz [moveit_ros/#713](https://github.com/ros-planning/moveit_ros/pull/713). See also [video](https://www.youtube.com/watch?v=XEU-wVHUvgI&feature=youtu.be) | o | o | o |
| Capability to execute trajectory with a ROS action [#60](https://github.com/ros-planning/moveit/pull/60), [#94](https://github.com/ros-planning/moveit/pull/94) | o | o | o |
| Trajectory safety validation before execution [#63](https://github.com/ros-planning/moveit/pull/63), [#225](https://github.com/ros-planning/moveit/pull/225) | o | o | o |
| New planners in [OMPL](http://ompl.kavrakilab.org/) are now available from MoveIt! (geometric::{FMT, BFMT, PDST, STRIDE, BiTRRT, LBTRRT, BiEST, ProjEST, LazyPRM, LazyPRMstar, SPARS, SPARStwo}) (see PR for detail [#33](https://github.com/ros-planning/moveit/pull/338)) | x | x | o |
| MoveGroup's default capabilities are now added by default [#35](https://github.com/ros-planning/moveit/pull/359). | o | o | o |
| New benchmarking using PlanningArena [#22](https://github.com/ros-planning/moveit/pull/228) | x | x | o |
| Separate Pick request without Grasps from Grasp Planning request [#32](https://github.com/ros-planning/moveit/pull/328) | x | x | o |
| Increase collision checking reliability for newly created moveit_config packages [#33](https://github.com/ros-planning/moveit/pull/337) | x | x | o |
| IK solvers consolidated into a new moveit_kinematics package [#24](https://github.com/ros-planning/moveit/pull/247) | o | o | o |
| Fedora support is added. Feedback (and fix if necessary) welcomed! | o | o | o |
| [Fix] Unreasonable "Invalid Trajectory: start point deviates" error [#283](https://github.com/ros-planning/moveit/issues/283) | o | o | o |
| update link transforms in UnionConstraintSampler::project too [#38](https://github.com/ros-planning/moveit/pull/384) | o | o | o |
| Maximum acceleration scaling factor [moveit_core/#273](https://github.com/ros-planning/moveit_core/pull/273) | o | o | o |
| Enables setting optimization objectives from ompl_planning.yaml [moveit_planners/#75](https://github.com/ros-planning/moveit_planners/pull/75) | o | o | o |
| ApplyPlanningSceneService capability [moveit_ros/#686](https://github.com/ros-planning/moveit_ros/pull/686) | o | o | o |

--Your friendly MoveIt! maintenance team.
