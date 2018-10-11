## Introduction
```
A brief Introduction and summary of the App.
This is a single page application. A single player Tic Tac Toe game. current status of the application allows a player to play as both player'X' and player'O'. Plans for the future is to add an AI opponent and multiplayer opponent.
```
## Requirements
```
This module requires the following:
-A user must signup with a unique email address to setup a player account.
-A user must sign-in to play a game.
-After signin the user must click new game button to start a new game.
```


## Technologies used
```
⋅⋅* html
⋅⋅* css
⋅⋅* javascript
⋅⋅* jquery
⋅⋅* ajax
⋅⋅* sass
```
## Document your planning and tell a story about your development process and problem-solving strategy.

... My process in developing this application has been mostly test driven. I made it a habit to test almost every line of code I wrote including console loging all result during development.

... My approach was to start working on the back-end in order to understand the response from the server when utilizing the API, for this i did a deep dive into the APi documentation for both the user API's and game API's.
  I created multiple curls scripts which includes sign-up, sign-out sign-in  to test authentication with the user server and create-game, update-game and get-games for the game server. The API actions used are GET, POST and PATCH
  After developing curl-scripts to verify i can access the servers I started working on developing the Ajax calls accordingly.
... I decided to work on the front-end by developing bearbone html with various elements which will be used to pass data and events with proper routing to the respective api calls. My api calls are being made by utilizing Ajax calls which trigger different messages/actions depending on success/failure of the api call through Ajax. After a completely connected from the front end to the servers were made, I then focused on the game logic.
  The game


## List unsolved problems which would be fixed in future iterations.

  - In future iterations I will add a multiplayer functionality for (user vs user) and (user vs AI).
  - A responsive user interface and better UI/UX.

## Link to wireframes and user stories.
```

```
