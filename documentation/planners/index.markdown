---
author: davetcoleman
comments: false
date: 2016-11-02 20:00:00+00:00
layout: page
slug: planners
title: Planners
---

# Planners Available in MoveIt

MoveIt is designed to work with many different types of planners, which is ideal for benchmarking improved planners against previous methods. Below is a list of planners that have been used with MoveIt, in descending order of popularity/support within MoveIt:

## Open Motion Planning Library (OMPL)

OMPL is an open-source motion planning library that primarily implements randomized motion planners. MoveIt integrates directly with OMPL and uses the motion planners from that library as its primary/default set of planners. The planners in OMPL are abstract; i.e. OMPL has no concept of a robot. Instead, MoveIt configures OMPL and provides the back-end for OMPL to work with problems in Robotics. Fully supported. [More Info](http://ompl.kavrakilab.org/)

## Stochastic Trajectory Optimization for Motion Planning (STOMP)

STOMP (Stochastic Trajectory Optimization for Motion Planning) is an optimization-based motion planner based on the PI^2 (Policy Improvement with Path Integrals, Theodorou et al, 2010) algorithm. It can plan smooth trajectories for a robot arm, avoiding obstacles, and optimizing constraints. The algorithm does not require gradients, and can thus optimize arbitrary terms in the cost function like motor efforts. Partially supported. [More Info](http://wiki.ros.org/stomp_motion_planner)

## Search-Based Planning Library (SBPL)

A generic set of motion planners using search based planning that discretize the space. Integration into latest version of MoveIt is work in progress. [More Info](http://wiki.ros.org/sbpl)

## Covariant Hamiltonian Optimization for Motion Planning (CHOMP)

Covariant Hamiltonian optimization for motion planning (CHOMP) is a novel gradient-based trajectory optimization procedure that makes many everyday motion planning problems both simple and trainable (Ratliff et al., 2009c). While most high-dimensional motion planners separate trajectory generation into distinct planning and optimization stages, this algorithm capitalizes on covariant gradient and functional gradient approaches to the optimization stage to design a motion planning algorithm based entirely on trajectory optimization. Given an infeasible naive trajectory, CHOMP reacts to the surrounding environment to quickly pull the trajectory out of collision while simultaneously optimizing dynamical quantities such as joint velocities and accelerations. It rapidly converges to a smooth collision-free trajectory that can be executed efficiently on the robot. Integration into latest version of MoveIt is work in progress. [More Info](http://www.nathanratliff.com/thesis-research/chomp)
