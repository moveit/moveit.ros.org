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
    <p class="paragraph-big">
     You're reading the documentation for a version of ROS 2 that has reached its EOL (end-of-life), and is no longer officially supported. If you want up-to-date information, please have a look at Galactic.
    </p>
  </div>
  <div class="col-sm-12">
    <h2>What is a Distribution?</h2>
    <a href="https://wiki.ros.org/Distributions" target="_blank">See wiki.ros.org/Distributions.</a>
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
          <td><a href="https://docs.ros.org/en/crystal/Releases/Release-Foxy-Fitzroy.html">Foxy Fitzroy</a></td>
          <td>June 5th, 2020</td>
          <td><img src="/assets/images/distribution/foxy-small.png" /></td>
          <td>May 2023</td>
        </tr>
        <tr class="orange">
          <td><a href="https://docs.ros.org/en/crystal/Releases/Release-Eloquent-Elusor.html">Eloquent Elusory</a></td>
          <td>Nov 22nd, 2019</td>
          <td><img src="/assets/images/distribution/eloquent-small.png" /></td>
          <td>Nov 2020</td>
        </tr>
        <tr class="green">
          <td><a href="hhttps://docs.ros.org/en/crystal/Releases/Release-Dashing-Diademata.html">Dashing Diademata</a></td>
          <td>May 31st, 2019</td>
          <td><img src="/assets/images/distribution/dashing-small.png" /></td>
          <td>May 2021</td>
        </tr>
        <tr class="blue">
          <td><a href="https://docs.ros.org/en/crystal/Releases/Release-Crystal-Clemmys.html">Crystal Clemmys</a></td>
          <td>December 14th, 2018</td>
          <td><img src="/assets/images/distribution/crystal-small.png" /></td>
          <td>Dec 2019</td>
        </tr>
        <tr>
          <td><a href="https://docs.ros.org/en/crystal/Releases/Release-Bouncy-Bolson.html">Bouncy Bolson</a></td>
          <td>July 2nd, 2018</td>
          <td><img src="/assets/images/distribution/bouncy-small.png" /></td>
          <td>Jul 2019</td>
        </tr>
        <tr>
          <td><a href="https://docs.ros.org/en/crystal/Releases/Release-Ardent-Apalone.html">Ardent Apalone</a></td>
          <td>December 8th, 2017</td>
          <td><img src="/assets/images/distribution/ardent-small.png" /></td>
          <td>Dec 2018</td>
        </tr>
        <tr>
          <td><a href="https://docs.ros.org/en/crystal/Releases/Beta3-Overview.html">beta3</a></td>
          <td>September 13th, 2017</td>
          <td></td>
          <td>Dec 2017</td>
        </tr>
        <tr>
          <td><a href="https://docs.ros.org/en/crystal/Releases/Beta2-Overview.html">beta2</a></td>
          <td>July 5th, 2017</td>
          <td></td>
          <td>Sep 2017</td>
        </tr>
        <tr>
          <td><a href="https://docs.ros.org/en/crystal/Releases/Beta1-Overview.html">beta1</a></td>
          <td>December 19th, 2016</td>
          <td></td>
          <td>Jul 2017</td>
        </tr>
        <tr>
          <td><a href="https://docs.ros.org/en/crystal/Releases/Alpha-Overview.html">alpha1 - alpha8</a></td>
          <td>August 31th, 2015</td>
          <td></td>
          <td>Dec 2016</td>
        </tr>
      </tbody>
    </table>
    <h2>Distribution Details</h2>
    <p>For details on the distributions see each release page. For the supported platforms and versions of common dependencies and other considerations, see the official ROS 2 Target Platforms REP 2000.</p>
    <h2>Future Distributions</h2>
    <p>For details on upcoming features see the roadmap.</p>
    <p>Currently there is a new ROS 2 distribution roughly every 6 months. The following information is a best estimate and is subject to change.</p>
    <p>The expectation is to release new ROS 2 distributions once per year.</p>
    <h2>Rolling Distribution</h2>
    <p>The Rolling distribution of ROS 2 serves as a staging area for future stable distributions of ROS 2 and as a collection of the most recent development releases. Unlike most stable ROS 2 distributions which have an initial release, a support window during which they are updated, and a definite end of support (see List of Distributions above) the Rolling distribution is continuously updated and is subject to in-place updates which will at times include breaking changes.</p>
    <p>Packages released into the Rolling distribution will be automatically released into future stable distributions of ROS 2. Releasing a ROS 2 package into the Rolling distribution follows the same procedures as all other ROS 2 distributions.</p>
    <p>ROS 2 Rolling Ridley is the rolling development distribution of ROS 2 as proposed in REP 2002. It was first introduced in June 2020.</p>
    <p>The Rolling distribution will receive frequent and possibly compatibility-breaking releases in core packages and we recommend most people use the most recent stable distribution instead. Since new stable distributions will be created from snapshots of the Rolling distribution, package maintainers who want to make their packages available in future ROS 2 distributions can do so by releasing their packages into the Rolling distribution.</p>
  </div>
</div>
