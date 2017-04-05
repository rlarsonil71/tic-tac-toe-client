#!/bin/bash

#curl "http://localhost:3000/change-password/${ID}" \
#ID=1 OLDPW=triplets NEWPW=password TOKEN=token scripts/change-password.sh
API="${API_ORIGIN:-http://localhost:4741}"
URL_PATH="/change-password/$ID"
curl --include --request PATCH "${API}${URL_PATH}" \
  --header "Authorization: Token token=$TOKEN" \
  --header "Content-Type: application/json" \
  --data '{
    "passwords": {
      "old": "'"${OLDPW}"'",
      "new": "'"${NEWPW}"'"
    }
  }'

# data output from curl doesn't have a trailing newline
echo
