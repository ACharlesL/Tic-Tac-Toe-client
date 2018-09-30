'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')
const store = require('../store.js')

const avialableSpot = []

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
// not sure this funciton is usefull.
const gameStatus = function (event) {
  if (avialableSpot.length < 10 && avialableSpot.length === 9) {
  //  store.game.game.over = true
  //  console.log('GAME OVER')
  } else if (avialableSpot.length < 10) {
    makingMoves(event)
  }
}
const makingMoves = function (event) {
  if (!avialableSpot.includes(event.target.id)) {
    event.preventDefault()
    store.event = event
    console.log(store.event)
    const moveData = getFormFields(event.target)
    console.log('in making move ' + event.target.id)
    avialableSpot.push(event.target.id)
    console.log(avialableSpot)
    api.changeValue(moveData)
      .then(ui.gameXmove)
      .catch(ui.gameXmovefail)
  } else {
    ui.gameXmovefail()
  }
}

// const avialable = function () {
//   console.log('in avialable')
//   avialableSpot.includes(event.target.id)
// }
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
  makingMoves,
  gameStatus
}
