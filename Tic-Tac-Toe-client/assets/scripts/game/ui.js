'use strict'

const store = require('../store.js')
const gameEvents = require('./events.js')

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
  checkWin(data)
}
const gameXmovefail = function () {
  $('#display-message').html('Wrong move!')
  $('#display-message').css('color', 'red')
  console.log('game x move failed in event')
}
const gameOver = function () {
  $('#display-message').html('GAME OVER!')
  $('#display-message').css('color', 'green')
}
const updateboard = function (data) {
  $('#0').html(data.game.cells[0])
  $('#1').html(data.game.cells[1])
  $('#2').html(data.game.cells[2])
  $('#3').html(data.game.cells[3])
  $('#4').html(data.game.cells[4])
  $('#5').html(data.game.cells[5])
  $('#6').html(data.game.cells[6])
  $('#7').html(data.game.cells[7])
  $('#8').html(data.game.cells[8])
  console.log('in updateboard UI' + data.game.cells)
}
const checkWin = function (data) {
  console.log('game board in win ' + data.game.cells)
  // generate arrays to check
  // row
  const game = data.game.cells
  const row1 = [game[0], game[1], game[2]]
  const row2 = [game[3], game[4], game[5]]
  const row3 = [game[6], game[7], game[8]]
  // col
  const col1 = [game[0], game[3], game[6]]
  const col2 = [game[1], game[4], game[7]]
  const col3 = [game[2], game[5], game[8]]
  // diag
  const diag1 = [game[0], game[4], game[8]]
  const diag2 = [game[6], game[4], game[2]]

  if (row1[0] === 'X' && row1[1] === 'X' && row1[2] === 'X') {
    winX()
  } else if (row2[0] === 'X' && row2[1] === 'X' && row2[2] === 'X') {
    winX()
  } else if (row3[0] === 'X' && row3[1] === 'X' && row3[2] === 'X') {
    winX()
  } else if (col1[0] === 'X' && col1[1] === 'X' && col1[2] === 'X') {
    winX()
  } else if (col2[0] === 'X' && col2[1] === 'X' && col2[2] === 'X') {
    winX()
  } else if (col3[0] === 'X' && col3[1] === 'X' && col3[2] === 'X') {
    winX()
  } else if (diag1[0] === 'X' && diag1[1] === 'X' && diag1[2] === 'X') {
    winX()
  } else if (diag2[0] === 'X' && diag2[1] === 'X' && diag2[2] === 'X') {
    winX()
  } else if (row2[0] === 'O' && row2[1] === 'O' && row2[2] === 'O') {
    winO()
  } else if (row3[0] === 'O' && row3[1] === 'O' && row3[2] === 'O') {
    winO()
  } else if (col1[0] === 'O' && col1[1] === 'O' && col1[2] === 'O') {
    winO()
  } else if (col2[0] === 'O' && col2[1] === 'O' && col2[2] === 'O') {
    winO()
  } else if (col3[0] === 'O' && col3[1] === 'O' && col3[2] === 'O') {
    winO()
  } else if (diag1[0] === 'O' && diag1[1] === 'O' && diag1[2] === 'O') {
    winO()
  } else if (diag2[0] === 'O' && diag2[1] === 'O' && diag2[2] === 'O') {
    winO()
  } else if (!data.game.cells.includes('')) {
    draw()
  }
}
const winX = function () {
  $('#display-message').html('X WIN! Please start a new game')
  $('#display-message').css('color', 'green')
  console.log('Player X WIN')
//  freshboard()
}
const winO = function () {
  $('#display-message').html('O WIN! Please start a new game')
  $('#display-message').css('color', 'green')
  console.log('Player O WIN')
  console.log('Player X WIN')
  console.log('Please start a new game')
//  freshboard()
}
const draw = function () {
  $('#display-message').html('DRAW!')
  $('#display-message').css('color', 'yellow')
  console.log('DRAW')
  freshboard()
}
const freshboard = function (data) {
  $('#0').html('')
  $('#1').html('')
  $('#2').html('')
  $('#3').html('')
  $('#4').html('')
  $('#5').html('')
  $('#6').html('')
  $('#7').html('')
  $('#8').html('')
//  console.log('in updateboard UI' + data.game.cells)
}
module.exports = {
  gameCreateSuccess,
  gameCreatefailure,
  gameXmove,
  gameXmovefail,
  updateboard,
  gameOver,
  freshboard
}
