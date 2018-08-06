#!/bin/bash -eu

bundle exec jekyll build --strict_front_matter
bundle exec htmlproofer ./_site --only-4xx --check-html --alt-ignore '/.*/'
