'use strict'
const config = require('../config.js')
const store = require('../store.js')

// const signUp = function (userData) {
//   return $.ajax({
//     url: config.apiUrl + '/sign-up',
//     method: 'POST',
//     data: userData
//   })
// }
// const signIn = function (userData) {
//   return $.ajax({
//     url: config.apiUrl + '/sign-in',
//     method: 'POST',
//     data: userData
//   })
// }
// const changePassword = function (passwordData) {
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
// const signOut = function () {
//   return $.ajax({
//     url: config.apiUrl + '/sign-out',
//     method: 'DELETE',
//     headers: {
//     // 'Content-type': 'application/json',
//       Authorization: `Token token = ${store.user.token}`
//     }
//   })
// }
const onCreateGame = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'POST'
  })
}
const changeValue = function () {
  console.log('game id ' + store.game.game.id)
  console.log('change value in ' + store.event.target.id)
  const changeLocation = store.event.target.id
  const gameId = store.game.game.id
  const OVER = false
  const X = 'x'
  const currentGame = {
    'game': {
      'cell': {
        'index': changeLocation,
        'value': X
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
  //   data: {
  //     'game': {
  //       'cell': {
  //         'index': 6,
  //         'value': 'x'
  //       },
  //       'over': false
  //     }
  // }

  })
}
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
