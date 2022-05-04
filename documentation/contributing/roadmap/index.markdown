---
author: davetcoleman
comments: true
layout: page
slug: roadmap
title: MoveIt Roadmap
---

<div class='row'>
  <div class='col-sm-12 col-lg-6'>
    <h1>MoveIt Roadmap 2022</h1>
    <p class="paragraph-big">
      As an open source project, we rely on everyone to get involved with contributions of new features and bug improvements. Financial support in the form of grants and code sprints are of course welcomed too! Please <a href="https://picknik.ai/connect/" target="_blank">contact us</a> if you’re interested in supporting these efforts.
    </p>
  </div>
  <div class='col-sm-12 col-lg-6'>
    <img style="max-width:100%" alt="Support" src="/assets/images/roadmap.png">
  </div>
</div>
<div class="row current-version roadmap-current-version">
    <a class="button button-transparent button-transparent__blue" href="https://app.zenhub.com/workspaces/moveit-61675936b391800012280f6d/roadmap">Detailed Roadmap on ZenHub</a>

    <!-- Release progress bar -->
    {% include release-progress.html %}

</div>
<div class='row roadmap-features'>
  <div class='col-sm-12 col-lg-12'>
    <h2>
      <span class="icon">
        <img alt="Calendar edit" src="/assets/images/icons/calendar_edit.svg">
      </span>
       Upcoming Features
    </h2>
    <span class="sub-title">There are no guarantees that any feature in this list will be developed.</span>
    <p class="paragraph-big">
      The following list outlines what our <a href="/about/">MoveIt Maintainers and Core Contributors</a> are working on currently. If you are actively working on a new major feature for MoveIt, please create a pull request to this page to add it. We'd love to increase visibility of that work, prevent overlapping effortings, and encourage collaborations between developers.
    </p>
  </div>
  <div class="release-versions">
    <div class="release-versions__header">
      <div class="release-versions__1">FEATURE</div>
      <div class="release-versions__status">STATUS</div>
      <div class="release-versions__2">ESTIMATED DATE</div>
      <div class="release-versions__3">FEATURE LEAD</div>
    </div>
    <div class="release-versions__body">
      <div class="release-versions__content">
        <div class="release-versions__1">
          <h3>Hybrid Planning</h3>
          <p>
            <span><img src="/assets/images/icons/git-black.svg"></span>
            <a href="https://github.com/ros-planning/moveit2/issues/433" target="_blank">View issue</a>
          </p>
        </div>
        <div class="release-versions__status">
          <strong>Completed</strong><br/>
        </div>
        <div class="release-versions__2">
          Landed December 2021
        </div>
        <div class="release-versions__3">
          <div class="release-versions__divide">
            <strong>Sebastian Jahr</strong><br/>
            PickNik
          </div>
          <div class="release-versions__divide">
            <strong>Henning Kayser</strong><br/>
            PickNik
          </div>
        </div>
      </div>
      <div class="release-versions__content">
        <div class="release-versions__1">
          <h3>Port MoveIt Task Constructor to ROS 2</h3>
          <p>
            <span><img src="/assets/images/icons/git-black.svg"></span>
            <a href="https://github.com/ros-planning/moveit_task_constructor/pull/170" target="_blank">View issue</a>
          </p>
        </div>
        <div class="release-versions__status">
          <strong>Completed</strong><br/>
        </div>
        <div class="release-versions__2">
          Landed November 2021
        </div>
        <div class="release-versions__3">
          <div class="release-versions__divide">
            <strong>Jafar Abdi</strong><br/>
            PickNik
          </div>
          <div class="release-versions__divide">
            <strong>Henning Kayser</strong><br/>
            PickNik
          </div>
        </div>
      </div>
      <div class="release-versions__content">
        <div class="release-versions__1">
          <h3>Port Pilz Industrial Motion Planner to ROS 2</h3>
          <p>
            <span><img src="/assets/images/icons/git-black.svg"></span>
            <a href="https://github.com/ros-planning/moveit2/issues/315" target="_blank">View issue</a>
          </p>
        </div>
        <div class="release-versions__status">
          <strong>Completed</strong><br/>
        </div>
        <div class="release-versions__2">
          Landed December 2021
        </div>
        <div class="release-versions__3">
          <strong>Henning Kayser</strong><br/>
          PickNik
        </div>
      </div>
      <div class="release-versions__content">
        <div class="release-versions__1">
          <h3>MoveIt Config Redesign - Migrate MSA to ROS&nbsp;2</h3>
          <p>
            <span><img src="/assets/images/icons/git-black.svg"></span>
            <a href="https://github.com/ros-planning/moveit2/issues/313" target="_blank">View issue</a>
          </p>
        </div>
        <div class="release-versions__status">
          <strong>Completed</strong><br/>
        </div>
        <div class="release-versions__2">
          May 2022
        </div>
        <div class="release-versions__3">
          <div class="release-versions__divide">
            <strong>Henning Kayser</strong><br/>
            PickNik
          </div>
          <div class="release-versions__divide">
            <strong>David Lu!</strong><br/>
            PickNik
          </div>
        </div>
    	</div>
      <div class="release-versions__content">
        <div class="release-versions__1">
          <h3>Scene Graph Support</h3>
          <p>
            <span><img src="/assets/images/icons/git-black.svg"></span>
            <a href="https://github.com/ros-planning/moveit/issues/202" target="_blank">View issue</a>
          </p>
        </div>
        <div class="release-versions__status">
          <strong>Needs Funding</strong><br/>
        </div>
        <div class="release-versions__2">
          December 2021
        </div>
        <div class="release-versions__3">
          <strong>Felix von Drigalski</strong><br/>
          OMRON SINIC X
        </div>
      </div>
      <div class="release-versions__content">
        <div class="release-versions__1">
          <h3>OMPL Orientation Constraints</h3>
          <p>
            <span><img src="/assets/images/icons/git-black.svg"></span>
            <a href="https://github.com/ros-planning/moveit2/issues/348" target="_blank">View issue</a>
          </p>
        </div>
        <div class="release-versions__status">
          <strong>Needs Funding</strong><br/>
        </div>
        <div class="release-versions__2">
          December 2021
        </div>
        <div class="release-versions__3">
          <strong>TBD</strong><br/>
        </div>
      </div>
      <div class="release-versions__content">
        <div class="release-versions__1">
          <h3>Add ability to attach and detach end-effector links</h3>
          <p>
            <span><img src="/assets/images/icons/git-black.svg"></span>
            <a href="https://github.com/ros-planning/moveit2/issues/208" target="_blank">View issue</a>
          </p>
        </div>
        <div class="release-versions__status">
          <strong>Needs Funding</strong><br/>
        </div>
        <div class="release-versions__2">
          December 2021
        </div>
        <div class="release-versions__3">
          <strong>TBD</strong><br/>
        </div>
      </div>
    </div>
  </div>
</div>
<div class='row roadmap-box'>
  <div class='col-sm-12 col-lg-2'>
    <img alt="Calendar plus" src="/assets/images/icons/calendar_plus.svg">
  </div>
  <div class='col-sm-12 col-lg-10'>
    <h3>Long Term Goals</h3>
    <p class="paragraph-big">
      In order to align collaborative development and understand what MoveIt is and is not, we maintain a document of long term goals, target users, and future direction.
    </p>
    <a class="button button-transparent button-transparent__blue" href="https://docs.google.com/document/d/1bRi5mNFrdXndY73jkoWxqi-vwcyJpkjCbYwrAc7qN3M/edit" target="_blank">VIEW LONG TERM GOALS</a>
  </div>
</div>
<div class='row roadmap-box'>
  <div class='col-sm-12 col-lg-2'>
    <img alt="Code" src="/assets/images/icons/code.svg">
  </div>
  <div class='col-sm-12 col-lg-10'>
    <h3>Suggested Code Sprints</h3>
    <p class="paragraph-big">
      We maintain a list of future projects and code sprints, ideal for students like the Google Summer of Code, internships, or graduate programs.
    </p>
    <a class="button button-transparent button-transparent__blue" href="/documentation/contributing/future_projects/">VIEW CODE SPRINTS</a>
  </div>
</div>
