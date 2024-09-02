---
comments: false
date: 2024-08-19
author: Cihat Kurtuluş Altıparmak, Computer Engineering Undergraduate Student at the Istanbul Technical University
layout: post
title: "Google Summer of Code : Zenoh Support & Benchmarking"
media_type: image
media_link: /assets/images/blog_posts/GSoc2024.jpg
description: "We've completed our project titled \"Zenoh Support & Benchmarking\". With this project, we could try to understand how to be used rmw_zenoh in MoveIt 2 and how rmw_zenoh affects MoveIt's runtime performance. "
categories:
- MoveIt
- GSoC
---

We've completed our project titled "Zenoh Support & Benchmarking". With this project, investigated how rmw_zenoh would be used in MoveIt 2 and how rmw_zenoh would affect MoveIt's runtime performance.

## Motivation

The goal of this Google Summer of Code Project was to make [rmw_zenoh_cpp](https://github.com/ros2/rmw_zenoh) available for MoveIt 2, benchmark the different midlewares such as rmw_cyclonedds and rmw_fastrtps against scenarios from complex robotic problems, ranging from trajectory planning and task planning to basic ROS works like basic topic subscription-publishing, and service-client operations. In addition we reported the found bugs to the rmw_zenoh project and implemented a CI configuration that supports testing rmw_zenoh.

rmw_zenoh comes to the fore with some exciting features like configurability with elastic topologies, supporting a lot of protocols such as TCP, UDP, making it promising in WIFI networks compared to other DDS based middlewares, even though it's still in development phase.

## Progress
**Integration to Moveit 2**

Initially, we couldn't run MoveIt with rmw_zenoh due to data races inside the `rmw_wait` function, which brought about some problems in the Multithreaded Executor. We were able to resolve these issues in the middle of the GSoC project period, enabling MoveIt support for the rmw_zenoh middleware. With that, rmw_zenoh showed some pretty good potential with approximately the same performance as rmw_fastrtps, even if rmw_zenoh is running the TCP protocol by default. Unfortunately, there are still several issues that we found and reported, and it's up to the community and rmw_zenoh development team to finding solutions and improvements for them.

**Benchmarking**

During this summer, the middleware benchmarking tool has been implemented to compare the different middlewares including rmw_zenoh, rmw_cyclonedds and rmw_fastrtps. Several scenarios have been implemented for measuring how the middlewares affects performance in typical robotics use cases. You can find the middleware benchmarking tool here: [moveit_middleware_bechmark](https://github.com/CihatAltiparmak/moveit_middleware_benchmark).

The implemented test scenarios include:

- Basic Service-Client Works
- Basic Topic Subscription-Publishing
- Perception Pipeline
- MoveIt Task Constructor

**Bugs in rmw_zenoh**

Below is a list of partially unresolved issues that came up during the GSoC project work,

- https://github.com/ros2/rmw_zenoh/issues/257
- https://github.com/ros2/rmw_zenoh/issues/240
- https://github.com/ros2/rmw_zenoh/issues/251
- https://github.com/ros2/rmw_zenoh/issues/186

and our related contributions are below.

- https://github.com/ros2/rmw_zenoh/pull/252
- https://github.com/ros2/rmw_zenoh/pull/255
- https://github.com/ros2/rmw_zenoh/pull/256

**Conducting Benchmarks in CI**


The benchmarks have been conducted in a way to give the reliable comparisons in github-actions and exporting the metrics.
Finally, the benchmarking CI system supports visualizing benchmark results as plots on a simple GitHub pages website.

**Contributions to MoveIt During GSoC Project**
- https://github.com/moveit/moveit2/pull/2963
- https://github.com/moveit/moveit2/pull/2834
- https://github.com/moveit/moveit2_tutorials/pull/906
- https://github.com/moveit/moveit2_tutorials/pull/944

## Achievements

We have benchmarked the middlewares against various scenarios using [this script](https://github.com/CihatAltiparmak/moveit_middleware_benchmark/blob/24-Aug-2024-demonstration/scripts/run_all_benchmarks.sh) and we have found below benchmark results.
We have used default configurations of rmw_zenoh except the fact that we configured some tcp settings like below:

```sh
# for rmw_zenoh
sudo sysctl -w "net.ipv4.tcp_rmem=102400 102400 102400"
sudo sysctl -w "net.ipv4.tcp_wmem=102400 102400 102400"
sudo sysctl -w "net.ipv4.tcp_mem=102400 102400 102400"

# for all middlewares
sudo sysctl -w net.ipv4.udp_mem="102400 873800 16777216"
sudo sysctl -w net.core.netdev_max_backlog="30000"
sudo sysctl -w net.core.rmem_max="20971520"
sudo sysctl -w net.core.wmem_max="20971520"
sudo sysctl -w net.core.rmem_default="20971520"
sudo sysctl -w net.core.wmem_default="20971520"
```

![scenario_perception_pipeline](/assets/images/gsoc24/scenario_perception_pipeline_blog.png)

![scenario_moveit_task_constructor](/assets/images/gsoc24/scenario_moveit_task_constructor_blog.png)

![scenario_basic_topic_sub_pub](/assets/images/gsoc24/scenario_basic_topic_sub_pub_blog.png)

![scenario_basic_service_client](/assets/images/gsoc24/scenario_basic_service_client_blog.png)

## Conclusion

It was an exciting progress for me. I've contributed a lot of open source project in this period and i've learnt a lot from my work and my mentors showing the way during Google Summer of Code. I strongly suggest you to join Google Summer of Code Program, especially in MoveIt organization side for those who interested in robotics. After this Google Summer of Code works, i'm willing to continue this project.

## Additional

The heartfelt thank you goes to my mentors [Sebastian Jahr](https://github.com/sjahr) and [Henning Kayser](https://github.com/henningkayser). An other thanks goes to [Julien Enoch](https://github.com/JEnoch) and [Zenoh Community](https://zenoh.io/community/) for trying our middleware benchmark tool and giving valuable feedbacks to us. Without valuable helps of [Zenoh Community](https://zenoh.io/community/), we couldn't complete this project.
