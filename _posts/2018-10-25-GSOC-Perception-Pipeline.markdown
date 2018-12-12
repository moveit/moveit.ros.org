---
author: rcc0002
comments: false
date: 2018-12-11
layout: post
slug: gsoc-2018-perception-pipeline
title: Google Summer Of Code Improvements to Perception Pipeline
media_type: image
media_link: /assets/images/gsoc.png
description: Updates about the perception pipeline improvements from GSOC
categories:
- MoveIt!
- ROS
---

Submitted by: Ridhwan Luthra, Cluster Innovation Centre

Over the summer, Open Source Robotics Foundation (OSRF) and PickNik Robotics teamed up to mentor a Google Summer of Code (GSoC) student, Ridhwan Luthra, while he made meaningful contributions to MoveIt!. Ridhwan worked with Michael ‘v4hn’ Görner and Michael Lautman to produce two new tutorials demonstrating the perception and manipulation capabilities available in MoveIt!.

Ridhwan’s  work focused on developing tutorials for [Perception Pipeline with Octomaps](https://ros-planning.github.io/moveit_tutorials/doc/perception_pipeline/perception_pipeline_tutorial.html) as well as the [Pick and Place Pipeline](https://ros-planning.github.io/moveit_tutorials/doc/pick_place/pick_place_tutorial.html). Ridhwan also  made significant progress towards generalizing a grasp generation package to incorporate into a grasping tutorial. This work is still continuing outside the scope of GSOC.


### Perception Pipeline with Octomaps
While developing the [perception pipeline tutorial](https://ros-planning.github.io/moveit_tutorials/doc/perception_pipeline/perception_pipeline_tutorial.html), Ridhwan identified and fixed a common race condition that was triggered by the way that MoveIt! was maintaining and updating octomaps. This was accomplished by adding a parameter that allows users to configure the maximum rate at which the octomap is updated.

The animation below shows MoveIt! using an octomap to perform collision avoidance.

[<img src="{{ site.url }}/assets/images/gsoc18/obstacle_avoidance.gif" width="500" style="margin-right:20px"/>]({{ site.url }}/assets/images/gsoc18/obstacle_avoidance.gif)

The next item Ridhwan worked on was building a pipeline to detect, segment, and add a cylinder from point cloud data as a collision object. The first image below shows the original octomap and the second image shows the final octomap with the cylinder collision object added to the planning scene.

[<img src="{{ site.url }}/assets/images/gsoc18/cylinder_collision_object.png" width="500" style="margin-right:20px"/>]({{ site.url }}/assets/images/gsoc18/cylinder_collision_object.png)

[<img src="{{ site.url }}/assets/images/gsoc18/octomap.png" width="500" style="margin-right:20px"/>]({{ site.url }}/assets/images/gsoc18/octomap.png)

### Pick and Place Pipeline Tutorial
After finding a collision object, the next task is to pick it up. There was previously no tutorial on how the 'pick and place' pipeline worked, so Ridhwan [created a tutorial](https://ros-planning.github.io/moveit_tutorials/doc/pick_place/pick_place_tutorial.html) to address this gap.

The animation below shows a cuboidal object being moved from one table to another using the pick and place pipeline.

[<img src="{{ site.url }}/assets/images/gsoc18/pick_and_place.gif" width="500" style="margin-right:20px"/>]({{ site.url }}/assets/images/gsoc18/pick_and_place.gif)