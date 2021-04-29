#!/bin/bash -eu
# Locally build the Jekyl site for testing on Ubuntu 16.04

have_github_actions() {
  for arg in "$@"; do
    if [[ "${arg}" == "github_actions" ]]; then
      return 0
    fi
  done
  return 1
}

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

if [[ "$0" != "${BASH_SOURCE}" ]]; then
  {
    echo "This file is meant to be executed, not 'source'd:"
    echo
    echo "    ./${BASH_SOURCE}"
  } >&2
  return 1
fi

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

# Test website using same script as Travis
if have_github_actions "$@"; then
  export NOKOGIRI_USE_SYSTEM_LIBRARIES=true
  bundle exec jekyll build --strict_front_matter
  bundle exec htmlproofer ./_site --check-html --only-4xx --http-status-ignore 429 --alt-ignore '/.*/'
fi

# Launch website
echo
echo "-------------------------------------"
echo "-------------------------------------"
echo "Preparing to open http://localhost:4000"
echo "Be sure to refresh auto-opened webpage"
#read -p "Press any key to start serving website..."
echo "-------------------------------------"
echo "-------------------------------------"
echo
xdg-open http://localhost:4000

# Start serving website locally
bundle exec jekyll serve
