---
author: Mark Moll
comments: false
date: 2020-07-24
layout: post
title: 'MoveIt Research Roundup'
media_type: image
media_link: /assets/images/blog_posts/moveit_research/FetchMagicLeap.jpg
description: A brief selection of robotics research that was enabled by MoveIt
categories:
- MoveIt
- ROS
---

This is the first in a series of posts where we will highlight interesting robotics research that leverages MoveIt in the experimental evaluation. Most of the research results may not be immediately available within MoveIt itself, but we expect that as the underlying ideas mature they will make their way into MoveIt in some shape or form. We highly encourage the original authors to be active participants in this process, not only as a service to the robotics community, but also to increase the impact of the research: if research is easy to replicate, it is more likely to be adopted and further improved.

If you'd like to see your work featured here, feel free to email [Mark Moll](mailto:mark@picknik.ai).

## A New Reality

Augmented reality (AR) is increasingly being explored as a way to interact with robots. Communication via AR can work in both directions: it can be an input modality for a user to manipulate a virtual copy of a robot or some object to specify a desired goal or as an output modality to visualize robot intent or internal state. A recent paper [1] explores how AR can be combined with MoveIt to specify basic pick and place tasks, and offer previews of plans computed with MoveIt. By specifying only high-level goals, the user doesn't have to worry about _how_ a robot should achieve some goals, and, instead, can rely on MoveIt to provide solution paths. In the image above a user places virtual cans in desired locations. The inset figure shows the user’s point of view. The robot takes this input and computes a plan to place real cans in those locations.

This work builds on another recent paper [2] to use AR to program and adapt trajectories. This earlier paper included user studies and found that “users were able to more quickly and accurately program and edit robot motions using [mixed reality] than the 2D baseline.” Both studies use [ROS#](https://github.com/siemens/ros-sharp), a set of libraries and tools for communication between ROS and C# applications, in particular Unity. Unity can be used to develop new applications for AR headsets such as the Magic Leap used in [1] or MicroSoft Hololens used in [2]. If you have a HoloLens, then [this fork of the ROS# repo](https://github.com/dwhit/ros-sharp) from the authors of [2] might be a good starting point.

## Climbing and Manipulation in Microgravity

NASA's Robonaut2 team has been working with the Kavraki Lab at Rice University on improving the motion planning capabilities for its humanoid. The challenges for this system arise not only for the large number of degrees of freedom (34 in the main body alone!), but also the complex kinematic constraints that arise when climbing on handrails or opening doors. A recently published paper [3] describes an approach to have motion planning guided by workspace distance traveled by a few control points on the robot results in fast, high-quality motions without explicit optimization.

A more recent work [4] decouples constrain adherence from motion planning. This work generalizes many prior works on constrained motion planning and is currently being used for Robonaut2. Bringing this type of functionality to MoveIt for arbitrary robots is on our development roadmap, so stay tuned!

## MoveIt for UAVs

Although most people use MoveIt for manipulators, it is also capable to plan motions for mobile bases, Autonomous Underwater Vehicles (AUVs) and Unmanned Aerial Vehicles (UAVs). In [5] a 3D navigation system is presented for precision argiculture. Using a Unity-based simulation environment, a MoveIt-based system is presented for multi-level navigation that is flexible and robust enough to deal with complex, dynamic environments.

## From High-Level Temporal Logic Specifications to Low-Level Motion Plans

There has been a lot of research into how feasible motions can be generated from high-level specifications. The research spans traditional (temporal) logic, AI planning, control theory, and robot motion planning. A recent paper [6] uses a combination of offline and online planning (using MoveIt, of course!) to generate reactive motion plans for a robot given a temporal logic specifications.


### References

[1] J. D. Hernández, S. Sobti, A. Sciola, M. Moll, and L. E. Kavraki, “Increasing Robot Autonomy via Motion Planning and an Augmented Reality Interface,” IEEE Robotics and Automation Letters, vol. 5, no. 2, pp. 1017–1023, Apr. 2020. 

[2] S. Y. Gadre, E. Rosen, G. Chien, E. Phillips, S. Tellex, and G. Konidaris, “End-user robot programming using mixed reality,” in IEEE Intl. Conf. on Robotics and Automation, pp. 2707–2713, 2019.

[3] R. Luna, M. Moll, J. M. Badger, and L. E. Kavraki, “A Scalable Motion Planner for High-Dimensional Kinematic Systems,” Intl. J. of Robotics Research, vol. 39, no. 4, pp. 361–388, Apr. 2020.

[4] Z. Kingston, M. Moll, and L. E. Kavraki, “Exploring implicit spaces for constrained sampling-based planning,” Intl. J. of Robotics Research, vol. 38, pp. 1151–1178, Sept. 2019.

[5] L. do Ó, P. Alexandre Prates, R. Mendonça, A. Lourenço, F. Marques and J. Barata, "Autonomous 3-D Aerial Navigation System for Precision Agriculture," 2019 IEEE 28th International Symposium on Industrial Electronics (ISIE), Vancouver, BC, Canada, 2019, pp. 1144-1149.

[6] C. I. Vasile, X. Li, and C. Belta, “Reactive sampling-based path planning with temporal logic specifications,” The International Journal of Robotics Research, vol. 39, no. 8, pp. 1002–1028, 2020.
