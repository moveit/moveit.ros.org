---
author: Jeroen De Maeyer, PhD Student, KU Leuven, Belgium
comments: false
date: 2020-09-10
layout: post
title: A new approach for planning with path constraints in MoveIt
media_type: video
media_link: TODO(presentation PickNik)
description: Integrating OMPL's constrained planning capabilities into MoveIt
categories:
- moveit
---

In the past three months, I added a new planning approach to the existing OMPL interface, during my [Google Summer of Code project](https://summerofcode.withgoogle.com/organizations/5848470994288640/#5590997586673664). It addresses known issues with the current planners to handle Cartesian path constraints, especially when the constrained region is small.

The Open Motion Planning Library (OMPL) is the main library used by MoveIt to plan collision-free paths. Since 2018, OMPL included [capabilities](http://ompl.kavrakilab.org/constrainedPlanning.html) to plan paths with generic constraints represented by a function f(q) = 0, where q represents the robot’s state. These constraints are decoupled from the planning algorithms by introducing a “constrained state space”. Sampling in this constrained state space will give samples that satisfy the constraints and therefore a planner can operate as if there were no constraints. The implementation of these constrained state spaces in OMPL calculates such valid states by taking a random joint space sample and projecting it on the constraints region. This approach has some advantages compared to rejection sampling (the current approach available in MoveIt to handle arbitrary constraints). This projection sampling from OMPL is potentially faster and can handle constraints such as moving along a plane or a line, which have zero volume in Cartesian space. These constraints cannot be handled by rejection sampling.

## New features

A new option `enforce_constrained_planning` can be set to `true` in [ompl_planning.yaml](https://ros-planning.github.io/moveit_tutorials/doc/ompl_interface/ompl_interface_tutorial.html) to use the new projection-based sampling approach. The [current implementation](https://github.com/ros-planning/moveit/pull/2273) supports box constraints and equality position constraints (planes and lines). A [second pull request](https://github.com/JeroenDM/moveit/pull/6) will add support for orientation constraints in the future.

The most interesting aspect of this new planning approach is shown below. Planning with end-effector constraints sometimes results in large joint space jumps, making the path unusable on a real robot (shown on the left). The new planner solves the same problem without these joint space jumps in the solution (shown on the right). For constraints such as equality position constraints, the existing way to avoid joint space jumps, using the [enforce_joint_model_state_space](https://ros-planning.github.io/moveit_tutorials/doc/ompl_interface/ompl_interface_tutorial.html#enforce-planning-in-joint-space) option, does not work.

<img src="/assets/images/blog_posts/ompl_constrained_planning/pos_con_pose_model.gif" alt="drawing" width="45%"/>
<img src="/assets/images/blog_posts/ompl_constrained_planning/pos_con_new_planner.gif" alt="drawing" width="45%"/>

A [new tutorial](https://github.com/ros-planning/moveit_tutorials/pull/518) explains how to configure and use this new planning option, using simple but instructive examples with the Panda robot. These are implemented using MoveIt’s [Python interface](https://ros-planning.github.io/moveit_tutorials/doc/move_group_python_interface/move_group_python_interface_tutorial.html), making it extremely convenient to try out the new planner and quickly experiment with different planning problems.

<img src="/assets/images/blog_posts/ompl_constrained_planning/tutorial_case_2.gif" alt="drawing" width="45%"/>
<img src="/assets/images/blog_posts/ompl_constrained_planning/tutorial_case_3.gif" alt="drawing" width="45%"/>

These example problems are only the tip of the iceberg. An [external planning plugin](https://github.com/JeroenDM/elion) shows the potential of this new planning technique and allows you to test experimental constraints. In addition, alternative approaches to projection-based sampling are available in OMPL that could be used for a subset of the constraints.

<img src="/assets/images/blog_posts/ompl_constrained_planning/welding_example.gif" alt="drawing" width="45%"/>
<img src="/assets/images/blog_posts/ompl_constrained_planning/kuka_pos_con.gif" alt="drawing" width="45%"/>

The project also improved the existing code in many ways. More than 100 lines of unused code have been removed, the logging statements cleaned up and a surprising [bug](https://github.com/ros-planning/moveit/pull/2239) fixed. See [here](https://gist.github.com/JeroenDM/426e3a7e083049295bbcb660c9a98e63) for a complete list of the pull requests.


## Limitations

The main (temporary) drawback is that the code is still being reviewed and merged. So it can only be used by building MoveIt from source right now. Hopefully, we can quickly work through the review process. Feel free to provide feedback and help out!

A second limitation at the moment is the performance. It can be quite slow compared to the other planning approaches and the solution paths requiring optimization sometimes. With some contributions from seasoned C++ programmers, we should be able to improve performance. This will enable us to make planners that optimize the solution, such as `RRTstar` and `PRMstar`, reasonably fast, and make the new planner even more useful.

## Conclusion

I really enjoyed contributing to MoveIt and learned more about C++ debugging in these three months than during all my previous C++ projects. I would encourage anyone looking for an interesting problem to solve and a supportive community to consider contributing to MoveIt

Thank you, Mark Moll (Picknik), Omid Heidari ( Idaho State University), and Felix von Drigalski (OMRON SINIC X) for mentoring me during the project. Also thank you to the MoveIt maintainers for generously spending time reviewing. For my project in particular thank you Michael Görner,  Robert Haschke, and Tyler Weaver.

You can find the full log of the project [here](https://github.com/ros-planning/moveit/issues/2092).
