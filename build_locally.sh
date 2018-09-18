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

# Install dependencies
sudo apt-get install ruby ruby-dev build-essential
export GEM_HOME=$HOME/gems
export PATH=$HOME/gems/bin:$PATH
gem install jekyll bundler
bundle install

# Build website using same script as Travis
./.travis.sh

# Launch website
echo
echo "-------------------------------------"
echo "-------------------------------------"
read -p "Press any key to start serving website, then open http://localhost:4000 in browser"
echo "-------------------------------------"
echo "-------------------------------------"
echo

# Start serving website locally
bundle exec jekyll serve
