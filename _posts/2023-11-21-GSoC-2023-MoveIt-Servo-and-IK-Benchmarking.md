---
author: Sebastian Castro
comments: false
date: 2023-11-21
layout: post
title: "GSoC 2023: MoveIt Servo and IK Benchmarking"
media_type: image
media_link: /assets/images/blog_posts/GSoC_2023/main.png
description: This post describes the two Google Summer of Code (GSoC) projects with MoveIt in 2023, including a refactor and expansion of MoveIt Servo and a new Inverse Kinematics (IK) solver benchmarking tool.
categories:
- MoveIt
- Benchmarking
- Inverse Kinematics
- Servo
---

Today, I am happy to share the great work from our 2023 [Google Summer of Code](https://summerofcode.withgoogle.com/) (GSoC) contributors. From all the great applications we received, this year we selected two engineers to work on [open-source projects related to MoveIt](https://moveit.ros.org/events/2023-google-summer-of-code/).

## Project 1: MoveIt Servo Refactor
This work was done by [V Mohammed Ibrahim](https://github.com/ibrahiminfinite), advised by [Andy Zelenak](https://github.com/andyze) and [me](https://github.com/sea-bass). I first met Ibrahim since he had been contributing to one of my open-source personal projects, [pyrobosim](https://github.com/sea-bass/pyrobosim). However, my project is very small in comparison to MoveIt, and fortunately Ibrahim got to try out a much bigger and high-impact task through the GSoC program: refactoring and improving MoveIt Servo.

For those unfamiliar, MoveIt Servo is one of the many packages in MoveIt, and you can learn more from [Andy’s previous post](https://picknik.ai/ros/robotics/moveit/servo/2021/07/27/MoveIt-Servo-Talk.html). As a quick summary: In contrast to “traditional” motion planning, where an entire trajectory is determined up front for a robot to execute, servoing deals with making high-speed, incremental tweaks to a robot’s state as it executes a task. Some common applications that come to mind include:

* **Manual teleoperation**, which is useful for semi-autonomous or remote recovery applications where an operator may benefit from a more intuitive interface to control their robot than moving the individual joints, such as commanding Cartesian motion and having the software translate that to joint commands.
* **Autonomous refinements for tasks**, such as sliding an end effector along a placement surface with compliant control to try inserting an object into an opening; these tasks are colloquially known as “peg-in-hole”.
* **Visual servoing**, where the robot uses visual input (e.g., a fiducial marker or object detector) to track the pose of a target object, for applications such as inspection or grasping. These solutions are often coupled with a camera that is mounted near the end effector.

<div style="text-align:center">
    <img width="500" style="margin: 10px auto 32px;" src="{{ site.url }}/assets/images/blog_posts/GSoC_2023/image3.gif" alt="Project 1: MoveIt Servo Refactor" />
</div>

While MoveIt Servo has been around for a while, and has already been used in various academic and commercial projects, we were excited to have Ibrahim do a [complete refactor of the code](https://github.com/moveit/moveit2/pull/2224) for two main reasons:

1. The ROS parameters for MoveIt Servo are now easier to define, validate, and tune at runtime. This was made possible by using the [generate_parameter_library](https://github.com/PickNikRobotics/generate_parameter_library) package which we are moving towards using consistently in the MoveIt 2 code base. You can learn more about this in [Tyler Weaver’s ROSCon 2023 talk](https://vimeo.com/879001499/558ba81bef).

2. While you can still start MoveIt Servo as a pre-packaged ROS node like before, there is now a standalone API that you can include in your own ROS nodes. This can be helpful if you want to handle your own scheduling of commands, or connect into your autonomy code without the latency of going through a ROS messaging layer. A basic sample of this API is shown below.

```cpp
#include <moveit_servo/servo.hpp>

namespace moveit_servo
{
// Instantiate Servo
Servo servo{ node, param_listener, planning_scene_monitor };

// Set a Twist command
servo.setCommandType(CommandType::TWIST);
TwistCommand target_twist{
  "base_link",                      // reference frame
  { 0.0, 0.0, 0.1, 0.0, 0.0, 0.5 }  // Z translation + rotation
};

// Track the next joint state
const KinematicState joint_state =
  servo.getNextJointState(target_twist);
const StatusCode status = servo.getStatus();

}  // namespace moveit_servo
```

Besides the benefits described above, this refactor paved the path for two key new enhancements to MoveIt Servo that are currently available on the **main** branch of MoveIt 2.

#### Pose Tracking as a full feature
Previously, pose tracking was a key featured demo of MoveIt Servo, where the pose error fed into a PID controller that then was converted to twist commands. As part of this refactor, Ibrahim added an official third command type for MoveIt Servo where you can directly command a pose and the necessary joint delta is automatically determined from the pose error and the robot’s speed limits – without the need for PID gains!

<div style="text-align:center">
    <img width="500" style="margin: 10px auto 32px;" src="{{ site.url }}/assets/images/blog_posts/GSoC_2023/image1.gif" alt="Pose Tracking as a full feature" />
</div>

#### Planning Subgroup switching
This was motivated by our work with NASA Johnson Space Center, which deals with a 6-DOF arm on a linear rail performing autonomous tasks. The interest here was in having different planning groups – namely arm only vs. arm + rail, and being able to switch the joints used for servoing at runtime, without having to rely on the computationally expensive option of starting separate MoveIt Servo nodes for each planning group.

<div style="text-align:center">
    <img width="500" style="margin: 10px auto 32px;" src="{{ site.url }}/assets/images/blog_posts/GSoC_2023/image4.gif" alt="Planning Subgroup switching" />
</div>

## Project 2: IK Benchmarking
This work was done by [Mohamed Raessa](https://github.com/Robotawi), advised by [me](https://github.com/sea-bass) and [Stephanie Eng](https://github.com/stephanie-eng). Mohamed had previously worked with MoveIt Servo for this PhD thesis, and prior to starting the main project he had already developed a few MoveIt tutorials, including a [ROS 2 port of the MoveIt Setup Assistant tutorial](https://github.com/moveit/moveit2_tutorials/pull/647). However, Mohamed was looking forward to getting more familiar with inverse kinematics (IK) solvers in MoveIt and contributing to open-source software in a bigger capacity.

While this project originally started with a focus on our new [pick_ik](https://github.com/PickNikRobotics/pick_ik) solver, including a [new tutorial](https://moveit.picknik.ai/main/doc/how_to_guides/pick_ik/pick_ik_tutorial.html), by far the most requested information with each new IK solver we released was: how well does it perform? And it was challenging for us to provide quantitative answers. To drill down into this question:

* How fast is the solver?
* How often does it find a solution?
* How accurate are the solutions?
* If solver X is faster than solver Y, when/why is it better to use solver Y at all?

Taking these questions as a starting point, Mohamed was crucial in the release of our new [ik_benchmarking](https://github.com/PickNikRobotics/ik_benchmarking) tool. While benchmarking pick_ik was our original goal, coincidentally, this project was happening at the same time as TRACLabs open-sourced their [ROS 2 port of the TRAC-IK solver](https://bitbucket.org/traclabs/trac_ik/src/rolling-devel/). This solver’s performance (speed and solve rate) with our benchmarks matched those presented in their repo very well.

To configure your IK benchmarking experiment with this new package, you can create a YAML file like this. The key parts are the MoveIt configuration package, a list of IK solver configuration files within that package, and the actual samples to generate.

```yaml
moveit_config_pkg: moveit_resources_panda_moveit_config
robot_name: moveit_resources_panda
planning_group: panda_arm

sample_size: 10000
random_seed: 12345
ik_timeout: 0.1
ik_iteration_display_step: 1000

ik_solvers:
  - name: KDL
    kinematics_file: kinematics.yaml
  - name: TRAC_IK
    kinematics_file: trac_ik_kinematics.yaml
  - name: bio_ik
    kinematics_file: bio_ik_kinematics.yaml
```

This tool will then randomly sample valid initial and target joint configurations for your robot, and attempt to find IK solution for each of these samples. The results are then generated to human-readable CSV files, which you can process yourself with your favorite software … or you can run our data visualization tool right away!

<div style="text-align:center">
    <img style="margin: 10px auto 32px;" src="{{ site.url }}/assets/images/blog_posts/GSoC_2023/image5.png" alt="Project 2: IK Benchmarking" />
</div>

In summary, the benchmarking tool Mohamed developed for his project ended up being very useful to us at PickNik as all these new IK solvers emerged. Indeed, for many of our projects here, we’ve been employing all these IK solvers in different scenarios, and now we have great tools to better make informed decisions that suit our users’ needs.

#### Conclusion
Please join me in thanking Mohamed and Ibrahim for their contributions to MoveIt, and we look forward to their continued work on open-source software. Feel free to give the new MoveIt Servo and IK benchmarking tools a try if you’re interested, and reach out with any questions or comments.

Future work for both of these projects actually converges to a common point. As we described above, we’ve been expanding our support of IK solvers. Some of them are fast (KDL and TRAC-IK), while others may be more computationally expensive but support arbitrary cost functions to constrain the IK solutions to meet tailored operational requirements (BioIK and pick_ik).

Since MoveIt Servo uses IK solvers for its twist and pose command modes, as do our motion planning pipelines, you have many tools at your disposal to customize your robot’s behavior for your specific robotics motion planning and control applications. We look forward to hearing from you!
