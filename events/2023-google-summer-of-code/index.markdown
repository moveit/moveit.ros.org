---
author: Mark Moll
comments: false
date: 2023-02-02 00:00:00 -0700
layout: page
slug: 2023-google-summer-of-code
title: 2023 Google Summer of Code
---
# 2023 Google Summer of Code

MoveIt is planning to participate again in the [Google Summer of Code](https://summerofcode.withgoogle.com). Below is a tentative list of project ideas. If you have your own project idea, feel free to create a pull request on the [repository for this page](https://github.com/ros-planning/moveit.ros.org). Unlike previous years, there are now two different project sizes. Medium projects are 175 hours, while large projects are 350 hours. See the [Google Summer of Code FAQ](https://developers.google.com/open-source/gsoc/faq) for details.

For general MoveIt GSoC questions you can contact [Mark Moll](mailto:mark@picknik.ai) (**but make sure to read the [tips at the bottom of this page first](#tips-for-writing-a-successful-google-summer-of-code-application-for-moveit)**).

## Project ideas

### Add ability to attach/detach end-effector links [MoveIt 2]

* Add functionality to MoveIt to programmatically attach and detach grippers from a manipulator. See [this issue](https://github.com/ros-planning/moveit2/issues/208) for a more detailed discussion.
* Expected outcome: End-effector tooling can be swapped programmatically.
* Project size: large (350 hours)
* Difficulty: hard
* Preferred skills: several years experience in (ROS, MoveIt, C++)
* Mentor: [Andy Zelenak](mailto:zelenak@picknik.ai)

### Refactor Calculations and add Tests [MoveIt 2]

* MoveIt contains many routines that mix actions that produce different results depending on when or how many times they are run and pure calculations where the output is always the same with the same inputs.  Because of the mixing of types of code MoveIt is larger than it needs to be with a significant amount of redundant logic. Secondly, MoveIt is less robust than it could be because it is very difficult to test those routines and the test base fails to consider many of the side effects. For this project, the contributor will refactor calculations (pure functions) out of code that has side-affects (depends on when or how many times it is run) and will write tests for that code in isolation. This will make MoveIt more robust, easier to maintain, and easier to use. See [this issue](https://github.com/ros-planning/moveit2/issues/1082) for more discussion.  Doing this project will develop skills in functional programming, code refactoring, and software architecture.
* Expected outcome: Core parts of MoveIt are refactored to use pure functions.
* Project size: medium (175 hours)
* Difficulty: hard
* Preferred skills: C++, Functional Programming, and GTest
* Mentor: [Tyler Weaver](mailto:tyler@picknik.ai), [Michael Görner](mailto:goerner@informatik.uni-hamburg.de)

### Better Parallel Planning [MoveIt 2]

* One of the latest features of MoveIt 2 is the [parallel planning API for moveit_cpp](https://moveit.picknik.ai/main/doc/how_to_guides/parallel_planning/parallel_planning_tutorial.html). It enables using multiple planning pipelines in parallel, a choosing stopping criteria and a solution selection function. While the initial implementation is finished and the feature is fully operational, there is still room for improvement. Here is s list of ideas in which ways the feature could be developed further over the course of a GSoC project:
  * Enable parallel planning in the [move_group interface](https://moveit.picknik.ai/main/doc/examples/move_group_interface/move_group_interface_tutorial.html)
  * Make parallel planning usable in [RVIZ Motion Planning Panel](https://moveit.picknik.ai/main/doc/tutorials/quickstart_in_rviz/quickstart_in_rviz_tutorial.html)
  * Visualize different parallel planning solutions in RVIZ
  * Improve logging of parallel planning processes
  * Add additional default solution selection functions
  * Your idea to make parallel planning with MoveIt 2 better
* This list is neither complete nor needs all items to be addressed in your project. In addition to choosing some items for a project proposal, it would be very exciting to hear your improvement idea(s).
* Expected outcome: Merge multiple PRs that address (some of) the development ideas above
* Project size: Large (350 hours)
* Difficulty: medium
* Preferred skills: MoveIt 2, ROS 2, Motion Planning, C++
* Mentor: [Sebastian Jahr](mailto:sebastian.jahr@picknik.ai), [Jafar Uruç](mailto:jafar.uruc@gmail.com)

### Improved Realtime Control with MoveIt Servo [MoveIt 2]

* [moveit_servo](https://moveit.picknik.ai/main/doc/examples/realtime_servo/realtime_servo_tutorial.html) is the realtime control package of MoveIt. It is used for teleoperation and reactive or contact applications such as opening doors or generally interacting with any physical object with uncertain position. One of the downsides of Servo is that it only offers a ROS interface. The interface could be improved so that other C++ applications have better access to Servo; it would also be nice to document how a user can set custom IK goals. Specifically:
  * Implement a C++ interface so that other C++ applications can instantiate and interact with Servo.
  * Implement callbacks for pausing. This could be useful in scenarios such as opening a door, e.g. "Rotate 90* about X."
  * Document how to create and use custom IK goal functions with the [pick_ik package](https://github.com/PickNikRobotics/pick_ik).
  * Implement realtime IK cost function updates. This could be useful in scenarios where the motion profile changes, such as "insert a key in a lock then turn it."
* Expected outcome: Implement the above ideas and document them well in the [tutorial](https://moveit.picknik.ai/main/doc/examples/realtime_servo/realtime_servo_tutorial.html)
* Project size: Large (350 hours)
* Difficulty: hard
* Preferred skills: MoveIt 2, ROS 2, C++, transformations or geometry for robotics
* Mentor: [Andy Zelenak](mailto:zelenak@picknik.ai), [Sebastian Castro](mailto:sebastian.castro@picknik.ai)

### Improvements to pick_ik Solver [MoveIt 2]

* [pick_ik](https://github.com/PickNikRobotics/pick_ik) is an inverse kinematics (IK) solver developed for MoveIt, which is largely based on the [BioIK](https://github.com/TAMS-Group/bio_ik) solver, but developed with extensibility and ease of use in mind using modern C++. As this is a relatively new solver, there is more work needed to communicate how to use it, its strengths and weaknesses relative to other IK solvers, and to expand the existing feature set.
* Required tasks for this project:
  * Implement official benchmarks against other IK solvers compatible with MoveIt 2 (e.g., KDL, BioIK, TRAC-IK) to compare planning time, success rate, and other metrics related to solution quality. This will involve finishing the TRAC-IK ROS 2 port to work as a MoveIt 2 plugin.
  * Improve documentation, including a comparison of `pick_ik` and BioIK features.
  * Add an official `pick_ik` tutorial to the [MoveIt 2 Tutorials repo](https://github.com/ros-planning/moveit2_tutorials)
* Additional tasks to explore:
  * Implement additional cost functions to establish and exceed feature parity with BioIK, such as gaze objectives, collision checking, etc.
  * Use a generic nonlinear optimization package, such as [NLopt](https://nlopt.readthedocs.io/en/latest/), which is used by the [TRAC-IK](https://traclabs.com/projects/trac-ik/) tool, as an alternative to the numeric gradient solver.
* Expected outcome: Implement the above ideas and document them well in the pick_ik and MoveIt 2 tutorials repositories.
* Project size: Large (350 hours)
* Difficulty: hard
* Preferred skills: MoveIt 2, ROS 2, C++, transformations or geometry for robotics
* Mentor: [Sebastian Castro](mailto:sebastian.castro@picknik.ai), [Tyler Weaver](mailto:tyler@picknik.ai)

### Update OMPL and ompl_interface [MoveIt 2]

* The Open Motion Planning Library (OMPL) provides the default planning pipeline for MoveIt. It is a library that contains many sampling-based planning algorithms (like PRM and RRT), but is starting to show its age (development started in 2010!). This project is focused on modernizing OMPL, adopting more idiomatic C++17 patterns and avoiding things like using raw pointers and type casting. There are also many OMPL features that are not well supported within MoveIt's [`ompl_interface`](https://github.com/ros-planning/moveit2/tree/main/moveit_planners/ompl/ompl_interface) just yet. Finally, there are features in the [`ompl_interface`](https://github.com/ros-planning/moveit2/tree/main/moveit_planners/ompl/ompl_interface) that seem generally useful and could be abstracted out of this.
* Possible tasks (you are not required to do all of this; your application should make clear which parts you want to focus on):
  * Use `clang-tidy` to identify areas of improvement in OMPL. Remove raw pointer usage in the most commonly used parts. Eliminate ambiguity in the API about the lifetime of objects.
  * Make constrained motion planning work more generally. See, e.g., this [work-in-progress PR](https://github.com/ros-planning/moveit2/pull/1946) for a specific (but very important) use case.
  * Generalize things in [`ompl_interface`](https://github.com/ros-planning/moveit2/tree/main/moveit_planners/ompl/ompl_interface) and move them to `moveit_core`.
* Project size: Large (350 hours)
* Difficulty: hard
* Preferred skills: MoveIt 2, OMPL, C++, good understanding of algorithms
* Mentor: [Zak Kingston](mailto:zak@rice.edu), [Mark Moll](mailto:mark@picknik.ai), [Henning Kayser](mailto:henningkayser@picknik.ai)

### Bullet collision checking integration [MoveIt 1/2]

* Bullet support is partially done, but more work is needed. [A memory leak issue](https://github.com/ros-planning/moveit_task_constructor/issues/232#issuecomment-774249206) was identified that needs to be fixed. Support for continuous collision checking would be nice. Related pull requests include [PR 2897](https://github.com/ros-planning/moveit/pull/2897) and [PR 2838](https://github.com/ros-planning/moveit/pull/2838).
* Project size: medium (175 hours)
* Expected outcome: Continuous collision checking is supported and the memory leak is eliminated.
* Difficulty: hard
* Preferred skills: MoveIt, Collision Checking, and C++
* Mentor: [Simon Schmeisser](mailto:simon.schmeisser@optonic.com), [Michael Görner](mailto:goerner@informatik.uni-hamburg.de)

### Improved benchmarking support [MoveIt 1]

* Utilize the [MoveIt Benchmark Suite](https://github.com/captain-yoshi/moveit_benchmark_suite) developed during a previous GSoC project to prepare a set of realistic scenarios to benchmark independent components of the MoveIt eco-system. Based on these tests, we would like to setup a CI runner to evaluate the performance impact of new pull-requests in MoveIt. An advanced component in this might evaluate the benchmark results for statistically significant changes and point these out in a CI report.
* Expected outcome: New pull requests are automatically checked for performance regressions or improvements.
* Project size: large (350 hours)
* Difficulty: medium
* Preferred skills: C++, Python, MoveIt, Motion Planning, Benchmarking, and Building Infrastructure
* Mentor: [Michael Görner](mailto:goerner@informatik.uni-hamburg.de)


## Tips for writing a successful Google Summer of Code application for MoveIt

* **Follow [GSoC's Writing a proposal guidelines](https://google.github.io/gsocguides/student/writing-a-proposal)**
* **Create at least one pull request in a MoveIt-related repository and include a reference to this pull request in your application.**
* Be specific in describing your experience. Rather than saying "experienced C++ programmer," point us to code that you have written and contributed.
* Describe your background and experience in robotics and ROS.
* Tell us what you hope to get out of the Summer of Code experience.
* Reach out to the mentor(s) of your preferred project to discuss your ideas
