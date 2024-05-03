---
author: Henning Kayser
comments: false
date: 2022-06-02 00:00:00 -0700
layout: post
slug: MoveIt-Humble-Release
title: MoveIt 2 Humble Release
media_type: image
media_link: /assets/images/blog_posts/2022_06_02_MoveItHumble_lowres.png
description: The MoveIt community is proud to announce the release of MoveIt 2 Humble

categories:
- MoveIt
- ROS
- Humble

---

We’re excited to announce that MoveIt has just been released for ROS 2 Humble, the latest LTS (long term support) distribution supporting Ubuntu Jammy 22.04. Starting now, Humble is our recommended target distribution for anyone who needs the latest features but requires stability.

**What’s new?** \
The Humble release provides all the latest features and improvements:

* [Hybrid Planning](https://github.com/moveit/moveit2/issues/433): use a (slower) global motion planner with a (faster) local motion planner to enable a robot to solve different tasks online and in dynamic environments
* [TOTG](https://github.com/moveit/moveit2/pull/1218): now default parameterization method
* [Ruckig](https://github.com/moveit/moveit2/pull/571): improved time parameterization and jerk smoothing that allows for nonzero initial/final conditions
* [MoveIt Setup Assistant](https://github.com/moveit/moveit2/pull/1254): the entry point for using MoveIt, now for ROS 2 (still in feature branch)
* [MoveIt Config Utilities](https://github.com/moveit/moveit2/pull/591): simplify loading parameters
* Lots of new ROS 2 drivers for arms ([Universal Robotics](https://discourse.ros.org/t/universal-robots-ros-2-driver-release/25461) and more announced soon)

Everyone who has done new LTS releases in the past probably knows that this can be a very time-consuming and error-prone endeavor. But since the latest MoveIt version 2.5 was cut from Rolling, we actually had a flawless transition to Humble without any issues whatsoever. This shows that the prior time investment for keeping up with Rolling actually pays off.



![Open Door](/assets/images/blog_posts/2022_05_02_image1.gif)

_Example of supervised autonomy door opening with MoveIt 2 and the UR driver for ROS 2._


**Try it!**
With Humble, you can choose between using the MoveIt Debians (soon to be synced), running the stable `humble` branch, or using the `main` development branch. You can check out the[ install instructions](https://moveit.ros.org/install-moveit2/source/) for more details on the different distributions and branches. The tutorials with more information on getting started are also already available [here](https://moveit.picknik.ai/humble/index.html). As always, we’re welcoming any kind of feedback or contributions.



![Automated Welding](/assets/images/blog_posts/2022_05_02_image3.gif)

_[PickNik and Fraunhofer IPA have applied MoveIt 2](https://picknik.ai/hybrid-planning/fraunhofer/moveit/2022/02/03/Hybrid-planning-Welding-with-the-UR10e.html) to advanced robotic welding techniques. Watch the full video [here](https://www.youtube.com/watch?v=ixX2TjgFOI4)_


**What’s next?**

There is much more to come in the not too distant future. The main focus will be on two things: making MoveIt easier to use, and supporting more intuitive and advanced trajectories.  Support for OMPL’s orientation constraints is[ finally being completed](https://github.com/moveit/moveit2/pull/1273), and we’re determined to investigate solutions for [more intuitive motions by default](https://github.com/moveit/moveit2/issues/1200). Stay tuned for new planner features, IK solvers and reworked interfaces.

[Our two GSoC students](https://moveit.ros.org/events/moveit/mentor/google/2022/05/20/2022-google-summer-of-code-students.html) have already started working on much-anticipated features:[ Python support](https://github.com/moveit/moveit2/issues/1279) and [multi-arm trajectory execution](https://github.com/moveit/moveit/pull/2810). PickNik Robotics summer interns are improving how BioIK is integrated into MoveIt as well as finalizing admittance control in ros2_control & MoveIt.


### Thanks to our Maintainers and Contributors

* [Andy Zelenak](https://github.com/AndyZe)
* [Jafar Abdi](https://github.com/JafarAbdi)
* [Vatan Aksoy Tezer](https://github.com/vatanaksoytezer)
* [Tyler Weaver](https://github.com/tylerjw)
* [Henning Kayser](https://github.com/henningkayser)
* [Abi Sivaraman](https://github.com/Abishalini)
* [David V. Lu!!](https://github.com/DLu)
* [Sebastian Jahr](https://github.com/sjahr)
* [Stephanie Eng](https://github.com/stephanie-eng)
