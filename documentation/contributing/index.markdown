---
author: davetcoleman
comments: true
date: 2016-7-21 02:13:26+00:00
layout: page
slug: tutorials
title: Contributing
---

# Contributing to MoveIt!

First off, thank you for considering contributing to MoveIt! - it's people like you that make this motion planning framework such a quality project. We want to encourage all MoveIt! users to contribute back to the open source project, whether enhancing documentation, answer user questions, writing blog posts, reporting & fixing bugs, reviewing open pull requests, or adding new features.

Following these guidelines helps to communicate that you respect the time of the developers managing and developing this open source project. In return, we should reciprocate that respect in addressing your issue, assessing changes, and helping you finalize your pull requests.

## Enhancing Documentation

Documentation for the MoveIt! project can be found in two places: in [moveit_tutorials](https://github.com/ros-planning/moveit_tutorials) and on this website. Github's popular ``README.md`` files should be mainly used to redirect users to the corresponding tutorial and website pages.

### Tutorials

Tutorials are documented as [reStructredText](http://docutils.sourceforge.net/rst.html) files (similar to Markdown) using Sphinx in the [moveit_tutorials](https://github.com/ros-planning/moveit_tutorials) source repository. These tutorials mostly use the PR2 as their example robot and include example source code you can run. To edit or add more tutorials, create Github pull requests to that repository and the maintainers will graciously approve your help after review.

### moveit.ros.org

Once you have created new Sphinx documentation, you'll need to create links to it from the main moveit.ros.org website so that other users can find it. Additionally, some higher level documentation can be found directly on this website, so you'll need to edit it there as well.

To edit or add pages on the MoveIt! website, go to [https://github.com/ros-planning/moveit.ros.org](https://github.com/ros-planning/moveit.ros.org) and either edit inline using Github's web-based editing capability, or ``git clone`` the repo and push pull requests back to the repo.

## Answering User Questions

You can contribute greatly to the MoveIt! community by answering other people's questions on the [answers.ros.org](http://answers.ros.org/questions/scope:all/sort:activity-desc/tags:moveit/page:1/), ROS community's official question-answer forum. Please feel free help answer questions there, and gain Karma in the process!

Those who are willing to answer MoveIt!-related questions only can get notified via emails by the following simple step:

 1. Open your profile page, by clicking your account name on the top. Then open `email alerts` tab.
 2. At `Choose email tag filter`, click `only interesting tags` radio button. Select frequency you'd like to get notified other than `never`. See example screenshot below.
 3. Go to the [top page](http://answers.ros.org/questions/). In `Interesting tags` text field on the right, add `moveit` (and any tags you'd like to get notifications about).

 ![img](../../assets/answers.ros_config_receive-notification.png)

As an aside, a lot of documentation exists as Q&amp;As on there, and if you feel so compelled, help us move some of that documentation onto the website.

[MoveIt! mailing list](https://groups.google.com/forum/#!forum/moveit-users) should be used for announcement and discussion only.

## Reporting & Fixing Bugs

Bugs should be reported to the Github issues page of the appropriate repo. Please leave as much detail as possible including your ROS version, operating system, operating system version, and whether you built from source. Note however that we have limited resources to fix individual bugs, and are more inclined to give advice on helping you fix your own bugs.

### Pull Requests

Our policy for contributing changes to the code base is that no one, not even the maintainers, should commit directly to the repo. Rather, you should create a feature branch on your own fork of the project and create a pull-request when it's ready to be reviewed by someone else. To ease the process of merging your requests, please follow your part of the [Guideline for Handling Pull Requests](pullrequests). See [MoveIt! Code Style](code) for details on how to format your pull requests - a requirement for our automated build farm. Note all contributions to MoveIt! must be BSD or similar open source license.

### Checking For ABI Compliance

In LTS releases efforts should be made to avoid breaking ABI and API (binary and source-level compatibility) for MoveIt!'s C/C++ libraries. To aid in checking this, we optionally recommend the [Linux ABI Compliance-Checker](http://ispras.linuxbase.org/index.php/ABI_compliance_checker).

### Running Tests Locally

You can run MoveIt! tests locally with catkin-tools. To run a test for just 1 package:

    catkin run_tests --no-deps --this -iv

Run test for all packages:

    catkin run_tests -iv

### Using Docker to Review Pull Requests

Docker is very useful for testing pull requests and code changes without breaking your regular development environment. For more information see the [Docker Usage Instructions](/install/docker).

## Adding New Features

We would like to see MoveIt! continue to evolve and so new features are encouraged. However, it can be difficult to ensure that new features do not break existing functionality or user's code. For this reason, we ask you keep your pull requests in the smallest digestible chunks possible - not thousands of lines of changed code.

We recommend you open an issue first asking if the change is a good idea, before implementing it, so that you don't waste your time.

### Unit/Integration Tests

Unit tests and integration tests are **always** welcomed, please add them to your PRs.

## Continuous Integration

For an understanding of how MoveIt!'s continuous integration and Travis is setup, see [Continuous Integration](continuous_integration/).
