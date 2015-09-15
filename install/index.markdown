---
author: admin
comments: false
date: 2013-11-19 20:43:44+00:00
layout: page
slug: install
title: Install
wordpress_id: 24
---

> **MoveIt! is currently developed and works against Ubuntu and ROS Indigo and Hydro. It is recommended that you move to ROS Indigo for the latest features. MoveIt! for ROS Groovy is no longer actively supported.**

_Note for Ubuntu 13.4 32 bit users_: There is a bug with GCC 4.7 on Ubuntu 13.4 32bit with Eigen 3.1.2. It's not likely to be fixed, so upgrade/downgrade your system to 13.4 64 bit resp. 12.4.

_If you are a developer_: please scroll down for instructions on installing from source. Most users should be able to use just the binary instructions.



* * *





##Binary Installation Instructions (for users)




#### STEP 0: Install ROS


Follow all the instructions to install the base version of ROS: [Install ROS-Base](http://wiki.ros.org/indigo/Installation/Ubuntu). Please make sure you have followed all the ROS installation steps, including calls to rosdep.

MoveIt! can be installed directly as a set of debian packages on Ubuntu. To get a complete installation, choose your ROS distribution below:

#### **ROS Hydro**

<div class="accordion" id="accordion2">
  <div class="accordion-group">
    <div class="accordion-heading">
      <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapseOne">
        ROS Hydro Installation Instructions
      </a>
    </div>
    <div id="collapseOne" class="accordion-body collapse">
      <div class="accordion-inner">
        <div class="toggle_content" style="display: block;"><p></p>
        <h4>STEP 1: Ubuntu Installation: Debian Packages for MoveIt!</h4>
        <div><div id="highlighter_352350" class="syntaxhighlighter nogutter  bash"><table border="0" cellpadding="0" cellspacing="0"><tbody><tr><td class="code"><div class="container"><div class="line number1 index0 alt2 highlighted"><code class="bash functions">sudo</code> <code class="bash plain">apt-get </code><code class="bash functions">install</code> <code class="bash plain">ros-hydro-moveit-full</code></div></div></td></tr></tbody></table></div></div>
        <h4>STEP 2: Debian Packages for MoveIt! with the PR2</h4>
        <p>If you would like to use MoveIt! with the PR2 with ROS Hydro (recommended if you are following the tutorials on the MoveIt! wiki):</p>
        <div><div id="highlighter_919688" class="syntaxhighlighter nogutter  bash"><table border="0" cellpadding="0" cellspacing="0"><tbody><tr><td class="code"><div class="container"><div class="line number1 index0 alt2 highlighted"><code class="bash functions">sudo</code> <code class="bash plain">apt-get </code><code class="bash functions">install</code> <code class="bash plain">ros-hydro-moveit-full-pr2</code></div></div></td></tr></tbody></table></div></div>
        <h4>STEP 3: Setup your environment</h4>
        <div><div id="highlighter_886489" class="syntaxhighlighter nogutter  bash"><table border="0" cellpadding="0" cellspacing="0"><tbody><tr><td class="code"><div class="container"><div class="line number1 index0 alt2 highlighted"><code class="bash functions">source</code> <code class="bash plain">/opt/ros/hydro/setup</code><code class="bash plain">.</code><code class="bash functions">bash</code></div></div></td></tr></tbody></table></div></div>
        <p></p></div>
      </div>
    </div>
  </div>
</div>


#### **ROS Indigo**

<div class="accordion" id="accordion2">
  <div class="accordion-group">
    <div class="accordion-heading">
      <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapseTwo">
        ROS Indigo Installation Instructions
      </a>
    </div>
    <div id="collapseTwo" class="accordion-body collapse">
      <div class="accordion-inner">
        <div class="toggle_content" style="display: block;"><p></p>
          <h4>STEP 1: Ubuntu Installation: Debian Packages for MoveIt!</h4>
          <div><div id="highlighter_390226" class="syntaxhighlighter nogutter  bash"><table border="0" cellpadding="0" cellspacing="0"><tbody><tr><td class="code"><div class="container"><div class="line number1 index0 alt2 highlighted"><code class="bash functions">sudo</code> <code class="bash plain">apt-get </code><code class="bash functions">install</code> <code class="bash plain">ros-indigo-moveit-full</code></div></div></td></tr></tbody></table></div></div>
          <h4>STEP 2: Debian Packages for MoveIt! with the PR2</h4>
          <p>These are not yet fully available for the PR2.</p>
          <h4>STEP 3: Setup your environment</h4>
          <div><div id="highlighter_784502" class="syntaxhighlighter nogutter  bash"><table border="0" cellpadding="0" cellspacing="0"><tbody><tr><td class="code"><div class="container"><div class="line number1 index0 alt2 highlighted"><code class="bash functions">source</code> <code class="bash plain">/opt/ros/indigo/setup</code><code class="bash plain">.</code><code class="bash functions">bash</code></div></div></td></tr></tbody></table></div></div>
          <p></p>
       </div>
      </div>
    </div>
  </div>
</div>

##Source Installation Instructions (for developers)


#### **STEP 0: Install ROS**


Follow all the instructions to install the base version of ROS: [Install ROS-Base](http://www.ros.org/wiki/hydro/Installation/Ubuntu). Please make sure you have followed all the ROS installation steps, including calls to rosdep.


#### **STEP 1: Get the wstool package**


`sudo apt-get install python-wstool`

Now follow the steps for your particular ROS version.

#### **STEP 2 & 3: ROS Hydro**
<div class="accordion" id="accordion3">
  <div class="accordion-group">
    <div class="accordion-heading">
      <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapseThree">
        ROS Hydro Instructions
      </a>
    </div>
    <div id="collapseThree" class="accordion-body collapse">
      <div class="toggle_content" style="display: block;"><p></p>
      <h4>STEP 2: Download the source code</h4>
      <div><div id="highlighter_439348" class="syntaxhighlighter nogutter  bash"><table border="0" cellpadding="0" cellspacing="0"><tbody><tr><td class="code"><div class="container"><div class="line number1 index0 alt2 highlighted"><code class="bash functions">source</code> <code class="bash plain">/opt/ros/hydro/setup</code><code class="bash plain">.</code><code class="bash functions">bash</code></div><div class="line number2 index1 alt1 highlighted"><code class="bash functions">mkdir</code> <code class="bash plain">moveit</code></div><div class="line number3 index2 alt2 highlighted"><code class="bash functions">cd</code> <code class="bash plain">moveit</code></div><div class="line number4 index3 alt1 highlighted"><code class="bash functions">mkdir</code> <code class="bash plain">src</code></div><div class="line number5 index4 alt2 highlighted"><code class="bash functions">cd</code> <code class="bash plain">src/</code></div><div class="line number6 index5 alt1 highlighted"><code class="bash plain">wstool init .</code></div><div class="line number7 index6 alt2 highlighted"><code class="bash plain">wstool merge https:</code><code class="bash plain">//raw</code><code class="bash plain">.github.com</code><code class="bash plain">/ros-planning/moveit_docs/hydro-devel/moveit</code><code class="bash plain">.rosinstall</code></div><div class="line number8 index7 alt1 highlighted"><code class="bash plain">wstool update</code></div><div class="line number9 index8 alt2 highlighted"><code class="bash functions">cd</code> <code class="bash plain">..</code></div></div></td></tr></tbody></table></div></div>
      <h4>STEP 3: Make sure MoveIt! dependencies are installed</h4>
      <div><div id="highlighter_550652" class="syntaxhighlighter nogutter  bash"><table border="0" cellpadding="0" cellspacing="0"><tbody><tr><td class="code"><div class="container"><div class="line number1 index0 alt2 highlighted"><code class="bash plain">rosdep </code><code class="bash functions">install</code> <code class="bash plain">--from-paths src --ignore-src --rosdistro hydro -y</code></div></div></td></tr></tbody></table></div></div>
      <p></p></div>
    </div>
  </div>
</div>



#### **STEP 2 & 3: ROS Indigo**

<div class="accordion" id="accordion3">
  <div class="accordion-group">
    <div class="accordion-heading">
      <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapseFour">
        ROS Indigo Instructions
      </a>
    </div>
    <div id="collapseFour" class="accordion-body collapse">
    <div class="toggle_content" style="display: block;"><p></p>
    <h4>STEP 2: Download the source code</h4>
    <div><div id="highlighter_230766" class="syntaxhighlighter nogutter  bash"><table border="0" cellpadding="0" cellspacing="0"><tbody><tr><td class="code"><div class="container"><div class="line number1 index0 alt2 highlighted"><code class="bash functions">source</code> <code class="bash plain">/opt/ros/indigo/setup</code><code class="bash plain">.</code><code class="bash functions">bash</code></div><div class="line number2 index1 alt1 highlighted"><code class="bash functions">mkdir</code> <code class="bash plain">moveit</code></div><div class="line number3 index2 alt2 highlighted"><code class="bash functions">cd</code> <code class="bash plain">moveit</code></div><div class="line number4 index3 alt1 highlighted"><code class="bash functions">mkdir</code> <code class="bash plain">src</code></div><div class="line number5 index4 alt2 highlighted"><code class="bash functions">cd</code> <code class="bash plain">src/</code></div><div class="line number6 index5 alt1 highlighted"><code class="bash plain">wstool init .</code></div><div class="line number7 index6 alt2 highlighted"><code class="bash plain">wstool merge https:</code><code class="bash plain">//raw</code><code class="bash plain">.github.com</code><code class="bash plain">/ros-planning/moveit_docs/indigo-devel/moveit</code><code class="bash plain">.rosinstall</code></div><div class="line number8 index7 alt1 highlighted"><code class="bash plain">wstool update</code></div><div class="line number9 index8 alt2 highlighted"><code class="bash functions">cd</code> <code class="bash plain">..</code></div></div></td></tr></tbody></table></div></div>
    <h4>STEP 3: Make sure MoveIt! dependencies are installed</h4>
    <div><div id="highlighter_730265" class="syntaxhighlighter nogutter  bash"><table border="0" cellpadding="0" cellspacing="0"><tbody><tr><td class="code"><div class="container"><div class="line number1 index0 alt2 highlighted"><code class="bash plain">rosdep </code><code class="bash functions">install</code> <code class="bash plain">--from-paths src --ignore-src --rosdistro indigo -y</code></div></div></td></tr></tbody></table></div></div>
    <p></p></div>
    </div>
  </div>
</div>


#### **STEP 4: Build MoveIt!**


Assuming you are in the moveit folder created above,

`catkin_make`



#### **STEP 5: Setup your environment**


You will have to do this every time you work with this particular source install of the code. Assuming you are in the moveit folder created above,

```
  source devel/setup.bash
  # or .zsh, depending on your shell
```
