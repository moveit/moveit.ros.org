#!/bin/bash -eu

export NOKOGIRI_USE_SYSTEM_LIBRARIES=true
bundle exec jekyll build --strict_front_matter
bundle exec htmlproofer ./_site --check-html --only-4xx --http-status-ignore 403,429 --internal-domains moveit.ros.org --alt-ignore '/.*/'

# Perform a more thorough check
bundle exec htmlproofer ./_site --check-html --http-status-ignore 429,503 --internal-domains moveit.ros.org --alt-ignore '/.*/' || true
