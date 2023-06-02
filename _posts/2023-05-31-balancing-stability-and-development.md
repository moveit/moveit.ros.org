---
author: Tyler Weaver
comments: false
date: 2023-05-31
layout: post
title: "Balancing Stability and Feature Development in Moveit and ROS"
media_type: image
media_link: /assets/images/blog_posts/ros-versions.png
description: Clarifying how MoveIt balances the need for stability and development in the ROS ecosystem.
categories:
- MoveIt 2
- ROS
---

> [This was originally posted as a GitHub discussion here.](https://github.com/orgs/ros-planning/discussions/2190)

It has become apparent that there needs to be more clarity about how MoveIt and ROS balance the need for stability and development. This is more complex because our dependencies attempt to strike a balance and sometimes take different approaches.

## Goals
This discussion aims to codify our practices for development on MoveIt into a policy to reduce confusion for users, contributors, and related ROS packages.

## Stability and development are at odds
Users (developers building robotics applications) very reasonably want stability, the latest features, and bug fixes. These two desires are at odds and can result in different approaches.

Stability is valuable because it reduces the overhead time you spend keeping up with changes in your dependencies and can focus on building your application. Many projects that use ROS default to choosing the latest LTS release of ROS to base their project on for stability.

When you choose a stable (no API/ABI breakages allowed) version of your dependencies, you opt out of something developers also need. That is the ability to easily contribute changes to your dependencies to support your project's goals. This is where the natural tension comes in.

## Background on ROS
MoveIt is one of the major application libraries in the ROS ecosystem (nav2 being another). As a result, we are expected to follow similar policies to ROS regarding changes and our releases. To understand how ROS is developed, read the [Developer Guide on the ROS 2 documentation](https://docs.ros.org/en/rolling/The-ROS2-Project/Contributing/Developer-Guide.html). I will highlight the relevant points.

> Major version increments (i.e. breaking changes) should not be made within a released ROS distribution.
> For compiled code, the ABI is considered part of the public interface. Any change that requires recompiling dependent code is considered major (breaking).

> For most C and C++ packages the declaration is any header that it installs. However, it is acceptable to define a set of symbols which are considered private. Avoiding private symbols in headers can help with ABI stability, but is not required.

The result of these policies is that if you use a released version of ROS (any version that is not Rolling) you receive the block of changes made to ROS mostly once a year. There are some cases where changes are back-ported in non-ABI breaking ways when a critical enough bug is found, but this is rare.

## What does this mean for MoveIt releases?

MoveIt releases into the stable versions of ROS (currently Humble and Iron) and keeps branches to track those releases. Like ROS, those releases are begun by branching off the `main` unstable development branch to a branch named for the release. Initially, when a new ROS release comes out, like now with ROS Iron, we release the same version into the new stable release and ROS Rolling simultaneously from the `main` branch.

## Main branch supports more than one ROS release
This leaves us in a tough spot when working with clients using MoveIt on their projects. PickNik's clients drive new feature development with their cutting-edge applications. They also contribute bug fixes upstream that are discovered when working on their projects. As many of these improvements would cause ABI breaks they cannot be released into the stable ROS releases.

At the same time, many of these clients desire to use a stable (sometimes even the LTS) version of ROS in their projects to reduce the time we spend adapting to upstream changes in ROS. For this reason, we use compile time features to make the `main` branch of MoveIt compatible with the latest LTS, any non-LTS since the latest LTS, and ROS Rolling. Currently, the `main` branch of MoveIt supports Humble, Iron, and Rolling. Here is a code example of how we achieve this:
https://github.com/ros-planning/moveit2/blob/243b0b2ccac156a75bcd158eefa86c8acf409110/moveit_ros/planning_interface/move_group_interface/src/move_group_interface.cpp#L89-L102

## So who should use the stable binaries of MoveIt in the OSRF apt repo?
Any project that can be built using the version of MoveIt when the stable version of ROS was released is welcome to use those binaries. We do not normally use them ourselves for the reasons stated above.

## Can't we backport all features from `main` into `humble`?
Generally, no. This is because of the requirement to maintain ABI and API stability on the `humble` release. We do have a bot that makes backporting into the `humble` branch easier in cases where it is possible. Just tag any PR with the label `backport-humble`, and the bot will attempt to create a PR to backport it.

## I want to use MoveIt from the main branch on ROS Humble but don't want to build it from the source
We understand building MoveIt from the source (especially in CI) can be slow. To help with that, we have created a apt repository with Debians for MoveIt from the main branch on all supported versions of ROS that is built nightly in GitHub Actions. You can find it here: https://github.com/moveit/moveit2_packages

To use it, you can go to the branch for the ROS version you want to use and then execute the commands listed in the README. Then when you run `apt update && apt upgrade` you will have the latest version of moveit installed in the same way it would be installed from the ROS buildfarm. Here is an example of how you would enable it for `humble`:

```shell
echo "deb [trusted=yes] https://raw.githubusercontent.com/moveit/moveit2_packages/jammy-humble/ ./" | sudo tee /etc/apt/sources.list.d/moveit_moveit2_packages.list
echo "yaml https://raw.githubusercontent.com/moveit/moveit2_packages/jammy-humble/local.yaml humble" | sudo tee /etc/ros/rosdep/sources.list.d/1-moveit_moveit2_packages.list
```

The versions of these packages have the git hash of MoveIt they were built from appended to the Debian version, so apt will automatically upgrade to the newest one.

## So MoveIt should be used from the unstable main branch?
Yes. The only constant in software is change. You can deal with change incrementally in small amounts or all at once in large bang-bang releases. Even those who rely on stable software versions are forced to upgrade eventually. On one extreme, delaying upgrading your software until the version you use goes EOL means you are batching up the largest possible changes into one large moment. The cost of adapting to those changes is much more expensive because those who made the changes have long ago lost the context of those changes and will find it much more difficult to assist you in the upgrade or to fix bugs you discover.

This is the same reason modern software projects use automated CI/CD instead of relying only on manual QA right before a yearly release. The less time between discovering an issue with a change and the smaller the change, the less expensive it is to adapt to it.

## So, should I use ROS Rolling? What about a rolling version of Linux?
I believe so. However, the devil is often in the details. At some point, you often have to compromise the efficiency of development to satisfy the fears and concerns of people who demand stability.

## What's next?
Codifying how we develop on MoveIt on our website, in the README, and in our tutorial site to give developers depending on MoveIt the best possible experience.

## References
- [ROS 2 Developer Guide](https://docs.ros.org/en/rolling/The-ROS2-Project/Contributing/Developer-Guide.html)
- [Version Control and Branch Management by Titus Winters](https://abseil.io/resources/swe-book/html/ch16.html)
- [What Is Software Engineering? (compiler upgrade example) by Titus Winters](https://abseil.io/resources/swe-book/html/ch01.html#example_compiler_upgrade)
