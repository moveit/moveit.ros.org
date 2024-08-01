---
author: Cristian C. Beltran-Hernandez
comments: false
date: 2023-01-12
layout: post
title: Simultaneous Trajectory Execution
media_type: image
media_link: /assets/images/blog_posts/gsoc-2022-badge.svg
description: Google Summer of Code 2022 project's result
categories:
- MoveIt
- Google
---

This post summarizes my contributions during the [Google Summer of Code 2022](https://summerofcode.withgoogle.com/programs/2022/projects/mpusZVc2) where I have extended the trajectory execution capabilities of MoveIt. 

# Motivation

Before this project, MoveIt only allowed the execution of trajectories in strict sequential order, which limited the options to simultaneously control two or more robots to only synchronized motions.

The goal was then to allow the simultaneous execution of multiple trajectories on systems with multiple robots.  For example, in a dual-arm robotic system, each arm can execute a different set of trajectories without needing to wait for the other arm to finish moving (sequential execution) or manually synchronizing the motion of both arms into a single trajectory. To preserve collision-free guarantees an extra collision check needs to be performed right before the execution of new trajectories to prevent collisions with active trajectories. 

## Example Use Cases
1. Several trajectories are planned and executed through the `MoveIt Motion Planning Rviz` plugin. 
![simultaneous-execution-rviz](https://github.com/ros-planning/moveit.ros.org/raw/main/assets/images/blog_posts/gsoc_2022/demo-simultaneous-execution1.gif)
2. Trajectories being planned and executed from different scripts (Rviz + Python script)
![simultaneous-execution-python-rviz](https://github.com/ros-planning/moveit.ros.org/raw/main/assets/images/blog_posts/gsoc_2022/demo-simultaneous-execution2.gif)
3. **Collision checking on planning scene update**. After a planning scene update, if any of the concurrently executing trajectories is in a collision path, that trajectory alone would be aborted. Any valid trajectory will continue its execution.
![planning-scene-update](https://github.com/ros-planning/moveit.ros.org/raw/main/assets/images/blog_posts/gsoc_2022/pln-scene-update.gif)
4. **Real application** examples can be found [here](https://github.com/ros-planning/moveit/pull/2810) such as executing screwing task independently with each arm.
![simultaneous-screwing](https://github.com/ros-planning/moveit.ros.org/raw/main/assets/images/blog_posts/gsoc_2022/real-simultaneous-execution.gif)


## Feature Description
- Event-based execution system: Events related to the execution of trajectories are pushed to a queue where they are processed sequentially.
  When a new trajectory is pushed, it is immediately validated by checking that all required controllers are active and available, and that there is no collision with any active trajectory or the current state. Invalid trajectories are rejected. Valid trajectories are sent for execution to the corresponding controllers. 
  The execution of each **trajectory part** will result in the event `EXECUTION_COMPLETED` being triggered. It marks the completion of the execution from the controller's side regardless of the status (SUCCEEDED, ABORTED, ...). If the status of the execution for a trajectory part is SUCCEEDED, we wait until all other parts are completed successfully. If the status of the trajectory is not successful, all other trajectory parts are canceled.
  The execution of a **trajectory** can result in the event `EXECUTION_TIMEOUT` being triggered. This occurs when the trajectory execution duration monitor is enabled and the trajectory takes longer to execute than expected. When triggered, all trajectory parts for this trajectory are canceled.
  When a specific trajectory is canceled, the event `EXECUTION_CANCELLATION_REQUEST` is triggered. 

- Interdependent set of trajectories: The user can define a set of trajectories to be executed in strictly sequential order. In such cases, all the required controllers for the set of trajectories would be locked so that no other trajectory can use them. Example use case: In a _picking_ task, the user would send a trajectory for the robot arm to get into a grasping pose and a trajectory for the gripper to close after reaching the grasping pose (two separate trajectories). After the execution of this set of trajectories starts, new trajectories that attempt to use the gripper would be rejected.

The presentation slides of an overview of this project are available here:  https://docs.google.com/presentation/d/11hsWSR18X-YGj1ugzUKmdQeB3_EAymgB/edit#slide=id.p1
For more technical details and discussion check this GitHub [issue](https://github.com/ros-planning/moveit/issues/3156) and [PR](https://github.com/ros-planning/moveit/pull/3243):

### Code review
This project is still an [active PR](https://github.com/ros-planning/moveit/pull/3243), consider contributing with a code review.
Also, a test environment is available [here](https://github.com/cambel/moveit_simultaneous_motions_demo), try it yourself!

I enjoyed contributing to MoveIt as part of GSoC 2022. Thank you to my mentors @simonschmeisser and @v4hn.
