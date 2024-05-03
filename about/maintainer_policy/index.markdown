---
layout: page
slug: maintainer_policy
title: MoveIt Governance
---

# MoveIt Governance

<img src="/assets/images/people_page/lego_constrution.jpg" style="float: right;"/>

MoveIt Core Contributors and Maintainers are the driving force of keeping MoveIt alive by responding to pull requests, issues, and user questions.
These two groups of highly involved participants also help fix critical regressions and support developing future versions of MoveIt.
We greatly appreciate all of the Core Contributors and Maintainers of the MoveIt project and thank you for your support.

In addition to gratitude, some advantages of being a MoveIt maintainer / core contributor:

 - Build up expertise of one of the most popular ROS libraries
 - Improve your resume / CV
 - Be listed on the MoveIt website
 - Networking opportunities: gain reputation in the largest robotics community on earth
 - Quicker code contributions: you only need one review to get your code merged in, while non-maintainer/non-core contributor pull requests require two approvals.
 - Free MoveIt T-Shirt from PickNik Robotics

## Core Contributors

We have a stringent process for giving commit access to the code base, but we want to have as many people involved in reviewing pull requests and responding to issues.
We have a non-commit access category ([Github Triage](https://github.blog/changelog/2019-05-23-triage-and-maintain-roles-beta/)) of MoveIt experts we call "Core Contributors" - these participants are recognized for their hard work and contributions to MoveIt early on.
Eventually after fully proving their expertise, full maintainer/committer status can be granted.

To be considered a "Core Contributor", we look for demonstrated excitement about the MoveIt project.
We also ask you have completed at minimum the following:

 - 2 substantial pull requests merged
 - 4 pull requests reviewed via the "Approve" or "Request Changes" button
 - 2 maintainer meetings attended

If you feel like you qualify to be a core contributor please reach out to any of the [MoveIt Maintainers](https://moveit.ros.org/about/) and we'd be happy to discuss and get you added!

## Maintainers

MoveIt Maintainers, commonly referred to as "committers" in other open source projects, are the seasoned experts of the MoveIt project.
Becoming a maintainer is generally an invite-only process and ideally achieved by first becoming a core contributor.

### Responsibilities

Joining the Maintainer team means you have the responsibility of commit access to our Github repositories.
You then can merge other's code contributions, but you should never merge your own code without someone else's review.

We've formalized the process here to disambiguate when someone should be added.
We hope it's not too intimidating as we want to add as many qualified Maintainers as possible.
To qualify for being added to the group you must:

 - Have proven a decent understanding of fundamental parts of the MoveIt code base
 - Have completed at least double of the minimum requirements for Core Contributors, above
 - Be willing to help review on average 1 pull request a week or more
 - Read the MoveIt pull request guidelines to understand our policies

Once having joined, the responsibilities of a MoveIt maintainer include:

 - Review incoming code contributions for style, quality, and overall fit into the goals of MoveIt.
 - Ensure that Continuous Integration does not break.
 - Merge pull requests that meet the quality and CI standards above.
 - Address issues opened up by users.

## Inactive Core Contributors and Maintainers

In order to keep the prestige and responsibility of being listed as a Maintainer or Core Contributor relevant, we have developed the following guidelines for considering them inactive and changing their status.

When the following occurs for a Maintainer or Core Contributor:

 - They no longer wishes to be involved with the project (usually due to changing life priorities), or
 - They have no MoveIt Github activity, or have not attended any Maintainer meetings, for an entire year

Then we will first reach out to them to check in and encourage participation.
If there is no further desire or ability to continue to be an active member of the MoveIt team, we will move them to the "Inactive" section of the [People](/about/) page.
Their past contributions should be acknowledged and appreciated, and they will continue to be listed on the MoveIt page.

For maintainers specifically, we will also remove their repo commit access and change them to just Github Triage access.
For Core Contributors, their Github access can remain the same.

## MoveIt Github Org Policy

We have three organization teams to organize work:
 - MoveIt Admin
   - Has write access to all MoveIt-related packages & admin access to all repos settings
 - MoveIt Maintainers
   - Has write access to all MoveIt-related packages
 - MoveIt Contributors
   - Has only read access
   - Still able to be auto-tagged in code review requests by CODEOWNERS
