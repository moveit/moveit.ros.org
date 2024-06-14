---
comments: false
date: 2024-06-07
author: Sebastian Jahr, Robotics Engineer at PickNik Robotics
layout: post
title: "Google Summer of Code Contributor Introductions"
media_type: image
media_link: /assets/images/blog_posts/GSoc2024.jpg
description: "Last week the official coding period started and the MoveIt project is very happy to participate with 3! slots in this year’s Google Summer of Code (GSoC) program."
categories:
- MoveIt
- GSoC
---

## 2024 Google Summer of Code Contributor Introductions

Last week the official coding period started and the MoveIt project is very happy to participate with 3! slots in this year’s Google Summer of Code (GSoC) program. GSoC is an international program in which Google awards stipends to students who complete a free and open-source software coding project during the summer. In this blogpost we will introduce this year’s participants.

**Moveit Drake Integration**

[Aditya Kamireddypalli](https://github.com/kamiradi) is a PhD student of the Robust Autonomy and Decisions group at the University of Edinburgh. He will be working this summer on an experimental integration of [Drake](https://drake.mit.edu/) into [MoveIt 2](https://github.com/moveit/moveit2). Drake is a toolbox for model-based design and optimization. As part of his project, new trajectory optimization and optimization-based inverse kinematics solver plugins will be developed along with convenience functionality to enable cooperation between the two frameworks.

Aditya is mentored by Sebastian Jahr, MoveIt Maintainer and Robotics Engineer at [PickNik Robotics](https://picknik.ai/) and Sebastian Castro, MoveIt Maintainer and Applied Scientist at [The AI Institute](https://theaiinstitute.com/).
Follow his project Issue at [moveit2#2848](https://github.com/moveit/moveit2/issues/2848) to ask questions and get the latest updates on his work.

**Zenoh Support & Benchmarking**

[Cihat Altiparmak](https://github.com/CihatAltiparmak) is a computer engineering undergraduate student at the Istanbul Technical University. His project focuses on enabling support for [Zenoh](https://zenoh.io/) in [MoveIt 2](https://github.com/moveit/moveit2) and benchmarking the impact of the middleware on MoveIt’s planning cycle time. Over the summer, Cihat will create tutorials on how to use Zenoh with MoveIt and create middleware benchmarks and CI tests to measure the impact of the middleware choice on motion planning.

Cihat is mentored by Henning Kayser, MoveIt Maintainer and MoveIt Chief Architect at [PickNik Robotics](https://picknik.ai/) and Sebastian Jahr, MoveIt Maintainer and Robotics Engineer at [PickNik Robotics](https://picknik.ai/)
Follow his project Issue at [moveit2#2844](https://github.com/moveit/moveit2/issues/2844) to ask questions and get the latest updates on his work.

**MuJoCo support for ROS 2 MoveIt**

[Sangtaek Lee](https://github.com/sangteak601) is a robotics engineer based in the United Kingdom. In his project, Sangtaek is going to develop an interface between [MuJoCo](https://mujoco.org/) and [MoveIt 2](https://github.com/moveit/moveit2). MuJoCo is an open-source physics engine with sophisticated support for multi-joint dynamics with contact. As his first deliverable, Sangtaek will develop a [ros2_control](https://control.ros.org/rolling/index.html)-based MuJoCo interface for MoveIt 2. Building on this interface, he will create hands-on examples for using MoveIt 2 with MuJoCo and compare the results with other simulation tools integrated with MoveIt 2.

Sangtaek is mentored by Henning Kayser, MoveIt Maintainer and MoveIt Chief Architect, David Yackzan, Robotics Engineer, and Paul Gesel, MoveIt Core Contributor and Robotics Scientist, all of them working at [PickNik Robotics](https://picknik.ai/).
Follow his project Issue at [moveit2#2841](https://github.com/moveit/moveit2/issues/2841) to ask questions or get the latest updates on his work.

All three projects integrate state-of-the-art technologies into the MoveIt ecosystem and we are very excited to see the results at the end of this summer. Please reach out if you have any questions, feedback, or suggestions around the projects or simply want to learn more about MoveIt.
