---
comments: false
date: 2024-08-19
author: Cihat Kurtuluş Altıparmak, Computer Engineering Undergraduate Student at the Istanbul Technical University
layout: post
title: "Google Summer of Code : Zenoh Support & Benchmarking"
media_type: image
media_link: /assets/images/blog_posts/GSoc2024.jpg
description: "We've completed our project titled \"Zenoh Support & Benchmarking\". With this project, we could try to understand how to be used rmw_zenoh in MoveIt2 project and how rmw_zenoh affects MoveIt2's workflow. "
categories:
- MoveIt
- GSoC
---

We've completed our project titled "Zenoh Support & Benchmarking". With this project, we could try to understand how to be used rmw_zenoh in MoveIt2 project and how rmw_zenoh affects MoveIt2's workflow.

## Movitation

The aims of this Google Summer of Code Project was to make [rmw_zenoh_cpp](https://github.com/ros2/rmw_zenoh) enable for MoveIt2, benchmark the midlewares such as rmw_cyclonedds and rmw_fastrtps against some scenarios from complex robotic problems like trajectory planning and task planning to basic ROS works like basic topic subscription-publishing, service-client operations, report the found bugs to rmw_zenoh team and configure CI in a way that rmw_zenoh can be supported.

rmw_zenoh comes to the fore with some exciting features like configurability with elastic topologies, supporting a lot of protocol such as TCP, UDP and usable at WIFI networks compared to DDS based middlewares even though it's still in development phase.

## Progress
**Integration to Moveit2**

Even if we couldn't run moveit2 with rmw_zenoh due to data races inside `rmw_wait` function in the starting of GSoC project, which bring about some problems in Multithreaded Executor, we could run MoveIt2 with rmw_zenoh after some bug-fixes for `rmw_wait` function in the middle of GSoC project period. Even if rmw_zenoh has some problems and is in development progress, you can run MoveIt2 using rmw_zenoh middleware. Additionally, rmw_zenoh has some pretty good potential so that you can get approximately as same performance as rmw_fastrtps even if rmw_zenoh is used TCP protocol by default, you can help for rmw_zenoh team to completed and find the bugs!

**Benchmarking**

During this summer, the middleware benchmarking tool is created to compare the middlewares such as rmw_zenoh, rmw_cyclonedds and rmw_fastrtps. Some scenarios are implemented for measuring how the middlewares affect in some scenarios in robotics. Here is our middleware benhmarking tool : [moveit_middleware_bechmark](https://github.com/CihatAltiparmak/moveit_middleware_benchmark).

Some of scenarios are:

- Basic Service-Client Works
- Basic Topic Subscription-Publishing
- Perception Pipeline
- MoveIt Task Constructor

**Bugs in rmw_zenoh**

It's also reported some bugs in a case of catching it. These are

- https://github.com/ros2/rmw_zenoh/issues/257
- https://github.com/ros2/rmw_zenoh/issues/240
- https://github.com/ros2/rmw_zenoh/issues/251
- https://github.com/ros2/rmw_zenoh/issues/186

It's also contributed to rmw_zenoh.

- https://github.com/ros2/rmw_zenoh/pull/252
- https://github.com/ros2/rmw_zenoh/pull/255
- https://github.com/ros2/rmw_zenoh/pull/256

**Conducting Benchmarks in CI**

Additionally, the website for visualization of benchmark results created so that it's also configurable with CI.

Finally, the benchmarks have been conducted in a way to give the reliable comparisons in github-actions and the results are visualized in website.

**Contributions to MoveIt During GSoC Project**
- https://github.com/moveit/moveit2/pull/2963
- https://github.com/moveit/moveit2/pull/2834
- https://github.com/moveit/moveit2_tutorials/pull/906
- https://github.com/moveit/moveit2_tutorials/pull/944

## Achievements

We have benchmarked the middlewares against various scenarios using [this script](https://github.com/CihatAltiparmak/moveit_middleware_benchmark/blob/24-Aug-2024-demonstration/scripts/run_all_benchmarks.sh) and we have found below benchmark results. We have used default configurations of rmw_zenoh except the fact that we configured some tcp settings like below:

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

It was an exciting progress for me. I've contributed a lot of open source project in this period and i've learnt a lot from my works and my mentors's showing the way during Google Summer of Code. I strongly suggest you to join Google Summer of Code Program, especially in MoveIt organization side for those who interested in robotics. After this Google Summer of Code works, i'm willing to continue this project.

## Additional

The heartfelt thank you goes to my mentors [Sebastian Jahr](https://github.com/sjahr) and [Henning Kayser](https://github.com/henningkayser). An other thanks goes to [Julien Enoch](https://github.com/JEnoch) and [Zenoh Community](https://zenoh.io/community/) for trying our middleware benchmark tool and giving valuable feedbacks to us. Without valuable helps of [Zenoh Community](https://zenoh.io/community/), we couldn't complete this project.
