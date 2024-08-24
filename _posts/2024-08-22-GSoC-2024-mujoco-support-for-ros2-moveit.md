---
comments: false
date: 2024-08-22
author: Sangtaek Lee
layout: post
title: "GSoC 2024 - MuJoCo support for ROS 2 MoveIt"
media_type: image
media_link: /assets/images/blog_posts/gsoc_2024/mujoco_panda.gif
description: "As part of GSoC 2024, I have been working on MuJoCo support for ROS 2 and MoveIt with the help of three mentors: Henning Kayser, David Yackzan, and Paul Gesel."
categories:
- MoveIt
- GSoC
---

As part of GSoC 2024, I have been working on MuJoCo support for ROS 2 and MoveIt with the help of three mentors: [Henning Kayser](https://github.com/henningkayser), [David Yackzan](https://github.com/dyackzan), and [Paul Gesel](https://github.com/pac48). All my work is located in either [mujoco_ros2_control](https://github.com/sangteak601/mujoco_ros2_control) or [mujoco_ros2_control_examples](https://github.com/sangteak601/mujoco_ros2_control_examples) repositories.

### Project Goal
The main goal of the project was to provide another simulator option for ROS 2 and MoveIt since Gazebo, which is the widely used simulator in the ROS community, was unstable when contacts between objects existed. To accomplish this, I planned to deliver two outcomes: the interface between `ros2_control` and MuJoCo simulation, and examples with the implemented interface.

### Accomplishments
**Joint Command/State Interface**  
In order to write commands to the joints and read states from the joints, the joint command interface and the joint state interface were implemented first. For the command interface, initially, the position, velocity, and effort interfaces were implemented.

However, directly manipulating position or velocity causes discontinuity in the simulation and sometimes causes simulation crashes. Therefore, a PID controller was also implemented for the position and velocity interfaces.

![mujoco_position_pid](/assets/images/blog_posts/gsoc_2024/mujoco_position_pid.gif)

**FT Sensor Interface**  
The force torque sensor is a commonly used sensor in robotic applications. It was also needed to create a peg-in-hole example. Therefore, the force torque sensor interface was implemented. One of the notable things was that the sign convention of the sensor output in MuJoCo was different from the one in ROS.

![mujoco_ft_sensor](/assets/images/blog_posts/gsoc_2024/mujoco_ft_sensor.gif)

**Setup the Scene for Peg-In-Hole Example**  
To create a peg-in-hole example, I needed to set up a robot, a peg, and a hole in the simulation environment. I set up the Panda robot so that I could control it with MoveIt. One challenge with creating a hole was that MuJoCo doesn’t allow concave collision shapes. So, I had to perform convex decomposition to split the hole into multiple convex shapes.

![mujoco_panda](/assets/images/blog_posts/gsoc_2024/mujoco_panda.gif)

**Controller for Peg-In-Hole Example**  
For the controller, the joint trajectory controller combined with the admittance controller was used. Tuning the parameters for the admittance controller was quite tricky, and it took a long time to achieve robust motion. I also experienced strange behavior at the end of the scenario, where the robot jumped off from its position when the controller canceled its goal.

![mujoco_peg_in_hole](/assets/images/blog_posts/gsoc_2024/mujoco_peg_in_hole.gif)

### Conclusion
There are a few potential future improvements. The first one is investigating the issues I faced during development, which include crashes with the position command interface and jerk motion at the end of the peg-in-hole scenario. Another is migrating to a more recent version of ROS 2, such as Rolling and Jazzy. Lastly, adding more features to the GUI will improve the usability of the software.

It was a great 12 weeks where I learned a lot from the mentors and the experience. I really wish this will be used by many ROS and MoveIt users and benefit them. I will continue to develop and maintain the repositories after GSoC. Please suggest ideas and join as developers if anyone is interested in this project.
