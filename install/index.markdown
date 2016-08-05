---
author: admin
comments: false
date: 2013-11-19 20:43:44+00:00
layout: page
slug: install
title: Install
---

> MoveIt! is currently developed against **Ubuntu and ROS Indigo and Jade**. It is recommended that you move to ROS Jade for the latest features. MoveIt! for previous releases are no longer actively supported.**


**Developers:**: see [source install](source_install.html) instructions.

* * *

# Binary Installation Instructions

For non-developer users.

### Step 0: Install ROS

Follow all the instructions to install the base version of ROS: [Install ROS-Base](http://wiki.ros.org/indigo/Installation/Ubuntu). Please make sure you have followed all the ROS installation steps, including calls to rosdep.

MoveIt! can be installed directly as a set of debian packages on Ubuntu. To get a complete installation, choose your ROS distribution below:

### **ROS Indigo**

_Note for Ubuntu 13.4 32 bit users_: There is a bug with GCC 4.7 on Ubuntu 13.4 32bit with Eigen 3.1.2. It's not likely to be fixed, so upgrade/downgrade your system to 13.4 64 bit resp. 12.4.

<div class="accordion" id="accordion3">
  <div class="accordion-group">
    <div class="accordion-heading">
      <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion3" href="#collapseTwo">
        ROS Indigo Installation Instructions
      </a>
    </div>
    <div id="collapseTwo" class="accordion-body collapse">
      <div class="accordion-inner">
        <div class="toggle_content" style="display: block;"><p></p>
          <h4>Step 1: Ubuntu Installation: Debian Packages for MoveIt!</h4>
          <div><div id="highlighter_390226" class="syntaxhighlighter nogutter  bash"><table border="0" cellpadding="0" cellspacing="0"><tbody><tr><td class="code"><div class="container"><div class="line number1 index0 alt2 highlighted"><code class="bash functions">sudo apt-get install ros-indigo-moveit-full</code></div></div></td></tr></tbody></table></div></div>
          <h4>Step 2: Debian Packages for MoveIt! with the PR2</h4>
          <p>These are not yet fully available for the PR2.</p>
          <h4>Step 3: Setup your environment</h4>
          <div><div id="highlighter_784502" class="syntaxhighlighter nogutter  bash"><table border="0" cellpadding="0" cellspacing="0"><tbody><tr><td class="code"><div class="container"><div class="line number1 index0 alt2 highlighted"><code class="bash functions">source /opt/ros/indigo/setup.bash</code></div></div></td></tr></tbody></table></div></div>
          <p></p>
       </div>
      </div>
    </div>
  </div>
</div>

### **ROS Jade**

Partial support for Jade is currently available ([Github Issue](https://github.com/ros-planning/moveit_ros/issues/689)), more details soon.

### **ROS Kinetic**

MoveIt! for Kinetic is not yet released, see ([Github Issue](https://github.com/ros-planning/moveit/issues/18))
