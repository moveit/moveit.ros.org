---
author: Tyler Weaver
comments: false
date: 2021-04-15
layout: post
title: MoveIt Noetic Update
media_type: image
media_link: /assets/images/blog_posts/2021_4_15_noetic_update.png
description: Noetic 1.1.2 Update April 2021
categories:
- ROS
- MoveIt
- Noetic
---

We are proud to announce a [new release of Noetic](https://github.com/moveit/moveit/issues/2593) is on the way.  There were 60 separate commits that are new since the last release of MoveIt.  Here is a summary of what new changes there are:


## Features



*   Add utility functions to Python PSI: add/detach objects, apply_planning_scene()[ #2532](https://github.com/moveit/moveit/issues/2532)
*   Make setToIKSolverFrame accessible again[ #2580](https://github.com/moveit/moveit/issues/2580)
*   Python bindings for moveit_core[ #2547](https://github.com/moveit/moveit/issues/2547)
*   add get_active_joint_names[ #2533](https://github.com/moveit/moveit/issues/2533)
*   Provide a function to set the position of active joints in a JointModelGroup[ #2456](https://github.com/moveit/moveit/issues/2456)
*   RobotModelBuilder: Add parameter to specify the joint rotation axis
*   RobotModelBuilder: Allow adding end effectors[ #2454](https://github.com/moveit/moveit/issues/2454)
*   Sanitize CHOMP initialization method parameter[ #2540](https://github.com/moveit/moveit/issues/2540)
*   Order PlaceLocations by quality during planning[ #2378](https://github.com/moveit/moveit/issues/2378)
*   Support multiple planning pipelines with MoveGroup via MoveItCpp[ #2127](https://github.com/moveit/moveit/issues/2127)
*   FixStartStateBounds: Copy attached bodies when adapting the start state[ #2398](https://github.com/moveit/moveit/issues/2398)
*   Allow selecting planning pipeline in RViz MotionPlanningDisplay
*   Low latency mode[ #2401](https://github.com/moveit/moveit/issues/2401)
*   Update MSA launch templates for multi-pipeline support
*   Add Pilz industrial motion planner[ #1893](https://github.com/moveit/moveit/issues/1893)


## Testing



*   Add test to OMPL interface for StateValidityChecker[ #2247](https://github.com/moveit/moveit/issues/2247)
*   Add test for PlanningContextManager in ompl interface[ #2248](https://github.com/moveit/moveit/issues/2248)
*   Enable mesh filter[ #2448](https://github.com/moveit/moveit/issues/2448)
*   Improve robustness of subframes test[ #2488](https://github.com/moveit/moveit/issues/2488)
*   Improve robustness of move group interface test[ #2484](https://github.com/moveit/moveit/issues/2484)
*   Unit Test for ByteString-based ROS msg conversion[ #2362](https://github.com/moveit/moveit/issues/2362)


## Documentation



*   Update doxygen comments for distance() and interpolate()[ #2528](https://github.com/moveit/moveit/issues/2528)
*   Clean up collision-related log statements[ #2480](https://github.com/moveit/moveit/issues/2480)
*   Fix doxygen documentation for setToIKSolverFrame[ #2461](https://github.com/moveit/moveit/issues/2461)
*   Update collision-related comments[ #2382 #2388](https://github.com/moveit/moveit/issues/2382)
*   Fix some typos in comments[ #2466](https://github.com/moveit/moveit/issues/2466)
*   Add debugging log statement for a common error[ #2509](https://github.com/moveit/moveit/issues/2509)


## Maintenance



*   Replaced eigen+kdl conversions with tf2_eigen + tf2_kdl[ #2472](https://github.com/moveit/moveit/issues/2472)
*   Delete CollisionRequest min_cost_density
*   Changed processing_thread_ spin to use std::make_unique instead of new[ #2412](https://github.com/moveit/moveit/issues/2412)
*   Python3 compatibility for ikfast’s round_collada_numbers.py[ #2473](https://github.com/moveit/moveit/issues/2473)
*   Fix scaling factor parameter names[ #2452](https://github.com/moveit/moveit/issues/2452)
*   Suppress warnings “mesh_use_embedded_materials is ignored”
*   Refactor Servo velocity bounds enforcement[ #2471](https://github.com/moveit/moveit/issues/2471)
*   Cleanup current state handling in servo[ #2372](https://github.com/moveit/moveit/issues/2372)
*   Change servo namespacing logic[ #2354](https://github.com/moveit/moveit/issues/2354)
*   MSA launch files: fix indentation[ #2371](https://github.com/moveit/moveit/issues/2371)
*   pilz planner: add string includes[ #2483](https://github.com/moveit/moveit/issues/2483)
*   Use kinematics solver timeout if not specified otherwise[ #2489](https://github.com/moveit/moveit/issues/2489)
*   Upgrade cmake_minimum_required to 3.1[ #2453](https://github.com/moveit/moveit/issues/2453)
*   Halt Servo command on Pose Tracking stop[ #2501](https://github.com/moveit/moveit/issues/2501)


## Bug Fixes



*   Fix logic, improve function comment for clearDiffs()[ #2497](https://github.com/moveit/moveit/issues/2497)
*   Fix RobotState::dropAccelerations/dropEffort to not drop velocities[ #2478](https://github.com/moveit/moveit/issues/2478)
*   Fix validation of orientation constraints[ #2434](https://github.com/moveit/moveit/issues/2434)
*   Fix OrientationConstraint::decide[ #2414](https://github.com/moveit/moveit/issues/2414)
*   Fix missing isEmpty check in compute_ik service[ #2544](https://github.com/moveit/moveit/issues/2544)
*   It’s not an error not to define a plugin[ #2521](https://github.com/moveit/moveit/issues/2521)
*   Fixed flood of errors on startup for mesh_filter[ #2550](https://github.com/moveit/moveit/issues/2550)
*   PlanExecution: Correctly handle preempt-requested flag[ #2554](https://github.com/moveit/moveit/issues/2554)
*   thread safety in clear octomap & only update geometry[ #2500](https://github.com/moveit/moveit/issues/2500)
*   Python interface improvements. Fix [#1966](https://github.com/moveit/moveit/issues/1966), add enforceBounds[ #2356](https://github.com/moveit/moveit/issues/2356)
*   Fix various issues in PlanningScene / MotionPlanning displays[ #2588](https://github.com/moveit/moveit/issues/2588)
*   Catch exceptions during RobotModel loading in rviz[ #2468](https://github.com/moveit/moveit/issues/2468)
*   Fix QObject::connect: Cannot queue arguments of type ‘QVector’[ #2392](https://github.com/moveit/moveit/issues/2392)
*   stop_requested_ flag clearing fix[ #2537](https://github.com/moveit/moveit/issues/2537)
*   Add missing include[ #2519](https://github.com/moveit/moveit/issues/2519)
*   Protect paused_ flag, for thread safety[ #2494](https://github.com/moveit/moveit/issues/2494)
*   Do not break out of loop – need to update low pass filters[ #2496](https://github.com/moveit/moveit/issues/2496)
*   Fix initial angle error is always 0[ #2464](https://github.com/moveit/moveit/issues/2464)
*   Add an important sleep in Servo pose tracking[ #2463](https://github.com/moveit/moveit/issues/2463)
*   Prevent moveit_servo transforms between fixed frames from causing timeout[ #2418](https://github.com/moveit/moveit/issues/2418)
*   Move timer initialization down to fix potential race condition
*   Fix pose tracking race condition[ #2395](https://github.com/moveit/moveit/issues/2395)
*   Fix servo trajectory point timestamping[ #2375](https://github.com/moveit/moveit/issues/2375)
*   Fix ordering of windup args to control_toolbox::Pid[ #2370](https://github.com/moveit/moveit/issues/2370)
*   Fix segfault in MSA[ #2564](https://github.com/moveit/moveit/issues/2564)
*   Missing RViz and moveit_simple_controller_manager dependencies in MSA template[ #2455](https://github.com/moveit/moveit/issues/2455)
*   Fix empty sequence in moveit_setup_assistant[ #2406](https://github.com/moveit/moveit/issues/2406)
*   Add missing dependency on joint_limits_interface[ #2487](https://github.com/moveit/moveit/issues/2487)


# **Thank You**

This release comes with features from 31 different contributors.



*   AdamPettinger
*   AndyZe
*   Bjar Ne
*   Boston Cleek
*   Christian Henkel
*   Cong Liu
*   David V. Lu!!
*   Felix von Drigalski
*   Henning Kayser
*   Immanuel Martini
*   Jafar Abdi
*   Jere Liukkonen
*   Jeroen
*   John Stechschulte
*   Markus Vieth
*   Michael Görner
*   Nathan Brooks
*   parunapu
*   Peter Mitrano
*   petkovich
*   Pilz GmbH and Co. KG
*   Robert Haschke
*   sevangelatos
*   Shota Aoki
*   Simon Schmeisser
*   Stuart Anderson
*   Thomas G
*   tkovich
*   Tobias Fischer
*   Tyler Weaver
*   Udbhavbisarya23
