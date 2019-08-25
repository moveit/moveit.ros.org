---
author: simonGold
comments: false
date: 2019-06-12
layout: post
slug: google-summer-of-code
title: The MoveIt Project is Reselected for a GSoC Grant
media_type: image
media_link: /assets/images/blog_posts/2019_06_12_gsoc.png
description: We are pleased to announce that MoveIt was reselected for a Google Summer of Code (GSoC) grant.
categories:
- MoveIt!
- ROS
---

We are pleased to announce that MoveIt was reselected for a Google Summer of Code (GSoC) grant. GSoC is an international program in which Google
awards stipends to students who complete a free and open-source software coding project during a three month period.

Jens Petit will be working on a collision checking project this summer in conjunction with another project by Omid Heidari ([PickNik](https://picknik.ai/))
to add the TrajOpt motion planning library.  Felix von Drigalski ([OMRON SINIC X](https://www.omron.com/sinicx/)) and Bryce Willey
([Realtime Robotics](https://rtr.ai/)) will be the primary co-mentors along with guidance from Dave Coleman ([PickNik](https://picknik.ai/)) and the
MoveIt Maintainers community.

**Project Description**
Collision detection is a core necessity in path planning for any type of robot. Currently, MoveIt utilizes the Flexible Collision Library (FCL) for this
task. Inspired by the motion planning framework “[Tesseract](https://rosindustrial.org/news/2018/7/5/optimization-motion-planning-with-tesseract-and-trajopt-for-industrial-applications)”
of ROS-Industrial, the aim of the project is to integrate Bullet as an additional collision checking library into MoveIt. This includes additional
new features like continuous collision detection (CCD). CCD is useful as many state-of-the-art path planning frameworks like
[Trajectory Optimization](http://rll.berkeley.edu/trajopt/doc/sphinx_build/html/) (TrajOpt) rely on it.

**Primary Goals**
1. Integrate Bullet as a collision detection library
2. Implement continuous collision detection using Bullet
3. Tutorial on how to implement additional collision checking libraries into MoveIt

To see the progress of this effort this summer, follow along [here](https://github.com/ros-planning/moveit/issues/1427).

[<img src="{{  site.url }}/assets/logo/moveit_logo-black.png" width="500" style="margin-right:20px"/>]({{ site.url }}/assets/logo/moveit_logo-black.png)

We would all like to thank GSoC and Open Source Robotics Foundation ([OSRF](https://www.osrfoundation.org/)), as the sponsoring recipient organization,
for making this grant possible and to the mentors volunteering their time.

We are excited to see the progress made this summer!

**About Jens**
Since Jens got introduced to ROS through a lab course of his robotics master degree at TU Munich in Germany, he has been hooked. Building robots with ROS
is at the same time powerful and fun. Jens is excited to contribute to such a popular package as MoveIt and happy to be part of a vibrant community of
robotics experts. Besides coding this summer, he can be found  practicing Aikido or hiking in the beautiful Alps.

**Useful Links**
* [Main Github issue](https://github.com/ros-planning/moveit/issues/1427)
* [MoveIt fork](https://github.com/j-petit/moveit)
