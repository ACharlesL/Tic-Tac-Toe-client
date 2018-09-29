'use strict'

const store = require('../store.js')

// const signUpSuccess = function () {
//   $('#display-message').html('Sign up successful')
// }
// const signUpFailure = function () {
//   $('#display-message').html('Something went wrong, please try again')
//   $('#display-message').css('color', 'red')
//   $('#sign-up-form').trigger('reset')
// }
// const signInSuccess = function (response) {
//   $('#display-message').html('Sign in successful')
//   $('#display-message').css('color', 'green')
//   $('#sign-in-form').trigger('reset')
//   console.log('store before adding user key', store)
//   store.user = response.user
//   console.log('store after adding user key', store)
//   console.log('store.user.token', store.user.token)
//   $('#sign-up-form').addClass('hidden')
//   $('#sign-in-form').addClass('hidden')
//   $('#Change-password-form').addClass('hidden')
//   // $('#sign-out-button').addClass('hidden')
// }
// const signInFailure = function () {
//   $('#display-message').html('Something went wrong, please try again')
//   $('#display-message').css('color', 'red')
//   $('#sign-in-form').trigger('reset')
// }
// const signOutSuccess = function () {
//   $('#display-message').html('Sign Out successful')
//   $('#display-message').css('color', 'green')
//   $('#sign-up-form').removeClass('hidden')
//   $('#sign-in-form').removeClass('hidden')
//   $('#change-password-form').addClass('hidden')
//   $('#sign-out-button').addClass('hidden')
// }
// const signOutFailure = function () {
//   $('#display-message').html('Something went wrong, please try again')
//   $('#display-message').css('color', 'red')
//   $('#sign-in-form').trigger('reset')
// }
const gameCreateSuccess = function (response) {
  console.log('success creating game')
  console.log(response)
  store.game = response
  // const gameObjectForHTML = response
  // const gameObjectForHTML = (`
  //         cells: ${gameObjectForHTML.cells[0]}</h4>
  //         <p>Author: ${book.author}</p>
  //         <p>ID: ${book.id}</p>
  //         <br />
  //       `)
  //   $('#content').append(bookHTML)

  // $('#sign-up-form').addClass('hidden')
  // $('#sign-in-form').addClass('hidden')
  // $('#Change-password-form').addClass('hidden')
  // $('#sign-out-button').addClass('hidden')
}
const gameCreatefailure = function () {
  $('#display-message').html('Game not working')
  $('#display-message').css('color', 'red')
  $('#sign-in-form').trigger('reset')
}
const gameXmove = function (data) {
//  $(data).html('X')
  $('#display-message').html('player made a move')
  $('#display-message').css('color', 'yellow')
  console.log('Asysnc: inside .then')
  console.log(data)
  // get content to the page:
  console.log(data.game.id)
  console.log(data.game.player_x.id)
  console.log(data.game.cells)
//  console.log(data.game.cells[moveData.target.id])
  // {
  // "game": {
  //   "id": 3,
  //   "cells": ["","","","","","","","",""],
  //   "over": false,
  //   "player_x": {
  //     "id": 1,
  //     "email": "and@and.com"
  //   },
  //   "player_o": null
  // }
  // }
  // empty content element
//  $('#content').html('')
  // // loop through API response date
  // const book = response.book
  //  const gameHTML = (`
  //           .0: ${book.title}</h4>
  // //       <p>Author: ${book.author}</p>
  // //       <p>ID: ${book.id}</p>
  //       $('#sign-in-form').trigger('reset')
  // //     `)
  // // $('#content').append(bookHT
}
const gameXmovefail = function () {
  $('#display-message').html('Wrong move!')
  $('#display-message').css('color', 'red')
  console.log('game x move failed in event')
}
module.exports = {
  gameCreateSuccess,
  gameCreatefailure,
  gameXmove,
  gameXmovefail
}
