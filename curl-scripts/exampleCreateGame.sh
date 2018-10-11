# sh curl-scripts/json/sign-in.sh

curl --include --request POST "https://wdi-library-api.herokuapp.com/books/" \
  --header "Authorization: Token token=${token}"
  --data '{
    "game": {
      "id": "'"${ID}"'",
      "cells": "'"${CELLS}"'"
      "over": "'"${OVER}"'"
      "player": "'"${{
      "id": "'"${ID}"'",
      "email": "'"${EMAIL}"'"
    }}"'"
    }
  }'

echo
