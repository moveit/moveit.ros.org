---
author: admin
comments: false
date: 2016-8-5 20:43:44+00:00
layout: page
slug: install
title: Install
---
<div class='row no-gutters'>
  <div class="rectangle-boarder-tall col-3 col-sm-3">
    <a href="/install/">
      <div class="row no-gutters">
        <img src="/assets/install_page/current_page_left.png" class="current-page-image-left">
        <img src="/assets/install_page/current_page_right.png" class="current-page-image-right">
        <div class="font-current-page">
          Binary Install
        </div>
      </div>
    </a>
    <a href="/install/source/">
      <div class="row font-other-page">
        Source Build
      </div>
    </a>
    <a href="/install/docker/">
      <div class="row font-other-page">
        Docker Install
      </div>
    </a>
  </div>

  <div class="rectangle-boarder-big col-9 col-sm-9">
    <h1>Install MoveIt</h1>
    Choose which platform to install MoveIt on:
    <div class="row systems-rectangle">
      <button class="btn btn-primary" data-toggle="collapse" data-target="#Ubuntu1" aria-expanded="true" aria-controls="Ubuntu1" autofocus="autofocus">
          <div class="row no-gutters">
            <div class="col-auto">
              <img src="/assets/install_page/ubuntu.png"/>
            </div>
            <div class="col-auto system-type">
              <div class="system-name">
                Ubuntu
              </div>
              16.04
            </div>
          </div>
      </button>
      <button class="btn btn-primary" data-toggle="collapse" data-target="#Ubuntu2" aria-expanded="true" aria-controls="Ubuntu2">
          <div class="row no-gutters">
            <div class="col-auto">
              <img src="/assets/install_page/ubuntu.png"/>
            </div>
            <div class="col-auto system-type">
              <div class="system-name">
                Ubuntu
              </div>
              18.04
            </div>
          </div>
      </button>
      <button class="btn btn-primary" data-toggle="collapse" data-target="#Windows" aria-expanded="true" aria-controls="Windows">
          <div class="row no-gutters">
            <div class="col-auto">
              <img src="/assets/install_page/windows.png"/>
            </div>
            <div class="col-auto system-type">
              <div class="system-name">
                Windows 10
              </div>
              Experimental
            </div>
          </div>
      </button>
      <button class="btn btn-primary" data-toggle="collapse" data-target="#MocOs" aria-expanded="true" aria-controls="MocOs">
          <div class="row no-gutters">
            <div class="col-auto">
              <img src="/assets/install_page/mac-os.png"/>
            </div>
            <div class="col-auto system-type">
              <div class="system-name">
                Mac OSX
              </div>
              Experimental
            </div>
          </div>
      </button>
    </div>
    <div id="accordion">
      <!-- ----------------------------------------------------------------- -->
      <!-- ----------------------------------------------------------------- -->
      <!-- ----------------------------------------------------------------- -->
      <!-- ----------------------------------------------------------------- -->
      <div class="collapse show" id="Ubuntu1" data-parent="#accordion">
        <h3>
          Prereq: Install <img src="/assets/install_page/ros_logo.jpeg"/>
        </h3>
        <p>
          Follow all the instructions to <a href="http://wiki.ros.org/kinetic/Installation" target="_blank">install ROS Kinetic</a>, including calls to <span class="ros-command">rosdep</span>
        </p>
        <div class="horizontal-line"></div>
        <h2>
          <img src="/assets/install_page/ubuntu_black.png"> Install on Ubuntu 16.04
        </h2>
        <h3>
          ROS Kinetic
          <div class="bash-command">
            <code>sudo apt-get install ros-kinetic-moveit</code>
          </div>
        </h3>
        <div class="horizontal-line"></div>
        <h2>
          Quick Start
        </h2>
        <p>
          Start planning in Rviz with:
        </p>
        <a href="http://docs.ros.org/kinetic/api/moveit_tutorials/html/index.html" target="_blank">
          <span class="link-with-background">
            MoveIt Getting Started Tutorial
          </span>
        </a>
      </div>
      <!-- ----------------------------------------------------------------- -->
      <!-- ----------------------------------------------------------------- -->
      <!-- ----------------------------------------------------------------- -->
      <!-- ----------------------------------------------------------------- -->
      <div class="collapse" id="Ubuntu2" data-parent="#accordion">
        <h3>
          Prereq: Install <img src="/assets/install_page/ros_logo.jpeg"/>
        </h3>
        <p>
          Follow all the instructions to <a href="http://wiki.ros.org/melodic/Installation" target="_blank">install ROS Melodic</a>, including calls to <span class="ros-command">rosdep</span>
        </p>
        <div class="horizontal-line"></div>
        <h2>
          <img src="/assets/install_page/ubuntu_black.png"> Install on Ubuntu 18.04
        </h2>
        <h3>
          ROS Melodic
          <div class="bash-command">
            <code>sudo apt-get install ros-melodic-moveit</code>
          </div>
        </h3>
        <div class="horizontal-line"></div>
        <h2>
          Quick Start
        </h2>
        <p>
          Start planning in Rviz with:
        </p>
        <a href="https://ros-planning.github.io/moveit_tutorials/" target="_blank">
          <span class="link-with-background">
            MoveIt Getting Started Tutorial
          </span>
        </a>
      </div>
      <!-- ----------------------------------------------------------------- -->
      <!-- ----------------------------------------------------------------- -->
      <!-- ----------------------------------------------------------------- -->
      <!-- ----------------------------------------------------------------- -->
      <div class="collapse" id="Windows" data-parent="#accordion">
        <h2>
          <img src="/assets/install_page/windows.png"> Install on Windows 10
        </h2>
        <h3>
          ROS Melodic - Experimental
        </h3>
        See Microsoft-created tutorial <a href="https://ms-iot.github.io/ROSOnWindows/Moveit/UR3.html" target="_blank">Getting Started with MoveIt and UR3 on Windows</a>
      </div>
      <!-- ----------------------------------------------------------------- -->
      <!-- ----------------------------------------------------------------- -->
      <!-- ----------------------------------------------------------------- -->
      <!-- ----------------------------------------------------------------- -->
      <div class="collapse" id="MocOs" data-parent="#accordion">
        <h2>
          <img src="/assets/install_page/mac-os.png"> Install on Mac
        </h2>
        <h3>
          TO BE IMPLEMENTED
        </h3>
      </div>
      <!-- ----------------------------------------------------------------- -->
      <!-- ----------------------------------------------------------------- -->
      <!-- ----------------------------------------------------------------- -->
      <!-- ----------------------------------------------------------------- -->
      <div class="horizontal-line"></div>
      <h2>
        Other Setups
      </h2>
      <div class="row no-gutters">
        <div class="col-6">
          <img src="/assets/install_page/github.png" height="26"/>
          <h3>
            Source Build
          </h3>
          <p>
            <a href="/install/source/">See building from source</a>
          </p>
        </div>
        <div class="col-5 offset-1">
          <img src="/assets/install_page/docker.png" height="26"/>
          <h3>
            Docker
          </h3>
          <p>
            <a href="/install/docker/">See building from source</a>
          </p>
        </div>
      </div>
      <div class="row no-gutters">
        <div class="col-6">
          <h3>
            Virtual Machines
          </h3>
          <p>
            We recommend developing with MoveIt on a native Ubuntu install. If you are unable to run Linux natively on your machine, the next best thing would be to set up a virtual machine using VMware. There are known issues with the ROS visualization tool RViz when used with VirtualBox - be sure to enable virtualization in your BIOS.
          </p>
        </div>
        <div class="col-5 offset-1">
          <h3>
            Older Versions
          </h3>
          <p>
            For previous versions, see
          </p>
          <p>
            <a href="/install/source/">Source Installation Instructions</a> for unsupported versions of MoveIt
          </p>
        </div>
      </div>
      <div class="horizontal-line"></div>
      <h2>
        About Our Release Process
      </h2>
      <p>
        MoveIt is released every few months into Ubuntu debian packages via
        the ROS infrastructure. For more information see the <a href="https://www.ros.org/reps/rep-0003.html" target="_blank">ROS target platforms</a>
        and <a href="https://moveit.ros.org/documentation/contributing/pullrequests/" target="_blank">MoveIt’s release process</a>.
      </p>
    </div>
  </div>
</div>
