---
author: henningkayser
comments: true
date: 2021-11-05 07:00:00+01:00
layout: contribution-guide
slug: syncing
title: Syncing and Backporting
redirect_from: "/documentation/contributing/syncing_backporting.html"
---

# Syncing and Backporting

In order to make bug-fixes and features available across repos and distros, we need to migrate them from time to time.
Syncing refers to the process of preparing a merge commit from one branch to another that keeps the commit history intact.
This allows us to better keep track of all the changes that need to get synced, but also helps with resolving issues later on since the original history of the source branch is available in the correct order for later review.
We usually only do this from the MoveIt 1 master branch to the `main` branch of MoveIt 2, but other repos could also use the same strategy.

Backporting is the act of migrating isolated pull requests or commits from one branch to another using a cherry-pick.
The typical use case is that we backport bug-fixes from the MoveIt 2 `main` branch to stable distro branches or to MoveIt 1.

Below are step-by-step guides that should help maintainers to perform a proper sync or backport.

## Syncing from MoveIt 1 to MoveIt 2

Let's assume `origin` is the git remote for MoveIt 2 and `moveit1` the one for MoveIt 1, like below (using SSH works just the same, of course):


**origin:** https://github.com/ros-planning/moveit2.git

**moveit1:** https://github.com/ros-planning/moveit.git



### 1. Create a new sync branch

Fetch the latest MoveIt 2 `main` branch and use it for creating a new sync branch `pr-sync`:

```
git fetch origin
git checkout -b pr-sync origin/main
```


### 2. Identify the MoveIt 1 commit that was used for the last sync

The `merge-base` command gives you the hash of the common base of the two branches.

```
git fetch moveit1
LAST_SYNC_COMMIT=$(git merge-base origin/main moveit1/master)
echo $LAST_SYNC_COMMIT
```


You should be able to verify the merge commit hash of the last sync by searching for it in the commit log of the `main` branch using the command below.

```
git log --oneline | grep $LAST_SYNC_COMMIT
```

It should print a merge commit message similar to `"Merge https://github.com/ros-planning/moveit/commit/<commit_hash>"`.
If you don't find a matching commit message the last maintainer didn't follow this guide.
In that case you can try searching for the merge commit by only filtering for the first couple digits of the hash.


### 3. Pick a new sync commit

You can now identify the new commit in MoveIt 1 that should be used for your MoveIt 2 sync.
The comment below gives you all commits that have not yet been synced:

```
git log --oneline moveit1/master $(LAST_SYNC_COMMIT)..HEAD
```

You can print diffs for different sync candidates to see how much effort they might take:

```
git diff $(LAST_SYNC_COMMIT)..<sync_commit_candidate>
```

We assume you want to sync until the latest head:

```
NEW_SYNC_COMMIT=$(git rev-parse moveit1/master)
```


### 4. View diffs for resolving conflicts

You can now open two diffs that will help you with resolving potential merge conflicts (at best use separate terminals and keep them open during the sync). The diffs show the progress that has been made in MoveIt 1 and in MoveIt 2 (in that order), resolved conflicts should include changes from both sides:


```
git diff $LAST_SYNC_COMMIT $NEW_SYNC_COMMIT
git diff $LAST_SYNC_COMMIT origin/main
```

You can filter this diff by files or directories if needed.


### 5. Merge the sync commit into your `pr-sync` branch

Please use this message style so that it's easier to find old sync commits later on.

```
git merge --message="Merge https://github.com/ros-planning/moveit/commit/${NEW_SYNC_COMMIT}" $NEW_SYNC_COMMIT
```


If you are VERY lucky, the merge goes through without conflict and you can skip the next step. Most aren’t very lucky though.

### 6. Resolve all the merge conflicts

You need to resolve the merge conflicts by hand. For every conflict, please refer to the diffs what changes have been applied on both sides. Usually, changes on both sides of the conflicts are important. Don’t just resolve conflicts by ignoring one part. Most conflicts will be very straightforward and involve logging changes or migrated message namespaces. Some can be quite tricky, so take your time and don’t sync too many commits in one session.

### 7. Fix the branch

With no conflicts left, it's still possible that the sync includes incompatible changes that simply didn't cause a conflict.
Search the diff for things like:
* Message namespaces that need to be migrated
* Use of ROS 1 concepts: NodeHandle, ros::Time, Publisher, Subscriber, parameters, etc
* Topic names that don't follow new ROS 2 namespace pattern
* Outdated Documentation


After fixing these, try compiling and running the tests, and fix any obvious compile issues.
If you run into more difficult problems (say, a new class, bigger feature or not yet supported dependencies), start by commenting out the affecting code and see if you can get things running without the change.
In many cases it's not worth holding up the sync over this. Just open an Issue and add TODOs that reference the issue ID so that we can fix these things up later. In general, use your best judgement, and in doubt just create a sync PR and highlight the problem for discussion.

### 8. Finish the merge commit


When the merge is completed, conflict-free, compiling and hopefully passing all tests, finish the sync by committing the changes.

```
git commit --all
```


### 9. Apply additional fixes or migration steps

In some situations you may add additional commits to the sync in order to:

* Revert unwanted changes
* Apply non-trivial migration steps (again, use your own judgement)
* Add missing documentation
* Port launch or config files (if adequate)
* Add comments or TODOs
* Remove deprecated functions

It's much better to add commits for changes like these rather than applying them all with the merge commit.

### 10. File the GitHub PR

Once the sync branch is ready, open a pull request on GitHub for review, but mark it as `“[Don’t Merge]”`.

When approved, the target branch `main` should be fast-forwarded without creating an additional empty merge commit.
Don't use the GitHub web interface for merging.
You or another maintainer with write access should just push the sync branch directly to `main` (without `--force`!).
Also, don't use a rebase as that would break the commit history.
If `main` has been changed in the meantime, the sync needs to be reapplied unfortunately so that the latest changes in `main` are included.
The merge needs to be run again, the conflicts can be resolved easily by checking out the changes from the outdated sync branch.


## Backporting

Compared to syncing, preparing backports is very straight-forward in general.
All that needs to be done is to cherry-pick the desired commits from the source branch into the target branch.
Don't just copy the changes, the original author and commit message should stay the same.

### Cherry-picking

Depending on the situation, you can cherry-pick isolated commits

```
git cherry-pick <commit-hash>
```

..., or a range of commits

```
git cherry-pick <first-commit>..<last-commit>
```

..., or even a merge commit of an existing PR

```
git cherry-pick --mainline 2 <pr-merge-commit>
```

The mainline argument specifies which side of the merge should be considered as parent.
Since we only merge pull requests from the feature branch (first) into the development branch (second), we are setting the parent to `2`.
In most cases it's still preferable to cherry-pick the child commits of the merged PR since that allows resolving conflicts more directly.

### Backport pull requests

Create a simple pull request but make sure to reference the source of your backport.
For instance, if you backport a pull request into a different branch, use a PR title and commit message like this: `"<Original Title> (backport #<source-pr-id>) (#<new-pr-id>)"`

Don't squash-merge backports, the original commits should be present in the history of the target branch.

### Automated backporting

We are currently working on setting up backport bots like [Mergify](https://mergify.com/) that allow backport PRs to be generated just by setting specific labels in GitHub.
We'll update this documentation when this system is in place.
