'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')
const store = require('../store.js')

const unavialableSpot = []
// store.event.eventCounter++

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
  ui.freshboard()
  while (unavialableSpot.length > 0) {
    unavialableSpot.pop()
  }
  console.log('in game new board')
  event.preventDefault()
  api.onCreateGame()
    .then(ui.gameCreateSuccess)
    .catch(ui.gameCreatefailure)
}
// not sure this funciton is usefull.
const gameStatus = function (event) {
  if (unavialableSpot.length < 10 && unavialableSpot.length === 9) {
    //  store.game.game.over = true
    //  console.log('GAME OVER')
  } else if (unavialableSpot.length < 10) {
    makingMoves(event)
  }
}

let eventCounter = 0

// const onCurrentGame = function()
const gamelogic = function (event) {
  console.log('in game logic ' + store.game.game.over)
  console.log('in game logic ' + unavialableSpot)

  if (!unavialableSpot.includes(event.target.id) && store.game.game.over === false) {
    // even/odd counter
    eventCounter++
    // game over logic
    if (eventCounter === 9) {
      store.game.game.over = true
    }
    const changeLocation = event.target.id
    console.log('game id ' + store.game.game.id)
    console.log('change value in ' + event.target.id)
    const gameId = store.game.game.id
    // game over or not
    const OVER = store.game.game.over
    const X = 'X'
    const O = 'O'
    let value
    console.log('event tracker ' + eventCounter)
    if (eventCounter % 2 === 0) {
      value = O
    } else {
      value = X
    }
    const currentGame = {
      'game': {
        'cell': {
          'index': changeLocation,
          'value': value
        },
        'over': OVER
      }
    }
    if (store.game.game.over) {
      ui.freshboard()
    }
    unavialableSpot.push(event.target.id)
    console.log('avialable spot' + unavialableSpot)
    api.changeValue(currentGame)
      .then(ui.gameXmove)
      .catch(ui.gameXmovefail)
  } else {
    ui.gameXmovefail()
  }
}
const makingMoves = function (event) {
  if (!unavialableSpot.includes(event.target.id)) {
    event.preventDefault()
    store.event = event
    console.log(store.event)
    const moveData = getFormFields(event.target)
    console.log('in making move ' + event.target.id)
    unavialableSpot.push(event.target.id)
    console.log(unavialableSpot)
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
  gameStatus,
  gamelogic
}
