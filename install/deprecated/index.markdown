---
author: admin
comments: false
date: 2016-07-29 16:27:44+00:00
layout: page
slug: install
title: Deprecated Install
---

## Source Installation Instructions for unsupported versions of MoveIt


#### **STEP 0: Install ROS**


Follow all the instructions to install the base version of ROS: [Install ROS-Base](http://www.ros.org/wiki/hydro/Installation/Ubuntu). Please make sure you have followed all the ROS installation steps, including calls to rosdep.


#### **STEP 1: Get the wstool package**


`sudo apt-get install python-wstool`

Now follow the steps for your particular ROS version.

#### **STEP 2 & 3: ROS Hydro**
<div class="accordion" id="accordion4">
  <div class="accordion-group">
    <div class="accordion-heading">
      <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion4" href="#collapseThree">
        ROS Hydro Instructions
      </a>
    </div>
    <div id="collapseThree" class="accordion-body collapse">
      <div class="toggle_content" style="display: block;"><p></p>
      <h4>STEP 2: Download the source code</h4>
      <div><div id="highlighter_439348" class="syntaxhighlighter nogutter  bash"><table border="0" cellpadding="0" cellspacing="0"><tbody><tr><td class="code"><div class="container"><div class="line number1 index0 alt2 highlighted"><code class="bash functions">source /opt/ros/hydro/setup.bash</code></div><div class="line number2 index1 alt1 highlighted"><code class="bash functions">mkdir moveit</code></div><div class="line number3 index2 alt2 highlighted"><code class="bash functions">cd moveit</code></div><div class="line number4 index3 alt1 highlighted"><code class="bash functions">mkdir src</code></div><div class="line number5 index4 alt2 highlighted"><code class="bash functions">cd src/</code></div><div class="line number6 index5 alt1 highlighted"><code class="bash plain">wstool init .</code></div><div class="line number7 index6 alt2 highlighted"><code class="bash plain">wstool merge https://raw.github.com/ros-planning/moveit_docs/hydro-devel/moveit.rosinstall</code></div><div class="line number8 index7 alt1 highlighted"><code class="bash plain">wstool update</code></div><div class="line number9 index8 alt2 highlighted"><code class="bash functions">cd ..</code></div></div></td></tr></tbody></table></div></div>
      <h4>STEP 3: Make sure MoveIt dependencies are installed</h4>
      <div><div id="highlighter_550652" class="syntaxhighlighter nogutter  bash"><table border="0" cellpadding="0" cellspacing="0"><tbody><tr><td class="code"><div class="container"><div class="line number1 index0 alt2 highlighted"><code class="bash plain">rosdep install --from-paths src --ignore-src --rosdistro hydro -y</code></div></div></td></tr></tbody></table></div></div>
      <p></p></div>
    </div>
  </div>
</div>

#### **STEP 4: Build MoveIt**


Assuming you are in the moveit folder created above,

`catkin_make`



#### **STEP 5: Setup your environment**


You will have to do this every time you work with this particular source install of the code. Assuming you are in the moveit folder created above,

```
  source devel/setup.bash
  # or .zsh, depending on your shell
```
