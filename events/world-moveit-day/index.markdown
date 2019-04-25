---
author: davetcoleman
comments: false
date: 2016-08-2 03:48:12+00:00
layout: page
slug: world_moveit_day
title: World MoveIt Day
---

![World MoveIt Day]({{ site.url }}/assets/images/world_moveit_day.png)

## Time

  * Date: August 23rd, 2016

## Locations

  - Fetch Robotics, San Jose, California. Contact: Michael Ferguson
  - ROS Industrial at Southwest Research Institute, San Antonio, Texas. Contact: Paul Hvass
  - Xamla Robotics Team at Provisio GmbH, Münster, Germany. Contact: Andreas Köpf
  - JSK at the University of Tokyo in Tokyo, Japan. Contact: Kei Okada

## Other Participating Organizations

  * Open Source Robotics Foundation
  * Tokyo Opensource Robotics Kyokai Association
  * Search-based Planning Laboratory at CMU

## Organizers

  * Dave Coleman, University of Colorado
  * Michael Ferguson, Fetch Robotics

## Signup

Please state your intent to join [on this form](https://goo.gl/forms/vCIKiWcAgaB4mASk2), though not required

## Description

World MoveIt Day is an international hackathon to improve the MoveIt code base, documentation, and community. Following the heels of the repo merge, we hope to fix all broken links in the documentation, close as many longstanding pull requests and issues as possible, and have some fun with a newly released integrated simulation of MoveIt manipulation + Gazebo + Fetch for us to test. An hour long Question and Answer session is scheduled at 9am Pacific to allow the community to meet the people merging their pull requests.

## Event Location Details

Fetch Robotics will be sponsoring an event with food, several robots to play with, and several in house engineers to help with the hackathon.

ROS Industrial at Southwest Research Institute will be hosting an event on their campus.

The Xamla Robotics Team at Provisio GmbH in Münster, Germany will be hosting an event with food, soft drinks, and a UR5 for testing.

If you aren't near an organized event we encourage you to have your own event in your lab/organization/company and video conference in to all the other events. We would also like to mail your team or event some MoveIt stickers to schwag out your robots with. State your intent to join on [this form](https://goo.gl/forms/vCIKiWcAgaB4mASk2).

## Logistics

### What version of MoveIt should you use?

If you are a beginner, we recommend the stable Indigo branch/release. The PR2, MoveIt tutorials, and Fetch simulation all work reliably with this release. The Jade and Kinetic branches/releases are much newer and likely have various road blocks to overcome. However if you are an advanced user - please help us overcome them by testing it!

### Finding Where You Can Help

Suggested areas for improvement will be tracked on the new unified moveit repo via several labels that are ideal for World MoveIt Day:

- [simple improvements](https://github.com/ros-planning/moveit/issues?q=is%3Aopen+-label%3Aassigned+label%3A%22simple+improvements%22) indicates the issue can probably be tackled in less than a few hours.
- [documentation](https://github.com/ros-planning/moveit/issues?utf8=%E2%9C%93&q=is%3Aopen%20label%3Adocumentation%20-label%3Aassigned%20) suggestes new tutorials, changes to the website, etc.
- [assigned](https://github.com/ros-planning/moveit/issues?q=is%3Aopen+is%3Aissue+label%3Aassigned) aids developers to find issues that are not already being worked on.
- **no label** - even issues that are not marked as "simple" can be worked on for World MoveIt day, though they will likely take longer than one day to compelete

If you would like to help the MoveIt project by tackling an issue, claim the issue by commenting "I'll work on this" and a maintainer will then hopefully add the label "assigned". Feel free to ask further questions in each issue's comments.

If you have ideas and improvements for the project, please add your own issues to the tracker, using the "simple improvements" label if applicable. Its fine if you want to then claim them for yourself.

### Documentation

Improving our documentation is a major goal of WMD - please add to our Sphynx and Markdown-based documentation within our packages and on the MoveIt website. If you have studied extensively an aspect of MoveIt that is not currently documented, please convert your notes into a pull request in the appropriate location. If you've started a conversation on the mailing list or other location where a more experienced developer explained a concept, consider converting that answer into a pull request to help others in the future with the same question.

For more details on modifying documentation, see [Contributing](http://moveit.ros.org/documentation/contributing/).

### Video Conference and IRC

We're having issues with Google Hangouts so have switched to good old IRC and are in #moveit at irc.freenode.net.

We will use Google Hangouts for the video conferencing software. Please join the following video call (limited to 10 particpants overnight Pacific time, but will increase to 25 participants during the day in Pacific time):

[Google Hangouts Video Link](https://hangouts.google.com/hangouts/_/fetchrobotics.com/mferguson)

Note: this link is subject to change throughout the day, check back

Some people are also using https://appear.in/world-moveit-day

### MoveIt Integrated Manipulation Simulation

One of the objectives of WMD is to resurrect an end-to-end simulation of a robot performing pick-and-place using perception, MoveIt, and Gazebo - similar to the no longer supported [PR2 Tabletop Manipulation pipeline for ROS Fuerte](http://wiki.ros.org/pr2_tabletop_manipulation_apps). Fetch Robotics has such an [integrated simulation](http://docs.fetchrobotics.com/gazebo.html#mm-demo) that is well tested and stable in ROS Indigo but has the following caveats for Jade and Kinetic:

On Jade, you must check out the following (this has been tested, but not in the past 2 weeks):

* https://github.com/fetchrobotics/fetch_gazebo (gazebo5 branch is tested and works, but robot is funky colored)

On Kinetic, you will need full source. WARNING: this is untested and likely will require a lot of hacking:

* https://github.com/fetchrobotics/fetch_gazebo
* https://github.com/fetchrobotics/fetch_ros (for urdf)
* https://github.com/mikeferguson/simple_grasping
* https://github.com/mikeferguson/moveit_python

## Discussion

If you have any questions refer to the [Discourse Topic](http://discourse.ros.org/t/world-moveit-day-planning/365)

## Sponorship

We'd like to thank the following sponsors:

- [Fetch Robotics](http://fetchrobotics.com/) for sponsoring the main event, stickers, and helping organize
- [Travis CI](http://travis-ci.com) for providing increased continuous integration time on their build farm for this event

<img src="/assets/images/sponsors/travis-ci.png" width="300" css="margin-right:20px"/>

<img src="/assets/images/sponsors/fetch-robotics.png" width="300"/>
