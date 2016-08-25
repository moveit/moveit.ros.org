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
* [kinematics::KinematicsBase](#KinematicsBase)
* [planning_interface::PlannerManager](#PlannerManager)
* [moveit_controller_manager::MoveItControllerManager](#MoveItControllerManager)
* [moveit_ros_control_interface::ControllerHandleAllocator](#ControllerHandleAllocator)
* [moveit_sensor_manager::MoveItSensorManager](#MoveItSensorManager)
* [collision_detection::CollisionPlugin](#CollisionPlugin)

TODO:
* [occupancy_map_monitor::OccupancyMapUpdater](#OccupancyMapUpdater)
* [planning_request_adapter::PlanningRequestAdapter](#PlanningRequestAdapter)
* [constraint_samplers::ConstraintSamplerAllocator](#ConstraintSamplerAllocator)

Deprecated:

* [planning_interface::Planner](#Planner)

<a name="MoveGroupCapability"></a>
## move_group::MoveGroupCapability

### Usage

By implementing the [move_group_capability.h](https://github.com/ros-planning/moveit/blob/kinetic-devel/moveit_ros/move_group/include/moveit/move_group/move_group_capability.h) interface it is possible to realize functionalities that are executed frequently. Each capability has access to the [move group context](https://github.com/ros-planning/moveit/blob/kinetic-devel/moveit_ros/move_group/include/moveit/move_group/move_group_context.h) including e.g. obstacle for collision avoidance.

### Field of Application

Plugins of this type usually create communication functionality in form of a ros-service or a simple ros-topic and can operate on the move group context. Therefore, can be the possible applications very diverse.

### Interface Description

The interface is defined in the [move_group_capability.h](https://github.com/ros-planning/moveit/blob/kinetic-devel/moveit_ros/move_group/include/moveit/move_group/move_group_capability.h). It mainly consists of an initialize function which has to be overwritten.

### Concrete Implementation

An example for a specific plugin is the [cartesian_path_service_capability](https://github.com/ros-planning/moveit/blob/kinetic-devel/moveit_ros/move_group/src/default_capabilities/cartesian_path_service_capability.cpp). This particular plugin can be used to compute a cartesian path. The implementation of the intialized function is shown below. In the example the plugin advertises a topic containing information about the trajectory and a service for computing a new trajectory.  

```
void move_group::MoveGroupCartesianPathService::initialize()
{
  display_path_ = node_handle_.advertise<moveit_msgs::DisplayTrajectory>(planning_pipeline::PlanningPipeline::DISPLAY_PATH_TOPIC, 10, true);
  cartesian_path_service_ = root_node_handle_.advertiseService(CARTESIAN_PATH_SERVICE_NAME, &MoveGroupCartesianPathService::computeService, this);
}
```

Moveit offers different [default capabilities](https://github.com/ros-planning/moveit/tree/kinetic-devel/moveit_ros/move_group/src/default_capabilities). A description of these can be found [here](https://github.com/ros-planning/moveit/blob/kinetic-devel/moveit_ros/move_group/default_capabilities_plugin_description.xml).

<a name="OccupancyMapUpdater"></a>
## occupancy_map_monitor::OccupancyMapUpdater

TODO

### Usage

TODO

### Interface Description

TODO

### Concrete Implementation

TODO

<a name="PlanningRequestAdapter"></a>
## planning_request_adapter::PlanningRequestAdapter
TODO

### Usage

TODO

### Interface Description

TODO

### Concrete Implementation

TODO

<a name="KinematicsBase"></a>
## kinematics::KinematicsBase
The KinematicsBase interface enables you, to:

- write your own forward and inverse kinematic solvers
- wrap external kinematic solver libraries

### Interface Description
The well documented interface is located [here](https://github.com/ros-planning/moveit/blob/3464e3d27bd8655aa6187ca5d3a031a4f72663e2/moveit_core/kinematics_base/include/moveit/kinematics_base/kinematics_base.h).
### Concrete Implementations
Examples for implementations of the KinematicsBase are 

- the KDL plugin: 
  [header](https://github.com/ros-planning/moveit/blob/4ac0c7432d335f57aab6836cbcaaac3fccf4b6f9/moveit_ros/planning/kdl_kinematics_plugin/include/moveit/kdl_kinematics_plugin/kdl_kinematics_plugin.h), 
  [cpp](https://github.com/ros-planning/moveit/blob/4ac0c7432d335f57aab6836cbcaaac3fccf4b6f9/moveit_ros/planning/kdl_kinematics_plugin/src/kdl_kinematics_plugin.cpp)
 
- the SrvKinematicsPlugin: 
  [header](https://github.com/ros-planning/moveit/blob/4ac0c7432d335f57aab6836cbcaaac3fccf4b6f9/moveit_ros/planning/srv_kinematics_plugin/include/moveit/srv_kinematics_plugin/srv_kinematics_plugin.h),
  [cpp](https://github.com/ros-planning/moveit/blob/4ac0c7432d335f57aab6836cbcaaac3fccf4b6f9/moveit_ros/planning/srv_kinematics_plugin/src/srv_kinematics_plugin.cpp)

<a name="PlannerManager"></a>
## planning_interface::PlannerManager

### Usage

Base class for writing for MoveIt planner by implementing it you can provide your own planners.

### Interface Description

The interface is defined in [planning_interface.h](https://github.com/ros-planning/moveit/blob/kinetic-devel/moveit_core/planning_interface/include/moveit/planning_interface/planning_interface.h).

### Concrete Implementation

An examplary implemenation of a planner is the [OMPL Planner](https://github.com/ros-planning/moveit/blob/kinetic-devel/moveit_planners/ompl/ompl_interface/src/ompl_planner_manager.cpp). 

<a name="MoveItControllerManager"></a>
## moveit_controller_manager::MoveItControllerManager

### Usage

MoveIt! does not enforce how controllers are implemented. To make your controllers usable by MoveIt, this interface needs to be implemented. The main purpose of this interface is to expose the set of known controllers and potentially to allow activating and deactivating them, if multiple controllers are available.
It is often the case that multiple controllers could be used to execute a motion. Marking a controller as default makes MoveIt prefer this controller when multiple options are available.
The manager also coordinates the switch between two controllers.
A controller can be active or inactive. This means that MoveIt could activate the controller when needed, and de-activate controllers that overlap (control the same set of joints)

### Concrete Implementation

The interfaces are defined in [controller_manager.h](https://github.com/ros-planning/moveit/blob/kinetic-devel/moveit_core/controller_manager/include/moveit/controller_manager/controller_manager.h).
A concrete implemntation can be found here: [moveit_simple_controller_manager](https://github.com/ros-planning/moveit/blob/kinetic-devel/moveit_plugins/moveit_simple_controller_manager/include/moveit_simple_controller_manager/action_based_controller_handle.h)

controller_manager.launch could be look like this:

```
<launch>
  <rosparam file="$(find xamla_egomo_moveit_config_dev)/config/controllers.yaml"/>
  <param name="use_controller_manager" value="true"/>
  <param name="trajectory_execution/execution_duration_monitoring" value="true"/>
  <param name="moveit_controller_manager" value="moveit_simple_controller_manager/MoveItSimpleControllerManager"/>
</launch>
```
where the controllers are defined in the 'controllers.yaml'.

<a name="ControllerHandleAllocator"></a>
## moveit_ros_control_interface::ControllerHandleAllocator

### Usage

By implementing the [ControllerHandle.h](https://github.com/ros-planning/moveit/blob/4ac0c7432d335f57aab6836cbcaaac3fccf4b6f9/moveit_plugins/moveit_ros_control_interface/include/moveit_ros_control_interface/ControllerHandle.h) interface it is possible to offer allocations of handlers for action based controllers. The controler handler are based on the class [MoveItControllerHandle](https://github.com/ros-planning/moveit/blob/kinetic-devel/moveit_core/controller_manager/include/moveit/controller_manager/controller_manager.h). These handlers communicate with the controller in order to e.g. send trajectories.

### Field of Application

TODO

### Interface Description

The interface is defined in [ControllerHandle.h](https://github.com/ros-planning/moveit/blob/4ac0c7432d335f57aab6836cbcaaac3fccf4b6f9/moveit_plugins/moveit_ros_control_interface/include/moveit_ros_control_interface/ControllerHandle.h). 

### Concrete Implementation

An examplary implementation of this interface is the [joint_trajectory_controller_plugin.cpp](https://github.com/ros-planning/moveit/blob/kinetic-devel/moveit_plugins/moveit_ros_control_interface/src/joint_trajectory_controller_plugin.cpp). This is also currently the only implementation available.

<a name="MoveItSensorManager"></a>
## moveit_sensor_manager::MoveItSensorManager

This plugin is used to integrade sensores into the planning process. Defined in: [sensor_manager.h](https://github.com/ros-planning/moveit/blob/kinetic-devel/moveit_core/sensor_manager/include/moveit/sensor_manager/sensor_manager.h)

### Usage

Holds information of sensors e.g.: The maximum distance along the Z axis at which observations can be executed.
It can point a sensor towards a particular point in space. This may require executing a trajectory, but it may or may not execute that trajectory.
If it does not, it returns it as part of the sensor_trajectory. This is the recommended behaviour, since the caller of this function can perform checks on the safety of the trajectory.
The function returns true on success (either completing execution succesfully or computing a trajecotory successufully)

### Concrete Implementation

TODO 

<a name="ConstraintSamplerAllocator"></a>
## constraint_samplers::ConstraintSamplerAllocator

### Usage

TODO

### Interface Description

TODO

### Concrete Implementation

TODO

<a name="CollisionPlugin"></a>
## collision_detection::CollisionPlugin

Plugin API for loading a custom collision detection robot/world.

### Usage

```
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
```

### Field of Application

If you want to use an costumized collision detection algorithm for selfcollisions or collisions with the environment then this is a useful plugin which provides you with the necessary interfaces.

### Interface Description

The interface is defined in the [collision_plugin.h](https://github.com/ros-planning/moveit/blob/kinetic-devel/moveit_core/collision_detection/include/moveit/collision_detection/collision_plugin.h). It mainly consits of an initialize function which has to be overwritten.

### Concrete Implementation
NO IMPLEMENTATIONS AVAILAVLE

<a name="Planner"></a>
## planning_interface::Planner (Deprecated!)

### Info

Old base class for MoveIt planners which has been removed in commit daa9fd2062df65e713e6c40570b2f7dceafed178. Was replaced by PlannerManager. This class is currently used by the planners [SBPLMetaPlanner](https://github.com/ros-planning/moveit/blob/kinetic-devel/moveit_planners/sbpl/ros/sbpl_interface_ros/src/sbpl_meta_plugin.cpp) and [ChompPlanner](https://github.com/ros-planning/moveit/blob/kinetic-devel/moveit_planners/chomp/ros/chomp_interface_ros/src/chomp_plugin.cpp).
