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
Experiment with alternative simulation backends like MuJoCo, O3DE, Gazebo while improving interoperability with MoveIt.
Investigate new use cases and best practices, and document your findings in a well-structured review page including updated tutorials and demo implementations.

Mentor: [David](https://github.com/dyackzan), [Henning](https://github.com/henningkayser)

### Improved Collision Avoidance
Integrate alternative collision checking backends like HPP-FCL, or research SDF-based approaches for improving MoveIt's collision checking capabilities.
Experiment with new use cases like continuous collision detection or online collision avoidance.

Mentor: [Paul](https://github.com/pac48), [Henning](https://github.com/henningkayser)

### Drake Integration Experiments
Review and understand the different motion planning and control capabilities of Drake and MoveIt.
Document options for making both frameworks interoperate in solving particular use cases.
Select at least one use case in MoveIt that could be improved or enabled by using features provided in Drake, and implement a demo application.

Mentor: [Sebastian Jahr](https://github.com/sjahr), [Sebastian Castro](https://github.com/sea-bass)

### Support Closed-chain Kinematics
Investigate use cases for closed-chain kinematics planning problems and MoveIt's current limitations in solvng them.
Select at least one demo application to implement and demo while improve MoveIt's planning capabilities.

Mentor: [Tyler](https://github.com/tylerjw), [Henning](https://github.com/henningkayser)

### Zenoh Support & Benchmarking
Enable and test the new ROS 2 middelware backend Zenoh running MoveIt and auxiliary runtime dependencies.
Set up a simple benchmark for testing use cases like visual servoing for stressing the middleware, and compare the results with the existing DDS implementations.

Mentor: [Henning](https://github.com/henningkayser), [Tyler](https://github.com/tylerjw)


## Tips for writing a successful Google Summer of Code application for MoveIt

* **Follow [GSoC's Writing a proposal guidelines](https://google.github.io/gsocguides/student/writing-a-proposal)**
* **Create at least one pull request in a MoveIt-related repository and include a reference to this pull request in your application.**
* Be specific in describing your experience. Rather than saying "experienced C++ programmer," point us to code that you have written and contributed.
* Describe your background and experience in robotics and ROS.
* Tell us what you hope to get out of the Summer of Code experience.
* Reach out to the project mentors on GitHub to discuss your ideas
* For further questions, please contact [Henning Kayser](mailto:henningkayser@picknik.ai)
