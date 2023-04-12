#!/bin/bash

dependencies=(
    tree # Dev dependency -- graphing the directory structure
)

# Update package list and install dependencies
sudo apt-get update
for dep in "${dependencies[@]}"; do
  sudo apt-get install -y "$dep"
done

echo "All dependencies have been installed."
