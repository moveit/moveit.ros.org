---
author: Jens Petit
comments: false
date: 2020-11-18
layout: post
title: Integrating Bullet for Collision Detection
media_type: image
media_link: /assets/images/blog_posts/2019_gsoc_bullet.png
description: The collision checking library Bullet is now available in MoveIt.
categories:
- Bullet
- Collision Detection
- MoveIt
---

This post summarizes my contributions during the [Google Summer of Code 2019](https://summerofcode.withgoogle.com/archive/2019/projects/5398613398650880/). During three months, I worked on extending the collision detection capabilities of MoveIt through using [the Bullet library](https://pybullet.org/wordpress/).

Collision checking is a core component in robotic manipulation. It is executed thousands of times for path planning, as each configured state has to be collision free. Since the beginning of MoveIt, the [Flexible Collision Library (FCL)](https://github.com/flexible-collision-library/fcl) was used. However, FCL has limitations and therefore the discussion to integrate another collision checking library came up.

## Motivation
Before this project, MoveIt only offered discrete collision checking, which can miss collisions between the sampled time steps. To provide stronger guarantees, continuous collision detection (CCD) techniques have been proposed by the research community. They calculate the swept volume of moving objects, thus detecting collisions between discrete samples.

The planning framework [Tesseract](https://github.com/ros-industrial-consortium/tesseract) of ROS-Industrial, which is based on MoveIt, had already implemented CCD utilizing the Bullet library. Therefore, the goal of the project was to port the feature from Tesseract back to MoveIt.

## Integrating Bullet
I started with a full fork of Tesseract in the MoveIt workspace. Then, step-by-step, I reduced the code to the bare minimum and directly integrated the remaining parts into MoveIt's collision code. As I gained a deeper understanding of the collision checking process, we started the discussion about a unified collision environment. Before this GSoC project, MoveIt's collision environment was split into two parts: `CollisionRobot` and `CollisionWorld`. This separation was originally motivated by the fact that the environment does not change while the robot is checked in many different configurations. However, a unified collision environment containing both would allow us to access recent optimizations in Bullet, and to reduce the complexity of the collision checking code in general.

This finally led to the decision to restructure major parts of MoveIt's collision checking. To make this change happen, I had to unify all existing collision detectors which included FCL. Furthermore, many changes in the planning scene were necessary which in turn then required changes throughout the codebase because the planning scene is such a central class.

To demonstrate the new collision checking capabilities, I added a [new tutorial](https://ros-planning.github.io/moveit_tutorials/doc/bullet_collision_checker/bullet_collision_checker.html). In an interactive environment, Bullet can be tested with a demo object and the Panda robot. The CCD capabilities are demonstrated in the second part of the tutorial. Try it out yourself!

A detailed overview of the work done including discussions is available in the [Github issue](https://github.com/moveit/moveit/issues/1427). For a better understanding of the collision detection process, I created several flowcharts shown in the [Developer Concepts page](https://moveit.ros.org/documentation/concepts/developer_concepts/).

## Results and Future Work

Besides the added CCD capabilities, another major contribution of Bullet is increased speed. As collision detection is performed all the time, efficiency gains have a big impact on MoveIt's general performance. In certain scenarios, Bullet outperforms FCL [up to ten times](https://github.com/moveit/moveit/issues/1427#issuecomment-514143218). Although Bullet in its current state already delivers performance gains compared to FCL, there is still room for improvement. I summarized possible ideas in [this Github issue](https://github.com/moveit/moveit/issues/1646).

## Conclusion
I had a great time contributing to MoveIt as part of the GSoC 2019. Thanks to my mentors Felix von Drigalski (OMRON SINIC X) and Bryce Willey (Realtime Robotics). I learned a lot about professional software development in a distributed team and look back with pride on the work achieved!

This post was written by [Jens Petit](https://jenspetit.de).
