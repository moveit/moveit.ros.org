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

### Improved benchmarking support in MoveIt

* Utilize the [MoveIt Benchmark Suite](https://github.com/captain-yoshi/moveit_benchmark_suite) developed during a previous GSoC project to prepare a set of realistic scenarios to benchmark independent components of the MoveIt eco-system. Based on these tests, we would like to setup a CI runner to evaluate the performance impact of new pull-requests in MoveIt. An advanced component in this might evaluate the benchmark results for statistically significant changes and point these out in a CI report.
* Expected outcome: New pull requests are automatically checked for performance regressions or improvements.
* Project size: large (350 hours)
* Difficulty: medium
* Preferred skills: C++, Python, MoveIt, Motion Planning, Benchmarking, and Building Infrastructure
* Mentor: [Michael Görner](mailto:goerner@informatik.uni-hamburg.de)

### Add ability to attach/detach end-effector links

* Add functionality to MoveIt to programmatically attach and detach grippers from a manipulator. See [this issue](https://github.com/ros-planning/moveit2/issues/208) for a more detailed discussion.
* Expected outcome: End-effector tooling can be swapped programmatically.
* Project size: large (350 hours)
* Difficulty: hard
* Preferred skills: several years experience in (ROS, MoveIt, C++)
* Mentor: [Andy Zelenak](mailto:zelenak@picknik.ai)

### Tutorial for multiple robot arms

* While there are some ROS Answers posts and examples floating around, there is no definitive resource on how to set up multiple manipulators with MoveIt (and especially MoveIt 2). The goal of this project is to write a tutorial that should become the reference.
* Expected outcome: A ROS beginner can read the tutorial and set up a ros2_control / MoveIt pipeline without additional help.
* Project size: medium (175 hours)
* Difficulty: easy
* Preferred skills: Technical Writing, ROS, MoveIt, Python, and YAML
* Mentor: [Andy Zelenak](mailto:zelenak@picknik.ai)

### Refactor Calculations and add Tests

* MoveIt contains many routines that mix actions that produce different results depending on when or how many times they are run and pure calculations where the output is always the same with the same inputs.  Because of the mixing of types of code MoveIt is larger than it needs to be with a significant amount of redundant logic. Secondly, MoveIt is less robust than it could be because it is very difficult to test those routines and the test base fails to consider many of the side effects. For this project, the contributor will refactor calculations (pure functions) out of code that has side-affects (depends on when or how many times it is run) and will write tests for that code in isolation. This will make MoveIt more robust, easier to maintain, and easier to use. See [this issue](https://github.com/ros-planning/moveit2/issues/1082) for more discussion.  Doing this project will develop skills in functional programming, code refactoring, and software architecture.
* Expected outcome: Core parts of MoveIt are refactored to use pure functions.
* Project size: medium (175 hours)
* Difficulty: hard
* Preferred skills: C++, Functional Programming, and GTest
* Mentor: [Tyler Weaver](mailto:tyler@picknik.ai), [Michael Görner](mailto:goerner@informatik.uni-hamburg.de)

### Bullet collision checking integration

* Bullet support is partially done, but more work is needed. [A memory leak issue](https://github.com/ros-planning/moveit_task_constructor/issues/232#issuecomment-774249206) was identified that needs to be fixed. Support for continuous collision checking would be nice. Related pull requests include [PR 2897](https://github.com/ros-planning/moveit/pull/2897) and [PR 2838](https://github.com/ros-planning/moveit/pull/2838).
* Project size: medium (175 hours)
* Expected outcome: Continuous collision checking is supported and the memory leak is eliminated.
* Difficulty: hard
* Preferred skills: MoveIt, Collision Checking, and C++
* Mentor: [Simon Schmeisser](mailto:simon.schmeisser@optonic.com), [Michael Görner](mailto:goerner@informatik.uni-hamburg.de)
### Better Parallel Planning with MoveIt 2
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

## Tips for writing a successful Google Summer of Code application for MoveIt

* **Create at least one pull request in a MoveIt-related repository and include a reference to this pull request in your application.**
* Be specific in describing your experience. Rather than saying "experienced C++ programmer," point us to code that you have written and contributed.
* Describe your background and experience in robotics and ROS.
* Tell us what you hope to get out of the Summer of Code experience.
