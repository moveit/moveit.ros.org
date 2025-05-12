---
layout: homepage
slug: index
title: index
redirect_from: '/moveit/'
---

<div class="container">
    <div class='row'>
      <div class='col-sm-12'>
            <div class="homepage">
                <div class="modal fade" id="modalVideo" tabindex="-1" role="dialog" aria-labelledby="modalVideoLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Overview video</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/7KvF7Dj7bz0?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-between homepage-main-wrapper">
                    <div class="col-xs-12 col-lg-6 col-sm-12">
                        <div class="main">
                            <div class="main-tag">
                                <a href="https://discourse.ros.org/t/move-of-nav2-and-moveit-repositories-at-github/37450" target="_blank">
                                    <span class="blue">Announcing</span>
                                    <span>A new website domain for the MoveIt project</span>
                                </a>
                            </div>
                            <h1>Moving robots into&nbsp;the&nbsp;future</h1>
                            <p class="main-text">A motion planning, manipulation, and kinematics framework for ROS,<br/>
                            ideal for students and researchers.</p>
                            <div class="button-group">
                                <button class="button button-yellow modal-btn" data-toggle="modal" data-target="#modalVideo">
                                <span class="button-play">
                                    <img src="/assets/images/icons/play.svg">
                                </span>
                                Watch overview
                                </button>
                                <a class="button button-yellow modal-link" href="https://www.youtube-nocookie.com/embed/7KvF7Dj7bz0" target="_blank">Watch overview</a>
                                <a class="button button-transparent" href="https://moveit.picknik.ai/" target="_blank">Get Started</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-lg-6">
                        <div class="info-box">
                            <img class="robot-hand" src="/assets/images/main/hero.png" alt="Robot hand">
                            <div class="info-box-content">
                                <div class="info-box-header">
                                    Latest: <b>MoveIt Jazzy</b>
                                </div>
                                <a href="/install-moveit2/binary/" class="info-box-button button">Install MoveIt From Debian</a>
                                <div class="info-box-version">
                                    Ubuntu 24.04
                                </div>
                                <div class="link-group">
                                    <a href="/install-moveit2/source/" class="info-box-link">Build&nbsp;From&nbsp;Source</a>
                                    <span>|</span>
                                    <a href="https://github.com/moveit/moveit2" target="_blank" class="info-box-link">View&nbsp;on&nbsp;Github</a>
                                    <span>|</span>
                                    <a href="https://picknik.ai/pro/" target="_blank" class="info-box-link">MoveIt&nbsp;Pro</a>
                                </div>
                                <img src="/assets/images/logo/ROS_logo.png" alt="ROS logo" class="info-box-logo" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="section section--second">
                    <div class="row">
                        <div class="col-xs-12">
                            <ul>
                                <li>
                                    <span>
                                        <img src="/assets/images/icons/ic-motion.svg">
                                    </span>
                                    <h3>
                                        Motion Planning
                                    </h3>
                                    <p>
                                        Generate high-degree of freedom trajectories through cluttered environments and avoid local minimums
                                    </p>
                                </li>
                                <li>
                                    <span>
                                        <img src="/assets/images/icons/ic-manipulation.svg">
                                    </span>
                                    <h3>
                                        Manipulation
                                    </h3>
                                    <p>
                                        Analyze and interact with your environment with grasp generation
                                    </p>
                                </li>
                                <li>
                                    <span>
                                        <img src="/assets/images/icons/ic-kinematics.svg">
                                    </span>
                                    <h3>
                                        Inverse Kinematics
                                    </h3>
                                    <p>
                                        Solve for joint positions for a given pose, even in over-actuated arms
                                    </p>
                                </li>
                                <li>
                                    <span>
                                        <img src="/assets/images/icons/ic-sine.svg">
                                    </span>
                                    <h3>
                                        Control
                                    </h3>
                                    <p>
                                        Execute time-parameterized joint trajectories to low level hardware controllers through common interfaces
                                    </p>
                                </li>
                                <li>
                                    <span>
                                        <img src="/assets/images/icons/ic-3d.svg">
                                    </span>
                                    <h3>
                                        3D Perception
                                    </h3>
                                    <p>
                                        Connect to depth sensors and point clouds with Octomaps
                                    </p>
                                </li>
                                <li>
                                    <span>
                                        <img src="/assets/images/icons/ic-navigation.svg">
                                    </span>
                                    <h3>
                                        Collision Checking
                                    </h3>
                                    <p>
                                        Avoid obstacles using geometric primitives, meshes, or point cloud data
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-between block-with-image">
                    <div class="col-xs-12 col-lg-6 col-md-6">
                        <div class="text-block text-block--left">
                            <h3>3D Interactive Visualizer</h3>
                            <p>Out-of-the box visual demonstrations in Rviz allow new users experimentation with various planning algorithms around obstacles. Execution on physical hardware is then just a click away.</p>
                        </div>
                    </div>
                    <div class="col-xs-12 col-md-6 col-lg-6 blue-circle blue-circle--left">
                        <img style="max-width:100%" alt="Rviz Motion Planning Plugin" src="/assets/images/screens/3d_visualizer.png">
                    </div>
                </div>
                <div class="row justify-content-between block-with-image">
                    <div class="col-xs-12 col-md-6 col-lg-6 blue-circle">
                        <img style="max-width:100%" alt="Gazebo Simulation" src="/assets/images/screens/r2.png">
                    </div>
                    <div class="col-xs-12 col-lg-6 col-md-6">
                        <div class="text-block text-block--right">
                            <h3>Gazebo Simulation</h3>
                            <p>Speed up development and testing cycles by leveraging a full physics-based simulator with MoveIt. Combine Gazebo, ROS Control, and MoveIt for a powerful robotics development platform.</p>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-between block-with-image">
                    <div class="col-xs-12 col-lg-6 col-md-6">
                        <div class="text-block text-block--left">
                            <h3>Setup Assistant</h3>
                            <p>Quickly setup any robot to work with MoveIt with the step-by-step configuration wizard, or use popular pre-configured setups. Also includes configuration of Gazebo and ROS Control.</p>
                        </div>
                    </div>
                    <div class="col-xs-12 col-md-6 col-lg-6 blue-circle blue-circle--left">
                        <img style="max-width:100%" alt="Setup Assistant" src="/assets/images/screens/Setup Assistant.png">
                    </div>
                </div>
                <div class="row justify-content-between block-with-image">
                    <div class="col-xs-12 col-md-6 col-lg-6 blue-circle">
                        <img style="max-width:100%" alt="MoveIt Task Constructor" src="/assets/images/screens/moveit_task_constructor.png">
                    </div>
                    <div class="col-xs-12 col-lg-6 col-md-6">
                        <div class="text-block text-block--right">
                            <h3>Task Constructor</h3>
                            <p>A flexible and transparent way to define and plan actions that consist of multiple interdependent subtasks.</p>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-between block-with-image">
                    <div class="col-xs-12 col-lg-6 col-md-6">
                        <div class="text-block text-block--left">
                            <h3>Grasp Generation</h3>
                            <p>Libraries for geometric and machine learning-based grasp generation for use with the MoveIt pick and place pipeline.</p>
                        </div>
                    </div>
                    <div class="col-xs-12 col-md-6 col-lg-6 blue-circle blue-circle--left">
                        <img style="max-width:100%" alt="MoveIt Grasps" src="/assets/images/screens/grasp.png">
                    </div>
                </div>
                <!-- comment out until a decesion is made about what aspects of python to show is made.
                <div class="row justify-content-between block-with-image">
                    <div class="col-xs-12 col-md-6 col-lg-6 blue-circle">
                        <img style="max-width:100%" alt="Python Scripting" src="/assets/images/screens/python2.png">
                    </div>
                    <div class="col-xs-12 col-lg-6 col-md-6">
                        <div class="text-block text-block--right">
                            <span class="application-categories">Fully customizable</span>
                            <h3>Python Scripting and Interpreter</h3>
                            <p>Use high level Python scripts to orchestrate complex motion planning, leveraging high-performance C++ libraries in the background. Or use the C++ interfaces directly.</p>
                        </div>
                    </div>
                </div>
                -->
                <div class="row last-section">
                    <div class="col-xs-12 col-md-5 blue-circle blue-circle--center">
                        <img style="width:638px" src="/assets/images/main/why-moveit-images@2x.png">
                    </div>
                    <div class="col-xs-12 col-lg-5 col-sm-12">
                        <h1>Why MoveIt?</h1>
                        <p class="paragraph-big">
                            MoveIt is the most widely used software for manipulation and has been used on over <a href="/robots/">150 robots</a>. It is released under the terms of the BSD license, and thus free for industrial, commercial, and research use.
                        </p>
                        <p class="paragraph-big">
                            By incorporating the latest advances in motion planning, manipulation, 3D perception, kinematics, control and navigation, MoveIt is state of the art software for mobile manipulation.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="homepage--divider">
    <div class="homepage--divider-image"></div>
    <div class="homepage--divider--content">
        <div class="container">
            <div class='row current-version'>
                <a id="release-dates"></a>
                <div class='col-sm-12'>
                    <h2 class="h1 text-center"><a id="release-versions" href="#release-versions">Current and Future Versions</a></h2>
                </div>
            <!-- Release progress bar -->
            <!-- {% include release-progress.html %} -->
            <!-- Release versions table -->
            <div class='row'>
              <div class="release-versions">
                <div class="release-versions__header">
                  <div class="release-versions__1">RELEASE NAME</div>
                  <div class="release-versions__2">ROS VERSION</div>
                  <div class="release-versions__3">STATUS</div>
                </div>
                <div class="release-versions__body">
                  <div class="release-versions__content">
                    <div class="release-versions__1">
                      <h3>Rolling 2.13</h3>
                      <p>
                        <span><img src="/assets/images/icons/git.svg"></span>
                        <a href="https://github.com/moveit/moveit2/tree/main" target="_blank">View branch</a>
                      </p>
                    </div>
                    <div class="release-versions__2">
                      ROS 2
                    </div>
                    <div class="release-versions__3">
                      <span class="label label--blue">CONTINUALLY DEVELOPED</span>
                    </div>
                  </div>
                  <div class="release-versions__content">
                    <div class="release-versions__1">
                      <h3>Jazzy 2.12 LTS</h3>
                      <p>
                        <span><img src="/assets/images/icons/git.svg"></span>
                        <a href="https://github.com/moveit/moveit2/tree/main" target="_blank">View branch</a>
                      </p>
                    </div>
                    <div class="release-versions__2">
                      ROS 2
                    </div>
                    <div class="release-versions__3">
                      <span class="label label--green">LATEST STABLE - RECOMMENDED</span>
                    </div>
                  </div>
                  <div class="release-versions__content">
                    <div class="release-versions__1">
                      <h3>Iron 2.7</h3>
                      <p>
                        <span><img src="/assets/images/icons/git.svg"></span>
                        <a href="https://github.com/moveit/moveit2/tree/iron" target="_blank">View branch</a>
                      </p>
                    </div>
                    <div class="release-versions__2">
                      ROS 2
                    </div>
                    <div class="release-versions__3">
                      <span class="label label--red">EOL - DISCONTINUED</span>
                    </div>
                  </div>
                  <div class="release-versions__content">
                    <div class="release-versions__1">
                      <h3>Humble 2.5 LTS</h3>
                      <p>
                        <span><img src="/assets/images/icons/git.svg"></span>
                        <a href="https://github.com/moveit/moveit2/tree/humble" target="_blank">View branch</a>
                      </p>
                    </div>
                    <div class="release-versions__2">
                      ROS 2
                    </div>
                    <div class="release-versions__3">
                      <span class="label label--orange text-dark">MAINTAINED</span>
                    </div>
                  </div>
                  <div class="release-versions__content">
                    <div class="release-versions__1">
                      <h3>Galactic 2.3</h3>
                      <p>
                        <span><img src="/assets/images/icons/git.svg"></span>
                        <a href="https://github.com/moveit/moveit2/tree/galactic" target="_blank">View branch</a>
                      </p>
                    </div>
                    <div class="release-versions__2">
                      ROS 2
                    </div>
                    <div class="release-versions__3">
                      <span class="label label--red">EOL - DISCONTINUED</span>
                    </div>
                  </div>
                  <div class="release-versions__content">
                    <div class="release-versions__1">
                      <h3>Foxy 2.2 LTS</h3>
                      <p>
                        <span><img src="/assets/images/icons/git.svg"></span>
                        <a href="https://github.com/moveit/moveit2" target="_blank">View branch</a>
                      </p>
                    </div>
                    <div class="release-versions__2">
                      ROS 2
                    </div>
                    <div class="release-versions__3">
                      <span class="label label--red">EOL - DISCONTINUED</span>
                    </div>
                  </div>
                  <div class="release-versions__content">
                    <div class="release-versions__1">
                      <h3>Noetic 1.1 LTS</h3>
                      <p>
                        <span><img src="/assets/images/icons/git.svg"></span>
                        <a href="https://github.com/moveit/moveit" target="_blank">View branch</a>
                      </p>
                    </div>
                    <div class="release-versions__2">
                      ROS 1
                    </div>
                    <div class="release-versions__3">
                      <span class="label label--orange text-dark">Maintained</span>
                    </div>
                  </div>
                  <div class="release-versions__content">
                    <div class="release-versions__1">
                      <h3>MoveIt Pro 5.0</h3>
                      <p>
                        <a href="https://picknik.ai/pro/" target="_blank">View product page</a>
                      </p>
                    </div>
                    <div class="release-versions__2">
                      ROS 2
                    </div>
                    <div class="release-versions__3">
                      <span class="label label--green">COMMERCIALLY SUPPORTED</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      </div>
    </div>
</div>
