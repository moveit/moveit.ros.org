---
author: v4hn
comments: true
date: 2016-8-3 13:24:00+00:00
layout: page
slug: pullrequests
title: Pull Requests
redirect_from: "/documentation/contributing/pullrequests.html"
---

# Handling Contributions

MoveIt is a huge project with multiple maintainers and many contributing users.
Thus, sometimes it becomes quite hard to keep track of all open requests and their current state.
To ease the process of getting your contribution merged into the project, the following provides a guideline for contributors as well as maintainers.

## Contributor/User Side

Your pull-requests can target any branch of a MoveIt repository that supports an [OSRF-supported ROS distribution](http://wiki.ros.org/Distributions).
The most important point about your request is that you verified it is working. Obviously, the best way to do that is with the setup/distribution you use.

### Keep Requests Clean and Independent

Different commits in a request should correspond to logical units that build up on each other. Feel free to rebase and force-push your feature-branch to address feedback.
If your request consists of multiple commits with titles like "cleanup braces" or "address xyz's feedback", the maintainer who merges the request will squash-merge and your changes will end up as a single commit in the project.

Logically independent changes should be separated into multiple pull-requests. E.g. don't create a pull-request that changes plan execution and planning scene updates at the same time if there is no direct connection between the two changesets. If there *is* a connection that is not immediately obvious, please explain it in your request. "I had to change it to get my setup to work" is no connection. You might experience separate independent issues.
This makes it much more likely to get your changes merged soon, because if maintainers are unsure about one change, they can still merge the other one after review.

### Ping

If you feel everyone forgot about your request, add a short note saying "ping" or "Could someone please review/merge this?" to the request. It might be that the item dropped of everyone's TODO list for no reason.

### Reviewing and Approving Requests

All feedback on existing pull-requests is welcome and appreciated. If you are familiar with the code someone requests to change, please step up and review their requests. The maintainer's time is often quite limited. This usually boils down to answering the following questions and provide feedback in the request:

 - Does the patch do what the author claims it does?
 - Is it general enough to work with everyones use-case and not only the requestor's setup?
 - Does it address all edge-cases you are aware of?
 - If a new interface is introduced: Is this interface general enough for likely future modifications? Otherwise we might have to break API later on if we wish to add more useful features to the same module.
 - If the request targets a stable release: Is the change [ABI compatible](https://en.wikipedia.org/wiki/Application_binary_interface) or is there a good reason (e.g. safety) to break it?
 - Does the patch respect the [MoveIt! Code Style](/documentation/contributing/code/)?

If (and only if) you answer all these questions with "yes", use Github's [pull request review](https://help.github.com/articles/about-pull-request-reviews/) feature to approve the PR. This entails pressing the green "Review Changes" button, giving a review summary, and choosing "Approve" if it is ready to be merged in. If you are unsure about some part of the request, feel free to add a note and ask the author for details and explanations of individual changes.

## Maintainer Side

The ``*-devel`` branches of the repositories must always compile on the target platforms.

The ``*-devel`` branches must not be force-pushed.

### No Direct Commits

No one is allowed to directly commit to the ``*-devel`` branches of the repositories. Instead they should create feature branches and add pull-requests.
The only commits that might be pushed directly are cherry-picks from older branches (see below) and administrative changes (e.g. CHANGELOGS, tags).

### Two "Approves" == Merge

If you see a trustworthy approval review in a request or the requestor is a fellow maintainer and all feedback has been addressed by the requestor,
merge the request after your own review. Otherwise submit an "Approval" review after you are satisfied after the review.

### Squash-Merge If Possible

Pull-requests with a single commit should *always* be squash-merged (github supports this via a drop-down list on the "merge" button).
If a request contains "fixup commits" it should also be squash-merged. If you are unsure this is to the requestor's liking, ask them.

### Feature Branches in Upstream Repositories

In general, requests should originate from a private fork of the upstream repository. If maintainers expect support in the development of a patch, they are free to create a new branch in the upstream repository instead. This enables other maintainers to directly push changes there and enables users to add pull-requests targeting the feature branch. To keep the list of branches clear and unambiguous, **names for such branches should always follow the pattern ``pr-<ros distribution>-<keyword description>``**. This makes it clear these branches are not relevant to users not involved in the respective request.

### The Latest Branch Preserves All Original Commits

All contributions that get merged into MoveIt! and should be included in later ROS distributions have to end up in the latest branch with their full description and individual commits.
This is necessary in order to preserve the history of the changes.
Future versions of MoveIt might not share the whole history of older branches and finding your `git blame` returns a commit called ``cherry-picked #123``, without an additional description, is not desirable.

### Merge Only If You Make Sure It Becomes Available In Later Branches Too

Don't merge a request unless you make sure the same (or a similar) patch-set is merged into all later branches at the same time.
We don't want to lose changes that are available in one ROS distribution because someone forgot to do that.

If the commits apply cleanly to future branches and there is no evidence that they will break anything there, you are free to add the changes to the respective branches.
(Make sure you respect the all-commits-in-latest-branch guideline though).

Otherwise either the requestor or the maintainer should create new pull-requests targeting the later branches.
If possible, merge these *together* with the original request.
In this context it might be worth spending some time on making use of features available in later ROS distributions to simplify the code, e.g. by using a new coding standard or a more current version of a library.

## Making a new release

Release person must have a write access to both devel repos (e.g. [github.com/ros-planning/moveit](https://github.com/ros-planning/moveit)) as well as release repos (e.g. [github.com/ros-gbp/moveit-release](https://github.com/ros-gbp/moveit-release)).

### Typical protocol for a single release
If each step ends with issues, they need to be fixed before moving on.

0. Create an issue to track the status of the upcoming release a few days before you start your release work, to notify maintainers to freeze new merge until you finish.
1. Plan the possible date where you finish releasing tasks. Then communicate with the ROS buildfarm maintainers at [Release section on discourse.ros.org](https://discourse.ros.org/c/release) to tell that we want soak time of one or two weeks so that maintainers/early adopters can test the binaries from [shadow repo](http://wiki.ros.org/ShadowRepository) and add necessary fix if any.
1. Run ROS buildfarm prerelease test for **all** supported Ubuntu distributions in [REP-0003](http://www.ros.org/reps/rep-0003.html).
  * You can see [here](http://wiki.ros.org/bloom/Tutorials/PrereleaseTest) for the general instruction of prerelease test. If you're done for the setup already and just want to refer to command examples, see [here](http://wiki.ros.org/regression_tests#Running_prerelease_test).
  * As long as REP-0003 supports, we must test even EOLed Ubuntu distros (e.g. Saucy for ROS Indigo was retired in 2014 but REP-0003 still supports it and there's no way as of December 2016 to skip it. See [moveit/#100](https://github.com/ros-planning/moveit/issues/100#issuecomment-268826497) as a previous example).
    * For Ubuntu Saucy, there's no Docker image available online for ROS prerelease test AFA known as of Dec 2016. You can still run following [this post](https://github.com/ros-planning/moveit/pull/391#issuecomment-269725623).
1. Update changelogs. Take advantage of `catkin_generate_changelog` command to populate new logs, then preferably edit them manually to sort out per the type of changes (e.g. bugfix, new capability, maintenance, documentation). Example of the whole command set:

  ```
  cd moveit                              (Top directory of your clooned moveit repo.)
  git checkout kinetic-devel
  git log                                (Make sure the HEAD is what you want to release with. If it's not then update accordingly.)
  catkin_generate_changelog
  emacs `find . -iname CHANGELOG.rst`    (Edit each file. Emacs forever, but replace it if necessary :/)
  ```

1. Create a new tag with an appropriate version number (see the version policy section). Utilize `catkin_prepare_release` command that bumps the versions in package xml and in changelog files, creates a new tag, and pushes it to the remote repo (you can check at [github.com/ros-planning/moveit/releases](https://github.com/ros-planning/moveit/releases)). Example command:
  ```
  (Assuming you're at the same directory as previously)

  catkin_prepare_release --bump patch    (Or without any option it suggests bumping minor version.)
  git tag                                (Confirm among all tags that the tag with the intended version is locally created. Also go online to see the tag is uploaded.)
  ```
1. Run `bloom`. Open a pull request against [rosdistro](https://github.com/ros/rosdistro) as bloom suggests at the end of its run. [Example of such a request](https://github.com/ros/rosdistro/pull/13512). Example command:

  ```
bloom-release --rosdistro kinetic --track kinetic moveit
  ```

1. Notify maintainers to resume new merge.
1. Write release notes on moveit.ros.org (e.g. [1](https://github.com/ros-planning/moveit.ros.org/pull/115), [2](https://github.com/ros-planning/moveit.ros.org/pull/110)). Send it to [moveit-users mailinglist](https://groups.google.com/forum/#!forum/moveit-users).

### Release versioning policy

* We use the minor version to differentiate the releases from different development branches.
  * As of December 2016, Indigo 0.7.x (indigo-devel branch), Jade 0.8.x (jade-devel), Kinetic 0.9.x (kinetic-devel).
* See also a [discussion for the best practice for versioning](https://discourse.ros.org/t/maintainer-best-practices-handling-changes-through-ros-releases/771) on discourse.
