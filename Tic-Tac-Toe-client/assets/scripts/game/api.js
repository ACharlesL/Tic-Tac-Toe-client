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
  return $.ajax({
    url: config.apiUrl + '/games',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'POST'
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
  onCreateGame
}
