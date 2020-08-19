#!/bin/bash -eu

bundle exec jekyll build --strict_front_matter
bundle exec htmlproofer ./_site --check-html --only-4xx --http-status-ignore 429 --alt-ignore '/.*/'
