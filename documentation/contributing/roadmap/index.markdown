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
      <div class="release-versions__2">TARGET DATE</div>
      <div class="release-versions__3">FEATURE LEAD</div>
    </div>
    <div class="release-versions__body">
    <details style="width:100%;padding-left:0px;background-color:Gray">
    <summary style=";padding:3px"><b>2021</b></summary>
      <div class="release-versions__content" style="background-color:PaleGreen">
        <div class="release-versions__1">
          <h3>Hybrid Planning</h3>
          <p>
            <span><img src="/assets/images/icons/git-black.svg"></span>
            Issue: <a href="https://github.com/moveit/moveit2/issues/433" target="_blank">#433</a>
          </p>
        </div>
        <div class="release-versions__status">
          <strong>Completed</strong><br/>
        </div>
        <div class="release-versions__2">
	  December 2021
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
      <div class="release-versions__content" style="background-color:PaleGreen">
        <div class="release-versions__1">
          <h3>Port MoveIt Task Constructor to ROS 2</h3>
          <p>
            <span><img src="/assets/images/icons/git-black.svg"></span>
            Issue: <a href="https://github.com/moveit/moveit_task_constructor/pull/170" target="_blank">#170</a>
          </p>
        </div>
        <div class="release-versions__status">
          <strong>Completed</strong><br/>
        </div>
        <div class="release-versions__2">
	  November 2021
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
      <div class="release-versions__content" style="background-color:PaleGreen">
        <div class="release-versions__1">
          <h3>Port Pilz Industrial Motion Planner to ROS 2</h3>
          <p>
            <span><img src="/assets/images/icons/git-black.svg"></span>
            Issue: <a href="https://github.com/moveit/moveit2/issues/315" target="_blank">#315</a>
          </p>
        </div>
        <div class="release-versions__status">
          <strong>Completed</strong><br/>
        </div>
        <div class="release-versions__2">
	  December 2021
        </div>
        <div class="release-versions__3">
          <strong>Henning Kayser</strong><br/>
          PickNik
        </div>
      </div>
      </details>
      <details style="width:100%;padding-left:0px;background-color:Gray">
      <summary style=";padding:3px"><b>2022</b></summary>
      <div class="release-versions__content" style="background-color:PaleGreen">
        <div class="release-versions__1">
          <h3>OMPL Orientation Constraints</h3>
          <p>
            <span><img src="/assets/images/icons/git-black.svg"></span>
            Issue: <a href="https://github.com/moveit/moveit2/issues/348" target="_blank">#348</a>
	    PRs: <a href="https://github.com/moveit/moveit2/pull/550" target="_blank">#550</a>, <a href="https://github.com/moveit/moveit2/pull/1273" target="_blank">#1273</a>
          </p>
        </div>
        <div class="release-versions__status">
          <strong>Completed</strong><br/>
        </div>
        <div class="release-versions__2">
          June 2022
        </div>
        <div class="release-versions__3">
          <strong>Stephanie Eng</strong><br/>
	  PickNik
        </div>
      </div>
      <div class="release-versions__content" style="background-color:PaleGreen">
        <div class="release-versions__1">
          <h3>MoveIt Config Redesign - Migrate MSA to ROS&nbsp;2</h3>
          <p>
            <span><img src="/assets/images/icons/git-black.svg"></span>
            Issue: <a href="https://github.com/moveit/moveit2/issues/313" target="_blank">#313</a>
            PR: <a href="https://github.com/moveit/moveit2/pull/1254" target="_blank">#1254</a>
          </p>
        </div>
        <div class="release-versions__status">
          <strong>Completed</strong><br/>
        </div>
        <div class="release-versions__2">
	  June 2022
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
      <div class="release-versions__content" style="background-color:PaleGreen">
        <div class="release-versions__1">
          <h3>Cartesian Interpolation with optimization-based IK</h3>
          <p>
            <span><img src="/assets/images/icons/git-black.svg"></span>
            Issue: <a href="https://github.com/moveit/moveit2/issues/1370" target="_blank">#1370</a>
            PRs: <a href="https://github.com/moveit/moveit2/pull/1386" target="_blank">#1386</a>, <a href="https://github.com/moveit/moveit2/pull/1434" target="_blank">#1434</a>
          </p>
        </div>
        <div class="release-versions__status">
          <b>Completed</b><br>
        </div>
        <div class="release-versions__2">
	  August 2022
        </div>
        <div class="release-versions__3">
          <div class="release-versions__divide">
            <strong>Tyler Weaver</strong><br/>
            PickNik
          </div>
	  <div class="release-versions__divide">
            <strong>Wyatt Rees</strong><br/>
            PickNik
          </div>
        </div>
      </div>
      <div class="release-versions__content" style="background-color:PaleGreen">
        <div class="release-versions__1">
          <h3>Support Chainable Admittance Controllers</h3>
          <p>
            <span><img src="/assets/images/icons/git-black.svg"></span>
            Issue: <a href="https://github.com/moveit/moveit2/issues/1371" target="_blank">#1371</a>
            PR: <a href="https://github.com/moveit/moveit2/pull/1482" target="_blank">#1482</a>
          </p>
        </div>
        <div class="release-versions__status">
          <strong>Completed</strong><br/>
        </div>
        <div class="release-versions__2">
	  September 2022
        </div>
        <div class="release-versions__3">
          <div class="release-versions__divide">
            <strong>Paul Gesel</strong><br/>
            PickNik
          </div>
        </div>
      </div>
      <div class="release-versions__content" style="background-color:PaleGreen">
        <div class="release-versions__1">
          <h3>Remove outdated & unused code</h3>
          <p>
            <span><img src="/assets/images/icons/git-black.svg"></span>
            Issue: <a href="https://github.com/moveit/moveit2/issues/1038" target="_blank">#1038</a>
          </p>
        </div>
        <div class="release-versions__status">
          <strong>Completed</strong><br/>
        </div>
        <div class="release-versions__2">
	  October 2022
        </div>
        <div class="release-versions__3">
          <div class="release-versions__divide">
            <strong>Henning Kayser</strong><br/>
            PickNik
          </div>
        </div>
      </div>
      <div class="release-versions__content" style="background-color:PaleGreen">
        <div class="release-versions__1">
          <h3>Cost-optimized planning with STOMP</h3>
          <p>
            <span><img src="/assets/images/icons/git-black.svg"></span>
            Issue: <a href="https://github.com/moveit/moveit2/issues/1603" target="_blank">#1603</a>
            Repo: <a href="https://github.com/moveit/stomp_moveit" target="_blank">moveit/stomp_moveit</a>
          </p>
        </div>
        <div class="release-versions__status">
          <b>Completed</b>
        </div>
        <div class="release-versions__2">
	  November 2022
        </div>
        <div class="release-versions__3">
          <strong>Henning Kayser</strong><br/>
	  PickNik
        </div>
      </div>
      <div class="release-versions__content" style="background-color:PaleGreen">
        <div class="release-versions__1">
          <h3>Better path quality when planning with MoveItCpp</h3>
          <p>
            <span><img src="/assets/images/icons/git-black.svg"></span>
            Issue: <a href="https://github.com/moveit/moveit2/issues/1200" target="_blank">#1200</a>
            PR: <a href="https://github.com/moveit/moveit2/issues/1420" target="_blank">#1420</a>
          </p>
        </div>
        <div class="release-versions__status">
          <b>Completed</b>
        </div>
        <div class="release-versions__2">
	  November 2022
        </div>
        <div class="release-versions__3">
          <strong>Sebastian Jahr</strong><br/>
	  PickNik
        </div>
      </div>
      </details>
      <div class="release-versions__content">
        <div class="release-versions__1">
          <h3>GSoC: Create Python bindings for MoveIt 2</h3>
          <p>
            <span><img src="/assets/images/icons/git-black.svg"></span>
            Issue: <a href="https://github.com/moveit/moveit2/issues/1279" target="_blank">#1279</a>
            PR: <a href="https://github.com/moveit/moveit2/pull/1546" target="_blank">#1546</a>
          </p>
        </div>
        <div class="release-versions__status">
          <b>In Review</b><br>
        </div>
        <div class="release-versions__2">
	  February 2023
        </div>
        <div class="release-versions__3">
          <strong>Peter David Fagan</strong><br/>
          University of Edinburgh
        </div>
      </div>
      <div class="release-versions__content">
        <div class="release-versions__1">
          <h3>GSoC: Simultaneous Trajectory Execution</h3>
          <p>
            <span><img src="/assets/images/icons/git-black.svg"></span>
            Issue: <a href="https://github.com/moveit/moveit/issues/3156" target="_blank">#3156</a>
            PR: <a href="https://github.com/moveit/moveit/issues/3243" target="_blank">#3243</a>
          </p>
        </div>
        <div class="release-versions__status">
          <b>In Review</b><br>
        </div>
        <div class="release-versions__2">
	  February 2023
        </div>
        <div class="release-versions__3">
          <strong>Cristian C. Beltran-Hernandez</strong><br/>
          Osaka University
        </div>
      </div>
      <div class="release-versions__content">
        <div class="release-versions__1">
          <h3>Make ROS&nbsp;2 parameters more dynamic and easier to use</h3>
          <p>
            <span><img src="/assets/images/icons/git-black.svg"></span>
            Issue: <a href="https://github.com/orgs/moveit/discussions/1403" target="_blank">#1403</a>
          </p>
        </div>
        <div class="release-versions__status">
          <strong>In Progress</strong><br/>
        </div>
        <div class="release-versions__2">
	  February 2023
        </div>
        <div class="release-versions__3">
          <div class="release-versions__divide">
            <strong>Henning Kayser</strong><br/>
            PickNik
          </div>
          <div class="release-versions__divide">
            <strong>Tyler Weaver</strong><br/>
            PickNik
          </div>
        </div>
      </div>
      <div class="release-versions__content">
        <div class="release-versions__1">
          <h3>Support HPP-FCL as collision checker</h3>
          <p>
            <span><img src="/assets/images/icons/git-black.svg"></span>
            Issue: <a href="https://github.com/moveit/moveit2/issues/1435" target="_blank">#1435</a>
            PR: <a href="https://github.com/moveit/moveit2/issues/1521" target="_blank">#1521</a>
          </p>
        </div>
        <div class="release-versions__status">
          <b>In Progress</b><br>
        </div>
        <div class="release-versions__2">
	  February 2023
        </div>
        <div class="release-versions__3">
          <strong>Vatan Aksoy Tezer</strong><br/>
          Rapyuta Robotics
        </div>
      </div>
      <div class="release-versions__content" style="background-color:WhiteSmoke">
        <div class="release-versions__1">
          <h3>Add ability to attach and detach end-effector links</h3>
          <p>
            <span><img src="/assets/images/icons/git-black.svg"></span>
            Issue: <a href="https://github.com/moveit/moveit2/issues/208" target="_blank">#208</a>
          </p>
        </div>
        <div class="release-versions__status">
          <strong>Needs Funding</strong>
        </div>
        <div class="release-versions__2">
          <strong>TBD</strong>
        </div>
        <div class="release-versions__3">
          <strong>TBD</strong>
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
