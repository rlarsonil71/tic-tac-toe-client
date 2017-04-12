'use strict'

const store = require('../store')

const gameLogic = require('./gameLogic')

const createGameSuccess = (ajaxResponse) => {
  // console.log('game/ui.js (createGameSuccess) ran!  Data is :', ajaxResponse)

  // Store game object
  store.game = ajaxResponse.game

  // Hide the CREATE GAME modal from displaying to the user
  $('#myCreateGameModal').modal('hide')

  // Set GUI status bar after user starts a new game
  document.getElementById('status-bar-2').innerHTML = ' '
}

const createGameFailure = (error) => {
  // console.log('game/ui.js (createGameFailure) - Error is :', error)
  console.error(error)

  // Hide the CREATE GAME modal from displaying to the user
  $('#myCreateGameModal').modal('hide')
}

const showUserStatsSuccess = (ajaxResponse) => {
  // console.log('game/ui.js (showUserStatsSuccess) ran!  Data is :', ajaxResponse)

  // Hide the SHOW USER STATS GAME modal from displaying to the user
  $('#myShowUserStatsModal').modal('hide')

  // Show User Stats - Number of Games Played to the GUI status bar after user selects
  //  the SHOW USER STATS GAME modal button
  // document.getElementById('status-bar-1').innerHTML = 'STATS1'
  // document.getElementById('status-bar-2').innerHTML = 'STATS2'
  // Set GUI status bar after user signs in
  const userString = 'Welcome ' + store.user.email + '!!!'
  document.getElementById('status-bar-1').innerHTML = userString

  // Display the number of games for the current user to the status bar
  //  (You have played X games!)
  let gamesPlayedString = 'You have played ' + ajaxResponse.games.length

  if (ajaxResponse.games.length === 1) {
    gamesPlayedString = gamesPlayedString + ' game!'
  } else {
    gamesPlayedString = gamesPlayedString + ' games!'
  }
  // console.log('GAMES PLAYED: ', ajaxResponse.games.length)
  document.getElementById('status-bar-2').innerHTML = gamesPlayedString
  // gameLogic.showUserStats()
}

const showUserStatsFailure = (error) => {
  // console.log('game/ui.js (showUserStatsFailure) - Error is :', error)
  console.error(error)

  // Hide the SHOW USER STATS GAME modal from displaying to the user
  $('#myShowUserStatsModal').modal('hide')
}

const indexGameSuccess = (ajaxResponse) => {
  // console.log('game/ui.js (indexGameSuccess) ran!  Data is :', ajaxResponse)

  // Hide the INDEX GAME modal from displaying to the user
  $('#myIndexGameModal').modal('hide')
}

const indexGameFailure = (error) => {
  // console.log('game/ui.js (indexGameFailure) - Error is :', error)
  console.error(error)

  // Hide the INDEX GAME modal from displaying to the user
  $('#myIndexGameModal').modal('hide')
}

const showGameSuccess = (ajaxResponse) => {
  // console.log('sgame/ui.js (showGameSuccess) ran!  Data is :', ajaxResponse)

  // Hide the SHOW GAME modal from displaying to the user
  $('#myShowGameModal').modal('hide')
}

const showGameFailure = (error) => {
  // console.log('game/ui.js (showGameFailure) - Error is :', error)
  console.error(error)

  // Hide the SHOW GAME modal from displaying to the user
  $('#myShowGameModal').modal('hide')
}

const updateGameStateSuccess = (ajaxResponse) => {
  // console.log('game/ui.js (updateGameStateSuccess) ran!  Data is :', ajaxResponse)

  // Hide the UPDATE GAME STATE modal from displaying to the user
  $('#myUpdateGameStateModal').modal('hide')
}

const updateGameStateFailure = (error) => {
  // console.log('game/ui.js (updateGameStateFailure) - Error is :', error)
  console.error(error)

  // Hide the UPDATE GAME STATE modal from displaying to the user
  $('#myUpdateGameStateModal').modal('hide')
}

module.exports = {
  createGameSuccess,
  createGameFailure,
  showUserStatsSuccess,
  showUserStatsFailure,
  indexGameSuccess,
  indexGameFailure,
  showGameSuccess,
  showGameFailure,
  updateGameStateSuccess,
  updateGameStateFailure
}
