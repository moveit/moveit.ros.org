---
author: Alex Goldman
comments: false
date: 2020-12-17
layout: post
title: Introducing the New Pilz_PlugIn for MoveIt
media_type: image
media_link: /assets/images/blog_posts/pilz.jpeg
description: The MoveIt Maintainers are excited to announce a new plug-in for Pilz Industrial Motion Planner for MoveIt.
categories:
- MoveIt
- Pilz
- Motion Planner
---
MoveIt’s default planners are really great at finding collision-free paths in complex environments but the resulting motions can be very unpredictable. Sometimes you just want a simple motion for a simple planning problem. The now available [Pilz industrial motion planner](https://ros-planning.github.io/moveit_tutorials/doc/pilz_industrial_motion_planner/pilz_industrial_motion_planner.html) supports solving for circular or linear motions in a rapid and predictable way.  Additionally, it supports blending multiple motion segments together with a new MoveIt capability! The MoveIt Maintainers are excited to announce that with this new motion planner   MoveIt finally supports basic industrial motions out of the box. The motion planning plug in was presented at the MoveIt Workshop in Macau in November 2019. Designed by Pilz Automation, one of Germany’s leading automation technology companies, this new MoveIt feature is designed to bring more industrial robot functionality to MoveIt.
 
“MoveIt is a very powerful tool to control your robots in all sorts of complex shapes. But we think that industrial applications often also demand simple things like just moving in a straight line. So we made a plugin for that.”
 
By including Pilz Industrial Motion Planner as a MoveIt plug-in, Pilz Automation has pledged to contribute to the MoveIt community as a Maintainer. We are excited about their commitment to open source and welcome Joachim Schleicher as a MoveIt Maintainer.
 
We’d love your comments/ideas suggestions on this or future MoveIt plug-ins.

