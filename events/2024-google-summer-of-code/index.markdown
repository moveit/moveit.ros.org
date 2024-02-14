---
author: Henning Kayser
comments: false
date: 2024-01-26 00:00:00 -0700
layout: page
slug: 2024-google-summer-of-code
title: 2024 Google Summer of Code
---
# 2024 Google Summer of Code

MoveIt is planning to participate again in the [Google Summer of Code](https://summerofcode.withgoogle.com).
Below is a tentative list of project ideas, the content and scope is still being discussed and updated.
If you have your own project idea, please file a [MoveIt GitHub issue](https://github.com/ros-planning/moveit2/issues) using the "gsoc" label to get the ball rolling.

More information about the MoveIt GSoC project applications [tips at the bottom of this page](#tips-for-writing-a-successful-google-summer-of-code-application-for-moveit).

## Project Ideas

### Better Simulation Support
Experiment with alternative simulation backends like [MuJoCo](https://mujoco.org/), [O3DE](https://o3de.org/), [Gazebo](https://gazebosim.org/home) while improving interoperability with MoveIt.
Investigate new use cases and best practices, and document your findings in a well-structured review page including updated tutorials and demo implementations. An example application for showcasing improved simulation support could be running an admittance controller for solving a peg-in-hole problem.

**Mentors**: [David](https://github.com/dyackzan), [Henning](https://github.com/henningkayser)\
**Project Size**: 175 hours\
**Difficulty**: Medium\
**Skills Required**: ROS 2 and MoveIt basics, C++ or Python, experience with at least one of the named simulation backends\
**Outcome**: A repository providing simulated and documented examples for example use cases. Improved tutorials on setting up supported simulation backends, and a guide that compares the features for various applications.



### Improved Collision Avoidance
Integrate alternative collision checking backends like [HPP-FCL](https://github.com/humanoid-path-planner/hpp-fcl), or research SDF-based approaches for improving MoveIt's collision checking capabilities.
Experiment with new use cases like continuous collision detection or online collision avoidance.

Some example ideas include:
  - Support HPP-FCL as collision checking backend in MoveIt (see [#1435](https://github.com/ros-planning/moveit2/issues/1435), [#3167](https://github.com/ros-planning/moveit/pull/3167), [#1521](https://github.com/ros-planning/moveit2/pull/1521))
  - Update or reimplement MoveIt’s discrete SDF approach, apply with Servo or STOMP
  - Implement a sphere-based or convex mesh decomposition of the robot geometry for accelerated collision checking

**Mentors**: [Paul](https://github.com/pac48), [Henning](https://github.com/henningkayser)\
**Project Size**: 350 hours\
**Difficulty**: Medium/Hard\
**Skills Required**: C++, familiarity with ROS 2, knowledge of 3D representations, experience with FCL/Bullet or similar libraries\
**Skills Preferred**: knowledge of convex decomposition and SDF, hardware acceleration\
**Outcome**: Updates to MoveIt’s collision checking interface and plugins. Implement and improve tooling for preprocessing and optimization of the robot’s geometry. Benchmark collision checking use cases, aim to achieve a significant improvement in collision checking performance.


### Drake Integration Experiments
MoveIt is a motion planning framework that is well-integrated with ROS, whereas [Drake](https://drake.mit.edu/) is a model-based planning and control framework with state-of-the-art optimization capabilities. This project seeks to combine the strengths of both these approaches by exploring the use of Drake within MoveIt’s planning pipeline or hybrid planning framework for tasks such as motion planning, trajectory optimization, and/or online control. The ideal candidate will have familiarity with at least one of these two software tools, and in their proposal would describe their specific ideas towards the desired outcomes.

Some example ideas include:
  - Creating a MoveIt motion planning plugin that uses Drake’s trajectory optimization based planners, such as direct transcription and direct collocation.
  - Creating a MoveIt planning response adapter that uses TOPPRA for time-optimal parameterization.
  - Using Drake’s dynamical modeling capabilities for online control, such as Model Predictive Control (MPC), as a local planner in MoveIt.


**Mentors**: [Sebastian Jahr](https://github.com/sjahr), [Sebastian Castro](https://github.com/sea-bass)\
**Project Size**: 350 hours\
**Difficulty**: Hard\
**Skills Required**: Experience with C++, ROS 2, optimal planning and control, and at least one of MoveIt or Drake\
**Outcome**: Releasing one or more experimental MoveIt capabilities that utilize Drake for motion planning, trajectory optimization, and/or online control. This should include supporting documentation and examples, as well as sharing a general methodology for using Drake with MoveIt.


### Support Closed-chain Kinematics
MoveIt’s kinematic representation is modeled as a tree which implies an open kinematic chain. However, robots are supposed to operate in an environment and perform manipulation tasks that may involve closed-chain kinematics or dynamics: e.g. opening and closing doors and bi-manual object manipulation. While these can be approximated using open chain FK and IK, these techniques may introduce undesired inaccuracies which translate to poor trajectory and controller execution. This project is about researching and implementing methods for improving the representation of the robot’s kinematic or of kinematic constraints in the scene, and to implement optimized kinematic solvers for computing them.

**Mentor**: [Tyler](https://github.com/tylerjw), [Henning](https://github.com/henningkayser)\
**Project Size**: 350 hours\
**Skills Required**: Research background in robotics, expert knowledge of kinematic representations of robots\
**Difficulty**: Hard\
**Outcome:**
  - Example configurations and use cases for applications with closed-chain kinematic problems
  - Documentation and tutorials on solving motion planning problems involving closed-chain kinematics


### Zenoh Support & Benchmarking
[rmw_zenoh](https://github.com/ros2/rmw_zenoh) is the exciting new middleware in ROS 2 in Jazzy. MoveIt is a complex project that depends on many ROS 2 features. We want to understand how using rmw_zenoh impacts systems using MoveIt. We also wish to document the configuration changes needed to make rmw_zenoh work well with MoveIt.
To do well in this project, you’ll need to be experienced in configuring and using MoveIt and ROS. A good primer for this project would be to work through the MoveIt, ROS, and DDS tutorials to configure the various DDS middlewares and understand their impacts on the robot system. To make a fair comparison and write helpful docs, you must understand how to configure ROS with the various middlewares.
Doing this project will allow you to contribute to the newest development in ROS and enable others who build MoveIt-based robot projects to make the correct middleware choices for their projects.


**Mentor**: [Henning](https://github.com/henningkayser), [Tyler](https://github.com/tylerjw)\
**Project Size**: 90 hours\
**Skills Required**: ROS 2 experience\
**Difficulty**: Medium\
**Outcome**:
  - Documentation on Zenoh configuration and use with MoveIt contributed to the tutorial site.
  - Find and report bugs in rmw_zenoh when used with MoveIt
  - Benchmark impacts on message latency
  - Benchmark impacts on large messages such as point clouds
  - Benchmark how the number of topics and participants impacts performance
  - Contribute changes to MoveIt and ROS where applicable to support Zenoh users 
  - Contribute CI jobs to test MoveIt with each ROS middleware
  - Benchmark the use of the zenoh-dds bridge in comparison to rmw_zenoh



## Tips for writing a successful Google Summer of Code application for MoveIt

* **Follow [GSoC's Writing a proposal guidelines](https://google.github.io/gsocguides/student/writing-a-proposal)**
* **Create at least one pull request in a MoveIt-related repository and include a reference to this pull request in your application.**
* Be specific in describing your experience. Rather than saying "experienced C++ programmer," point us to code that you have written and contributed.
* Describe your background and experience in robotics and ROS 2.
* Tell us what you hope to get out of the Summer of Code experience.
* Reach out to the project mentors on GitHub to discuss your ideas
* For further questions, please contact [Henning Kayser](mailto:henningkayser@picknik.ai)
