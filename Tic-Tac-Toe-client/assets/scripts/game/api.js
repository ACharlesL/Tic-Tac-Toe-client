'use strict'
const config = require('../config.js')
const store = require('../store.js')

const onCreateGame = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'POST'
  })
}
let eventCounter = 0

const changeValue = function () {
  // even/odd counter
  eventCounter++
  // game over logic
  if (eventCounter === 9) {
    store.game.game.over = true
  }
  const changeLocation = store.event.target.id
  console.log('game id ' + store.game.game.id)
  console.log('change value in ' + store.event.target.id)
  const gameId = store.game.game.id
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
  return $.ajax({
    url: config.apiUrl + `games/${gameId}`,
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'PATCH',
    data: currentGame
  })
}
// const checkPosition = function () {
//   console.log('checking for valid position')
//   const result = emptyPositionTracker.includes(store.event.target.id)
//   emptyPositionTracker.push(store.event.target.id)
//   return result
// }
// const onCreateGame = function () {
//   return $.ajax({
//     url: config.apiUrl + '/games',
//     headers: {
//       'Authorization': 'Bearer' + store.user.token
//     },
//     method: 'POST'
//   })
// }

// const create = function (passwordData) {
//   return $.ajax({
//     url: config.apiUrl + '/change-password',
//     headers: {
//     // 'Content-type': 'application/json',
//       Authorization: `Token token=${store.user.token}`
//     },
//     method: 'PATCH',
//     data: passwordData
//   })
// }
module.exports = {
  onCreateGame,
  changeValue
}
