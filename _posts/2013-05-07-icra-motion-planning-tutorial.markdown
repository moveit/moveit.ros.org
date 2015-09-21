---
author: admin
comments: false
date: 2013-05-07 08:15:12+00:00
layout: post
slug: icra-motion-planning-tutorial
title: ICRA Motion Planning Tutorial 2013
media_type: video
media_link: https://www.youtube.com/embed/vAeEEoxVhAo
description: Hello
redirect_from: 
  - "/wiki/Tutorials/ICRA2013/"
categories:
- MoveIt!
- ROS
---
**Time and Venue**

* Date - Friday May 10, 2013
* Venue - ICRA 2013, Karlsruhe, Germany

**Organizers**

* Sachin Chitta, Willow Garage
* Ioan Sucan, Willow Garage
* Mark Moll, Rice University
* Lydia Kavraki, Rice University
* Maxim Likhachev, CMU 

**Abstract**

This full-day tutorial is intended to expose both novice and expert users to the most recent developments, both theoretical and practical, on the topic of motion planning for mobile manipulation. The tutorial will combine talks on the latest algorithmic developments by leading experts with hands-on sessions where implemented tools will be presented and where participants will walk through actual applications in mobile manipulation. The tutorial will emphasize the practical aspects of using motion planners on real robots, by discussing the integration of motion planning techniques with perception, grasping and control. Particular attention will be paid to motion planning with constraints, with use cases highlighting the handling of constraints in real world tasks. Real-time performance will also be examined, including the application of motion planners in assisted tele-operation scenarios. The tutorial will be based on a wide range of tools, including those in the MoveIt! software framework, the Open Motion Planning Library (OMPL), the search-based planning library (SBPL) and other associated tools.

**Registration**

You can register for the tutorial when you register through the ICRA site. However, if you plan to attend the tutorial, it'd be most helpful if could send a message to Ioan Sucan (isucan@willowgarage.com) with the following information:

* your areas of interest
* whether you are more of an end user or developer
* experience with ROS 

**Invited Speakers**

* Siddhartha Srinivasa (CMU)
* Dmitry Berenson (WPI)
* Dinesh Manocha (UNC)
* Kostas Bekris (Rutgers University)
* Mike Phillips (CMU)
* Armin Hornung (Freiburg)
* Felix Meßmer (Fraunhofer IPA)
* Adolfo Rodriguez Tsouroukdissian (Presenter: Jordi Pagès), (PAL Robotics, S.L.)
* Ryan Luna (Rice University)
* Dave Coleman (University of Colorado at Boulder) 

**Schedule**

* 08:45 - 09:00 - Welcome message, Overview of tutorial - [PDF]({{ site.url }}/assets/pdfs/2013/icra2013tutorial/ICRATutorialOverview.pdf)
* 09:00 - 09:20 - MoveIt! - (Sachin Chitta) [PDF]({{ site.url }}/assets/pdfs/2013/icra2013tutorial/ICRATutorial-MoveIt.pdf)
* 09:20 - 09:40 - The Open Motion Planning Library - OMPL (Mark Moll, Lydia Kavraki) - [PDF]({{ site.url }}/assets/pdfs/2013/icra2013tutorial/OMPLoverview-ICRA2013.pdf)
* 09:40 - 10:00 - Search-Based Planning Library - SBPL (Maxim Likhachev) - [PDF]({{ site.url }}/assets/pdfs/2013/icra2013tutorial/tutorial_icra13_v11.pdf)
* 10:00 - 10:30 - Coffee Break
* 10:30 - 10:45 - Functional gradient optimization for manipulation (Siddhartha Srinivasa) - [PDF]({{ site.url}}/assets/pdfs/2013/icra2013tutorial/PRL-CHOMP.pdf)
* 10:45 - 11:00 - Representing and planning with constraints for mobile manipulation (Dmitry Berenson)
* 11:00 - 11:15 - Real-time collision checking and motion planning in dynamic scenes (Dinesh Manocha) - [PDF]({{ site.url }}/assets/pdf/2013/icra2013tutorials/ICRA-2013.pdf)
* 11:15 - 12:30 - Hands on; live demo while attendees follow instructions:
  * Setup Assistant - SRDF, Groups, Setup Assistant (Dave Coleman and Ioan Sucan)
  * Running demo.launch (for the Motoman robot)
  * Rviz plugin - Visualization, Planning Scenes, Importing CAD, Save and Load from Warehouse
  * Motion Planning - Request, Goal, Changing planners, Changing groups, Constraints, Time limits, Replanning, Workspace Parameters, Planning for the base, Trace of the trajectory, Animation of the trajectory.
  * Sensor Data - Incorporating sensor data, Point clouds, Depth Image, Self-filtering
  * Integration with Control - ROS Interface
  * Live Demo - Obstacle avoidance, replanning, dual-arm planning
  * Programmatic interface - C++/Python
  * Scripting interface 

* 12:30 - 14:00 - Lunch
* 14:00 - 14:15 - Motion planning with the Care-O-Bot and Rob@Work (Fraunhofer IPA) - [PDF]({{ site.url }}/assets/pdfs/2013/icra2013tutorial/ICRA2013_MoveIt-Workshop_MoveIt-at-IPA.pdf)
* 14:15 - 14:30 - Upper-body motion planning on the REEM robot: Current state and future perspectives (Jordi Pages: PAL Robotics) - [PDF]({{ site.url }}/assets/pdfs/2013/icra2013tutorial/2013_icra_motion_planning_tutorial.pdf)
* 14:30 - 14:50 - 3D Sensing with Octomap (Armin Hornung) - [PDF]({{ site.url }}/assets/pdfs/2013/icra2013tutorial/octomap_planning.pdf)
* 14:50 - 15:10 - Workspace Analysis (Sachin Chitta) [PDF]({{ site.url }}/assets/pdfs/2013/icra2013tutorial/ICRATutorial-Workspace.pdf), Benchmarking (Ryan Luna, Ioan Sucan) - [PDF]({{ site.url }}/assets/pdfs/2013/icra2013tutorial/ICRA13_Benchmark.pdf)
* 15:10 - 15:20 - E-Graphs (Mike Phillips) - [PDF]({{ site.url }}/assets/pdfs/2013/icra2013tutorial/egraphs_10min.pdf)
* 15:20 - 15:30 - Sparse Roadmaps (Kostas Bekris) - [PDF]({{ site.url }}/assets/pdfs/2013/icra2013tutorial/spanner_roadmaps_Bekris.pdf)
* 15:30 - 16:00 - Coffee Break
* 16:00 - 16:30 - Ongoing and Future Developments in MoveIt!
  * Pick and Place with Object Recognition (Sachin Chitta/ Ioan Sucan) - [PDF]({{ site.url }}/assets/pdfs/2013/icra2013tutorial/ICRATutorial-PickPlace.pdf) 
* 16:30 - 17:00 - Lightning Talks (5 minutes each)
  * John Schulman (Berkeley) - TrajOpt - Trajectory optimization software for motion planning
  * Norman Hendrich (Hamburg) - Domestic Robot/Jaco Arm - [PDF]({{ site.url }}/assets/pdfs/2013/icra2013tutorial/icra-jaco-moveit.pdf) 
  * Armin Hornung (Freiburg) - Whole-Body Motion Planning for Manipulation of Articulated Objects (PDF)
  * Christian Scheurer (KUKA Labs) - Autonomous Fetch and Carry Task with OmniRob
  * Dave Coleman (University of Colorado, Boulder) - MoveIt! integrated on a custom robot
  * Javier V. Gomez (Universidad Carlos III Madrid) - Motion Learning with Fast Marching - [PDF]({{ site.url }}/assets/pdfs/2013/icra2013tutorial/ICRA2013_FML.pdf)
  * If you are interested in giving a lightning talk about how you are using MoveIt!, please talk to the organizers in the morning. 

**Preparation for the Tutorial**

For some of the hands-on talks, you will have the opportunity to follow along on your own laptop. To avoid any technical difficulties, we suggest you set up your machine with these versions:

* Ubuntu 12.04
* ROS Groovy
* MoveIt! (follow Groovy/Installation instructions) 

**Links**

* MoveIt! - The MoveIt! wiki
* OMPL - The Open Motion Planning Library
* SBPL - The Search-based Planning Library 
