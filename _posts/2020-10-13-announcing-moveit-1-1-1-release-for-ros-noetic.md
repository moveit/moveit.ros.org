---
author: Tyler Weaver
comments: false
date: 2020-10-13
layout: post
title: Announcing MoveIt 1.1.1 Release for ROS Noetic
media_type: image
media_link: /assets/images/blog_posts/noetic.png
description: We are happy to announce a minor release of MoveIt in Noetic along with many of the related packages.
categories:
- moveit
- ros
- noetic
---

## MoveIt has released the latest features into ROS Noetic

We are happy to announce a minor release of MoveIt in Noetic along with many of the related packages.  This minor release includes all of the latest features merged into the repos up to today.  At the next sync you will be able to use many new features and bug fixes.

## What's new in Noetic for MoveIt?

Here are the highlights:
* Cleanup of Rviz Motion Planning plugin
* A library for servoing toward a moving pose
* Visualizing collision geometry in the MoveIt setup assistant
* Bug fixes and layout adjustments to the MoveIt setup assistant

## Other related packages also released

These are related packages we also released at the same time.
* geometric_shapes
* srdfdom
* moveit_msgs
* moveit_resources
* moveit_visual_tools
* rviz_visual_tools
* warehouse_ros_mongo

## Should I migrate to MoveIt Noetic or MoveIt 2 Foxy?

We touched on this in our major release of MoveIt into Noetic.  Noetic is the last version of ROS 1 and therefore we believe you should migrate to ROS 2 with us.  We recognize that is a large change for many projects that are already developed in ROS 1.  For those projects you can use the latest version of MoveIt with all the great features we’ve been working on and begin the transition to ROS 2 by upgrading to Ubuntu 20.04 and Python 3.

## How can I get involved?

If you are new to MoveIt we encourage you to take a look at our tutorials.  You’ll notice that we have not finished updating them for Noetic.  Fixing issues in the tutorials can be a great way to contribute to the community.

## Final Notes

Thank you to all the [maintainers and contributors](https://moveit.ros.org/about/) of MoveIt who made this release possible!
