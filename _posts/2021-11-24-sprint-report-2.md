---
author: Tyler Weaver
comments: false
date: 2021-11-30 17:00:00+07:00
layout: post
slug: sprint-report-2
title: MoveIt Sprint Report
description: Nov 5 - Nov 25
media_type: image
media_link: /assets/images/blog_posts/2021_11_24_sprint_update.png
categories:
- MoveIt
- ROS
---

We are on our second MoveIt sprint using ZenHub for planning and would like to share with you what the PickNik team is doing to improve MoveIt.  From a high level the major efforts of this sprint were:

- [Abishalin](https://github.com/Abishalini) has taken over forward porting work from MoveIt on ROS 1 and finished a PR for testing of TrajectoryMonitor.
- [AndyZe](https://github.com/AndyZe) is working to get [sjahr](https://github.com/sjahr)'s Hybrid Planning feature finished.
- [DLu](https://github.com/DLu) is working on improving robot_description handling.
- [henningkayser](https://github.com/henningkayser) updated documentation, did many reviews, and lead the team.
- [JafarAbdi](https://github.com/JafarAbdi) cut a Foxy release to get bug fixes out into debians.
- [schornakj](https://github.com/schornakj) added functionality to MoveItControllerManager to let it manage more than just trajectory execution controllers.
- [stephanie-eng](https://github.com/stephanie-eng) added descriptions and default values to parameters for moveit_servo.
- [tylerjw](https://github.com/tylerjw) continued the project of making the documentation more correct and user-friendly.
- [vatanaksoytezer](https://github.com/vatanaksoytezer) added a Mergify bot to CI and helped with the tutorial website update.

### MoveIt 2

This sprint [henningkayser](https://github.com/henningkayser) is continuing his work on porting the Pilz planner into MoveIt 2.
The Hybrid Planner is also getting close to being merged.
These improvements and many more are targeted to be included in our December Galactic release of MoveIt.

### MoveIt Task Constructor on ROS 2

[JafarAbdi](https://github.com/JafarAbdi)'s project to port MTC to ROS 2 is now merged.
You can see his work [here in the PR](https://github.com/ros-planning/moveit_task_constructor/pull/170).
MTC is now complete ready to be used on ROS 2.

### Infrastructure

[vatanaksoytezer](https://github.com/vatanaksoytezer) made some nice additions to our infrastructure.
In this last sprint, he rolled out a Mergify bot into both the `moveit2_tutorials` and `moveit2` repos.
The first thing this bot helps with is to detect when there is a conflict with a PR and ping the author to fix it.
Secondly, it automates backporting changes.
We've already used it several times for things in the tutorials and it is saving us time and making sure changes don't get lost.

### Tutorials

The base homepage of the tutorials for MoveIt 2 has changed this sprint from [http:://moveit2_tutorials.picknik.ai](https://moveit.picknik.ai) to [https://moveit.picknik.ai](https://moveit.picknik.ai).
The reason for the URL change is that it is a GitHub page and you cannot get an SSL certificate for pages with an underscore in the name.

Secondly, the tutorials now follow the pattern of the [offical ROS 2 docs](https://docs.ros.org/en/foxy/index.html) in that they are deployed from multiple branches for the various ROS repos.

Currently, the Foxy version is the most up-to-date and tested version of the tutorials.
We look forward to having a well-tested Galactic version of the tutorials ready soon.
There are still many tutorials on the main branch that are not ported yet and need more testing.

### New team member

This sprint [stephanie-eng](https://github.com/stephanie-eng) joined our team and merged her first PR into MoveIt.
The PR added descriptions and default values to each of the parameters in moveit_servo.
Here is a link to her PR: [Use ros2 interfaces for parameters in moveit_servo](https://github.com/ros-planning/moveit2/issues/790).

### Syncing changes from MoveIt on ROS 1

[henningkayser](https://github.com/henningkayser) added documentation to the [MoveIt website here](https://moveit.ros.org/documentation/contributing/syncing_backporting/) about the process we are now using to sync changes made on MoveIt on ROS 1 into MoveIt on ROS 2.
[Abishalin](https://github.com/Abishalini) has taken doing the work of these syncs and has closed many of these.  We are still many commits behind but are now doing syncs regularly and catching up.
