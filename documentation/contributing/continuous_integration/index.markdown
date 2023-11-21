---
author: davetcoleman
comments: true
date: 2016-9-14 02:13:26+00:00
layout: contribution-guide
slug: contributing
title: Continuous Integration
redirect_from: "/documentation/contributing/continuous_integration.html"
---

# MoveIt's Continuous Integration

Here we outline the current setup of MoveIt's continuous integration setup, including Docker files and Travis configuration.

## Docker

For each ROS distribution there are up to 4 containers, built on top of a standard [ros:noetic-ros-base](https://hub.docker.com/_/ros/) (or other distro version) image. We use Dockerhub to automatically build new versions of the containers each time a code change is committed to the ``moveit`` repo (but only for the corresponding branch).

### CI Container

An image optimized for running continuous integration with Travis. This container downloads all of the MoveIt source code, using MoveIt's rosinstall file, and then installs all the required dependencies for that source code. It then removes the source code before saving the image. It uses ``ros-shadow-fixed`` and runs ``apt dist-upgrade`` to ensure it has the latest code.

## Source Container

Builds on top of the CI image, contains a full MoveIt workspace downloaded and built to ``~/ws_moveit/src``. This container is useful for developers wanting to test or develop in a sandbox.

## Release Container

Builds on top of the CI image, the full debian-based install of MoveIt using ``apt``.

## Experimental Container

Adds experimental packages to the source install. Use this if you want a working warehouse database.

## GitHub Actions and industrial_ci

MoveIt uses the [industrial_ci](https://github.com/ros-industrial/industrial_ci) project for defining the workflows for CI run on GitHub Actions.

## Running industrial_ci jobs locally

To setup your environment for running the CI workflows locally follow [these instructions from industrial_ci's documentation](https://github.com/ros-industrial/industrial_ci/blob/master/doc/index.rst#run-industrial-ci-on-local-host)

Industrial CI is configured using environment variables.  These can be found by expanding the top of the industrial_ci step in the CI job you'd like to replicate.  If you use [one of the CI jobs](https://github.com/ros-planning/moveit2/actions/workflows/ci.yaml) as an example you'll see something like this at the top of the industrial_ci step dropdown:

```
Run ros-industrial/industrial_ci@master
  with:
  env:
    CXXFLAGS: -Wall -Wextra -Wwrite-strings -Wunreachable-code -Wpointer-arith -Wredundant-decls
    CLANG_TIDY_ARGS: --fix --fix-errors --format-style=file
    DOCKER_IMAGE: moveit/moveit2:humble-ci
    UPSTREAM_WORKSPACE: moveit2.repos $(f="moveit2_$(sed 's/-.*$//' <<< "humble-ci").repos"; test -r $f && echo $f)

    AFTER_SETUP_UPSTREAM_WORKSPACE: vcs pull $BASEDIR/upstream_ws/src
    AFTER_SETUP_DOWNSTREAM_WORKSPACE: vcs pull $BASEDIR/downstream_ws/src
    AFTER_SETUP_CCACHE: ccache --zero-stats --max-size=10.0G
    BEFORE_BUILD_UPSTREAM_WORKSPACE: ccache -z
    AFTER_BUILD_TARGET_WORKSPACE: ccache -s
    TARGET_CMAKE_ARGS: -DCMAKE_EXE_LINKER_FLAGS=-fuse-ld=lld -DCMAKE_SHARED_LINKER_FLAGS=-fuse-ld=lld -DCMAKE_MODULE_LINKER_FLAGS=-fuse-ld=lld -DCMAKE_BUILD_TYPE=Release -DCMAKE_CXX_FLAGS="-Werror $CXXFLAGS"

    UPSTREAM_CMAKE_ARGS: -DCMAKE_CXX_FLAGS=''
    DOWNSTREAM_CMAKE_ARGS: -DCMAKE_CXX_FLAGS="-Wall -Wextra"
    CCACHE_DIR: /home/runner/work/moveit2/moveit2/.ccache
    BASEDIR: /home/runner/work/moveit2/moveit2/.work
    CLANG_TIDY_BASE_REF: main
    BEFORE_CLANG_TIDY_CHECKS: # Show list of applied checks
  (cd $TARGET_REPO_PATH; clang-tidy --list-checks)
  # Disable clang-tidy for ikfast plugins as we cannot fix the generated code
  find $BASEDIR/target_ws/build -iwholename "*_ikfast_plugin/compile_commands.json" -exec rm {} \;

    CC:
    CXX:
    ADDITIONAL_DEBS: lld
    IMAGE: humble-ci
    ROS_DISTRO: humble
Running test 'source_tests'
```
To re-create this job locally you'll need a checkout of moveit2 at the commit you want to test.  For the sake of this example the checkout is at ``~/ws_moveit/src/moveit2``.  Below is the command you'd construct to run the above job:

```
ros2 run industrial_ci rerun_ci ~/ws_moveit/src/moveit2 \
  DOCKER_IMAGE='moveit/moveit2:foxy-ci-testing' \
  UPSTREAM_WORKSPACE='moveit2.repos' \
  AFTER_SETUP_UPSTREAM_WORKSPACE='vcs pull ~/upstream_ws/src/' \
  BEFORE_TARGET_TEST_EMBED='set +u && source moveit_kinematics/test/test_ikfast_plugins.sh && set -u' \
  TARGET_CMAKE_ARGS='-DCMAKE_BUILD_TYPE=Release' \
  CCACHE_DIR='~/.ccache' \
  CLANG_TIDY='true'
```

You'll notice a couple things.  First is that I changed the ccache directory to use the ccache I have locally.  Do this if the environment you are running matches your local environment for a speed up.  The second is that I changed the ``AFTER_SETUP_UPSTREAM_WORKSPACE``.  This is because the directory used by CI is specific to github and we want to use the default directory structure from industrial_ci instead of a custom one.

After this finishes (pass or fail) it will output a docker commit tag that it creates.  That line will look something like this:

```
Committing container to tag: 'industrial-ci/rerun_ci/moveit2:df7d8ce97aeb'
```

You can then use that tag to open a terminal in that container to debug the CI run:

```
docker run -it industrial-ci/rerun_ci/moveit2:df7d8ce97aeb /bin/bash
```
