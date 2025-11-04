---
author: tylerjw
layout: contribution-guide
slug: releases
title: Releases
---

# Release Process

While the latest code is always available in source format, we also make releases available in binary formats. Releases are made on a periodic basis into all of the currently supported <a href="/about/distribution">ROS distributions</a>. The decision to make a new release is usually made during the monthly maintainer meeting.

New features and API or ABI breaking changes can be merged at any time into the `main` branch. For this reason, most ROS releases will have a stable branch named after the ROS release, for instance `jazzy`. These release-specific branches aim to maintain API and ABI compatibility for the life of the ROS distribution.

Since it usually takes some time for users to migrate to a new ROS distribution, these release-specific branches are usually not forked from `main` until approximately six months after the official release of the ROS distribution is made (recent ROS releases have been made in May, so this usually happens in November). The official decision to fork is usually made during a maintainer meeting.

## Permissions

The maintainer handling the release must have write access to both devel repos (e.g. [github.com/moveit/moveit](https://github.com/moveit/moveit)) as well as release repos (e.g. [github.com/ros-gbp/moveit-release](https://github.com/ros-gbp/moveit-release)). The release repo access is managed via the Github Team [moveit-maintainers](https://github.com/orgs/ros-gbp/teams/moveit-maintainers/members).

## Steps

1. Create an issue to track the status of the upcoming release.  This issue should include a list of the changes since the last release so maintainers can determine which ones should be backported into the release branch.  Do this for each repo that will be released with references to the issue in the main repo.  To generate the list of changes use the `review-for-backport` branch. The `reviewed-for-backport` branch exists as a marker in the commit history for `main`, marking the last commit that was considered for backporting. Run `git cherry -v <release-branch> main reviewed-for-backport | grep '^+'` to generate a list of all commits between `reviewed-for-backport` and the current `main` branch that have not been merged in `release-branch` (without modifications). Backports should be pull-requests and reviewed separately, though possibly bundled.
1. Run ROS buildfarm prerelease test for **all** supported Ubuntu distributions in [REP-0003](http://www.ros.org/reps/rep-0003.html).
   * You can see [here](http://wiki.ros.org/bloom/Tutorials/PrereleaseTest) for the general instruction of prerelease test. If you're done for the setup already and just want to refer to command examples, see [here](http://wiki.ros.org/regression_tests#Running_prerelease_test).
   * As long as REP-0003 supports, we must test even EOLed Ubuntu distros (e.g. Saucy for ROS Indigo was retired in 2014 but REP-0003 still supports it and there's no way as of December 2016 to skip it. See [moveit/#100](https://github.com/moveit/moveit/issues/100#issuecomment-268826497) as a previous example).
   * Example commands:
    Default for Kinetic-Xenial where the `HEAD` at the moveit repo is what we want to release, and Kinetic-Wily (basically the same except for the Ubuntu distro type):

     ```
     _DIR_PRLTEST=/tmp/prerelease_job_kin-xen; mkdir -p $_DIR_PRLTEST && cd $_DIR_PRLTEST

     generate_prerelease_script.py   https://raw.githubusercontent.com/ros-infrastructure/ros_buildfarm_config/production/index.yaml melodic default ubuntu xenial amd64  moveit   --level 0  --output-dir ./

     generate_prerelease_script.py   https://raw.githubusercontent.com/ros-infrastructure/ros_buildfarm_config/production/index.yaml melodic default ubuntu wily amd64  moveit   --level 0  --output-dir ./
     ```
1. Update changelogs. Take advantage of `catkin_generate_changelog` command to populate new logs, then preferably edit them manually to cleanup/combine changelog messages and mark/sort them by type of change (e.g. bugfix, feature, maintenance, documentation). Have a look at previous changelogs to get an idea of the verbosity level and formatting. Example of the whole command set:

   ```
   cd moveit                              (Top directory of your cloned moveit repo.)
   git checkout master
   git log                                (Make sure the HEAD is what you want to release with. If it's not then update accordingly.)
   catkin_generate_changelog
   emacs `find . -iname CHANGELOG.rst`    (Edit each file. Emacs forever, but replace it if necessary :/)
   git add `find . -iname CHANGELOG.rst`  (Stage all changelogs)
   ```
1. Figure out the correct next version number (see the version policy section below) and utilize the command `catkin_prepare_release` that adapts the version numbers in all package.xml and changelog files, creates a new tag, and eventually pushes to the remote repo (you can check at [github.com/moveit/moveit/releases](https://github.com/moveit/moveit/releases)). Example command:

   ```
   (Assuming you're at the same directory as before.)

   catkin_prepare_release --version x.x.x    (Replace x.x.x with the correct version number!)
   ```
1. Run `bloom`. Open a pull request against [rosdistro](https://github.com/ros/rosdistro) as bloom suggests at the end of its run. [Example of such a request](https://github.com/ros/rosdistro/pull/13512). Example command:

   ```
   bloom-release --rosdistro melodic moveit
   ```
1. Bump the version number to the next upcoming one and _finally_ push to the github (we do this if someone requests it for their workflow):
   ```bash
   # Bump the release number, but don't yet push to github
   catkin_prepare_release --no-push
   # Reword the commit message generated by `catkin_prepare_release` from `x.x.x` to:
   git commit --amend -m "Bump version to x.x.x"
   # Remove created version tag (which must not pushed to github)
   git tag -d x.x.x
   # Push to github repo (or file a pull request)
   git push origin
   ```
   Alternatively, you can update all version numbers with a `sed` command:
   ```bash
   find . -iname package.xml -exec \
     sed -i "s#<version>.*</version>#<version>x.y.z</version>#g" {} \;
   ```
1. Write release notes on moveit.ai (e.g. [1](https://github.com/moveit/moveit.ros.org/pull/115), [2](https://github.com/moveit/moveit.ros.org/pull/110)). Send it to [Discourse MoveIt category](https://discourse.openrobotics.org/tag/moveit).
1. Forward the `reviewed-for-backport` branch to `<release-branch>: git checkout reviewed-for-backport; git merge --ff-only <release-branch>`.

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
  the `HEAD` of a development branch will already indicate the _next_ upcoming release version. See [rational](https://github.com/moveit/moveit/issues/2036).
* See also: [discussion for the best practice for versioning](https://discourse.ros.org/t/maintainer-best-practices-handling-changes-through-ros-releases/771) on Discourse.

### Release Issue Template

```
# MoveIt <ROS_VERSION_NAME> Release (<VERSION>)

[_moveit.ros.org release documentation_](/documentation/contributing/releases/)

### Backports

- [ ] .
- [ ] .

### Checklist
- [ ] Merge backports
- [ ] Run ROS buildfarm prerelease test
- [ ] Update changelogs
- [ ] Bloom
- [ ] Write discourse post
```
