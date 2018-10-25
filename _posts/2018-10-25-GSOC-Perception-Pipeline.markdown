author: rcc0002
comments: false
date: 
layout: post
slug: GSOC: Perception Pipeline Improvements In MoveIt!
title: Google Summer Of Code Project: Perception Pipeline Improvements In MoveIt!
description: Updates about the perception pipeline improvements from GSOC


Google Summer Of Code Project: Perception Pipeline Improvements In MoveIt!
Submitted by: Ridhwan Luthra, Cluster Innovation Centre

Over the summer, Open Source Robotics Foundation (OSRF) and PickNik Robotics teamed up to mentor a Google Summer of Code (GSoC) student, Ridhwan Luthra, while he made meaningful contributions to MoveIt!. Ridhwan worked with Michael ‘v4hn’ Görner and Michael Lautman to produce two new tutorials demonstrating the perception and manipulation capabilities available in MoveIt!. 

Ridhwan’s  work focused on developing tutorials for using the [perception pipeline](https://ros-planning.github.io/moveit_tutorials/doc/perception_pipeline/perception_pipeline_tutorial.html) with octomaps as well as the ['pick and place' pipeline](https://ros-planning.github.io/moveit_tutorials/doc/pick_place/pick_place_tutorial.html) of MoveIt! Both can be viewed on the MoveIt! tutorials page. Ridhwan also  made significant progress towards generalizing a grasp generation package to incorporate into a grasping tutorial. This work is still continuing outside the scope of GSOC.


**Perception Pipeline with Octomaps**
While developing the perception pipeline tutorial, Ridhwan identified and fixed a common race condition that was triggered by the way that MoveIt! was maintaining and updating octomaps. This was accomplished by adding a parameter that allows users to configure the maximum rate at which the octomap is updated.

The next tutorial shows the working of collision avoidance in MoveIt! in the presence of an Octomap.
 
(gif1)

The next item Ridhwan worked on was building a pipeline to detect, segment, and add a cylinder from point cloud data as a collision object. In the image below, on the left is the original octomap and on the right, the final result of the octomap with the cylinder collision object added to the planning scene.

(gif2)

(gif3)

**Pick and Place Pipeline Tutorial**
After finding a collision object, the next task is to pick it up. There was previously no tutorial on how the 'pick and place' pipeline worked, so Ridhwan created a tutorial to address this gap.

(gif4)

* Next, I worked on creating a pick place pipeline for a single specific cuboidal object. This implementation documents the current manipulation pipeline of MoveIt!.
* [MoveIt! Tutorials](https://github.com/ros-planning/moveit_tutorials/pull/182)
* Finally, I am working on integrating all of this to create a complete pipeline which would involve detecting, segmenting, and adding a cylinder collision object into the planning scene. Then, generate candidate grasps and call the pick pipeline to grasp the cylinder. This functionality is not yet complete as of writing this summary.
* [MoveIt! Grasps](https://github.com/davetcoleman/moveit_grasps/pull/5)
* [Moveit! Tutorials](https://github.com/ridhwanluthra/moveit_tutorials/tree/grasping_tutorial)

