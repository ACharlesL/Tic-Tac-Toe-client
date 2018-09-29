'use strict'

const store = require('../store.js')

const gameCreateSuccess = function (response) {
  console.log('success creating game')
  console.log(response)
  store.game = response
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
  updateboard(data)
}
const gameXmovefail = function () {
  $('#display-message').html('Wrong move!')
  $('#display-message').css('color', 'red')
  console.log('game x move failed in event')
}
const updateboard = function (data) {
  console.log('in updateboard UI' + data.game.cells)
  $('#0').html(data.game.cells[0])
  $('#1').html(data.game.cells[1])
  $('#2').html(data.game.cells[2])
  $('#3').html(data.game.cells[3])
  $('#4').html(data.game.cells[4])
  $('#5').html(data.game.cells[5])
  $('#6').html(data.game.cells[6])
  $('#7').html(data.game.cells[7])
  $('#8').html(data.game.cells[8])
}
module.exports = {
  gameCreateSuccess,
  gameCreatefailure,
  gameXmove,
  gameXmovefail,
  updateboard
}
