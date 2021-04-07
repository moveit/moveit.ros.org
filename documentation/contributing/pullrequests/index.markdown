---
author: v4hn
layout: pullrequests
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

The process for releasing is [documented here](/documentation/contributing/releases/).