---
author: Sebastian Jahr, Robotics Engineer
comments: false
date: 2024-03-25 00:01
layout: post
title: "MoveIt Planning Pipeline Refactoring"
media_type: image
media_link: /assets/images/blog_posts/planing_pipeline/image2.png
description: We refactored the planning pipeline class to make it more deterministic and customizable.
categories:
- planning pipeline
- moveit2
- motion planning
---

### Introduction & Background

*“Motion planning is the problem of finding a robot motion from a start state to a goal state that avoids obstacles in the environment and satisfies other constraints”* ([Lynch, K. M., & Park, F. C. (2017)](https://hades.mech.northwestern.edu/index.php/Modern_Robotics)). Such a planning problem can be encoded as constraints and optimization objectives. In many cases, the solution is a trajectory (a timed sequence of robot states) that a robot can execute. The classical approach to solving motion planning problems uses a sequence of algorithms, for example, Path planning -> Path Optimization -> Trajectory Generation.

A generic implementation of such a planning pipeline is one of the core components of MoveIt. Data structures to encode planning problems ([MotionPlanRequest](https://github.com/ros-planning/moveit_msgs/blob/ros2/msg/MotionPlanRequest.msg)) and solutions ([MotionPlanResponse](https://github.com/ros-planning/moveit_msgs/blob/ros2/msg/MotionPlanResponse.msg)) are provided, and it is possible to create custom pipelines by choosing from various algorithms in MoveIt. These algorithms are implemented as plugins so that you can specify a planning pipeline at runtime and make it easy to integrate your implementations. Since no planning algorithm is a jack of all trades, it is important to be able to define and swap pipelines. Take for example, a [bin picking application](https://youtu.be/4bpiLJjUDzU), where a planning pipeline with a Cartesian planner is useful to plan grasp and retreat motions and a planning pipeline with a sampling-based planner could be used to quickly find collision free motions to get the picked object to the drop position.


<p class="m-0">However, the planning pipeline implementation in MoveIt had some shortcomings:</p>
- Order of algorithm calls was determined by the algorithm implementations, which made it hard to comprehend and prone to errors.
- It was not possible to chain planner algorithms.
- No clear separation and naming of pre-processing, planning and post-processing algorithms.

This is why we decided to refactor the planning pipeline to address the problems above (tracked by [moveit2#2408](https://github.com/ros-planning/moveit2/issues/2408)). This blog post describes these changes in detail.

### Refactoring Steps

Our goal was to refactor the current pipeline implementation (caricatural control flow shown in Fig. 1)

<div style="text-align:center">
    <img style="margin: 10px auto 32px;" src="{{ site.url }}/assets/images/blog_posts/planing_pipeline/image4.png" alt="Control flow of the old planning pipeline implementation" />
    <p>Fig. 1: Control flow of the old planning pipeline implementation</p>
</div>

into a clean and tidy structure as shown in Fig. 2

<div style="text-align:center">
    <img style="margin: 10px auto 32px;" src="{{ site.url }}/assets/images/blog_posts/planing_pipeline/image1.png" alt="Refactrored planning pipeline implementation" />
    <p>Fig. 2: Refactrored planning pipeline implementation</p>
</div>

**1. Cleanup and Simplify!**

<p class="m-0">First, the existing implementation was cleaned up and simplified. This included:</p>
- Separate post-processing, planning, and post-processing algorithms
    - PlanRequestAdapter class implementations can only modify the MotionPlanRequest.
    - Post-processing algorithms inherit now from a new PlanResponseAdapter class and can only modify the MotionPlanResponse. Furthermore, they cannot be used as the first element in the chain.
    - Planning algorithms only inherit from the planning interface class, and the minimal pipeline requires at least one planning algorithm.
- Clean-up call order
    - User specifies vectors of PlanRequestAdapters, PlannerPlugins, and PlanResponseAdapters for a pipeline and the algorithms in these vectors get called sequentially in the defined order.
- Move functionality from the Pipeline class into new plugins
    - In the pipeline class, several checks on the result trajectory were performed. These checks have been moved into a new post-processing plugin: ValidateSolution.
    - The pipeline class sent messages to  RVIZ for visualization. This functionality has also been moved into a separate post-processing plugin: DisplayMotionPath.

**2.Test coverage and introspection**

<p class="m-0">Second, we improved the testing and introspection capabilities of the planning pipeline.</p>
- Unit Tests for the planning pipeline class have been added 🤓.
- Intermediate results between stages of the planning pipeline can now be published if the progress_topic parameter is set.

**3.Enable planner chaining**

<p class="m-0">The final step was to enable chaining planner algorithms.</p>
- A planning pipeline can load multiple planner plugins
    - You can now create seed trajectories for optimizing planner plugins with other planner plugins! For example, use OMPL’s RRTConnect to create a solution and optimize it with STOMP.
    - STOMP and CHOMP planner plugins can now use the reference trajectory in the MotionPlanResponse if available. While warm-starting optimization-based planning algorithms is not a new feature, it is now possible to do so by chaining planner plugins instead of writing an additional smoothing plugin. The chaining approach enables leaner and more flexible planning pipeline configurations.
- Removes duplicate code
    - Before:  Two implementations of STOMP/CHOMP plugins existed: A PlannerPlugin and a RequestAdapterPlugin.
    - After: STOMP and CHOMP are only PlannerPlugin types.

### Exemplary Setup
With these refactorings, it is now easier than ever to build a custom chain of planning algorithms with MoveIt. An example configuration, like in [MoveItPro’s UR base config](https://github.com/PickNikRobotics/moveit_studio_ur_ws/blob/main/src/picknik_ur_base_config/config/moveit/ompl_planning.yaml), looks like this:

```Unset
request_adapters:
 - default_planning_request_adapters/ResolveConstraintFrames
 - default_planning_request_adapters/ValidateWorkspaceBounds
 - default_planning_request_adapters/CheckStartStateBounds
 - default_planning_request_adapters/CheckStartStateCollision
planning_plugins:
 - ompl_interface/OMPLPlanner
response_adapters:
 - default_planning_response_adapters/AddTimeOptimalParameterization
 - default_planning_response_adapters/ValidateSolution
 - default_planning_response_adapters/DisplayMotionPath
```

A resulting motion planning solutions can be seen in Fig. 3.:

<div style="text-align:center">
    <img style="margin: 10px auto 32px;" src="{{ site.url }}/assets/images/blog_posts/planing_pipeline/image3.gif" alt="Example motions planned with a planning pipeline similar to the example configuration in MoveItPro" />
    <p>Fig. 3: Example motions planned with a planning pipeline similar to the example configuration in MoveItPro.</p>
</div>

**PlanningRequestAdapters**<br/>
*CheckForStackedConstraints*<br/>
A planning request adapter that checks if the motion plan request contains a conflicting path or goal constraints. If that is the case, a warning is created, but the planning process is not interrupted.
*CheckStartStateBounds*<br/>
&nbsp;&nbsp;&nbsp;This adapter validates if the start state is within the joint limits specified in the URDF.
*CheckStartStateCollision*<br/>
&nbsp;&nbsp;&nbsp;Checks if the start state of the planning problem is in a collision.
*ResolveConstraintFrames*<br/>
&nbsp;&nbsp;&nbsp;Transforms all the constrained frames to frames that are part of the robot model. This might be necessary because the frames of an attached object are not necessarily known to a planner.
*ValidateWorkspaceBounds*<br/>
&nbsp;&nbsp;&nbsp;If not specified otherwise, this adapter adds workspace bounds to the planning problem.<br/>

**PlannerPlugins**<br/>
OMPLPlanner<br/>
&nbsp;&nbsp;&nbsp;Planner plugin uses sampling-based planners from the [Open Motion Planning Library](https://ompl.kavrakilab.org/).<br/>
STOMPPlanner<br/>
&nbsp;&nbsp;&nbsp;Stochastic Trajectory Optimization for Motion Planning is a planning algorithm that plans and/or optimizes paths with a probabilistic optimization approach ([more info](https://picknik.ai/moveit%202/ros/2023/05/19/optimization-based-planning-with-stomp.html)).<br/>
CHOMPPlanner<br/>
&nbsp;&nbsp;&nbsp;Covariant Hamiltonian optimization for motion planning is a gradient-based path planner/ optimizer ([more info](https://moveit.picknik.ai/main/doc/how_to_guides/chomp_planner/chomp_planner_tutorial.html)).<br/>
PILZIndustrialMotionPlanner<br/>
&nbsp;&nbsp;&nbsp;Generates industrial Cartesian trajectories (LIN, PTP, CIRC). You can find more information on Cartesian planning [in another blog post on this website](https://picknik.ai/cartesian%20planners/moveit/motion%20planning/2021/01/07/guide-to-cartesian-planners-in-moveit.html).<br/>

**PlanningResponseAdapters**<br/>
*ValidateSolution*<br/>
&nbsp;&nbsp;&nbsp;Checks the validity (collision-free, feasible, constraint satisfaction) of the path created by the planners.<br/>
*AddTimeOptimalParameterization*<br/>
&nbsp;&nbsp;&nbsp;Generates a time-optimal trajectory based on a given path based on an algorithm described by [Agarwal&nbsp;et&nbsp;al.](https://ieeexplore.ieee.org/document/6577978).<br/>
*AddRuckigTrajectorySmoothing*<br/>
&nbsp;&nbsp;&nbsp;Uses the [Ruckig](https://ruckig.com/) algorithm to adapt a trajectory to be jerk-constrained and time-optimal.<br/>
*DisplayMotionPath*<br/>
&nbsp;&nbsp;&nbsp;Publishes the computed path to RVIZ for visualization.<br/>

### Conclusion
MoveIt now supports re-configuring planning pipelines to support the varying planning needs of unstructured environments. We are looking forward to seeing your planner or adapter plugin implementations as contributions to the MoveIt ecosystem! For more production environment features, check out our [MoveIt Pro](https://picknik.ai/pro/) offering.
