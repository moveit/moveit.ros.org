---
author: Henning Kayser
comments: false
date: 2021-06-08
layout: post
title: MoveIt 2 Status Update and Feature Comparison
media_type: image
media_link: /assets/images/blog_posts/2021_06_08_comparison.png
description: What new features are only available in MoveIt 2
categories:
  - ROS2
  - MoveIt
---

With the release of ROS 2 Galactic, we would like to share the new features only available in MoveIt 2. We hope to encourage the community to upgrade to MoveIt 2 as soon as possible. MoveIt 2 is out of beta.

*Table last updated August 15, 2021*

<table class="table table-striped table--moveit-status-update">
  <thead>
    <tr>
      <th>&nbsp;</th>
      <th>MoveIt 1</th>
      <th>MoveIt 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>ROS 1 Support</td>
      <td class="done">✓</td>
      <td class="dev">via ros1_bridge</td>
    </tr>
    <tr>
      <td>ROS 2 Support</td>
      <td class="not">✕</td>
      <td class="done">✓</td>
    </tr>
    <tr>
      <td>Motion Planning</td>
      <td class="done">✓</td>
      <td class="done">✓</td>
    </tr>
    <tr>
      <td>Inverse Kinematics</td>
      <td class="done">✓</td>
      <td class="done">✓</td>
    </tr>
    <tr>
      <td>Perception</td>
      <td class="done">✓</td>
      <td class="done">✓</td>
    </tr>
    <tr>
      <td>Grasping</td>
      <td class="done">✓</td>
      <td class="done">✓</td>
    </tr>
    <tr>
      <td>Setup Assistant</td>
      <td class="done">✓</td>
      <td class="dev">in development</td>
    </tr>
    <tr>
      <td>MoveIt Task Constructor</td>
      <td class="done">✓</td>
      <td class="done"><a href="https://github.com/ros-planning/moveit_task_constructor/pull/170">pending</a></td>
    </tr>
    <tr>
      <td>Game Controller Integration for Servo</td>
      <td class="done">✓</td>
      <td class="done">✓</td>
    </tr>
    <tr>
      <td>Industrial Trajectory Generator</td>
      <td class="done">✓</td>
      <td class="dev">planned</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ros-planning/moveit2/tree/4cbd1a767630c3a98eeef8e91cb0fc8627f57c94/moveit_demo_nodes/run_ompl_constrained_planning" target="_blank">Probabilistically complete Cartesian Planning</a></td>
      <td class="dev"><a href="https://github.com/ros-planning/moveit/pull/2273" target="_blank">Stale Patch</a></td>
      <td class="done">✓</td>
    </tr>
    <tr>
      <td>Composable Nodes</td>
      <td class="dev">nodelet subsystem</td>
      <td class="done">✓</td>
    </tr>
    <tr>
      <td><a href="https://github.com/hello-robot/stretch_ros2/tree/ros_world2021#whole_body_planning" target="_blank">Planning for Differential Drive Bases</a></td>
      <td class="not">✕</td>
      <td class="done">✓</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ros-planning/moveit2/pull/488" target="_blank">Hybrid Planning</a> (global + local planners)</td>
      <td class="not">✕</td>
      <td class="done">pending</td>
    </tr>
    <tr>
      <td>Based on Realtime Capable DDS Messaging</td>
      <td class="not">✕</td>
      <td class="done">✓</td>
    </tr>
    <tr>
      <td>Native Windows Build</td>
      <td class="dev">via RoboStack</td>
      <td class="done">✓</td>
    </tr>
    <tr>
      <td>New Feature Development by PickNik</td>
      <td class="not">✕</td>
      <td class="done">✓</td>
    </tr>
    <tr>
      <td>Development Coordinated with ROS 2 Technical Steering Committee</td>
      <td class="not">✕</td>
      <td class="done">✓</td>
    </tr>
    <tr>
      <td><a href="https://design.ros2.org/articles/ros2_dds_security.html" target="_blank">Built for Industrial Security </a></td>
      <td class="not">✕</td>
      <td class="done">✓</td>
    </tr>
  </tbody>
</table>

<br>

For more details, see the [MoveIt Roadmap and Upcoming Features](https://moveit.ros.org/documentation/contributing/roadmap/).

## Status Update for MoveIt 2 on Galactic & Rolling

As of June 8th 2021, we have an experimental chain of PRs that enable compiling on Rolling, but it requires a complicated workspace setup. However, MoveIt 2 Foxy is stable.

We are looking for help from upstream maintainers to release their packages so that MoveIt Galactic can be released. We are also facing challenges relating to pre-release testing of packages and debugging packages failing on the buildfarm. When these two issues are resolved we will have a Galactic and Rolling release.

There has been a lot of recent progress in porting the [tutorials](http://moveit.picknik.ai) to MoveIt 2. We look forward to the official release of MoveIt 2 Galactic on June 30th!
