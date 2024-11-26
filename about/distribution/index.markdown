---
author: admin
comments: false
date: 2022-02-03
layout: page
slug: distribution
title: Distribution
---

<div class='row'>
  <div class='col-sm-12 text-center'>
    <h1>Distributions</h1>
  </div>
  <div class="col-sm-12">
    <h2>What is a Distribution?</h2>
    <a href="https://docs.ros.org/en/rolling/Releases.html" target="_blank">See https://docs.ros.org/en/rolling/Releases.html for a description and a list of available ROS distributions.</a>
    <h2>List of Distributions</h2>
    <table class="table table-striped table--distribution">
      <thead>
        <tr>
          <th>Distro</th>
          <th>Release date</th>
          <th>Logo</th>
          <th>EOL date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><a href="https://moveit.picknik.ai/main/index.html">MoveIt 2 Rolling</a></td>
          <td>2021</td>
          <td><img src="/assets/images/distribution/moveIt-rolling.jpg" alt="MoveIt Rolling" height="100" /></td>
          <td>N/A</td>
        </tr>
        <tr>
          <td><a href="https://moveit.picknik.ai/main/index.html">MoveIt 2 Jazzy</a></td>
          <td>May 23, 2024</td>
          <td><img src="/assets/images/distribution/moveit-jazzy.png" alt="MoveIt 2 Iron" height="100" /></td>
          <td>May 2029</td>
        </tr>
        <tr>
          <td><a href="https://moveit.picknik.ai/main/index.html">MoveIt 2 Iron</a></td>
          <td>May 23, 2023</td>
          <td><img src="/assets/images/distribution/moveit-iron.png" alt="MoveIt 2 Iron" height="100" /></td>
          <td>November 2024</td>
        </tr>
        <tr>
          <td><a href="https://moveit.picknik.ai/humble/index.html">MoveIt 2 Humble</a></td>
          <td>May 23rd, 2022</td>
          <td><img src="/assets/images/distribution/humble.jpg" alt="MoveIt 2 Humble" height="100" /></td>
          <td>May 2027</td>
        </tr>
        <tr>
          <td><a href="https://moveit.github.io/moveit_tutorials/">MoveIt 1 Noetic</a></td>
          <td>October 13th, 2020</td>
          <td><img src="/assets/images/distribution/noetic.jpg" alt="MoveIt 1 Noetic" height="100" /></td>
          <td>May 2025</td>
        </tr>
        <tr>
          <td><a href="http://docs.ros.org/en/melodic/api/moveit_tutorials/html/index.html">MoveIt 1 Melodic</a></td>
          <td>June 5th, 2020</td>
          <td><img src="/assets/images/distribution/melodic.jpg" alt="MoveIt 1 Melodic" height="100" /></td>
          <td>May 2023</td>
        </tr>
      </tbody>
    </table>
    <h2>Distribution Details</h2>
    <p>For details on the distributions see each release page. For the supported platforms and versions of common dependencies and other considerations, see the official ROS 2 Target Platforms REP 2000.</p>
    <h2>Future Distributions</h2>
    <p>For details on upcoming features see the roadmap.</p>
    <p>Currently there is a new ROS 2 distribution roughly every year. The following information is a best estimate and is subject to change.</p>
    <p>The expectation is to release new ROS 2 distributions once per year.</p>
    <h2>Rolling Distribution</h2>
    <p>The Rolling distribution of ROS 2 serves as a staging area for future stable distributions of ROS 2 and as a collection of the most recent development releases. Unlike most stable ROS 2 distributions which have an initial release, a support window during which they are updated, and a definite end of support (see List of Distributions above) the Rolling distribution is continuously updated and is subject to in-place updates which will at times include breaking changes.</p>
    <p>Packages released into the Rolling distribution will be automatically released into future stable distributions of ROS 2. Releasing a ROS 2 package into the Rolling distribution follows the same procedures as all other ROS 2 distributions.</p>
    <p>ROS 2 Rolling Ridley is the rolling development distribution of ROS 2 as proposed in REP 2002. It was first introduced in June 2020.</p>
    <p>The Rolling distribution will receive frequent and possibly compatibility-breaking releases in core packages and we recommend most people use the most recent stable distribution instead. Since new stable distributions will be created from snapshots of the Rolling distribution, package maintainers who want to make their packages available in future ROS 2 distributions can do so by releasing their packages into the Rolling distribution.</p>
  </div>
</div>
