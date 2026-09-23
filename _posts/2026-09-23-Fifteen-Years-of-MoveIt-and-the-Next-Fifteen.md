---
comments: false
date: 2026-09-23
author: Dave Coleman, Founder and Chief Product Officer, PickNik Robotics
layout: post
title: "Fifteen Years of MoveIt, and the Next Fifteen"
media_type: image
media_link: /assets/images/blog_posts/fifteen-years-of-moveit/QCxPicknik.png
description: "MoveIt turns fifteen. PickNik founder Dave Coleman reflects on the road from Willow Garage to production robots, and why PickNik is joining forces with Qualcomm Technologies."
---

Today we announced that [PickNik Inc. and Qualcomm Technologies, Inc. are joining forces](https://www.qualcomm.com/news/releases). Before I go into that, I want to talk about MoveIt, because MoveIt is the reason any of this happened.

If you have learned about robotic arm manipulation in the past decade and a half, or been involved in manipulation R&D, there's a good chance you've used MoveIt™. More than 560 people have contributed code across the MoveIt project, which today spans 40 repositories, 6,700 GitHub stars, and 4,400 forks. The two main MoveIt papers have been cited more than 1,700 times between them. More than a million people have visited MoveIt's websites and documentation over the years. Thousands of robot models have been made to work with it, in labs and companies I have never heard of, which is the point.

### Where MoveIt came from

MoveIt started at Willow Garage, and the earliest and largest debts are owed to Alex (Ioan) Șucan, Sachin Chitta, E. Gil Jones, and Acorn Pooley, who wrote the first version of what became the standard way to move an arm in ROS™. I got my start in this world as a motion planning intern at Willow Garage in the summer of 2012, and benefited tremendously from their mentorship. I really loved ROS's mission.

But then Willow Garage shut down in 2014, and a lot of software from the Willow days did not survive. MoveIt did, however, because Michael Ferguson, Robert Haschke, Michael Görner, and I decided it was worth keeping alive. Back in grad school, I spent way too much time working on MoveIt rather than publishing research, but it turned out to be the most useful thing I could have been doing anyway, which is a thing I got lucky about.

I started PickNik in 2015 when companies were asking for help using MoveIt. I started it as a software consulting shop, but then we received funding to begin the development of MoveIt 2 from a number of sources, including the EU's ROSin and the US's SBIR programs, as well as Acutronic Robotics. Many others got involved over time, including Mark Moll, Nathan Brooks, Sebastian Castro, Henning Kayser, Jafar Uruç, Andy Zelenak, Felix von Drigalski, and Tyler Weaver. The kind of maintenance required to keep a big project like MoveIt going can be unglamorous, so thank you to everyone on the [complete list of contributors](https://github.com/moveit/moveit2/graphs/contributors?all=1).

### Going forward

For most of MoveIt's history, the easy problems in the industry were solved with hard-coded waypoints, but the MoveIt community instead used geometric and model-based dynamic motion planning to achieve more reactivity. This included inverse kinematics, collision checking, and probabilistic sampling-based motion planning. Everything looked great in simulation, but the biggest struggle was always making it work on a real-time controller, reliably, in a production system.

Learned models are now really changing our field. VLAs, VLMs, and WAMs are becoming a bigger part of the robotic system in ways I could not have imagined previously. Things we used to use heuristics for are now shifting to AI-based task planning. But I don't think planning goes away. At PickNik, we've been betting on hybrid AI systems over the past few years, combining the power of AI models with the determinism, safety, and validity of the traditional MoveIt approaches. This hybrid AI approach is where the interesting architecture work is now: how to get advanced motion planning deployed in production environments today, at the level of reliability that our customers demand.

MoveIt is already running in production in incredible places: NASA missions, surgical robots, warehouse logistics, 3D bioprinting, cell therapy manufacturing, sanitation in food processing, strawberry picking, airport baggage handling, bathroom cleaning, and car washes. These are real deployments running on ROS 2 and MoveIt.

Making AI models work reliably in all of those places is a different engineering problem than the last decade was. It needs different expertise and a different kind of investment.

### Why is Qualcomm Technologies acquiring PickNik?

Back to the acquisition announcement. "Why Qualcomm?" A key insight about the future of robotics is that these powerful AI models need to run on the robot in real time, within a power budget, not in a data center or over a network. With that realization comes a fundamental shift: many of the toughest AI challenges are no longer purely software problems, but joint software and hardware design challenges. A good way to address those problems is to be close to the people designing the compute, instead of integrating with it after it's already designed. Powerful heterogeneous compute and advanced processors are enabling techniques we could only dream of 15 years ago, and that means paying more attention to the hardware layer is not optional.

I will admit that when this started I thought of Qualcomm as the company powering my 5G Android phone. I have spent the last several months learning how wrong I was: Qualcomm is a full-stack physical AI company, combining industry-leading compute with software and AI that are increasingly enabling the next generation of intelligent robots with its Qualcomm Dragonwing platforms. I'm excited about how heavily Qualcomm is now betting on physical AI.

I'm also comforted knowing that they have made some big plays in open source recently, including acquiring Arduino, Modular, Edge Impulse, and Foundries.io. Qualcomm and Arduino bring scale to developer communities, and I look forward to seeing open-source MoveIt and the ROS interoperability layer go further into the mainstream with participation from players like Qualcomm.

The part that mattered most to me personally: we are both founding members of the Open Source Robotics Alliance, and Qualcomm will continue investing in ROS and MoveIt.

### What is not changing

- MoveIt 1 and 2 stays open source under its existing license, with community-driven roadmaps.
- MoveIt stays hardware agnostic.
- PickNik customers will continue to receive support from the team.
- We will continue to support the open source development of MoveIt and ROS.

### My promise

I am going to keep being an advocate for MoveIt, for ROS, and for open source, from inside a company considerably larger than the one I started. That is my commitment to you and the entire MoveIt community.

This week I am at ROSCon in Toronto, at the PickNik booth, number 7. Please stop by and see me. Thank you for fifteen years of groundbreaking work in robotics. Let's go do the next fifteen and beyond.
