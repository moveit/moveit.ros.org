---
author: v4hn
comments: false
date: 2016-09-02 00:00:00+00:00
layout: post
slug: firstjaderelease
title: MoveIt! officially released into ROS Jade
media_type: image
media_link: http://www.ros.org/news/assets_c/2015/05/jadeturtle_LoRes-thumb-480x519-1131.jpg
description: If you’re running your robot packages with ROS Jade, and/or if you want to try the newest MoveIt!, start at moveit.ros.org/install
categories:
- MoveIt!
- ROS
---

If you're running your robot packages with ROS Jade, and/or if you want to try the newest MoveIt!, start at [moveit.ros.org/install](http://moveit.ros.org/install/)

Among numerous bug-fixes, there are quite a number of new features included:

- [You can stop a trajectory while it's being executed via RViz](https://github.com/ros-planning/moveit_ros/pull/713)
  [Video](https://www.youtube-nocookie.com/embed/XEU-wVHUvgI&feature=youtu.be)

- [Capability to execute trajectory with a ROS action](https://github.com/ros-planning/moveit/pull/60)

- [Maximum acceleration scaling factor](https://github.com/ros-planning/moveit_core/pull/273)

- [Enables setting optimization objectives from ompl_planning.yaml](http://docs.ros.org/indigo/api/moveit_tutorials/html/doc/ompl_interface_tutorial.html?highlight=ompl)

- [Velocity & acceleration values to cartesian trajectory](https://github.com/ros-planning/moveit_ros/pull/735)

- [ApplyPlanningSceneService capability](https://github.com/ros-planning/moveit_ros/pull/686)

- [Extended planning_interface::PlanningSceneInterface](https://github.com/ros-planning/moveit_ros/issues/630)

![1st Jade release](http://www.ros.org/news/assets_c/2015/05/jadeturtle_LoRes-thumb-480x519-1131.jpg)

ROS Indigo
----------

For now, the newest features and bugfixes have only been released in Jade.

Contributors are working hard towards a new binary release into Indigo as well.
The release will include the above mentioned features and bug fixes too and will
also address multiple safety issues that were known among senior MoveIt developers already for some time:

- [https://github.com/ros-planning/moveit/pull/191](https://github.com/ros-planning/moveit/pull/191)
- [https://github.com/ros-planning/moveit/pull/63](https://github.com/ros-planning/moveit/pull/63)
- [https://github.com/ros-planning/moveit/commit/b317a5722f40c61f0b86a934a5b1e65c7c45e38a](https://github.com/ros-planning/moveit/commit/b317a5722f40c61f0b86a934a5b1e65c7c45e38a)

For Indigo, if you don't mind building from source, go for it: [moveit.ros.org/install/source](http://moveit.ros.org/install/source/)
Be aware though that the repository branches are used for active development, so you might hit severe regressions in the current HEADs.

We are currently working towards more fast-paced release cycles, so that MoveIt! users
should be able to use the released ROS packages even if they want to rely on current bug fixes and new features.


ROS Kinetic
-----------

We are in the process of finalizing the API for the initial release of MoveIt! in kinetic and discuss points
that should be addressed before the release. At least one of the points will be relevant to most of you in the future:

Should we move from boost::shared_ptr to std::shared_ptr in the public API in Kinetic?

You're input is clearly welcome on these points.
See [ros-planning/moveit/#18](https://github.com/ros-planning/moveit/issues/18) and [ros-planning/moveit/#48](https://github.com/ros-planning/moveit/issues/48) for more information.
