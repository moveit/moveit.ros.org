# Future Projects

The following are a list of potential projects that would greatly benefit the MoveIt! project if accomplished. This list serves as a start point for potential funding of code sprints or student projects, but is by no means an exhaustive list.

## Improved Integration with ROS-Controls and Controller Switching

* List of prerequisites: ROS, some control theory background
* Description of programming skills: C++
* Difficulty level: Medium
* List of potential mentors: Dave Coleman, Michael Görner
* Detailed description: Utilize low-level controller switching (position/velocity/force-torque) during execution of MoveIt! plans. Create new window on MoveIt! Setup Assistant for automatically generating interfaces to low level controllers from MoveIt!. Improve the [ROSControlInterface plugin](https://github.com/ros-planning/moveit/tree/kinetic-devel/moveit_plugins/moveit_ros_control_interface). Documentation on how to combine the components.

## MoveIt! Setup Assistant 2.0

* List of prerequisites: ROS
* Description of programming skills: C++
* Difficulty level: Medium
* List of potential mentors: Dave Coleman, Michael Görner
* Detailed description: The Setup Assistant is a quick-start wizard for taking an arbitrary robot and configuring it to work with MoveIt! for motion planning. A new version of this assistant would include:
  * New grasping screen for setting up end effectors: align axis with z-direction, open/close parameters, etc
  * New perception screen for using laser scanner point clouds: ability to easily configure a XBox Kinetic, etc for use with a robot planning scene, possibly including calibration
  * More GUIs for saving and loading various settings that are currently hidden in text files
  * Parse existing text files (launch/config/package.xml) files and handle user-edits of these files as diffs

## Perception Pipeline Improvements

* List of prerequisites: ROS, some robotic perception background such as OpenCV or PCL
* Description of programming skills: C++
* Difficulty level: Medium
* List of potential mentors: Dave Coleman, Michael Görner
* Detailed description: MoveIt! is not a perception library, but does come with support for using octomaps with point clouds. This functionality has not been well maintained and needs extensive improvements:

* Improve speed of plugins, fix locking issues
* Create tutorials and documentation for using this functionality
* Add support for object segmentation, table detection, etc
* Possible integration of Neural Networks for image recognition

## Create Default Grasping Library

* List of prerequisites: ROS
* Description of programming skills: C++
* Difficulty level: Medium
* List of potential mentors: Dave Coleman, Michael Görner
* Detailed description: MoveIt! severely lacks a good grasping library for generating candidate object grasps during manipulation. The old GraspIt solution is deprecated and nearly impossible to use. Currently MoveIt! users create their own, or hard code simple heuristics. This task could include:

  * Investigating available grasp planners and choosing the best one to support out of the box for MoveIt!
  * Possibly use the machine-learning-based grasp generator [Agile Grasps](http://wiki.ros.org/agile_grasp)
  * Improve tutorials and documentation for grasping in MoveIt!

## Add More Motion Planning Libraries

* List of prerequisites: ROS, some motion planning background
* Description of programming skills: C++
* Difficulty level: Medium
* List of potential mentors: Dave Coleman, Mark Moll
* Detailed description: MoveIt! was designed to be highly plugin-based and originally supported 3 planning libraries. Today that number has shrunk to basically 1. There are many good alternative motion planning libraries that could be (re)added to MoveIt!, including:

  * SBPL
  * STOMP
  * ITOMP
  * [DRAKE](https://github.com/RobotLocomotion/drake/issues/459)

## Improve Warehouse Support

* List of prerequisites: ROS
* Description of programming skills: C++
* Difficulty level: Medium
* List of potential mentors: Michael Görner, Dave Coleman
* Detailed description: MoveIt supports storing Constraints, PlanningScenes and RobotStates in a database, termed "warehouse" within MoveIt. This interface was recently changed to support plugins, but currently there are no plugins available that compile/work with a standard linux distribution out of the box.

* Implementation of a warehouse-plugin that works with a standard database system that is supported in major Linux distributions
* Create tutorials and example code that demonstrates how to use the warehouse interface

## MoveIt-OMPL Planning Interface

* List of prerequisites: ROS, some motion planning background
* Description of programming skills: C++
* Difficulty level: Medium
* List of potential mentors: Dave Coleman, Mark Moll, Michael Görner
* Detailed description: Currently, MoveIt supports the OMPL planning library via a C++ based binding system in the package `ompl_interface`. This should be deprecated in favor of a plugin-based system, that eases configuration of different planners within OMPL. In effect, the plugin allows new planning algorithms derived from the abstract Planner API in OMPL to be loaded via a yaml file. It also allows users to easily create new planning configurations for existing planning algorithms in OMPL via such a yaml. Most of the work for this is already done and has been used extensively in ROS Indigo. This is a great project for someone who wants to better understand the connection between MoveIt! And OMPL.

* More information can be found [here](https://github.com/ros-planning/moveit/issues/117)
* The new system needs to be documented in tutorials
* It would be nice if, as a proof of concept, some additional basic planning algorithms could be implemented as a plugin. Ideally, this would include at least one algorithm that is not sampling-based, just to demonstrate that this can be done

## MoveIt! Continuous Collision Checking

* List of prerequisites: ROS, experience with MoveIt!
* Description of programming skills: C++
* Difficulty level: Medium
* List of potential mentors: Levi Armstrong
* Detailed description: MoveIt! currently only checks for collisions at discrete steps in a planned trajectory. This has the downside that if the discretization is too large, then potential collisions may be missed when planning in tight or constrained environments. This project involves using the flexible-collision-library (FCL) to add continuous collision checking to mitigate collisions in constrained spaces.
