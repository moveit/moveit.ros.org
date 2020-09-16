---
author: Adam Pettinger, PhD Student, University of Texas at Austin
comments: false
date: 2020-09-09
layout: post
title: Introducing MoveIt Servo in ROS 2
media_type: video
media_link: https://www.youtube.com/embed/MF-_XKpGefY
description: MoveIt Servo (formerly JogArm) is now available in ROS 2 Foxy Fitzroy. 
categories:
- moveit
- ros2
- servo
- jog
---

MoveIt Servo (formerly Jog Arm) is now available in ROS 2 Foxy Fitzroy. It includes all of the great features from ROS 1, including singularity and collision safety, joint limit enforcement, and agnostic input. New for ROS 2 is support for running Servo as a composable node, increased test coverage, and ready-made demonstrations and examples.

MoveIt Servo allows you to send end effector velocity commands directly to the robot, and is part of MoveIt 2’s focus on realtime performance. As with the ROS 1 version, using Servo does not preclude you from using MoveIt’s planning and execution framework, and using both alongside each other remains a powerful tool for controlling your manipulator. The remainder of this article summarizes the new features of Servo and gives ideas for its use.

## Servo Possibilities

Servo is very versatile, so the cool things you can do with it are nearly unlimited. Here are some features we think are fantastic, and some ideas you can use them with.

1- Varied input devices. Because the input to Servo is a geometry_msgs/TwistStamped, the source of the input has unlimited options. Gamepads, VR hand controllers, and 6 DoF CAD mice all work great, but you could also send commands via another ROS node to enable voice-to-command control, visual servoing, or virtual fixture control. Additionally, any number of these input devices can be used together to give your robot different input modes.
2- Command frame choice. The TwistStamped input includes frame information which is up to the user to set. Changing this during run-time is nice while teleoperating and allows you to pick whichever frame is easiest to control in. Common choices include the End Effector and base frame. If performing a task with a defined frame, you can also servo in the task frame!

Pick and place, mobile manipulation, and contact tasks are the kinds of things Servo can help you with, and now those capabilities are available in ROS 2! Additionally, Servo’s capabilities are continuing to grow with ongoing work to use Servo to move a robot to a target Pose and make some servoing tasks easier.

## Interface Options

Servo can still be run through its C++ API, and this remains a great option for using Servo in your projects. A demonstration of the C++ API in action was included with the ROS 2 effort, and the hope is that you can get MoveIt Servo running within minutes using this demo, similar to the available [moveit_cpp](https://github.com/ros-planning/moveit2/tree/main/moveit_demo_nodes/run_moveit_cpp) demonstration included in the Foxy release. See the [Servo demonstration page](https://github.com/ros-planning/moveit2/blob/main/moveit_ros/moveit_servo/doc/running_the_demos.md) for details on getting started.

![](/assets/images/blog_posts/moveit2_servo/Cpp_Interface_Demo.gif)

Servo also makes use of the ROS 2 composable node framework and offers a component that can be run by itself or in a component container with the rest of your project, allowing intra-process communication. The component (named moveit_servo::ServoServer) takes care of all of the run-time details you would need to manage if using the C++ API interface: loading the parameters, setting up the planning scene, and starting Servo.

The example of the component interface shows how to launch Servo as a component, including enabling intra-process communications to avoid unnecessary message copies. See the [demonstrations page](https://github.com/ros-planning/moveit2/blob/main/moveit_ros/moveit_servo/doc/running_the_demos.md#Component-Demo) to get started.

![](/assets/images/blog_posts/moveit2_servo/Servo_Component_Demo.gif)

Regardless of how you launch Servo, interacting with it is largely the same and done through ROS topics and services. Publishing commands is as simple as:

```cpp
auto twist_pub = node->create_publisher<geometry_msgs::msg::TwistStamped>(“command_topic”, 10);

auto msg = std::make_unique<geometry_msgs::msg::TwistStamped>();
msg->header.stamp = node->now();
msg->header.frame_id = "command_frame_name";
msg->twist.linear.x = 0.3;
msg->twist.angular.z = 0.5;

twist_pub->publish(std::move(msg));
```

Also available through the ROS interface for both the C++ API and component:
- Sending joint commands
- Changing the “control” dimensions to fil
- Changing the “drift” dimensions to avoid singularities

Additional services for starting and stopping Servo are available with the component method. See the [tutorial page](https://github.com/ros-planning/moveit2/blob/main/moveit_ros/moveit_servo/doc/servo_tutorial.md) for a detailed overview of MoveIt Servo.

Below is a presentation that Adam gave on his Google Summer of Code project:
<iframe width="100%" height="315" src="https://www.youtube-nocookie.com/embed/CZikVEoB52w" frameborder="0" allowfullscreen></iframe>
