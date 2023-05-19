---
author: Henning Kayser
comments: false
date: 2023-05-19
layout: post
title: "Optimization-based planning with STOMP"
media_type: image
media_link: /assets/images/blog_posts/stomp-animation.gif
description: MoveIt 2 now features a completely new implementation of the optimization-based planner STOMP.
categories:
- MoveIt 2
- ROS
---

MoveIt is known for making it easy to create trajectories for any robot without a lot of tuning and tweaking.
One of the reasons for this is MoveIt’s default motion planner, OMPL’s RRTConnect.
The algorithm excels at finding a collision-free path for almost any robot in a very short amount of time.
However, this flexibility comes with a small drawback: there is not a lot of control about the quality of the solutions.
Depending on the planning problem and instance, paths might come out as surprisingly long-winded or near to collisions, even if it seems like there should be a trivial solution.
The reason is that RRTConnect is a non-optimizing sampling-based motion planner that simply tries to find ANY path without taking path qualities such as length or collision clearance into account.
The recent work on [Parallel Planning](https://picknik.ai/moveit%202/parallel%20planning/motion%20planning/2023/02/15/parallel-planning-with-MoveIt-2.html) attempts to mitigate this weakness by setting up multiple planner algorithms to compete with each other, and selecting whatever planner comes up with the best solution based on quality metrics.

A more direct approach to solving this problem is to use a planner that relies on cost optimization instead.
[STOMP](https://www.researchgate.net/publication/221078155_STOMP_Stochastic_trajectory_optimization_for_motion_planning) allows modeling trajectory requirements as cost functions, even for binary conditions like collisions and end-effector constraints.
Unlike sampling-based planners like RRTConnect, which rely on randomly generating new waypoint candidates, STOMP always starts planning with an initial guess trajectory that might even be colliding or otherwise invalid, but then attempts to iteratively optimize the same trajectory by minimizing the costs for the individual waypoints.
This approach has the upside that almost any trajectory requirement can be supported, provided a suitable cost function.
The downsides to other planning approaches is the comparably long planning time and the difficulty of tuning the planner configuration and cost functions making the planner prone to local minima since STOMP is not complete.
For very difficult planning problems, an OMPL planner can be used for pre-solving feasible paths which subsequently are smoothed and optimized using STOMP’s smoothing adapter plugin.
Alternatively, incorporating other planners which complement STOMP's behavior via Parallel Planning allows you to get the best of both worlds.

The new [STOMP planning plugin](https://github.com/ros-planning/moveit2/tree/main/moveit_planners/stomp) package provides [STOMP planner](https://github.com/ros-industrial/stomp) support for MoveIt 2.
It is a completely new implementation and not a migrated version of ROS 1’s [stomp_ros](https://github.com/ros-industrial/stomp_ros), since also the STOMP planner library has been reimplemented.
The package comes with the a planner plugin that allows running STOMP with MoveGroup or MoveItCpp, and a smoothing adapter for post-processing pre-solved trajectories.

It’s easy to get started planning and smoothing with STOMP, simply follow the [tutorial instructions](https://moveit.picknik.ai/main/doc/how_to_guides/stomp_planner/stomp_planner.html).
There you can also find more information on the difference between STOMP, OMPL planners, and CHOMP.
Please let us know how it worked for you and give us feedback about what new use cases STOMP may solve for you.

Thanks go to [Matej Vargovcik](https://github.com/afrixs), [Robert Haschke](https://github.com/rhaschke), [Sebastian Jahr](https://github.com/sjahr) for helping with this feature!
