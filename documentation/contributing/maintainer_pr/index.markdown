---
author: v4hn
layout: contribution-guide
slug: maintainer_pr
title: Pull Requests - Maintainer
---

# Maintainer Policies on Handling Pull Requests

MoveIt is a huge project with multiple maintainers and many contributing users.
Thus, sometimes it becomes quite hard to keep track of all open requests and their current state.
To ease the process of getting contributions merged into the project quickly, the following provides a guideline for maintainers.

## Branches Policy

Our development branches are called ``main`` (MoveIt 2) and ``master`` (MoveIt 1). We also have important distribution-specific release branches, named ``*-devel`` (MoveIt 1) or just e.g. ``foxy`` (MoveIt 2).

## No Direct Commits or Force Pushes

No one is allowed to directly commit or force push to the development or distribution branches of the repositories. This should already be disabled in the Github repo settings.

The only commits that might be pushed directly are cherry-picks from older branches (see below) and administrative changes (e.g. CHANGELOGS, tags). However with Mergify bot this should be discouraged also.

## Feature Branches in Upstream Repositories

Pull requests should originate from a user's fork of the main MoveIt upstream repositories as much as possible. Github has a feature that allows a MoveIt maintainer to contribute to a contributor's pull request branch [even if the branch is on another user's fork](https://help.github.com/articles/committing-changes-to-a-pull-request-branch-created-from-a-fork/) (Note: as long as its a private Github account and not a Github organization). Use of this is encouraged.

### Exceptions to Feature Branches in Upstream Repos

In rare cases, if a maintainer expects support in the development of a patch from non-maintainer users, they are free to create a new branch in the upstream repository instead. This enables other maintainers to directly push changes there and enables users to add pull-requests targeting the feature branch. To keep the list of branches clear and unambiguous, **names for such branches should always follow the pattern ``pr-<ros distribution>-<keyword description>``**. This makes it clear these branches are not relevant to users not involved in the respective request.

## Pull Request Approval Policy

No one should ever merge their own PR into a MoveIt repo without a review. This should be enforced in the Github repository settings.

We typically follow a **two approval requirement**. Two reviewers must approve a change using the "Approval" button, with at least one being a MoveIt maintainer.

### Exceptions to Two Approval Policy

MoveIt Maintainers only need need one other review if the following criteria are met:
- The review is from another maintainer
- The change is not too large or controversial
- All feedback has been addressed by the requester

Once this criteria is met, the maintainer who is the original author is free to merge their own PR in.

Other exceptions for only one approval required:
- A very small or trivial fix
- Changes to ``moveit_experimental`` and ``moveit_tutorials`` packages

## GitHub Merge Policies & Best Practices

GitHub provides [several merge policies ](https://help.github.com/articles/about-merge-methods-on-github). To avoid clutter in our commit history, **usually pull requests should be `squash-merged`** (Github supports this via a drop-down list on the "Merge" button), particularly if there are only single commits or several "fixup commits".

However, for larger changes to the code, it's absolutely desired to organize the pull request into multiple, clearly separated, but interrelated commits. In such cases, it is usually also meaningful to keep this commit history, thus being able to track these individual commits also later in the future. In this case, a maintainer should ask the contributor to cleanup "fixup" commits via squashing or interactive rebasing before eventually performing a proper `merge commit`.

Multiple, independent commits should not show up in a single PR, but should be split into multiple independent PRs. GitHub's `rebase-merge` policy, which could be used in such cases, unfortunately drops any notion of the related pull request id. To summarize:

- Single commits -> squash
- Multiple fixup-style commits -> squash
- Multiple **clean**, interrelated commits -> merge commit
- Multiple **clean**, independent commits -> rebase and merge

Contributors should indicate their desired merge-policy in the main PR comment.

## The Latest Branch Preserves All Original Commits

All contributions that get merged into MoveIt and should be included in later ROS distributions have to end up in the latest branch with their full description and individual commits.
This is necessary in order to preserve the history of the changes.
Future versions of MoveIt might not share the whole history of older branches and finding your `git blame` returns a commit called ``cherry-picked #123``, without an additional description, is not desirable.

## Merge Only If You Make Sure It Becomes Available In Later Branches Too

Don't merge a request unless you make sure the same (or a similar) patch-set is merged into all later branches at the same time.
We don't want to lose changes that are available in one ROS distribution because someone forgot to do that.

We use [`mergify`](https://docs.mergify.com) to automize backporting. Just add the corresponding label, e.g. `backport-foxy` to trigger a backport to Foxy.

If the commits apply cleanly to future branches and there is no evidence that they will break anything there, you are free to add the changes to the respective branches.
(Make sure you respect the all-commits-in-latest-branch guideline though).

Otherwise either the requester or the maintainer should create new pull-requests targeting the later branches.
If possible, merge these *together* with the original request.
In this context it might be worth spending some time on making use of features available in later ROS distributions to simplify the code, e.g. by using a new coding standard or a more current version of a library.

## Summary

Thanks for your help maintaining MoveIt, you make things awesome!
