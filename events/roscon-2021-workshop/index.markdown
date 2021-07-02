---
author: Mark Moll
comments: false
date: 2021-07-01 10:00:00+00:00
layout: page
slug: roscon-2021-workshop
title: ROSCON 2021 MoveIt Workshop
---

## Mobile Manipulation with MoveIt 2

This workshop will provide a hands-on introduction to MoveIt 2. Participants will learn how to plan motions for a mobile manipulator. No prior ROS 2 or MoveIt 2 experience is necessary, but basic familiarity with core robotics concepts is assumed. The participants can follow along on their own computers, but they will also have opportunities to plan and execute motions on real hardware: two [Stretch mobile manipulators](https://hello-robot.com/) from Hello Robot will be available for experiments. The presenters will cover use and trade-offs of different strategies for motion planning approaches, inverse kinematics, grasping, trajectory generation, and integration with a perception pipeline.

### Time and Venue

* Date: Thursday, October 21, 2021
* Venue: ROSCON 2021, New Orleans

### Organizers

* Mark Moll (PickNik)
* Henning Kayser (PickNik)
* Dave Coleman (PickNik)
* Marq Rasmussen (PickNik)
* Aaron Edsinger (Hello Robot)
* Charlie Kemp (Hello Robot)
* Binit Shah (Hello Robot)

### Program (Tentative)

| Time | Title |
|-----------|-------------------------|
|08:30–09:00 | Overview and Introduction |
|09:00–09:30 | Background on concepts in motion planning |
|09:30–10:00 | Integrating planning with perception and control |
|10:00–10:30 | Coffee break |
|10:30–11:30 | MoveIt 2 overview |
|11:30–12:00 | MoveIt Task Constructor |
|12:00-13:00 | Lunch |
|13:00–15:00 | Hands-on programming, part I |
|15:00–15:30 | Coffee break |
|15:30–17:00 | Hands-on programming, part II |
|------------|-------------------------|
{: .col-lg-8 }

### Expected Outcomes

Workshop participants will leave with an understanding of how to use MoveIt 2 to program a mobile manipulator to do a variety of tasks:

* Plan and execute whole-body motions (including the base), arm motions, and head motions.
* Use MoveIt Servo for remote control of a manipulator.
* Configure various aspects of the motion planning pipeline such as the planning algorithm, the Inverse Kinematics solver, and trajectory generator to use.
* Define, plan, and basic pick and place operations using the MoveIt Task Constructor.

### Preparation for the Workshop

Participants will be provided with preparation instructions weeks before the event and are expected to bring their own computer. We plan to provide both a docker image with the setup used during the workshop as well as ROS 2 installation instructions for users who are already running ROS 2 on their own computer. We anticipate having at least 2 robots available for experimentation. Besides the robots, we will provide standard objects that can be used for manipulation.
