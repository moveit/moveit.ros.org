#!/bin/bash -eu
# Locally build the Jekyl site for testing on Ubuntu 16.04

if [[ "$0" != "${BASH_SOURCE}" ]]; then
  {
    echo "This file is meant to be executed, not 'source'd:"
    echo
    echo "    ./${BASH_SOURCE}"
  } >&2
  return 1
fi

have_noinstall() {
  for arg in "$@"; do
    if [[ "${arg}" == "noinstall" ]]; then
      return 0
    fi
  done
  return 1
}

################################################################################
# Begin Main Script
################################################################################

# Environment
export GEM_HOME=$HOME/gems
export PATH=$HOME/gems/bin:$PATH

# Install dependencies, unless argument says to skip
if ! have_noinstall "$@"; then
  sudo apt-get install ruby ruby-dev build-essential
  gem install jekyll
  gem install bundler -v 1.17.3
  bundle install
fi

# Build website using similar script as Travis, but skip htmlproofer because it fails locally:
bundle exec jekyll build --strict_front_matter

# Launch website
echo "Opening http://localhost:4000 in default browser"
xdg-open http://localhost:4000

# Start serving website locally
bundle exec jekyll serve
