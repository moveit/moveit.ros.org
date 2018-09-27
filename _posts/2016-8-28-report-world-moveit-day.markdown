---
author: davetcoleman
comments: false
date: 2016-08-28 08:15:12+00:00
layout: post
slug: wordlmoveitdayreport
title: Report on World MoveIt! Day
media_type: image
media_link: http://moveit.ros.org/assets/images/report_on_world_moveit_day.jpg
description: Results from our first international hackathon to improve the MoveIt! code base, documentation, and community.
categories:
- MoveIt!
- ROS
---

Thank you for joining us for our first international MoveIt! hackathon event! It was a great success with many participants from around the world joining, many issues fixed, and features added. At the Fetch event in California 18 participants joined throughout the day, and at the Xamla event in Germany 9 participants joined.

A few stats from the event and the 5 days since:

- **65 pull requests closed**
- **10 in-progress pull requests opened**
- **21 issues closed** in the consolidated moveit repo
- **28 Github users contributed** (see below)

Some key improvements:

**Documentation**

- IKFast instructions updated for 14.04 / 16.04
- New tutorials website setup and expanded upon
- All broken links fixed throughout documentation and website
- Extensive documentation on different plugins
- Travis CI now checks for broken links using html-proofer
- More screenshots

**Capabilities**

- Capability to execute trajectory with a ROS action
- Fixing mongodb for ros warehouse
- Fix blockers for Kinetic release
- Improved tests and work towards an integration test
- Add writer functionality to SRDFDom
- computeCartesianPath now accepts path constraints
- Progress towards switch kinetic branch to std::shared_ptrs
- Progress towards new benchmark suite using PlannerArena
- Progress towards resurrecting CHOMP planner
- Progress towards new screen in Setup Assistant
- Progress towards speeding up Kinematics plugin loading

**Maintenance**

- Many fixes to code quality, CMakeLists, tests, C++11 migration, etc

**Github Participants**

- Andreas Köpf
- Kentaro Wada
- Maarten de Vries
- Ugo Cupcic
- Sarah Elliott
- Jon Binney
- Dinesh Bolkensteyn
- Di Sun
- Martin Günther
- Scott Paulin
- Alex Henning
- Chittaranjan Swaminathan
- Kei Okada
- William Woodall
- Jochen Sprickerhof
- Lucas Doyle
- uwesterh
- kirstyellis
- jan0e
- Jntzko
- alemme
- JHoef

**Maintainers**

- Robert Haschke
- Michael Görner
- Isaac I.Y. Saito
- Jorge Nicho
- Michael Ferguson
- Ioan Sucan
- Dave Coleman
