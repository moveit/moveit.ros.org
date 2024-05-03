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

The new [STOMP planning plugin](https://github.com/moveit/moveit2/tree/main/moveit_planners/stomp) package provides [STOMP planner](https://github.com/ros-industrial/stomp) support for MoveIt 2.
It is a completely new implementation and not a migrated version of ROS 1’s [stomp_ros](https://github.com/ros-industrial/stomp_ros), since also the STOMP planner library has been reimplemented.
The package comes with the a planner plugin that allows running STOMP with MoveGroup or MoveItCpp, and a smoothing adapter for post-processing pre-solved trajectories.

It’s easy to get started planning and smoothing with STOMP, simply follow the [tutorial instructions](https://moveit.picknik.ai/main/doc/how_to_guides/stomp_planner/stomp_planner.html).
There you can also find more information on the difference between STOMP, OMPL planners, and CHOMP.
Please let us know how it worked for you and give us feedback about what new use cases STOMP may solve for you.

Thanks go to [Matej Vargovcik](https://github.com/afrixs), [Robert Haschke](https://github.com/rhaschke), [Sebastian Jahr](https://github.com/sjahr) for helping with this feature!

----------------------------------------------------------------

**Update:**  May 22nd, 2023 - [Discourse comment](https://discourse.ros.org/t/optimization-based-planning-with-stomp/31488/4)

There are several improvements, which I should've better described in this post. The GIF animation is in real-time. I've created it using the [example executable](https://github.com/ros-planning/stomp_moveit/blob/main/src/stomp_moveit_example.cpp) in the development repo, however on an older version that didn't include the constraint planning example yet. You should be able to reproduce the results using RViz and the planning scene updater.

**Function-based API**
stomp_ros had a [plugin-based interface for implementing cost functions](https://github.com/ros-industrial/stomp_ros/blob/melodic-devel/stomp_moveit/include/stomp_moveit/cost_functions/stomp_cost_function.h) which was very clunky and I never really saw a lot of extensions based on it. The new interface uses [generic functions for costs, noise, filtering](https://github.com/moveit/moveit2/blob/main/moveit_planners/stomp/include/stomp_moveit/stomp_moveit_task.hpp#L65) etc which are MoveIt-agnostic and which make it much easier to inject any kind of implementation with much less code. Compare the new [collision cost function](https://github.com/moveit/moveit2/blob/main/moveit_planners/stomp/include/stomp_moveit/cost_functions.hpp#L168) with the old plugin implementation ([header](https://github.com/ros-industrial/stomp_ros/blob/melodic-devel/stomp_moveit/include/stomp_moveit/cost_functions/collision_check.h), [source](https://github.com/ros-industrial/stomp_ros/blob/melodic-devel/stomp_moveit/src/cost_functions/collision_check.cpp)) for an example. The implementation of collision checks, noise generation, smoothing, filtering does pretty much the same.

Side note: We are working on exposing generic cost functions via MoveIt's plugin API so that the same kind of cost objectives can be used with STOMP and with OMPL's optimizing planners.

**Constraint Planning**
The new implementation comes with full support for planning and smoothing with path constraints which wasn't implemented for the ROS 1 plugin. Solving with constraints can have a huge drag on performance, however this feature could be particularly useful for post-processing trajectories solved with [OMPL's consrained planner](https://moveit.picknik.ai/main/doc/how_to_guides/using_ompl_constrained_planning/ompl_constrained_planning.html).

**Parameters**
Parameters are declared and documented [using the generate_parameter_library interface](https://github.com/moveit/moveit2/blob/main/moveit_planners/stomp/res/stomp_moveit.yaml).

**Performance**
I haven't performed an extensive side-by-side benchmark yet, but overall the new implementation and default parameters appear to perform better. The implementation of noise generation, collision check and smoothing are fairly optimized.
The curious parameter *exponentiated_cost_sensitivity* now defaults to 0.5 instead of 10 which seems to make the planner converge in a more robust way. Interestingly, I have never seen this parameter exposed in MoveIt 1 configs even though it was defined in the plugin, so I wouldn't be surprised if not a lot of people have ever heard of it (I just ran into this param while implementing the new version).

**TODO's**
* Visualization is still somewhat minimal. The gif is generated with MVT which is not supported in the main repo. There is still a simple [path publisher](https://github.com/moveit/moveit2/blob/main/moveit_planners/stomp/res/stomp_moveit.yaml#L60) that can be used for visualizing the candidate.
* The new implementation doesn't have a cost for the [obstacle distance gradient](https://github.com/ros-industrial/stomp_ros/blob/melodic-devel/stomp_moveit/include/stomp_moveit/cost_functions/obstacle_distance_gradient.h), we are working on a replacement as part of the MoveIt cost-function API extension.
* STOMP is still not very easy to tune and some parameters like *stdddev* for noise generation are not exposed, yet. In general, we would like to implement more "smart decision making" for setting these parameters based on the planning request and try to focus on good performance by default. It's possible, that some parameters (like *num_waypoints*) will be set automatically in the future while still allowing to enforce an override.
