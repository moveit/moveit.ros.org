---
layout: install
slug: docker_install
title: MoveIt 1 Docker Install
---

<div>
    <h1><img src="/assets/install_page/docker.png">  MoveIt 1 Docker Install</h1>
    <p>
      Docker is an open-source project that automates the deployment of Linux
      applications inside software containers. See <a href="https://www.docker.com/" target="_blank">www.docker.com</a>
    </p>
    <br/>
    <p>
      Docker can help you easily evaluate someone else’s code changes without changing your local setup, as well as test on versions of Linux other than your locally installed one. MoveIt has an <a href="https://hub.docker.com/r/moveit/moveit/" target="_blank">official MoveIt Docker</a> build that lets you quickly run MoveIt in a local container.
    </p>
    <img class="docker-img" src="/assets/install_page/docker-illustration.png"/>
    <div class="horizontal-line"></div>
    <h2>Installing Docker</h2>
    <p>
      Before starting this tutorial, please complete the installation as described in <a href="https://docs.docker.com/install/" target="_blank">Docker’s installation instructions</a>. Installation instructions are available for multiple operating systems.
    </p>
    <br/>
    <p>
      Note that for recent Linux distros, the installation is basically just a single wget command. You may also want <a href="https://docs.docker.com/install/linux/docker-ce/ubuntu/" target="_blank">add your user to the docker group</a> to avoid having to use sudo permissions when you use the docker command.
    </p>
    <h2>
      <img src="/assets/install_page/ubuntu_black.png"> Ubuntu
    </h2>
    <p>If you are running a recent version of Ubuntu (e.g. 16.04, 18.04) it can be as simple as:</p>
    <div class="bash-command">
      <code>
        sudo apt install curl<br/>
        curl -sSL https://get.docker.com/ | sh<br/>
        sudo usermod -aG docker $(whoami)
      </code>
    </div>
    <p>And you will likely need to log out and back into your user account for the changes to take effect.</p>
    <div class="horizontal-line"></div>
    <h2>Running MoveIt Containers</h2>
    <p>
      To use Rviz (and other GUIs), you probably want to set up hardware acceleration for Docker as described <a href="http://wiki.ros.org/docker/Tutorials/Hardware%20Acceleration" target="_blank">here</a>.
    </p>
    <br/>
    <p>
      Then, the wrapper script <span class="ros-command">gui-docker</span> can be used to correctly setup the docker environment for graphics support. For example, you can run the MoveIt docker container using the following command:
    </p>
    <div class="bash-command">
      <code>
        ./gui-docker -it --rm moveit/moveit:melodic-source /bin/bash
      </code>
    </div>
    <p>You can test that the GUI works by running rviz:</p>
    <div class="bash-command">
      <code>
        roscore > /dev/null & rosrun rviz rviz
      </code>
    </div>
    <p>As the previous command dropped the <span class="ros-command">--rm</span> option, the container will be persistent, so changes you make inside the container will remain.</p>
    <p>Running <span class="ros-command">gui-docker</span> in multiple terminals will connect them all to the same container. For convienence, the script defines sensible defaults. So, just running</p>
    <div class="bash-command">
      <code>
        ./gui-docker
      </code>
    </div>
    <div class="horizontal-line"></div>
    <h2>Quick Start</h2>
        <p>
          Start planning in Rviz with:
        </p>
        <a href="https://ros-planning.github.io/moveit_tutorials/" target="_blank">
          <span class="link-with-background">
            MoveIt Getting Started Tutorial
          </span>
        </a>
    <div class="horizontal-line"></div>
    <h2>MoveIt Container Types</h2>
    <p>There are many variants of the MoveIt Docker available as <a href="/documentation/contributing/continuous_integration/">documented here</a>. For example, any of the two current distros work: [kinetic, melodic]. Other variations include:</p>
    <div class="container">
        <div class="install-card-wrapper">
            <div class="col-4 install-card-single">
                <h3>moveit/moveit:master-source</h3>
                <p>contains a full MoveIt workspace downloaded and built to ~/ws_moveit/src. This container is useful for developers wanting to test or develop in a sandbox.</p>
            </div>
            <div class="col-4 install-card-single">
                <h3>moveit/moveit:melodic-release</h3>
                <p>builds ontop of the CI image, the full debian-based install of MoveIt using apt.</p>
            </div>
            <div class="col-4 install-card-single">
                <h3>moveit/moveit:master-ci</h3>
                <p>an image optimized for running continuous integration with Travis</p>
            </div>
            <div class="col-4 install-card-single">
                <h3>moveit/moveit:master-ci-shadow</h3>
                <p>an image optimized for running continuous integration with Travis using the latest unreleased build of ROS</p>
            </div>
        </div>
    </div>
    <div class="horizontal-line"></div>
    <h2>Troubleshooting</h2>
        <h3>"source devel/setup.bash" does not work / MoveIt packages are not found</h3>
            <p>In the moveit/moveit:master-source container, "install/setup.bash" needs to be sourced instead of "devel/setup.bash".</p>
            <br/>
        <h3>Error response from daemon: OCI runtime create failed...</h3>
            <p>Your container may have an issue. Try</p>
            <p><b>1. Deleting it by:</b></p>
            <p><span class="ros-command">docker stop default_container && docker rm default_container</span></p>
            <br/>
            <p><b>2. And running:</b></p>
            <p><span class="ros-command">gui-docker</span> again.</p>
</div>
