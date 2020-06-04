---
author: v4hn
layout: page
slug: pullrequests
title: Pull Requests
redirect_from: "/documentation/contributing/pullrequests.html"
---

# Handling Pull Requests

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
 - Is it general enough to work with everyone's use-case and not only the requestor's setup?
 - Does it address all edge-cases you are aware of?
 - If a new interface is introduced: Is this interface general enough for likely future modifications? Otherwise we might have to break API later on if we wish to add more useful features to the same module.
 - If the request targets a stable release: Is the change [ABI compatible](https://en.wikipedia.org/wiki/Application_binary_interface) or is there a good reason (e.g. safety) to break it?
 - Does the patch respect the [MoveIt Code Style](/documentation/contributing/code/)?

If (and only if) you answer all these questions with "yes", use Github's [pull request review](https://help.github.com/articles/about-pull-request-reviews/) feature to approve the PR. This entails pressing the green "Review Changes" button, giving a review summary, and choosing "Approve" if it is ready to be merged in. If you are unsure about some part of the request, feel free to add a note and ask the author for details and explanations of individual changes.

## Maintainer Side

The ``*-devel`` branches of the repositories must always compile on the target platforms.

The ``*-devel`` branches must not be force-pushed.

### No Direct Commits

No one is allowed to directly commit to the ``*-devel`` branches of the repositories. Instead they should create feature branches and add pull-requests.
The only commits that might be pushed directly are cherry-picks from older branches (see below) and administrative changes (e.g. CHANGELOGS, tags).

### Typically, two "Approves" == Merge

If you see a trustworthy approval review in a request or the requestor is a fellow maintainer and all feedback has been addressed by the requestor,
merge the request after your own review. Otherwise submit an "Approval" review after you are satisfied after the review.

For small or trivial fixes, a single review is sufficient. Additionally, for the ``moveit_experimental`` package, a single review is sufficient.

### GitHub Merge Policies

GitHub provides [several merge policies ](https://help.github.com/articles/about-merge-methods-on-github). To avoid clutter in our commit history, usually pull requests should be `squash-merged` (github supports this via a drop-down list on the "merge" button), particularly if there are only single commits or several "fixup commits".

However, for larger changes to the code, it's absolutely desired to organize the pull request into multiple, clearly separated, but interrelated commits. In such cases, it is usually also meaningful to keep this commit history, thus being able to track these individual commits also later in the future. In this case, a maintainer should ask the contributor to cleanup "fixup" commits via squashing or interactive rebasing before eventually performing a proper `merge commit`.

Multiple, independent commits should not show up in a single PR, but should be split into multiple independent PRs. GitHub's `rebase-merge` policy, which could be used in such cases, unfortunately drops any notion of the related pull request id. To summarize:

- single commits -> squash
- multiple fixup-style commits -> squash
- multiple **clean**, interrelated commits -> merge commit
- multiple **clean**, independent commits -> rebase and merge

Contributors should indicate their desired merge-policy in the main PR comment.

### Feature Branches in Upstream Repositories

Pull requests should originate from a user's fork of the main MoveIt upstream repository as much as possible. Github has a feature that allows a MoveIt maintainer to contribute to a contributor's pull request branch [even if the branch is on another user's fork](https://help.github.com/articles/committing-changes-to-a-pull-request-branch-created-from-a-fork/). Use of this is encouraged.

In rare cases, if a maintainer expects support in the development of a patch from non-maintainer users, they are free to create a new branch in the upstream repository instead. This enables other maintainers to directly push changes there and enables users to add pull-requests targeting the feature branch. To keep the list of branches clear and unambiguous, **names for such branches should always follow the pattern ``pr-<ros distribution>-<keyword description>``**. This makes it clear these branches are not relevant to users not involved in the respective request.

### The Latest Branch Preserves All Original Commits

All contributions that get merged into MoveIt and should be included in later ROS distributions have to end up in the latest branch with their full description and individual commits.
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

### Consider backporting

Before preparing a new release for the latest released branch, backports from the ``master`` branch should be considered and reviewed some time before the release.
To this end, the ``reviewed-for-backport`` branch exists as a marker in the commit history for ``master``, marking the last commit that was considered for backporting.
Run ``git cherry -v <release-branch> master reviewed-for-backport | grep '^+'`` to generate a list of all commits between ``reviewed-for-backport`` and the current ``master`` branch that have not been merged in ``release-branch`` (without modifications).
Create a new issue with a checkable listing with all commits and ask developers to look through these commits and decide whether they can be ignored or should be backported.
Backports should be pull-requests and reviewed separately, though possibly bundled.
Once all listed commits have been checked, forward the ``reviewed-for-backport`` branch to ``<release-branch>``: ``git checkout reviewed-for-backport; git merge --ff-only <release-branch>``.

### Typical protocol for a single release
If any step ends with issues, they need to be fixed before moving on.

0. Create an issue to track the status of the upcoming release a few days before you start your release work, to notify maintainers to freeze new merge until you finish.
1. Plan the possible date where you finish releasing tasks. Then communicate with the ROS buildfarm maintainers at [Release section on discourse.ros.org](https://discourse.ros.org/c/release) to tell that we want soak time of one or two weeks so that maintainers/early adopters can test the binaries from [shadow repo](http://wiki.ros.org/ShadowRepository) and add necessary fix if any.
1. Run ROS buildfarm prerelease test for **all** supported Ubuntu distributions in [REP-0003](http://www.ros.org/reps/rep-0003.html).
   * You can see [here](http://wiki.ros.org/bloom/Tutorials/PrereleaseTest) for the general instruction of prerelease test. If you're done for the setup already and just want to refer to command examples, see [here](http://wiki.ros.org/regression_tests#Running_prerelease_test).
   * As long as REP-0003 supports, we must test even EOLed Ubuntu distros (e.g. Saucy for ROS Indigo was retired in 2014 but REP-0003 still supports it and there's no way as of December 2016 to skip it. See [moveit/#100](https://github.com/ros-planning/moveit/issues/100#issuecomment-268826497) as a previous example).
   * Example commands:
    Default for Kinetic-Xenial where the `HEAD` at the moveit repo is what we want to release, and Kinetic-Wily (basically the same except for the Ubuntu distro type):

     ```
     _DIR_PRLTEST=/tmp/prerelease_job_kin-xen; mkdir -p $_DIR_PRLTEST && cd $_DIR_PRLTEST

     generate_prerelease_script.py   https://raw.githubusercontent.com/ros-infrastructure/ros_buildfarm_config/production/index.yaml melodic default ubuntu xenial amd64  moveit   --level 0  --output-dir ./

     generate_prerelease_script.py   https://raw.githubusercontent.com/ros-infrastructure/ros_buildfarm_config/production/index.yaml melodic default ubuntu wily amd64  moveit   --level 0  --output-dir ./
     ```

1. Update changelogs. Take advantage of `catkin_generate_changelog` command to populate new logs, then preferably edit them manually to cleanup/combine changelog messages and mark/sort them by type of change (e.g. bugfix, feature, maintenance, documentation). Have a look at previous changelogs to get an idea of the verbosity level and formatting. Example of the whole command set:

   ```
   cd moveit                              (Top directory of your clooned moveit repo.)
   git checkout master
   git log                                (Make sure the HEAD is what you want to release with. If it's not then update accordingly.)
   catkin_generate_changelog
   emacs `find . -iname CHANGELOG.rst`    (Edit each file. Emacs forever, but replace it if necessary :/)
   git add `find . -iname CHANGELOG.rst`  (Stage all changelogs)
   ```
1. Figure out the correct next version number ([see the version policy section](#Release-versioning-policy)) and utilize the command `catkin_prepare_release` that adapts the version numbers in all package.xml and changelog files, creates a new tag, and eventually pushes to the remote repo (you can check at [github.com/ros-planning/moveit/releases](https://github.com/ros-planning/moveit/releases)). Example command:

   ```
   (Assuming you're at the same directory as before.)

   catkin_prepare_release --version x.x.x    (Replace x.x.x with the correct version number!)
   ```
1. Run `bloom`. Open a pull request against [rosdistro](https://github.com/ros/rosdistro) as bloom suggests at the end of its run. [Example of such a request](https://github.com/ros/rosdistro/pull/13512). Example command:

   ```
   bloom-release --rosdistro melodic moveit
   ```
1. Bump the version number to the next upcoming one and _finally_ push to the github:
   ```
   # Bump the release number, but don't yet push to github
   catkin_prepare_release --no-push
   # Reword the commit message generated by `catkin_prepare_release` from `x.x.x` to:
   git commit --amend -m "Bump version to x.x.x"
   # Remove created version tag (which must not pushed to github)
   git tag -d x.x.x
   # Push to github repo (or file a pull request)
   git push origin
   ```

1. Notify maintainers to resume new merge.
1. Write release notes on moveit.ros.org (e.g. [1](https://github.com/ros-planning/moveit.ros.org/pull/115), [2](https://github.com/ros-planning/moveit.ros.org/pull/110)). Send it to [Discourse MoveIt category](https://discourse.ros.org/c/moveit).

### Release Versioning Policy

* **Major version number**:
  * Until 2019, MoveIt was never officially "out of beta" so was 0.x.x version
  * As ROS 2 became more of a thing, MoveIt for ROS 1 was announced to be "out of beta" and increased to 1.x.x
  * MoveIt for ROS 2 (MoveIt 2) uses the major version number 2.x.x
* **Minor version number:** differentiates different ROS distributions
  * Indigo 0.8.x (indigo-devel)
  * Kinetic 0.9.x (kinetic-devel)
  * Melodic 1.0.x (melodic-devel)
  * Noetic 1.1.x (noetic-devel)
* As of May 2020 we decided to bump the release version right after preparing a release, such that
  the `HEAD` of a development branch will already indicate the _next_ upcoming release version. See [rational](https://github.com/ros-planning/moveit/issues/2036).
* See also: [discussion for the best practice for versioning](https://discourse.ros.org/t/maintainer-best-practices-handling-changes-through-ros-releases/771) on Discourse.
