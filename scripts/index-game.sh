#!/bin/bash

#scripts/index-game.sh

# index-game
# CURL GET that retrieves all the games associated with a user

# Must sign up and sign in user first in order for this script to work

API="${API_ORIGIN:-http://localhost:4741}"
URL_PATH="/index-game"
curl "${API}${URL_PATH}" \
      --include \
      --request GET \
      --header "Content-Type: application/json"

# data output from curl doesn't have a trailing newline
echo
