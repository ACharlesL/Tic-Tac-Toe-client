'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')
const store = require('../store.js')

// const onSignUp = function (event) {
//   console.log('in sign up event')
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   console.log(data)
//   api.signUp(data)
//     .then(ui.signUpSuccess)
//     .catch(ui.signUpFailure)
// }

// capture signIn event to create game board
const onNewGame = function (event) {
  // alert('it works')
  console.log('in game new board')
  event.preventDefault()
  api.onCreateGame()
    .then(ui.gameCreateSuccess)
    .catch(ui.gameCreatefailure)
}

const makingMoves = function (event) {
  event.preventDefault()
  store.event = event
  const moveData = getFormFields(event.target)
  console.log('in making move ' + event.target.id)
  api.changeValue(moveData)
    .then(ui.gameXmove)
    .catch(ui.gameXmovefail)
}
// const onSignOut = function (event) {
//   // alert('it works')
//   event.preventDefault()
//   console.log('sign out ran')
//   api.signOut()
//     .then(ui.signOutSuccess)
//     .catch(ui.signOutFailure)
// }

module.exports = {
  onNewGame,
  makingMoves
}
