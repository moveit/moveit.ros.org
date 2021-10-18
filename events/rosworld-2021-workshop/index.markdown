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

* Date: Tuesday, October 19, 2021
* Venue: ROS World 2021 (virtual)

### Organizers

* Mark Moll (PickNik)
* Henning Kayser (PickNik)
* Dave Coleman (PickNik)
* Vatan Tezer (PickNik)
* Aaron Edsinger (Hello Robot)
* Charlie Kemp (Hello Robot)
* Binit Shah (Hello Robot)

### Program (Tentative)

All times are UTC-5 (US Central Daylight Time)


| Time | Title |
|-----------|-------------------------|
|**10:00** | Overview and [Introduction to Stretch](https://docs.google.com/presentation/d/1SvAXqfjtmg98fP72LTuWRPXanjfOeWEecIYdW-BU6RU) — Dave Coleman &amp; Charlie Kemp|
|**10:15** | Hardware demonstration of mobile manipulation capabilities — Binit Shah|
|**10:30** | [MoveIt overview](https://docs.google.com/presentation/d/1dts0_vhpo1DhMEBAlpB3LQBQjLHKG9oz3XmVHTs9p54/) — Mark Moll|
|**11:00** | _Guided exploration:_ `stretch_moveit_config` demo — all|
|**11:15** | MoveIt and the rest of ROS: perception, control, and simulation — Vatan Tezer |
|**11:45** | _Guided exploration:_ Ignition Demo World — all |
|**12:00** | Break |
|**12:15** | [High-level Task and Motion Planning using the MoveIt Task Constructor](https://docs.google.com/presentation/d/1v3oM9EmljaZklmBy27NgfRkhq1CZ7iEtnY_5jt1f_Po) — Henning Kayser |
|**12:45** | _Guided exploration:_ Pick and place with whole body planning — all |
|**13:45** | Wrap up — Mark Moll|
|**14:00** | Virtual happy hour — all|
|------------|-------------------------|

- - - -

During the _Guided exploration_ sessions, participants will be divided into groups for a guided, hands-on exploration of MoveIt capabilities. One or more MoveIt experts will be available per group.

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
* Write MoveIt Task Constructor C++ code to script picking and placing of objects.

### Preparation for the Workshop

Participants will be provided with preparation instructions weeks before the event. We plan to provide both a docker image with the setup used during the workshop as well as ROS 2 installation instructions for users who are already running ROS 2 on their own computer.

Please complete the setup at least a day before the workshop. MoveIt maintainers will be monitoring the `#rosworld2021` channel on the [MoveIt Discord server](https://discord.gg/RrySut8), so please post your questions there if you run into problems with the setup. (Note that _Discord_ is a chat client, different from _Discourse_.)

#### Installation instructions

Use one of following two options:

1. **Docker**: See [these detailed instructions](https://github.com/hello-robot/stretch_ros2/blob/ros_world2021/README.md#linux-installation-with-docker).
2. **ROS 2 Foxy installation**: See [these detailed instructions](https://github.com/hello-robot/stretch_ros2/blob/ros_world2021/README.md#linux-installation-source).

Please go through these instructions _before_ the workshop. The docker image is 6.29GB in size, so this may take some time to download (depending on the speed of your internet connection).
