---
author: Tyler Weaver
comments: false
date: 2021-12-17 17:00:00+07:00
layout: post
slug: sprint-report-3
title: MoveIt Sprint Report
description: Nov 26 - Dec 16
media_type: image
media_link: /assets/images/blog_posts/2021_11_24_sprint_update_a.png
categories:
- MoveIt
- ROS
---

## Nov 26 - Dec 16

We have just finished our third MoveIt sprint using ZenHub for planning and would like to share with you what the PickNik team is doing to improve MoveIt.  From a high level the major efforts of each of the team members did:

- [Abishalini](https://github.com/Abishalini) continues to lead the work of forward porting from MoveIt on ROS 1.  In this sprint, she merged a particularly large forward port containing some nuanced cmake changes.
- [AndyZe](https://github.com/AndyZe) finished getting the [Hybrid Planner](https://moveit.picknik.ai/main/doc/examples/hybrid_planning/hybrid_planning_tutorial.html) merged.  He also landed a tutorial for it to make it easier for users.
- [DLu](https://github.com/DLu) landed his change to improve robot_description handling and opened a PR that refactors and ports the framework for MoveIt Setup Assistant.
- [henningkayser](https://github.com/henningkayser) finished his port of the [Pilz Industrial Motion Planner](https://moveit.picknik.ai/main/doc/how_to_guides/pilz_industrial_motion_planner/pilz_industrial_motion_planner.html) and got that merged.
- [JafarAbdi](https://github.com/JafarAbdi) released [rviz_visual_tools](https://index.ros.org/p/rviz_visual_tools/), [moveit_visual_tools](https://index.ros.org/p/moveit_visual_tools/), and [moveit_msgs](https://index.ros.org/p/moveit_msgs/) into various ROS 2 distros.
- [ParthasarathyBana](https://github.com/ParthasarathyBana) merged his first PR into MoveIt getting rid of our use of ``std::endl``.
- [stephanie-eng](https://github.com/stephanie-eng) updated the links and list of MoveIt items on [REP2005](https://www.ros.org/reps/rep-2005.html).
- [tylerjw](https://github.com/tylerjw) find ways to speed our CI times and continued his work refactoring servo.
- [vatanaksoytezer](https://github.com/vatanaksoytezer) moved the run_* examples from moveit2 into the tutorials package.

### MoveIt 2

In this sprint, we landed the port of the [Pilz Industrial Motion Planner](https://moveit.picknik.ai/main/doc/how_to_guides/pilz_industrial_motion_planner/pilz_industrial_motion_planner.html) into MoveIt 2.

The merge of this introduced a circular dependency we are working on resolving before we can release for Galactic and Rolling.
There are two approaches in PRs and we are working out which approach will work best.
[henningkayser](https://github.com/henningkayser) did this port over the last few sprints and was especially careful to make sure many of the tests were ported and working before we merged it.

In this sprint, we also landed the [Hybrid Planner](https://moveit.picknik.ai/main/doc/examples/hybrid_planning/hybrid_planning_tutorial.html) into MoveIt 2 which was the project of [sjahr](https://github.com/sjahr) this last summer.
[AndyZe](https://github.com/AndyZe) lead the effort to get it finished so it can be merged.

We look forward to releasing both of these into Galactic and Rolling.

### MoveIt Setup Assistant

The last large missing feature from MoveIt on ROS 2 is the MoveIt Setup Assistant.
It is a wizard that assists users in getting their robot working with MoveIt.
The primary reason it has been held back as long as it has is we are not net content with the state of configs and launch files in MoveIt on ROS 2.
Meanwhile though [DLu](https://github.com/DLu) has prepared a [draft PR here](https://github.com/ros-planning/moveit2/pull/838) that modularizes MSA in a way that should make it much easier to contribute and develop the various steps of MSA.
Hopefully, shortly we can finish what he started and get this landed into MoveIt.

### Infrastructure

[vatanaksoytezer](https://github.com/vatanaksoytezer) has continued to the config for the Mergify bot.
This was the first sprint where it automated a few backports and it is already saving a bunch of time.

As an unintended consequence of merging the Pilz Planner the build times when building with the clang-10 compiler greatly increased.
In CI for a few days, it was normal for it to take greater than three hours to finish the workflow that builds with the clang compiler.
[tylerjw](https://github.com/tylerjw) profiled this and discovered that the ``ld`` linker was essentially hanging for a long while.
He was able to decrease not only the CI times for the clang workflow but all workflows by switching us to using the [LLD Linker](https://lld.llvm.org/) in CI.

### New team member

This sprint [ParthasarathyBana](https://github.com/ParthasarathyBana) joined our team and merged his first PR into MoveIt.
The PR added helped make MoveIt follow [modern C++ best practices](https://github.com/cpp-best-practices/cppbestpractices/blob/master/08-Considering_Performance.md#get-rid-of-stdendl) by getting rid of our use of ``std::endl``.
Here is a link to his PR: [Get rid of "std::endl"](https://github.com/ros-planning/moveit2/pull/918).

### Good First Issues for Modern C++ Best Practices

[tylerjw](https://github.com/tylerjw) created an [epic in ZenHub](https://github.com/ros-planning/moveit2/issues/840) to moderize MoveIt's use of C++ based on the advice from Jason Turner's github repo [cppbestpractices](https://github.com/cpp-best-practices/cppbestpractices).
This epic contains issues that range from trivial find and replace tasks to ones that are much more nuanced.
The exciting part of this is several new contributors have already contributed changes to MoveIt during this sprint.
In the past, we tried creating ``good-first-issue`` issues and struggled to find tasks that were both meaningful and well enough defined for new contributors.
This new approach is both really good for the project and provides new contributors with very well-structured tasks they can submit PRs for.
