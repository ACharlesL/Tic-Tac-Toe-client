'use strict'

const store = require('../store.js')
const gameEvents = require('./events.js')

const gameCreateSuccess = function (response) {
  // console.log('success creating game')
  $('#gameBoard').addClass('unhide')
  $('#gameBoard').addClass('clickable')
  $('#display-message').html('game on')
  $('#display-message').css('color', 'green')
  $('#player-logged-on').html(`${store.user.email}`)
//  $('#display-message').addClass('hidden')
//  $('#gameBoard').show()
  // console.log(response)
  store.game = response
  store.game.game.newgame = true
}
const userGames = function (response) {
  // console.log('showing games')
  // console.log(response)
  store.games = response
  showgamesPlayed(store.games)
}
const userCompleteGames = function (response) {
  // console.log('showing games')
  // console.log(response)
  store.games = response
  showgamesPlayed(store.games)
}
const showGameBoards = function (games) {
  for (let i = 0; i < games.games.length; i++) {
    // console.log(games.games[i].cells)
    $('#gameHistory').append(store.games.games[i].cells)
    $('#gameHistory').append(store.games.games[i].id)
    const result = pastGameBoard(store.games.games[i].cells)
    $('#gameHistoryboard').append(result)

    // $('#p0').html(games.games[i].cells[0])
    // $('#p1').html(games.games[i].cells[1])
    // $('#p2').html(games.games[i].cells[2])
    // $('#p3').html(games.games[i].cells[3])
    // $('#p4').html(games.games[i].cells[4])
    // $('#p5').html(games.games[i].cells[5])
    // $('#p6').html(games.games[i].cells[6])
    // $('#p7').html(games.games[i].cells[7])
    // $('#p8').html(games.games[i].cells[8])
  }
}
// const pastGameBoard = function (gamecells) {
//   $('#p0').html(gamecells[0])
//   $('#p1').html(gamecells[1])
//   $('#p2').html(gamecells[2])
//   $('#p3').html(gamecells[3])
//   $('#p4').html(gamecells[4])
//   $('#p5').html(gamecells[5])
//   $('#p6').html(gamecells[6])
//   $('#p7').html(gamecells[7])
//   $('#p8').html(gamecells[8])
// }
const showgamesPlayed = function (data) {
  // console.log('in showgamesPlayed')
  // console.log(store.games.games.length)
  $('#Stats-message').html(`${store.user.email} played ${store.games.games.length} `)
}
const userGamesFail = function (response) {
  console.log('user games fail')
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
  $('#display-message').html('Start a new game please!')
  $('#display-message').css('color', 'red')
  console.log('game x move failed in event')
}
const wrongMove = function () {
  $('#display-message').html('wrong move')
  $('#display-message').css('color', 'red')
  console.log('wrong move')
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
  } else if (row1[0] === 'O' && row1[1] === 'O' && row1[2] === 'O') {
    winO()
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
  store.game.game.over = true
  $('#display-message').html('X WIN! Please start a new game')
  $('#display-message').css('color', 'green')
  console.log('Player X WIN')
  gameOver('X wins!')
}
const winO = function () {
  store.game.game.over = true
  $('#display-message').html('O WIN! Please start a new game')
  $('#display-message').css('color', 'green')
  console.log('Player O WIN')
  gameOver('O wins!')
}
const draw = function () {
  store.game.game.over = true
  $('#display-message').html('DRAW!')
  $('#display-message').css('color', 'yellow')
  console.log('DRAW!')
  gameOver('DRAW!')
}
const gameOver = function (winner) {
  $('#display-message').addClass('unhide')
  $('#display-message').html(`${winner}AF Please start a new game`)
//  $('#display-message').html('GAME OVER!')
  $('#display-message').css('color', 'green')
  $('#gameBoard').addClass('unclickable')
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
  freshboard,
  userGames,
  userGamesFail,
  wrongMove
}
