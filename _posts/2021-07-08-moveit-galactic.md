---
author: Henning Kayser
comments: false
date: 2021-07-08
layout: post
title: MoveIt 2.2 Galactic Release
media_type: image
media_link: /assets/images/blog_posts/2021_07_08_galactic.png
description: The MoveIt community is proud to announce the release of MoveIt 2.2 Galactic
categories:
- ROS
- MoveIt
- Galactic
---

With MoveIt’s latest version bump to 2.2.0 we’ve finally added support for running MoveIt on Galactic and Rolling. Besides bug fixes, this release includes:


* Full sync with MoveIt 1 ([#505](https://github.com/ros-planning/moveit2/pull/505))
    * Use MoveItCpp as MoveGroup context, multi planning pipeline support ([moveit#2127](https://github.com/ros-planning/moveit/issues/2127))
    * Much faster FCL collision distance checks [moveit#2698](https://github.com/ros-planning/moveit/pull/2698)
* Enabled Bullet collision detection ([#473](https://github.com/ros-planning/moveit2/issues/473))
* Galactic and Rolling Support, enable CI ([#494](https://github.com/ros-planning/moveit2/issues/494))


(see [here](https://github.com/ros-planning/moveit2/commit/43050efd60fdaae7e64299c0d8de71de80c7af71) for full CHANGELOG)

For now, all distros are supported from the [main](https://github.com/ros-planning/moveit2/tree/main) branch. In the future, main will run Rolling, support for older distros - like Foxy now - will be continued in separate maintenance branches.

The release is currently only available as source install as we are still working on some issues with the build farm. For getting started, check out the [install instructions](https://moveit.ros.org/install-moveit2/source/) and the [tutorials](https://moveit2-tutorials.picknik.ai/).

### What's next...
You can always find out more about what features and fixes are in the next version of MoveIt on the [MoveIt Roadmap](https://moveit.ros.org/documentation/contributing/roadmap/) along with long term goals and sprint plans.
