---
author: davetcoleman
comments: true
date: 2016-9-14 02:13:26+00:00
layout: pullrequests
slug: contributing
title: Continuous Integration
redirect_from: "/documentation/contributing/continuous_integration.html"
---

# MoveIt's Continuous Integration

Here we outline the current setup of MoveIt's continuous integration setup, including Docker files and Travis configuration.

## Docker

For each ROS distribution there are up to 4 containers, built on top of a standard [ros:noetic-ros-base](https://hub.docker.com/_/ros/) (or other distro version) image. We use Dockerhub to automatically build new versions of the containers each time a code change is commited to the ``moveit`` repo (but only for the corresponding branch).

### CI Container

An image optimized for running continuous integration with Travis. This container downloads all of the MoveIt source code, using MoveIt's rosinstall file, and then installs all the required dependencies for that source code. It then removes the source code before saving the image. It uses ``ros-shadow-fixed`` and runs ``apt dist-upgrade`` to ensure it has the latest code.

## Source Container

Builds ontop of the CI image, contains a full MoveIt workspace downloaded and built to ``~/ws_moveit/src``. This container is useful for developers wanting to test or develop in a sandbox.

## Release Container

Builds ontop of the CI image, the full debian-based install of MoveIt using ``apt``.

## Experimental Container

Adds experimental packages to the source install. Use this if you want a working warehouse database.

## GitHub Actions and industrial_ci

MoveIt uses the [industrial_ci](https://github.com/ros-industrial/industrial_ci) project for defining the workflows for CI run on GitHub Actions.

## Running industrial_ci jobs locally

To setup your enviroment for running the CI workflows locally follow [these instructions from industrial_ci's documentation](https://github.com/ros-industrial/industrial_ci/blob/master/doc/index.rst#run-industrial-ci-on-local-host)

Industrial CI is configured using enviroment variables.  These can be found by expanding the top of the industrial_ci step in the CI job you'd like to replicate.  If you use [this job](https://github.com/ros-planning/moveit2/runs/2468526504) as an example you'll see this at the top of the industrial_ci step:

```
Run ros-industrial/industrial_ci@master
  with:
  env:
    DOCKER_IMAGE: moveit/moveit2:foxy-ci-testing
    UPSTREAM_WORKSPACE: moveit2.repos
    AFTER_SETUP_UPSTREAM_WORKSPACE: vcs pull $BASEDIR/upstream_ws/src
    BEFORE_TARGET_TEST_EMBED: set +u && source moveit_kinematics/test/test_ikfast_plugins.sh && set -u
    AFTER_RUN_TARGET_TEST:
    TARGET_CMAKE_ARGS: -DCMAKE_BUILD_TYPE=Release

    CCACHE_DIR: /home/runner/work/moveit2/moveit2/.ccache
    BASEDIR: /home/runner/work/moveit2/moveit2/.work
    CACHE_PREFIX: foxy-ci-testing
    CLANG_TIDY_BASE_REF: refs/heads/main
    IMAGE: foxy-ci-testing
    IKFAST_TEST: true
    CLANG_TIDY: true
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

You'll notice a couple things.  First is that I changed the ccache directory to use the ccache I have locally.  Do this if the enviroment you are running matches your local enviroment for a speed up.  The second is that I changed the ``AFTER_SETUP_UPSTREAM_WORKSPACE``.  This is because the directory used by CI is specific to github and we want to use the default directory structure from industrial_ci instead of a custom one.

After this finishes (pass or fail) it will output a docker commit tag that it creates.  That line will look something like this:

```
Committing container to tag: 'industrial-ci/rerun_ci/moveit2:df7d8ce97aeb'
```

You can then use that tag to open a terminal in that container to debug the CI run:

```
docker run -it industrial-ci/rerun_ci/moveit2:df7d8ce97aeb /bin/bash
```
