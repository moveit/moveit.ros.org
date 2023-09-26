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

Additional assistance during breakout sessions will be provided by David Lu!!, Cassidy Elliott, and Andy Zelenak (all from PickNik).

### Program (Tentative)

All times are UTC-5 (US Central Daylight Time)

| Time | Title |
|-----------|-------------------------|
|**10:00** | Overview and [Introduction to Stretch](https://docs.google.com/presentation/d/1SvAXqfjtmg98fP72LTuWRPXanjfOeWEecIYdW-BU6RU) [[PDF]](ROS World 2021 Tutorial - Introduction to Stretch.pdf) — Dave Coleman &amp; Charlie Kemp|
|**10:15** | Hardware demonstration of mobile manipulation capabilities — Binit Shah|
|**10:30** | [MoveIt overview](https://docs.google.com/presentation/d/1dts0_vhpo1DhMEBAlpB3LQBQjLHKG9oz3XmVHTs9p54/) [[PDF]](ROSWorld 2021 - Mobile Manipulation Workshop - MoveIt Overview.pdf) — Mark Moll|
|**11:00** | _Guided exploration:_ `stretch_moveit_config` demo — all|
|**11:15** | [MoveIt and the rest of ROS: perception, control, and simulation](https://docs.google.com/presentation/d/1Qx66OICZrTRzJ73qj3tsJS0eOS2Cqw5e-JaNmpRGywQ) [[PDF]](MoveIt and the rest of ROS_ Perception, Control, and Simulation ROSWorld October 2021 - Mobile Manipulation Workshop.pdf) — Vatan Tezer |
|**11:45** | _Guided exploration:_ Ignition Demo World — all |
|**12:00** | Break |
|**12:15** | [High-level Task and Motion Planning using the MoveIt Task Constructor](https://docs.google.com/presentation/d/1v3oM9EmljaZklmBy27NgfRkhq1CZ7iEtnY_5jt1f_Po) [[PDF]](ROSWorld 2021 - Mobile Manipulation Workshop - MoveIt Task Constructor.pdf) — Henning Kayser |
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

1. **Docker**: See [these detailed instructions](https://github.com/AndyZe/stretch_ros2/tree/ros_world2021/README.md#linux-installation-with-docker).
2. **ROS 2 Galactic installation**: See [these detailed instructions](https://github.com/AndyZe/stretch_ros2/tree/ros_world2021/README.md#linux-installation-source).

Please go through these instructions _before_ the workshop. The docker image is 6.29GB in size, so this may take some time to download (depending on the speed of your internet connection).

### Further reading & watching

* The code for the workshop can be found in the `ros_world2021` branch of the [`stretch_ros2` repo](https://github.com/AndyZe/stretch_ros2/tree/ros_world2021) on GitHub.
* The [MoveIt Concepts page](https://moveit.ros.org/documentation/concepts/) goes into more detail than the workshop in describing the general structure of MoveIt.
* There are [many more MoveIt 2 tutorials](http://moveit.picknik.ai) available.
* [This paper](https://arxiv.org/abs/2109.10892) describes in more detail the design of the Stretch mobile manipulator from Hello Robotics, while more information on the Stretch payload and pulling force can be found [here](Stretch Payload & Pulling Force.pdf).
* Video demos from the different _Guided exploration_ sessions:
  1. A demonstration of the MoveIt motion planning panel in RViz:<br>
     <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/MwDs_uX6SKw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  2. A basic pick & place demo [[code]](https://github.com/AndyZe/stretch_ros2/blob/ros_world2021/stretch_roscon_demos/src/move_group_interface_demo.cpp):<br>
     <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/auazxjtOjsY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  3. An advanced pick & place demo using the MoveIt Task Constructor [[code]](https://github.com/PickNikRobotics/stretch_moveit_plugins/tree/main/pick_place_task):<br>
     <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Tm93GFlT234" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  4. Whole body planning with execution in a complex environment in Ignition:<br>
     <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/pmpdBpE_Rng" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
