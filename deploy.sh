#!/bin/bash
yarn build && aws s3 cp --recursive  build/ s3://capstone.shainabeth.com/
