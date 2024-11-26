---
comments: false
date: 2024-06-30
author: Henning Kayser
layout: post
title: "New MoveIt LTS release for ROS 2 Jazzy!"
media_type: image
media_link: /assets/images/blog_posts/MoveIt_Jazzy.jpg
description: "MoveIt 2 has been released for Jazzy Jalisco LTS and Rolling Ridley at version 2.10"
categories:
- release
- jazzy
- rolling
---

We are very excited to announce that MoveIt 2 Jazzy is finally here. The newest LTS release Jazzy 2.10 will take Humble’s place as the recommended MoveIt version. It can be installed using the [ROS Debian binaries](https://moveit.ros.org/install-moveit2/binary/) (available with the upcoming Jazzy sync) on Ubuntu Noble 24.04, or through a [Linux source build](https://moveit.ros.org/install-moveit2/source/). The same version has also been released for Rolling Ridley.

New features in the Jazzy LTS release compared to Humble include (ordered randomly):

* A refactored version of MoveIt Servo
* MoveIt Python bindings
* Multi-dof trajectory execution support
* Refactored planning pipeline
* Improved logging (rosout, namespaces) and ROS parameter API
* Improved Cartesian Interpolator
* A new implementation of the STOMP motion planner
* Support for parallel planning pipelines
* Several improvements to trajectory processing (TOTG, Ruckig, butterworth filtering)
* Refactored planning pipeline API to better represent request and response adapters

The full changelogs are provided in the changelogs files in the [MoveIt 2 repository](https://github.com/moveit/moveit2), breaking changes are documented in the [migration guide](https://github.com/moveit/moveit2/blob/main/MIGRATION.md). We are still working on fixing and updating the tutorials to reflect the latest changes.

Jazzy development continues on the MoveIt main branch for the upcoming weeks. Once we are sure the MoveIt API can remain stable, we will branch off Jazzy to a stable branch for future releases, just like we did for past distributions. In the meantime, we will maintain source build support for Jazzy on the MoveIt main branch while Humble and Iron support are being phased out. The corresponding stable branches are not affected by this.

A big **Thank You** to all the great contributors whose work is featured in this release:
Abhijeet Das Gupta, Abishalini Sivaraman, AdamPettinger, Alaa, Alex Moriarty, Alex Navarro, AlexWebb, AM4283, Amal Nanavati, AndyZe, Anthony Baker, Antoine Duplex, Ashton Larkin, azalutsky, Bhargav, Shirin Nalamati, cambel, Captain Yoshi, Carlo Rizzardo, Chance Cardona, Chris Lalancette, Chris Thrasher, Christian Henkel, CihatAltiparmak, Cory Crean, David V. Lu!!, Dongya Jiang, Erik Holum, Ezra Brooks, Filip Sund, Forrest Rogers-Marcovitz, Gaël Écorchard, hacker1024, Henning Kayser, Heramb Modugula, HX2003, Igor Medvedev, Ikko Eltociear Ashimine, Jafar, Jens Vanhooydonck, J. Javan
Jochen Sprickerhof, Jonathan Grebe, Jorge Nicho, Jorge Pérez Ramos, Joseph Schornak, light-tech, Lucas Wendland, Marc Bestmann, Marco Magri, Mario Prats, Marq Rasmussen, Matej Vargovcik, Matthijs van der Burgh, methylDragon, Michael Ferguson, Michael Görner, Michael Marron, Michael Wiznitzer, Michael Wrock, Nacho Mellado, Nathan Brooks, Nils-Christian Iseke, Pablo Iñigo Blasco, Paul Gesel, Peter David Fagan, Rayene Messaoud, Robert Haschke, Rufus Wong, Sameer Gupta, Sami Alperen Akgün, Sarah Nix, Sarvajith Adyanthaya, Scott K Logan, Sebastian Castro, Sebastian Jahr, Shane Loretz, Shobuj Paul, Simon Schmeisser, Solomon Wiznitzer, Stephanie Eng, s-trinh, Surav Shrestha, tbastiaens-riwo, Tyler Weaver, Vatan Aksoy Tezer, V Mohammed Ibrahim, werner291, Will Yadu, Yang Lin

Please share your feedback and learnings on using MoveIt Jazzy on [GitHub Discussions](https://github.com/orgs/moveit/discussions). Happy testing!
