#!/bin/bash

curl "https://tic-tac-toe-wdi.herokuapp.com/games[?over=]" \
--include \
--request POST \
--header "Content-Type: application/json" \
--data '{
  "game": {
    "email": "'"${EMAIL}"'",
    "password": "'"${PASSWORD}"'",
    "password_confirmation": "'"${PASSWORD}"'"
  }
}'

echo
