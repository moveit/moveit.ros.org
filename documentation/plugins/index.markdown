---
author: v4hn
comments: false
date: 2016-08-03 20:00:00+00:00
layout: page
slug: plugins
title: Plugins
---

# Plugin Interfaces

MoveIt connects a number of different fields and provides a lot of interfaces so that users can override different parts of the framework and implement new concepts without having to touching the core of the framework.
The following lists the different types of plugins and provides an overview over the use of them within the framework.

* [move_group::MoveGroupCapability](#MoveGroupCapability)
* [occupancy_map_monitor::OccupancyMapUpdater](#OccupancyMapUpdater)
* [planning_request_adapter::PlanningRequestAdapter](#PlanningRequestAdapter)
* [kinematics::KinematicsBase](#KinematicsBase)
* [planning_interface::Planner](#Planner)
* [planning_interface::PlannerManager](#PlannerManager)
* [moveit_controller_manager::MoveItControllerManager](#MoveItControllerManager)
* [moveit_ros_control_interface::ControllerHandleAllocator](#ControllerHandleAllocator)
* [moveit_sensor_manager::MoveItSensorManager](#MoveItSensorManager)
* [constraint_samplers::ConstraintSamplerAllocator](#ConstraintSamplerAllocator)
* [collision_detection::CollisionPlugin](#CollisionPlugin)

<a name="MoveGroupCapability"></a>
## move_group::MoveGroupCapability

### Usage

By implementing the [move_group_capability.h](https://github.com/ros-planning/moveit/blob/4ac0c7432d335f57aab6836cbcaaac3fccf4b6f9/moveit_ros/move_group/include/moveit/move_group/move_group_capability.h) interface it is possible to realize functionalities that are executed frequently. Each capability has access to the [move group context](https://github.com/ros-planning/moveit/blob/4ac0c7432d335f57aab6836cbcaaac3fccf4b6f9/moveit_ros/move_group/include/moveit/move_group/move_group_context.h) including e.g. obstacle for collision avoidance.

### Field of Application

Plugins usually create communication functionallity in form of a ros-service or a simple ros-topic and can operate on the move group context. Therefore, can be the possible applications very diverse. 

### Interface Description

The interface is defined in the [move_group_capability.h](https://github.com/ros-planning/moveit/blob/4ac0c7432d335f57aab6836cbcaaac3fccf4b6f9/moveit_ros/move_group/include/moveit/move_group/move_group_capability.h). It mainly consits of an initialize function which has to be overwritten.

### Concrete Implementation

An example for a specific pluging is the [cartesian_path_service_capability](https://github.com/ros-planning/moveit/blob/3c207ad694ab6fb94a428145ab53810ced74a262/moveit_ros/move_group/src/default_capabilities/cartesian_path_service_capability.cpp). This particular plugin can be used to compute a cartesian path. 

<a name="OccupancyMapUpdater"></a>
## occupancy_map_monitor::OccupancyMapUpdater
<a name="PlanningRequestAdapter"></a>
## planning_request_adapter::PlanningRequestAdapter
<a name="KinematicsBase"></a>
## kinematics::KinematicsBase
<a name="Planner"></a>
## planning_interface::Planner
<a name="PlannerManager"></a>
## planning_interface::PlannerManager
<a name="MoveItControllerManager"></a>
## moveit_controller_manager::MoveItControllerManager
<a name="ControllerHandleAllocator"></a>
## moveit_ros_control_interface::ControllerHandleAllocator
<a name="MoveItSensorManager"></a>
## moveit_sensor_manager::MoveItSensorManager
<a name="ConstraintSamplerAllocator"></a>
## constraint_samplers::ConstraintSamplerAllocator
<a name="CollisionPlugin"></a>
## collision_detection::CollisionPlugin

Plugin API for loading a custom collision detection robot/world.

### Usage

 <PRE>
  namespace my_collision_checker
  {
  class MyCollisionDetectorAllocator :
    public collision_detection::CollisionDetectorAllocatorTemplate<MyCollisionWorld, MyCollisionRobot, MyCollisionDetectorAllocator>
  {
    public:
      static const std::string NAME_;
  };
  const std::string MyCollisionDetectorAllocator::NAME_("my_checker");
  }
  namespace collision_detection
  {
  class MyCollisionDetectionLoader : public CollisionPlugin
  {
  public:
    virtual bool initialize(const planning_scene::PlanningScenePtr& scene, bool exclusive) const
    {
      scene->setActiveCollisionDetector(my_collision_checker::MyCollisionDetectorAllocator::create(), exclusive);
      return true;
     }
   };
 </PRE>

### Field of Application

### Interface Description

### Concrete Implementation
