#!/bin/bash

#ID=1 TOKEN=token scripts/update-game-state.sh

# update-game-state.sh
# CURL PATCH that updates a specific game's state with the user $TOKEN
#  passed in as a parameter and a `game delta` object passed as JSON request
#  data

# Must sign up and sign in user first in order for this script to work

API="${API_ORIGIN:-http://localhost:4741}"
URL_PATH="/games/$ID"
curl "${API}${URL_PATH}" \
      --include \
      --request PATCH \
      --header "Authorization: Token token=$TOKEN" \
      --header "Content-Type: application/json" \
      --data '{
        "game": {
          "cell": {
            "index": 0,
            "value": "x"
          },
          "over": false
        }
      }'

# data output from curl doesn't have a trailing newline
echo
