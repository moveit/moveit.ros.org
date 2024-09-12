# The MoveIt Website

[![Formatting (pre-commit)](https://github.com/moveit/moveit.ros.org/actions/workflows/format.yaml/badge.svg?branch=main)](https://github.com/moveit/moveit.ros.org/actions/workflows/format.yaml?query=branch%3Amain)
[![Build Status](https://github.com/moveit/moveit.ros.org/actions/workflows/build.yaml/badge.svg?branch=main)](https://github.com/moveit/moveit.ros.org/actions/workflows/build.yaml?query=branch%3Amain)

The MoveIt website (http://moveit.ai/) is hosted on **Github Pages** using Markdown format.
Changes to the ``main`` branch become immediately available online.

## Images

Please compress images before loading them to the repo, we recommend [https://tinypng.com/](https://tinypng.com/). High-resolution images from professional photographers will kill load times.

## YouTube Videos

Please use https://www.youtube-nocookie.com/ instead of  https://www.youtube.com/. Explanation [here](https://github.com/moveit/moveit.ros.org/issues/232).

## Build Locally on Ubuntu

Will install Ruby, and Jekyll, build the website, and server the website on localhost:

    ./build_locally.sh

If the dependencies are already installed (you've already run the previous command locally):

    ./build_locally.sh noinstall

If Jekyll is for some reason still running in the background, kill to prevent port conflicts:

    pkill -9 -f jekyll

### Run Build Tests Locally

Will check all links are valid, etc:

    ./build_locally.sh check
