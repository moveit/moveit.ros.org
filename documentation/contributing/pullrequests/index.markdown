---
author: v4hn
layout: pullrequests
slug: pullrequests
title: Pull Requests
---

# Handling Pull Requests

MoveIt is a huge project with multiple maintainers and many contributing users.
Thus, sometimes it becomes quite hard to keep track of all open requests and their current state.
To ease the process of getting your contribution merged into the project, the following provides a guideline for contributors.

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
