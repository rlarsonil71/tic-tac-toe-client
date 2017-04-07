#!/bin/bash

#TOKEN=token scripts/create-game.sh

# create-game
# CURL POST that creates a new game associated with a user with the given $TOKEN
#  passed in parameter

# Must sign in with above user first in order for this script to work

API="${API_ORIGIN:-http://localhost:4741}"
URL_PATH="/games/"
curl "${API}${URL_PATH}" \
      --include \
      --request POST \
      --header "Authorization: Token token=$TOKEN"

# data output from curl doesn't have a trailing newline
echo
