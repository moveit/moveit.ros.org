---
author: Vatan Aksoy Tezer
comments: false
date: 2021-05-13
layout: post
title: MoveIt Noetic Update
media_type: image
media_link: /assets/images/blog_posts/2021_05_13_noetic_release.png
description: Noetic 1.1.4 Update May 2021
categories:
- ROS
- MoveIt
- Noetic
---



We are proud to announce a release of Noetic is on the way. There were 28 separate commits that are new since the last release of MoveIt. Here is a summary of what new changes there are:


## Feature



*   Let users override fake execution type from demo.launch [#2602](https://github.com/ros-planning/moveit/pull/2602)
*   Add planning_pipeline_id setting to Python MGI [#2622](https://github.com/ros-planning/moveit/pull/2622)


## Testing



*   Github Actions: Add pre-release job [#2597](https://github.com/ros-planning/moveit/pull/2597)
*   Synchronize async interfaces in planning interface tests [#2640](https://github.com/ros-planning/moveit/pull/2640)
*   Add pre-commit hook for .rst files


## Documentation



*   Document solution in ROS_ERROR on failed self-filtering [#2627](https://github.com/ros-planning/moveit/pull/2627)
*   Print an error indicating that the planning pipelines are empty before returning. [#2639](https://github.com/ros-planning/moveit/pull/2639)


## Maintenance



*   Simplify logic in Planning Scene Monitor [#2632](https://github.com/ros-planning/moveit/pull/2632)
*   Fix pre-release shell syntax [#2635](https://github.com/ros-planning/moveit/pull/2635)
*   Fix remove_attached_object API in Python PSI [#2609](https://github.com/ros-planning/moveit/pull/2609)
*   Minor fixups in Planning Scene Display [#2618](https://github.com/ros-planning/moveit/pull/2618)
*   Set rotation value of cartesian MaxEEFStep by default [#2614](https://github.com/ros-planning/moveit/pull/2614)


## Bug Fixes



*   Fix prerelease test [#2633](https://github.com/ros-planning/moveit/pull/2633)
*   Fix pre-release workflow [#2638](https://github.com/ros-planning/moveit/pull/2638)
*   Use private NodeHandle instead of child for PlanningPipeline topics [#2652](https://github.com/ros-planning/moveit/pull/2652)
*   Lock the octomap/octree while collision checking for thread safety [#2596](https://github.com/ros-planning/moveit/pull/2596) and [#2660](https://github.com/ros-planning/moveit/pull/2660)
*   Fix file conflict when upgrading moveit_ros_planning [#2659](https://github.com/ros-planning/moveit/pull/2659)
*   Lock the Bullet collision environment, for thread safety [#2598](https://github.com/ros-planning/moveit/pull/2598)
*   Avoid joint jump when SuddenHalt() is called in velocity mode [#2594](https://github.com/ros-planning/moveit/pull/2594)
*   Fix Pilz Velocity limit error [#2610](https://github.com/ros-planning/moveit/pull/2610)
*   Add sphinx-rtd-theme for python docs as a dependency [#2645](https://github.com/ros-planning/moveit/pull/2645)
*   Install sympy 0.7.1 from git instead of pypi for ikfast scripts [#2650](https://github.com/ros-planning/moveit/pull/2650)


## Thank You

This release comes with features from 12 different contributors.


*   ags-dy
*   Andy Zelenak
*   Christian Landgraf
*   Felix von Drigalski
*   Henning Kayser
*   Jochen Sprickerhof
*   Luc Bettaieb
*   Michael Görner
*   Nathan Brooks
*   Peter Mitrano
*   Robert Haschke
*   Tyler Weaver
