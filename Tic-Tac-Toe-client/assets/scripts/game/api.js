'use strict'
const config = require('../config.js')
const store = require('../store.js')

const getGames = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'GET'
  })
}

const onCreateGame = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'POST'
  })
}

const changeValue = function (currentGame) {
  const gameId = store.game.game.id
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
  changeValue,
  getGames
}
