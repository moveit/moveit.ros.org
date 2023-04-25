---
author: Peter David Fagan
comments: false
date: 2023-02-15
layout: post
slug: MoveIt-Humble-Release
title: MoveIt 2 Python Library
media_type: image
media_link: /assets/images/blog_posts/moveit_py_banner.png
description: A new Python library is now available for MoveIt 2.
categories:
- MoveIt
- ROS
- Python
- Google
---

A new Python library for MoveIt is now available in ROS 2 Rolling. The new Python library binds core components of the MoveIt C++ API and exposes the functionalities of these components through a Python API.

**Python Library Features**

The Python library can be found under the folder [moveit_py](https://github.com/ros-planning/moveit2/tree/main/moveit_py) in the MoveIt 2 repository root directory. An outline of the codebase structure is provided within the package [``README.md``](https://github.com/ros-planning/moveit2/blob/main/moveit_py/README.md), below we provide a high-level overview of the structure of the Python library,

* A ``core`` module that provides Python bindings for packages available in ``moveit_core``
	* collision_detection
	* kinematic_constraints
	* planning_interface
	* planning_scene
	* robot_model
	* robot_state
	* robot_trajectory
	* transforms


* A ``planning`` module that provides Python bindings for a subset of the functionalities within ``moveit_cpp``
* A ``servo`` module that enables users to integrate new teleoperation devices in Python

**Getting Started**
In order to help new users get started with the library we have curated the following set of tutorials,

* [Motion Planning Tutorial](https://moveit.picknik.ai/main/doc/examples/motion_planning_python_api/motion_planning_python_api_tutorial.html)
* [Jupyter Notebook Tutorial](https://moveit.picknik.ai/main/doc/examples/jupyter_notebook_prototyping/jupyter_notebook_prototyping_tutorial.html)

API documentation is also available for the library [here](https://moveit.picknik.ai/main/doc/api/python_api/api.html).

**What's next?**

There are many additional features, enhancements and tutorials that can be made available for the existing Python library. Below are some features, enhancements and tutorials that should be addressed in the near future:

* features
	* Implement interface for interacting with grippers
	* Implement utilities for deploying learnt policies with MoveIt Servo
	* Establish feature parity with existing C++ API

* enhancements
	* [Migrate docstrings to header files](https://github.com/ros-planning/moveit2/issues/1945)
	* [Create custom typeCaster for ``Eigen::Isometry3d``](https://github.com/ros-planning/moveit2/issues/1886)

* tutorials
	* Real-world data collection for imitation learning
	* Setting up real-world reinforcement learning experiments
	* Deploying policies learnt in Isaac-Sim on real robots

New contributors to the MoveIt project are highly encouraged to get involved in development of the Python library. See the [Contribution Guides](https://moveit.ros.org/documentation/contributing/) for further details.

### Acknowledgements
I would like to thank my project mentors Henning Kayser and Michael Gorner for the time they dedicated to supervise my project. I would also like to thank other MoveIt maintainers/contributors who took the time to review my code and provide feedback. Finally thank you to the [Google Summer of Code program](https://summerofcode.withgoogle.com/) for funding this project and to the [ML Collective](https://mlcollective.org/) for providing compute funding for this project.
