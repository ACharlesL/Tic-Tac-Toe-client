'use strict'
const authEvents = require('./auth/events.js')
const gameEvents = require('./game/events.js')
// const exampleEvents = require('./examples/events.js')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  //  $('#sign-in-form').on('submit', gameEvents.onNewGame)
  $('#sign-out-button').on('click', authEvents.onSignOut)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#new-game-button').on('click', gameEvents.onNewGame)
  $('#0').on('click', gameEvents.gamelogic)
  $('#1').on('click', gameEvents.gamelogic)
  $('#2').on('click', gameEvents.gamelogic)
  $('#3').on('click', gameEvents.gamelogic)
  $('#4').on('click', gameEvents.gamelogic)
  $('#5').on('click', gameEvents.gamelogic)
  $('#6').on('click', gameEvents.gamelogic)
  $('#7').on('click', gameEvents.gamelogic)
  $('#8').on('click', gameEvents.gamelogic)
})
