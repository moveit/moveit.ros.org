---
layout: install
slug: source_install_windows
title: MoveIt 1 Source Build - Windows
---

  <div>
    <h1>Source Build: Windows</h1>
      <p>Installing MoveIt from source is the first step in contributing new features, optimizations, and bug fixes back to the open source project. Thanks for getting involved!</p>
      <img class="docker-img" src="/assets/install_page/docker-illustration.png"/>
      <br />
    <h2>Prerequisites</h2>
    <p>ROS for Windows requires 64-bit Windows 10 Desktop or Windows 10 IoT Enterprise.</p>
    <p><b>Currently only ROS Melodic is supported on Windows</b>.</p>
    <h3>
    Install <img src="/assets/install_page/ros_logo.jpeg"/>
    </h3>
    <p>Follow all the <a href="http://wiki.ros.org/Installation/Windows" target="_blank">Install ROS on Windows</a> instructions to install the Last Known Good (LKG) Build Installation for Melodic.</p>
    <h2>MoveIt Source Installation on Windows</h2>
    <p>Open an elevated ROS Command Window as described in the installation instructions (x64 Native Tools Command Prompt).</p>
    <h3>Create Workspace and Source</h3>
    <p>Optionally create a new workspace, you can name it whatever:</p>
    <div class="bash-command">
      <code>
        :: activate the ROS environment<br/>
        c:\opt\ros\melodic\x64\setup.bat<br/>
        <br/>
        :: create a empty workspace<br/>
        mkdir c:\moveit_ws\src<br/>
        cd c:\moveit_ws
      </code>
    </div>
    <h3>Download Dependencies</h3>
    <p>In the same ROS Command Window run the following to obtain the dependencies for MoveIt.</p>
    <div class="bash-command">
      <code>
        pushd c:\moveit_ws<br/>
        <br/>
        :: generate the released package sources list and its ROS dependencies<br/>
        rosinstall_generator moveit msft_ros_pkgs moveit_resources moveit_tutorials moveit_visual_tools pcl_ros --rosdistro melodic --deps --upstream-development --exclude octomap > build.rosinstall<br/>
        <br/>
        :: download the source list to override specific packages with the ms-iot versions<br/>
        curl -o overrides.rosinstall https://raw.githubusercontent.com/ms-iot/ros-windows-build/master/ros-catkin-build/melodic/build.rosinstall<br/>
        <br/>
        :: checkout the sources from the above lists<br/>
        wstool init src<br/>
        wstool merge -r -y -t src build.rosinstall<br/>
        wstool merge -r -y -t src overrides.rosinstall<br/>
        wstool update -t src<br/>
        <br/>
        :: attempt to acquire the external dependencies<br/>
        set ChocolateyInstall=c:\opt\chocolatey<br/>
        choco source add -n=ros-win -s="https://aka.ms/ros/public" --priority=1<br/>
        rosdep update<br/>
        rosdep install --from-paths src --ignore-src -r -y<br/>
        pip install --upgrade --force-reinstall cmake==3.16.3
      </code>
    </div>
    <h3>Build MoveIt and Dependencies</h3>
    <p>Run the following to build MoveIt. Note this may take over an hour.</p>
    <div class="bash-command">
      <code>
        pushd c:\moveit_ws<br/>
        <br/>
        copy src\catkin\bin\catkin_make_isolated src\catkin\bin\catkin_make_isolated.py<br/>
        <br/>
        python src\catkin\bin\catkin_make_isolated.py ^<br/>
        --install-space "c:/opt/ros/melodic/x64" ^<br/>
        --use-nmake ^<br/>
        --install ^<br/>
        --only-pkg-with-deps ^<br/>
        msft_ros_pkgs moveit_resources moveit_tutorials moveit_visual_tools pcl_ros ^<br/>
        -DCMAKE_BUILD_TYPE=RelWithDebInfo ^<br/>
        -DCMAKE_PREFIX_PATH="C:/opt/ros/melodic/x64;C:/opt/rosdeps/x64" ^<br/>
        -DCMAKE_VERBOSE_MAKEFILE=ON ^<br/>
        -DPYTHON_VERSION=2.7 ^<br/>
        -DPYTHON_EXECUTABLE=C:\opt\python27amd64\python.exe ^<br/>
        -DPYTHON_LIBRARIES=C:\opt\python27amd64\Libs ^<br/>
        -DCATKIN_SKIP_TESTING=ON
      </code>
    </div>
  </div>
