'use strict'

const store = require('../store')

const createGameSuccess = (ajaxResponse) => {
  // console.log('game/api.js (createGameSuccess) ran!  Data is :', ajaxResponse)

  // Store game object
  store.game = ajaxResponse.game

  // Hide the CREATE GAME modal from displaying to the user
  $('#myCreateGameModal').modal('hide')

  // Set GUI status bar after user starts a new game
  document.getElementById('status-bar-2').innerHTML = ' '
}

const createGameFailure = (error) => {
  // console.log('game/api.js (createGameFailure) - Error is :', error)
  console.error(error)

  // Hide the CREATE GAME modal from displaying to the user
  $('#myCreateGameModal').modal('hide')
}

const indexGameSuccess = (ajaxResponse) => {
  // console.log('game/api.js (indexGameSuccess) ran!  Data is :', ajaxResponse)

  // Hide the INDEX GAME modal from displaying to the user
  $('#myIndexGameModal').modal('hide')
}

const indexGameFailure = (error) => {
  // console.log('game/api.js (indexGameFailure) - Error is :', error)
  console.error(error)

  // Hide the INDEX GAME modal from displaying to the user
  $('#myIndexGameModal').modal('hide')
}

const showGameSuccess = (ajaxResponse) => {
  // console.log('sgame/api.js (showGameSuccess) ran!  Data is :', ajaxResponse)

  // Hide the SHOW GAME modal from displaying to the user
  $('#myShowGameModal').modal('hide')
}

const showGameFailure = (error) => {
  // console.log('game/api.js (showGameFailure) - Error is :', error)
  console.error(error)

  // Hide the SHOW GAME modal from displaying to the user
  $('#myShowGameModal').modal('hide')
}

const updateGameStateSuccess = (ajaxResponse) => {
  // console.log('game/api.js (updateGameStateSuccess) ran!  Data is :', ajaxResponse)

  // Hide the UPDATE GAME STATE modal from displaying to the user
  $('#myUpdateGameStateModal').modal('hide')
}

const updateGameStateFailure = (error) => {
  // console.log('game/api.js (updateGameStateFailure) - Error is :', error)
  console.error(error)

  // Hide the UPDATE GAME STATE modal from displaying to the user
  $('#myUpdateGameStateModal').modal('hide')
}

module.exports = {
  createGameSuccess,
  createGameFailure,
  indexGameSuccess,
  indexGameFailure,
  showGameSuccess,
  showGameFailure,
  updateGameStateSuccess,
  updateGameStateFailure
}
