#!/bin/bash

curl "https://tic-tac-toe-wdi.herokuapp.com/sign-out" \
--include \
--header "Authorization: Token token=${token}"
--request DELETE \

echo
