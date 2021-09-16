---
author: Mark Moll
comments: false
date: 2021-07-01 10:00:00+00:00
layout: page
slug: roscon-2021-workshop
title: ROS World 2021 MoveIt Workshop
redirect_from: "/events/roscon-2021-workshop/"
---

## Mobile Manipulation with MoveIt 2

This workshop will provide a hands-on introduction to MoveIt 2. Participants will learn how to plan motions for a mobile manipulator. No prior ROS 2 or MoveIt 2 experience is necessary, but basic familiarity with core robotics concepts is assumed. The participants can follow along on their own computers. We also show how to plan and execute motions on real hardware: a [Stretch mobile manipulator](https://hello-robot.com/) from Hello Robot. The presenters will cover use and trade-offs of different strategies for motion planning approaches, inverse kinematics, grasping, trajectory generation, and integration with a perception pipeline.

### Time and Venue

* Date: Thursday, October 19, 2021
* Venue: ROS World 2021 (virtual)

### Organizers

* Mark Moll (PickNik)
* Henning Kayser (PickNik)
* Dave Coleman (PickNik)
* Aaron Edsinger (Hello Robot)
* Charlie Kemp (Hello Robot)
* Binit Shah (Hello Robot)

### Program (Tentative)

All times are UTC-5 (US Central Daylight Time)


| Time | Title |
|-----------|-------------------------|
|**13:00** | Overview and Introduction — Dave Coleman &amp; Charlie Kemp|
|**13:15** | MoveIt overview — Mark Moll|
|**13:45** | _Free play:_ `stretch_moveit_config` demo — all|
|**14:00** | MoveIt and the rest of ROS: perception, control, and simulation — Vatan Tezer |
|**14:30** | _Free play:_ Ignition Demo World — all |
|**14:45** | Break |
|**15:00** | High-level Task and Motion Planning using the MoveIt Task Constructor — Henning Kayser |
|**15:30** | _Free play:_ Pick and place with whole body planning — all |
|**16:45** | Wrap up — Mark Moll|
|**17:00** | Virtual happy hour — all|
|------------|-------------------------|

- - - -

During the _Free play_ sessions, participants will be divided into groups for a guided hands-on exploration of MoveIt capabilities. One or more MoveIt experts will be available per group.

### Expected Outcomes

Workshop participants will leave with an understanding of how to use MoveIt 2 to program a mobile manipulator to do a variety of tasks:

* Plan and execute whole-body motions (including the base), arm motions, and head motions.
* Use MoveIt Servo for remote control of a manipulator.
* Configure various aspects of the motion planning pipeline such as the planning algorithm, the Inverse Kinematics solver, and trajectory generator to use.
* Define, plan, and basic pick and place operations using the MoveIt Task Constructor.

Specifically, you will be able to:

* Control a Stretch mobile manipulator via the RViz motion planning panel,
* Configure settings in the MoveIt configuration files to change the default planner, IK solver, trajectory generator, velocity limits, etc.
* Execute motions in Ignition using simulated controllers and collect sensor data from simulated cameras, and
* Write MoveIt Task Constructor C++ code to script complex sequences of motions.

### Preparation for the Workshop

Participants will be provided with preparation instructions weeks before the event. We plan to provide both a docker image with the setup used during the workshop as well as ROS 2 installation instructions for users who are already running ROS 2 on their own computer.

Please complete the setup at least a day before the workshop. MoveIt maintainers will be monitoring the `#rosworld2021` channel on the [MoveIt Discord server](https://discord.gg/RrySut8), so please post your questions there if you run into problems with the setup. (Note that _Discord_ is a chat client, different from _Discourse_.)

#### Installation instructions

Use one of following two options:

1. **Docker**: _detailed instructions to follow_
2. **ROS 2 Foxy installation**: _detailed instructions to follow_
