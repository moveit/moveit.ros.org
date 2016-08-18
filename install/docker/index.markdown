# Docker

## Usage

### New Users

For a debian-installed image of MoveIt:

    docker run -it moveit/moveit:moveit-kinetic-release

### Developers

For a built-by-source image of MoveIt:

    docker run -it moveit/moveit:moveit-kinetic-source

Any of the three current distros work: [indigo|jade|kinetic]

## Build

MoveIt!'s docker images are built automatically on dockerhub.com, but you can modify and build locally if desired with the following command:

    cd kinetic/source
    docker build -t moveit/moveit:moveit-kinetic-source .

## Using GUI's with Docker

For more details see the [ROS tutorial](http://wiki.ros.org/docker/Tutorials/GUI) on this.

    # This is not the safest way however, as you then compromise the access control to X server on your host
    xhost +local:root # for the lazy and reckless

    docker run -it --env="DISPLAY" --env="QT_X11_NO_MITSHM=1" --volume="/tmp/.X11-unix:/tmp/.X11-unix:rw" moveit/moveit:moveit-kinetic-source
    export containerId=$(docker ps -l -q)

    # Close security hole:
    xhost -local:root
