#!/bin/bash

#ID=1 TOKEN=token scripts/show-game.sh

# show-game
# CURL GET that retrieves a given game associated with a user with the given
#  game $ID and user $TOKEN passed in as parameters

# Must sign up and sign in user first in order for this script to work

API="${API_ORIGIN:-http://localhost:4741}"
URL_PATH="/games/$ID"
curl "${API}${URL_PATH}" \
      --include \
      --request GET \
      --header "Authorization: Token token=$TOKEN"

# data output from curl doesn't have a trailing newline
echo
