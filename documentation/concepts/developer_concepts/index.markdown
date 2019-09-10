---
author: Jens Petit
comments: false
date: 2019-08-20 17:00:00+00:00
layout: page
slug: dev-concepts
title: Developer concepts
---

# Developers' Concepts

This page explains MoveIt concepts which are mainly useful for developers.

## Collision Detection

The planning scene can contain multiple different collision detectors. Each of them consists of two individual parts: `CollisionWorld` and `CollisionRobot`.

`CollisionRobot` is responsible for self-collision checks whereas `CollisionWorld` performs collision checks of the robot against the environment.

This split has advantages for multi-threaded collision detection. In motion planning, it is often necessary to check a large amount of robot poses against the same current world environment. Consequently, the split allows to have one `CollisionRobot` per thread and only a single `CollisionWorld`. Keeping a single `CollisionWorld` gives memory advantages especially in the case of complicated point cloud world environments.

For a general introduction to the theory behind collision detection, [this blogpost](https://www.toptal.com/game/video-game-physics-part-ii-collision-detection-for-solid-objects) is helpful. Additionally, the book "Realtime Collision Detection" by Christer Ericson is a good resource.

#### Flexible Collision Library (FCL)
FCL is one of the available collision detectors.

`CollisionRobotFCL`: The robot link geometries are saved as member variables. When self-collision checks are executed a new FCL manager is created and all links are added to it. As the link geometries are only calculated once and stored persistently (including their local AABB), adding them to the new collision manager is cheap. Then, the broadphase collision check with updated global AABB is executed before narrowphase calculations take place for overlapping pairs.

`CollisionWorldFCL`: It contains a member collision manager to which all world objects are added or removed. This manager has a persistent tree structure for fast overlap calculations. When a robot-world collision check is executed, all robot links are tested individually against the world as we do not need to do self-collision checks here. For this, the pre-calculated collision geometries contained in `CollisionRobot` are used and their global pose updated with the current robot state.

The following flowchart illustrates the collision checking process.
<img src='/assets/images/diagrams/fcl_collision.png' style="width: 100%;"/>

#### Bullet Collision Detection
Bullet is the second available collision detector.

The following flowchart shows the collision checking process.
<img src='/assets/images/diagrams/bullet_collision.png' style="width: 100%;"/>

For a more detailed view of how the manager handles the collision checking process internally, see the flowchart below.
<img src='/assets/images/diagrams/bullet_collision_detail.png' style="width: 100%;"/>

## TrajOpt Planner
TrajOpt is an optimization-based motion planner. The following diagram shows how it works in MoveIt.
<img src='/assets/images/diagrams/trajopt.png' style="width: 100%;"/>
