#!/bin/bash

#TOKEN=BAhJIiUwMmNmZDQ2NDM2MjFkZjJkMTE1NDQwZmM5MDM2NWRhMQY6BkVG--bc9816ec6b6d7ae395bb163ce4eb843fb0126888 scripts/create-game.sh
API="${API_ORIGIN:-http://localhost:4741}"
URL_PATH="/games/"
curl "${API}${URL_PATH}" \
      --include \
      --request POST \
      --header "Authorization: Token token=$TOKEN"

# data output from curl doesn't have a trailing newline
echo
