---
author: Jens Petit
comments: false
date: 2019-08-20 17:00:00+00:00
layout: page
slug: dev-concepts
title: Developer concepts
---

# Developers' Concepts
This page explains MoveIt concepts which are mainly useful for developers. It reflects the current state of the `master` branch.

## Collision Detection
The planning scene can access multiple different collision detectors. Each detector derives its own collision environment from the abstract parent class `CollisionEnv`. Note that before August 2019, MoveIt did not have a single collision environment but two: `CollisionWorld` and `CollisionRobot`. `CollisionRobot` was responsible for self-collision checks whereas `CollisionWorld` performed collision checks of the robot against the environment. This split is still internally visible for some collision detectors in their respective `CollisionEnv`s.

For a general introduction to the theory behind collision detection, [this blogpost](https://www.toptal.com/game/video-game-physics-part-ii-collision-detection-for-solid-objects) is helpful. Additionally, the book _Realtime Collision Detection_ by Christer Ericson is a good resource.

#### Flexible Collision Library (FCL)
FCL is one of the available collision detectors. It derives its own collision environment which mainly combines the former `CollisionRobotFCL` and `CollisionWorldFCL`.

`CollisionRobotFCL`: The robot link geometries are saved as member variables. When self-collision checks are executed a new FCL manager is created and all links are added to it. As the link geometries are only calculated once and stored persistently (including their local AABB), adding them to the new collision manager is cheap. Then, the broadphase collision check with updated global AABB is executed before narrowphase calculations take place for overlapping pairs.

`CollisionWorldFCL`: It contains a member collision manager to which all world objects are added or removed. This manager has a persistent tree structure for fast overlap calculations. When a robot-world collision check is executed, all robot links are tested individually against the world as we do not need to do self-collision checks here. For this, the pre-calculated collision geometries contained in `CollisionRobot` are used and their global pose updated with the current robot state.

The following flowchart illustrates the collision checking process.
<img src='/assets/images/diagrams/fcl_collision.png' style="width: 100%;"/>

#### Bullet Collision Detection
Bullet is the second available collision detector. The collision environment contains one manager for discrete and continuous checking each. The following flowchart shows the collision checking process.
<img src='/assets/images/diagrams/bullet_collision.png' style="width: 80%;"/>

For a more detailed view of how the manager handles the collision checking process internally, see the flowchart below.
<img src='/assets/images/diagrams/bullet_collision_detail.png' style="width: 100%;"/>

## TrajOpt Planner
TrajOpt is an optimization-based motion planner. The following diagram shows how it works in MoveIt.
<img src='/assets/images/diagrams/trajopt.png' style="width: 100%;"/>
[The chart source file](https://docs.google.com/drawings/d/1_j75qFitQEAEHOYASnI3DN0RiVp4o0r5Txlh78wzvUY/edit?usp=sharing)
