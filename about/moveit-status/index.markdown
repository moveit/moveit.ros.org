---
author: admin
comments: false
date: 2013-12-08 05:22:09+00:00
layout: page
slug: moveit-status
title: Status
wordpress_id: 164
---

This page highlights the status of MoveIt! components - it indicates how stable individual components are and how well they have been tested. It also indicates how much support users can expect for different components and robots. (See legend below for description of the codes.)


### Current STATUS (Components)



Component |  Status
|--------------|------------:|
Kinematics (Serial-chain) | Beta
Kinematics (with Planar Joints)| Alpha
Kinematics (parallel robots)| Alpha
Collision Checking (FCL)| Beta
Collision Checking (Sphere-based)| Alpha
Motion Planning (Joint Goals)| Beta
Motion Planning (Pose Goals)| Beta
Motion Planning (Kinematic Constraints)| Beta
Motion Planning (Desired end-effector trajectories)| Alpha
Motion Planning (Fast replanning)| Beta
Motion Planners (OMPL)| Beta
Trajectory Filtering (Iterative)| Beta
Navigation| Alpha
3D Navigation| Unsupported
3D Self-filtering (Point-cloud)| Beta
3D Self-filtering (Depth-map)| Beta
3D Occupancy Map (Octomap)| Beta
Planning Scene| Beta
Rviz Plugin| Beta
Benchmarking| Alpha
Benchmarking GUI Tool| Alpha
Workspace Analysis| Beta
Pick and Place| Alpha
Dual-arm Manipulation| Alpha
MoveIt! Setup Assistant| Beta


### **Current STATUS (Robots)**

To see the current status of MoveIt! on any robot, check the [Robots using MoveIt!](/robots) page and the individual robot page.

* * *




### **STATUS Code (Components)**

Code | Description
|--------------|------------|
Unsupported | This component is not implemented in MoveIt! currently.
Alpha | This component is experimental and has not been widely tested. Users should not expect extensive support for this component.
Beta | This component is undergoing wide testing with the intention of being moved to Stable status. Users are encouraged to ask about testing this component and contributing to moving it to Stable status.
Stable | This component is widely tested and expected to work on a wide variety of robots. Users should expect support for this component and immediately notify the maintainers of any bugs.


### **STATUS Code (Robots)**

Code | Description
|--------------|------------|
Unsupported | There is no support for MoveIt! on this robot, i.e. no one has used MoveIt! with this robot.
Alpha | MoveIt! has been integrated on this robot by at least one user. A MoveIt! config package is available (but maybe not publicly). Ask on the moveit-users mailing list to see if someone is willing to share the config package with you.
Beta | MoveIt! has been extensively tested on this robot and is actively maintained for this robot. The MoveIt! config package for this robot is publicly available.
Stable | MoveIt! is officially supported on this robot.
