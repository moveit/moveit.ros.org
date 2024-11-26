---
author: John Stechschulte, PhD, Perception Scientist
comments: false
date: 2020-08-26
layout: post
title: New MoveIt Calibration Capabilities from Intel
media_type: image
media_link: /assets/images/blog_posts/moveit_calibration/hand-eye-overview.jpg
description: Hand-eye calibration capability is now available in the new MoveIt Calibration
categories:
- MoveIt
- ROS
---

MoveIt can now help your robot see it, too, thanks to the new MoveIt Calibration package. Many robotic applications depend on vision to perceive the world and plan robot motions. But without knowing where the camera is in relation to the robot, any spatial information extracted from the camera is useless. Extrinsic calibration is the process to determine the camera's pose, and MoveIt Calibration provides a straightforward, GUI-driven process for extrinsic camera calibration, whether the camera is stationary in the scene or attached to the robot end-effector.

![](/assets/images/blog_posts/moveit_calibration/eye-in-hand-closeup.jpg)

Besides a robotic arm and a camera, the only other equipment required to use MoveIt Calibration is a calibration target. MoveIt Calibration can generate a target image that can be printed and mounted on a flat surface. Measurement of the target's size is necessary, although the target's location and orientation do not need to be measured--instead, several observations of the target allow the calibration to be computed independent of the target's precise location.

When calibrating a camera attached to one of the robot links, which is known as "eye-in-hand" calibration, the target is placed statically in the scene, allowing for easy computation of the camera motion. The dataset required for calibration consists of the camera-to-target transform paired with the base-link-to-end-effector transform. At least five pose pairs are necessary to compute a calibration, and typically the calibration gets more accurate as more pose pairs are collected up to about 15 pairs. MoveIt Calibration provides automatic planning of new calibration poses, or manual collection of pose pair samples if the user wants to plan and execute poses in a different manner.

Calibrating a camera that is stationary in the scene, called "eye-to-hand" calibration, proceeds similarly to eye-in-hand calibration. The camera and the calibration target are merely swapped--now that the camera's pose is static in the base link frame, the target must be put in the end-effector frame. Often, this simply means gripping the target with the end-effector.

For more information on the mathematical methods used in MoveIt Calibration to solve for a calibration, see [Daniilidis, 1999](https://scholar.google.com/scholar?cluster=11338617350721919587&hl=en&as_sdt=0,6), [Park and Martin, 1994](https://scholar.google.com/scholar?cluster=2140351150276060817&hl=en&as_sdt=0,6), and [Tsai and Lenz, 1989](https://scholar.google.com/scholar?cluster=18168502493509261348&hl=en&as_sdt=0,6).

![](/assets/images/blog_posts/moveit_calibration/eye-to-hand.jpg)

We'd like to thank Yu Yan at the Intel Open Source Technology Center for his work developing this new tool in the MoveIt ecosystem. PickNik Robotics has collaborated with Intel in testing and preparing this new functionality for release.

If you have a camera and a robot arm, MoveIt Calibration can help you use them together. For more information, check out [http://github.com/moveit/moveit_calibration](http://github.com/moveit/moveit_calibration), and the [MoveIt Calibration tutorial](https://github.com/JStech/moveit_tutorials/blob/new-calibration-tutorial/doc/hand_eye_calibration/hand_eye_calibration_tutorial.rst). See it, move it, do it.
