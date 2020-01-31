---
author: Henning Kayser
comments: false
date: 2020-01-31
layout: post
title: MoveIt 2 Beta - Feature List
media_type: image
media_link: /assets/images/blog_posts/moveit-2-logo-dark.png
description: ROS 2 Migration Progress and Beta testing phase
categories:
- MoveIt
- ROS 2
---

Big news! MoveIt 2 Beta is almost ready for release on our February 14th launch date, thanks to PickNik Robotics' team, Yu Yan (Intel), and some of MoveIt's maintainers.

With today’s API freeze we’re publishing the official feature list and provide some updates around the progress and Beta testing. The next two weeks until the release we’re still working on completing parameter and launch setup, as well as general debugging, cleanup and documentation.

**Feature List**

Over the last months we’ve been working very hard to migrate a major part of MoveIt to ROS 2. Listed below are all ported packages that will be available for the release (subitems indicate ported libraries in only partially ported packages):


* moveit_core
* moveit_ros_planning
* moveit_planners_ompl
* moveit_planning_interface
  * moveit_cpp
  * moveit_common_planning_interface_objects
* moveit_kinematics
  * kdl_kinematics_plugin
  * lma_kinematics_plugin
  * srv_kinematics_plugin
* moveit_ros_visualization
  * robot_state_rviz_plugin
  * planning_scene_rviz_plugin
  * rviz_plugin_render_tools
* moveit_plugins
  * moveit_simple_controller_manager
* occupancy_map_monitor


With the ported packages the feature list of [MoveIt 2 Beta](https://github.com/ros-planning/moveit2) covers pretty much all core functionalities that MoveIt provides, such as motion planning, collision checking, trajectory execution, IK and visualization in RViz.

Unfortunately, there are still some packages that have not been ported yet due to lack of funding. The high-level interfaces MoveGroup and MoveGroupInterface won’t be ready for the release, just as the dependent MotionPlanningDisplay and MoveItSetupAssistant. You can find a complete list of the migration progress in this [spreadsheet](https://docs.google.com/spreadsheets/d/1aPb3hNP213iPHQIYgcnCYh9cGFUlZmi_06E_9iTSsOI/edit?usp=sharing). Please contact PickNik if you are interested in funding or otherwise supporting the full migration of MoveIt to ROS 2.

**Demo and Beta Testing**

We will provide a MoveItCpp demo setup with example code that we welcome you to play around with and try to break as much as possible. As a Beta tester you are invited to reproduce the demo with other robot setups as well while documenting and filing any issues you find. Ideally, you would provide PR’s with according fixes as well ;). More information about how to participate in the Beta testing phase will be given with the release announcement. Let us know if you are interested in being a Beta tester.
