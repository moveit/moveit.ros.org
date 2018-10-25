---
author: admin
comments: false
date: 2016-08-07 02:13:26+00:00
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
                                <h5 class="modal-title" id="exampleModalLabel">Montage video</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/0og1SaZYtRc?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-between homepage-main-wrapper">
                    <div class="col-xs-12 col-lg-5 col-sm-12">
                        <div class="main">
                            <div class="main-tag">
                                <a href="/events/world-moveit-day-2018/">
                                    <span class="blue">Announcement</span>
                                    <span>World MoveIt! Day 2018 will be on October 25th</span>
                                </a>
                            </div>
                            <h1>Moving robots into the&nbsp;future</h1>
                            <p class="main-text">Incorporating the latest advances in motion planning, manipulation, 3D perception, kinematics, control and navigation</p>
                            <div class="button-group">
                                <button class="button button-yellow modal-btn" data-toggle="modal" data-target="#modalVideo">Watch our montage</button>
                                <a class="button button-yellow modal-link" href="https://www.youtube.com/watch?v=0og1SaZYtRc" target="_blank">Watch our montage</a>
                                <a class="button button-transparent" href="http://moveit.ros.org/documentation/faqs/">Learn more</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-lg-6">
                        <div class="info-box">
                            <img class="robot-hand" src="/assets/images/main/hero@2x.png" alt="Robot hand">
                            <div class="info-box-content">
                                <div class="info-box-header">
                                    Latest: Melodic / Ubuntu 18.04
                                </div>
                                <a href="http://moveit.ros.org/install/" class="info-box-button button">Install from debian</a>
                                <div class="info-box-version">
                                    Version: 0.10.0
                                </div>
                                <div class="link-group">
                                    <a href="http://moveit.ros.org/install/source/" class="info-box-link">Install from Source</a>
                                    <span>|</span>
                                    <a href="https://github.com/ros-planning/moveit" target="_blank" class="info-box-link">View on Github</a>
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
                                        Motion planning
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
                    <div class="col-xs-12 col-lg-4 col-md-6">
                        <div class="text-block text-block--left">
                            <h1>Rviz Motion Planning Plugin</h1>
                            <p>Out-of-the box visual demonstrations allow new users interactive experimentation with various planning algorithms around obstacles. Execution on physical hardware is then just a click away.</p>
                        </div>
                    </div>
                    <div class="col-xs-12 col-md-6 col-lg-7">
                        <img style="max-width:100%" alt="Rviz Motion Planning Plugin" src="/assets/images/screens/Rviz Motion Planning Plugin.png">
                    </div>
                </div>
                <div class="row justify-content-between block-with-image">
                    <div class="col-xs-12 col-md-6 col-lg-7">
                        <img style="max-width:100%" alt="Setup Assistant" src="/assets/images/screens/Setup Assistant.png">
                    </div>
                    <div class="col-xs-12 col-lg-4 col-md-6">
                        <div class="text-block text-block--right">
                            <h1>MoveIt! Setup Assistant</h1>
                            <p>Quickly setup any robot to work with MoveIt! with the step-by-step configuration wizard, or use popular pre-configured setups. Also includes configuration of Gazebo and ROS Control!</p>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-between block-with-image">
                    <div class="col-xs-12 col-lg-4 col-md-6">
                        <div class="text-block text-block--left">
                            <h1>Python Scripting and Interpreter</h1>
                            <p>Use high level Python scripts to orchestrate complex motion planning, leveraging high-performance C++ libraries in the background. Or use the C++ interfaces directly.</p>
                        </div>
                    </div>
                    <div class="col-xs-12 col-md-6 col-lg-7">
                        <img style="max-width:100%" alt="Python Scripting" src="/assets/images/screens/python2.png">
                    </div>
                </div>
                <div class="row justify-content-between block-with-image">
                    <div class="col-xs-12 col-md-6 col-lg-7">
                        <img style="max-width:100%" alt="Gazebo Simulation" src="/assets/images/screens/Gazebo1.png">
                    </div>
                    <div class="col-xs-12 col-lg-4 col-md-6">
                        <div class="text-block text-block--right">
                            <h1>Gazebo Simulation</h1>
                            <p>Speed up development and testing cycles by leveraging a full physics-based simulator with MoveIt!. Combine Gazebo, ROS Control, and MoveIt! for a powerful robotics development platform.</p>
                        </div>
                    </div>
                </div>
                <div class="row last-section" style="background-image">
                    <div class="col-xs-12 col-md-5">
                        <img style="width:638px" src="/assets/images/main/why-moveit-images@2x.png">
                    </div>
                    <div class="col-xs-12 col-lg-4 col-sm-12">
                        <h1>Why MoveIt!?</h1>
                        <p>
                            MoveIt! is state of the art software for mobile manipulation, incorporating the latest advances in motion planning, manipulation, 3D perception, kinematics, control and navigation. It provides an easy-to-use platform for developing advanced robotics applications, evaluating new robot designs and building integrated robotics products for industrial, commercial, R&D and other domains.
                        </p>
                        <p>
                            MoveIt! is the most widely used open-source software for manipulation and has been used on over 100 robots. See the Robots page for a list of some of the robots that MoveIt! is being used with.
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
                <div class='col-sm-12'>
                    <h2 class="h1 text-center">Current and Future Versions</h2>
                </div>
                <div class='col-sm-12 time-line-wrappper'>
                    <h3>Melodic LTS</h3>
                    <div class="time-line">
                        <div class="time-line--blue"></div>
                    </div>
                    <div class="time-line-content">
                        <div class="time-line--info">
                            <p>23 May 2018</p>
                        </div>
                        <div class="time-line--info">
                            <span class="time-line-box time-line-box--blue"></span>
                            <p>
                                Development
                                <small>23 May 2018</small>
                            </p>
                        </div>
                        <div class="time-line--info">
                            <span class="time-line-box time-line-box--orange"></span>
                            <p>
                                Feature freeze
                                <small>April 2019</small>
                            </p>
                        </div>
                        <div class="time-line--info">
                            <span class="time-line-box time-line-box--red"></span>
                            <p>
                                Code freeze
                                <small>May 2019</small>
                            </p>
                        </div>
                        <div class="time-line--info">
                            <p>23 May 2019</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class='row'>
                <div class='col-sm-12 col-lg-6 version-wrapper'>
                    <div class="version-header">
                        <h3>MoveIt! 2.0</h3>
                        <span class="label label--blue">Seeking Funding</span>
                    </div>
                    <div class="version-date">
                        <p><span>Platforms:</span> Ubuntu 18.04</p>
                        <p><span>Date released:</span> TBD</p>
                        <p><span>End of life:</span> TBD</p>
                    </div>
                    <div class="version-content">
                        <h4>Release notes</h4>
                        <p>PickNik is actively seeking funding for development of this critical component to the ROS2 ecosystem.</p>
                    </div>
                </div>
                <div class='col-sm-12 col-lg-6 version-wrapper'>
                    <div class="version-header">
                        <h3>Melodic LTS</h3>
                        <span class="label label--green">Recomended</span>
                    </div>
                    <div class="version-date">
                        <p><span>Platforms:</span> Ubuntu 17.10, 18.04</p>
                        <p><span>Date released:</span> 23 May 2018</p>
                        <p><span>End of life:</span> May 2023</p>
                    </div>
                    <div class="version-content">
                        <h4>Release notes</h4>
                        <p>This LTS builds on the latest version of ROS1 but has had less adoption because it does not run on Ubuntu 16.04. This LTS is recommended but it is still in development and breaking API changes are accepted.</p>
                    </div>
                </div>
                <div class='col-sm-12 col-lg-6 version-wrapper'>
                    <div class="version-header">
                        <h3>Kinetic LTS</h3>
                        <span class="label label--orange">Maintained</span>
                    </div>
                    <div class="version-date">
                        <p><span>Platforms:</span> Ubuntu 15.10, 16.04</p>
                        <p><span>Date released:</span> 23 May 2016</p>
                        <p><span>End of life:</span> TBD</p>
                    </div>
                    <div class="version-content">
                        <h4>Release notes</h4>
                        <p>This LTS is still actively being improved as its the most popular version amoung the maintainers. The API should be stable, but not ABI.</p>
                    </div>
                </div>
                <div class='col-sm-12 col-lg-6 version-wrapper'>
                    <div class="version-header">
                        <h3>Indigo LTS</h3>
                        <span class="label label--orange">Maintained</span>
                    </div>
                    <div class="version-date">
                        <p><span>Platforms:</span> Ubuntu 14.04</p>
                        <p><span>Date released:</span> 22 July 2014</p>
                        <p><span>End of life:</span> April 2019</p>
                    </div>
                    <div class="version-content">
                        <h4>Release notes</h4>
                        <p>This LTS is still still used by some users but only critical bug fixes are accepted. The API is stable.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
