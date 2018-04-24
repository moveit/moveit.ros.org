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
 - Catch known exceptions and log them in detail. Avoid using ``catch (...)`` as it hides every information of a possible fault. We want to know if something goes wrong.
 - We don't catch exceptions that don't derive from ``std::exception`` in MoveIt. It is the responsibility of the plugin provider to handle non-``std::exception``-derived exceptions locally. 

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

You can run **clang-format** in several ways. To install on Ubuntu simply run:

    sudo apt-get install clang-format-3.8

Please note that we rely on clang-format version **3.8**. Sadly, newer versions are not fully backward compatible.

### Command Line

Add [this](https://raw.githubusercontent.com/davetcoleman/roscpp_code_format/master/.clang-format) format file at ~/catkin_ws/.clang-format. Now any file inside your catkin workspace will be formatted with the ROS style guidelines described in this config file.

Format a single file:

    clang-format-3.8 -i -style=file MY_ROS_NODE.cpp

Format an entire directory recursively including subfolders:

    find . -name '*.h' -or -name '*.hpp' -or -name '*.cpp' | xargs clang-format-3.8 -i -style=file $1

### Exceptions to clang-format

Occationally the auto formatting used by clang-format might not make sense e.g. for lists of items that are easier to read on separate lines. It can be overwritten with the commands:

    // clang-format off
    ... some untouched code
    // clang-format on

Use this sparingly though.

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
(shell-command (concat "clang-format-3.8 -style=file -i " buffer-file-name))
(message (concat "Saved and ran clang-format on " buffer-file-name))
(revert-buffer t t t)
))
```

Set a keyboard shortcut to run, such as F12

    (global-set-key [f12] 'run-ros-clang-format)

### Atom Editor Configuration

Install the [clang-format](https://atom.io/packages/clang-format) package via the Atom package manager or ``apm install clang-format``.

In the package settings set ``clang-format-3.8`` as your executable and point 'Style' to your ``.clang-format`` file.

## clang-tidy Linting

**clang-tidy** is a linting tool for C++. Where **clang-format** will fix the formatting of your code
(wrong indentation, line length, etc), **clang-tidy** will fix programming errors to make your code
more modern, more readable, and less prone to common bugs.

You can install clang-tidy and other clang related tools with
`sudo apt-get install clang libclang-dev clang-tidy-3.8 clang-format-3.8`

To add it to a new package, add `set(CMAKE_EXPORT_COMPILE_COMMANDS ON)` to `CMakeLists.txt` and rebuild.
You can also make a specific clang-tidy build with
```
catkin config --cmake-args -DCMAKE_EXPORT_COMPILE_COMMANDS=ON
catkin build
```

Run it on a specific folder, such as `collision_detection`, with
```
run-clang-tidy-3.8.py -fix -p=/home/brycew/Desktop/moveit_ws/build/moveit_core/  collision_detection
```

Note that if you have multiple layers of nested for loops that need to be converted, clang-tidy
will only fix one at a time. So be sure to run the above command a few times to convert all code.
