---
layout: install
slug: source_dep_install
title: Dependencies Source Install
---

# Building Common MoveIt Dependencies from Source in Catkin

For advanced users wishing to develop on common libraries that MoveIt depends on, we provide some **loose experimental/unsupported** instructions for doing so within a combined catkin workspace. These instructions are liable to become outdated and developers are recommended to use these along with the libraries' main install instructions, but the following will hopefully help developers dig deeper into the combined software. If you find errors, please submit pull requests to fix.

TODO: test these instructions for Melodic and update this page.

These instructions assume you are using catkin_tools and are using ROS Kinetic. Currently we have instructions for:

- MongoDB Warehouse
- Open Motion Planning Library (OMPL)
- Flexible Collision Library (FCL)

## MongoDB Warehouse Support

> **Note:** These instructions are temporary for Jade/Kinetic only, until the warehouse_ros_mongo package is updated to an Ubuntu supported mongo driver.

The Warehouse functionality allows planning scenes, robot states, and benchmark data to be loaded to and from a database.

### Compiling the mongo driver

In order to build from source you'll need to install the [mongo c++ drivers](https://github.com/mongodb/mongo-cxx-driver/wiki/Download-and-Compile-the-Legacy-Driver)

First get the driver:

```
git clone -b 26compat https://github.com/mongodb/mongo-cxx-driver.git
```

Then compile using scons:

```
sudo apt-get install scons
cd mongo-cxx-driver
sudo scons --prefix=/usr/local/ --full --use-system-boost --disable-warnings-as-errors
sudo scons install
```

### Adding warehouse_ros and warehouse_ros_mongo packages

You'll next need to add two packages to your catkin workspace. The jade-devel branches for the warehouse packages work for kinetic, jade, and melodic distros.

```
cd ~/ws_moveit/src
wstool set -yu warehouse_ros_mongo --git https://github.com/ros-planning/warehouse_ros_mongo.git -v jade-devel
wstool set -yu warehouse_ros --git https://github.com/ros-planning/warehouse_ros.git -v jade-devel
```

Now you should be able to build using regular ``catkin build``

## Open Motion Planning Library (OMPL)

OMPL is MoveIt's main planning library, their official install instructions can be found [here](http://ompl.kavrakilab.org/installation.html).

Clone the OMPL repos from either Bitbucket or Github into your catkin workspace:

    git clone https://github.com/ompl/ompl
    cd ompl

Next manually add a package.xml as used in the ROS release wrapper for OMPL (modify ROS distro version as necessary)

    wget https://raw.githubusercontent.com/ros-gbp/ompl-release/debian/kinetic/xenial/ompl/package.xml

Now you should be able to build using regular ``catkin build``

## Flexible Collision Library (FCL)

FCL is MoveIt's default collision checker, their official install instructions can be found [here](https://github.com/flexible-collision-library/fcl).

    sudo apt-get -qq install libccd-dev

Clone the repo into your catkin workspace:

    git clone https://github.com/flexible-collision-library/fcl
    cd fcl

Pick the correct version depending on the version of MoveIt you use:

    git checkout fcl-0.5   # for kinetic
    git checkout master    # for melodic+

Next manually add a package.xml as used in the ROS release wrapper:


    wget https://raw.githubusercontent.com/ros-gbp/fcl-release/debian/jade/fcl/package.xml

In order for ``moveit_core`` to wait until ``fcl`` is finished build, edit ``fcl/package.xml`` and rename the project to ``libfcl-dev``.

Now you should be able to build using regular ``catkin build``