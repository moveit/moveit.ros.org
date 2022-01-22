---
author: Tyler Weaver
comments: false
date: 2022-01-21 17:00:00+07:00
layout: post
slug: moveit2-rolling-2.4.0
title: MoveIt 2.4.0 Release
description: Minor release of MoveIt into ROS 2 Rolling
media_type: image
media_link: /assets/images/blog_posts/2022_01_22_moveit_rolling_2.4.0.drawio.png
categories:
- MoveIt
- ROS
---

## Minor release of MoveIt into ROS 2 Rolling

A new release of MoveIt has been bloomed and is coming to a sync near you.
Here is a highlight of the latest changes included in this release.

*New Features:*

- [Add jerk to the robot model](https://github.com/ros-planning/moveit2/issues/683)
- [Use size_t for index variables in RobotState](https://github.com/ros-planning/moveit2/issues/946)
- [Normalize incoming transforms](https://github.com/ros-planning/moveit/issues/2920)
- [Put hybrid planning actions under a common namespace](https://github.com/ros-planning/moveit2/issues/932)
- [MGI: add missing replan/look options to interface](https://github.com/ros-planning/moveit/issues/2892)
- [PSI: get object.pose from new msg field](https://github.com/ros-planning/moveit/issues/2877)
- [Add test for pilz planner with attached objects](https://github.com/ros-planning/moveit/issues/2878)

*Bug Fixes:*

- [Fix boost linking errors](https://github.com/ros-planning/moveit2/issues/957)
- [Fix undefined behavior vector insertion](https://github.com/ros-planning/moveit2/issues/942)
- [RobotState: write to correct array](https://github.com/ros-planning/moveit/pull/2909)
- [Fix uninitialized orientation in default shape pose](https://github.com/ros-planning/moveit/issues/2896)
- [Fix global_planner action name in hybrid_planning](https://github.com/ros-planning/moveit2/issues/960)
- [Fix IKFast test dependency](https://github.com/ros-planning/moveit2/issues/993)
- [Fix missing ament_cmake_gtest dependency](https://github.com/ros-planning/moveit2/issues/981)
- [Fix usage of boost placeholder](https://github.com/ros-planning/moveit2/issues/958)


*Cleanups:*

- [Replacing NULL with nullptr](https://github.com/ros-planning/moveit2/issues/961)
- [Move background_processing out of moveit_core](https://github.com/ros-planning/moveit2/issues/997)
- [Remove backtrace function](https://github.com/ros-planning/moveit2/issues/995)
- [Readability and consistency improvements in TOTG](https://github.com/ros-planning/moveit/issues/2882)
- [MPD: do not save/restore warehouse parameters](https://github.com/ros-planning/moveit/issues/2865)
- [PlanningSceneDisplay: always update the main scene node's pose](https://github.com/ros-planning/moveit/issues/2876)
- [Remove 'using namespace' from header files](https://github.com/ros-planning/moveit2/issues/994)
- [Remove '-W*' options from cmake files](https://github.com/ros-planning/moveit/issues/2903)


### Contributors

Thank you to all the contributors that made changes to MoveIt that were included in this release.

- Abishalini Sivaraman
- Akash
- Andy Zelenak
- Cory Crean
- Cristian Beltran
- Gauthier Hentz
- Jafar Abdi
- Joachim Schleicher
- Leroy Rügeme
- Michael Görner
- Robert Haschke
- Stephanie Eng
- Tyler Weaver
- Wolf Vollprecht
