---
author: davetcoleman
comments: true
date: 2016-8-1 02:13:26+00:00
layout: page
slug: code
title: Style Guidelines
redirect_from: "/documentation/contributing/code.html"
---

# MoveIt! Code Style Guidelines

We use the [ROS C++ Style guide](http://wiki.ros.org/CppStyleGuide) for all C++ development and the [ROS Python Style guide](http://wiki.ros.org/PyStyleGuide) for Python.

To ease your development, we recommend the automated code formatter ``clang-format`` with a ROS configuration - to use see below.

In addition MoveIt! has some extra style preferences:

## C++

 - As of ROS Kinetic we use C++11
 - Use the C++ standard library (``std::``) whenever possible
 - Avoid C-style functions such as ``FLT_EPSILON`` - instead use ``std::numeric_limits<double>::epsilon()``
 - Boost is an encouraged library when functionality is not available in the standard library
 - Prefer full variable names over short acryonms - e.g. ``robot_state_`` over ``rs_``
 - Deprecate functions using MOVEIT_DEPRECATED in [deprecation.h](https://github.com/ros-planning/moveit/blob/kinetic-devel/moveit_core/macros/include/moveit/macros/deprecation.h)

## ROS

 - The ROS logging functionality is utilized and namespacing your logs are recommended, i.e. ``ROS_INFO_NAMED("planning_scene", "Starting listener")``

## Shared Ptrs

 - For creating ``shared_ptr`` of any object, use MoveIt!'s standard [macro](https://github.com/ros-planning/moveit/blob/kinetic-devel/moveit_core/macros/include/moveit/macros/class_forward.h) ``MOVEIT_CLASS_FORWARD(ClassName)`` before the class declaration, and add the include ``#include <moveit/macros/class_forward.h>``. This will create two typedefs of shared pointers - ``<ClassName>Ptr`` and ``<ClassName>ConstPtr`` using either ``boost`` or ``std``.

## CMakeLists.txt

MoveIt! uses *one* folder for all headers from all of its modules: ``include/moveit``. To achieve this, install all headers to `${CATKIN_GLOBAL_INCLUDE_DESTINATION}` rather than using the normal `CATKIN_PACKAGE_INCLUDE_DESTINATION`:

    install(DIRECTORY include/ DESTINATION ${CATKIN_GLOBAL_INCLUDE_DESTINATION})

This is rather non-standard for catkin - catkin would prefer to have headers of each ROS package in a separate folder,
e.g. `include/moveit_core/...`, `include/moveit_ros_planning/...`, etc.

## clang-format Auto Code Formatting

You can run **clang-format** in several ways.

Please note that we rely on clang-format version **3.6**. Sadly, newer versions are not fully backward compatible.

### Command Line

Format single file:

    clang-format-3.6 -i -style=file MY_ROS_NODE.cpp

Format entire directory recursively including subfolders:

    find . -name '*.h' -or -name '*.hpp' -or -name '*.cpp' | xargs clang-format-3.6 -i -style=file $1

### Emacs Editor Configuration

In your ``~/.emacs`` config file, add the following:

Format your source code if its in some directory such as the ``catkin_ws`` (feel free to change keywords catkin_ws):

```
(defun run-ros-clang-format ()
"Runs clang-format on cpp,h files in catkin_ws/ and reverts buffer."
(interactive)
(and
(string-match "/catkin_ws/.*\\.\\(h\\|cpp\\)$" buffer-file-name)
(save-some-buffers 'no-confirm)
(shell-command (concat "clang-format-3.6 -style=file -i " buffer-file-name))
(message (concat "Saved and ran clang-format on " buffer-file-name))
(revert-buffer t t t)
))
```

Set a keyboard shortcut to run, such as F12

    (global-set-key [f12] 'run-ros-clang-format)

### Atom Editor Configuration

Install the [clang-format](https://atom.io/packages/clang-format) package via the Atom package manager or ``apm install clang-format``.

In the package settings set ``clang-format-3.6`` as your executable and point 'Style' to your ``.clang-format`` file.
