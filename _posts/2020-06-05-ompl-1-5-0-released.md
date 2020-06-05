---
author: Mark Moll
comments: false
date: 2020-06-05
layout: post
title: OMPL 1.5.0 released for ROS 1 Noetic
media_type: image
media_link: /assets/images/blog_posts/ompl-1-5-0.jpg
description: A new release of the Open Motion Planning Library, now with even more planning algorithms!
categories:
- moveit
- code
---

[line]: /assets/images/blog_posts/line.png

We are happy to announce version 1.5.0 of the Open Motion Planning Library (OMPL). OMPL is used as the default planning library in MoveIt.

OMPL 1.5 contains the following main changes:

* A C++14 compiler is now required. The minimum version of CMake required is now 3.5 and the minimum version of Boost supported is now 1.58.
* All development now takes place on [Github](https://github.com/ompl/ompl). This used to be a git mirror of the mercurial repository on BitBucket, but since BitBucket is phasing out mercurial support the GitHub repo is now the main repo. All the old issues have been migrated to GitHub.
* Added build targets for easily creating Docker images for OMPL, the [PlannerArena web server](http://plannerarena.org/), and the [OMPL web app](http://omplapp.kavrakilab.org/). Docker images are available on [Docker Hub](https://hub.docker.com/u/kavrakilab).
* Added new planners:
  * [XXL](http://ompl.kavrakilab.org/classompl_1_1geometric_1_1XXL.html#gXXL): a probabilistically complete sampling-based algorithm designed to plan the motions of high-dimensional mobile manipulators and related platforms.
  * [ABIT\*](http://ompl.kavrakilab.org/classompl_1_1geometric_1_1ABITstar.html#gABITstar): an extension to BIT* that uses advanced graph-search techniques to find initial solutions faster.
  * [AIT\*](http://ompl.kavrakilab.org/classompl_1_1geometric_1_1AITstar.html#gAITstar): an anytime asymptotically optimal algorithm that simultaneously estimates and exploits problem-specific heuristics.
  * [Quotient-Space RRT](http://ompl.kavrakilab.org/quotientSpacePlanning.html): a generalization of RRT to plan on different abstraction levels. The abstraction levels are represented by quotient-spaces.
  * [Taskspace RRT](http://ompl.kavrakilab.org/classompl_1_1geometric_1_1TSRRT.html#gTSRRT): a variant of RRT where exploration is guided by the task space.
  * [RLRT](http://ompl.kavrakilab.org/classompl_1_1geometric_1_1RLRT.html#gRLRT) and [BiRLRT](http://ompl.kavrakilab.org/classompl_1_1geometric_1_1BiRLRT.html#gBiRLRT): basic tree-based planners without any sophistic heuristics to guide the exploration, useful as a baseline for comparison against other tree-based planners.
* PRM, PRM\*, LazyPRM, and LazyPRM\* can now be initialized with an [ompl::base::PlannerData](http://ompl.kavrakilab.org/classompl_1_1base_1_1PlannerData.html) instance (the generic way to represent roadmaps/trees in OMPL). This means that you can seed these planners with data from a previous run from any other planner. Using the [ompl::base::PlannerDataStorage](http://ompl.kavrakilab.org/classompl_1_1base_1_1PlannerDataStorage.html) functionality, this data can be saved to or loaded from disk.
* Added support for deterministic sampling. Halton sampling is included, other deterministic sampling methods can be added.
* Added a new PlannerTerminationCondition called CostConvergenceTerminationCondition, which can be used to terminate asymptotically (near-)optimal planners based on convergence.
* Cleaned up ompl_benchmark_script.py for Python 3.
* Updated PlannerArena again to work with latest versions of R dependencies.
* Misc. bug and documentation fixes.

Major contributions to this release were made by:

- Ryan Luna, Rice University (now at Waymo)
- Marlin Strub, Oxford University
- Jonathan Gammell, Oxford University
- Andreas Orthey, University of Stuttgart
- Henning Kayser, PickNik Robotics
- Leonard Bruns, Robert Bosch GmbH (now at KTH Royal Institute of Technology)
- Luigi Palmieri, Robert Bosch GmbH

Updated packages for various package managers should appear shortly, including: the ROS Noetic release and versions in MacPorts (macOS), HomeBrew (macOS), and vcpkg (Microsoft Windows).

The OMPL web page can be found at [http://ompl.kavrakilab.org](http://ompl.kavrakilab.org/).
