'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onCreateGame = function (event) {
  event.preventDefault()
  console.log('create-game ran!')

  // Don't need to use data object here!
  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

const onIndexGame = function (event) {
  event.preventDefault()
  console.log('index-game ran!')

  // Don't need to use data object here!
  api.indexGame()
    .then(ui.indexGameSuccess)
    .catch(ui.indexGameFailure)
}

const onShowGame = function (event) {
  event.preventDefault()
  console.log('show-game ran!')

  // Don't need to use data object here!
  api.showGame()
    .then(ui.showGameSuccess)
    .catch(ui.showGameFailure)
}

const onUpdateGameState = function (event) {
  event.preventDefault()
  console.log('update-game-state ran!')

  const data = getFormFields(this)
  api.updateGameState(data)
    .then(ui.updateGameStateSuccess)
    .catch(ui.updateGameStateFailure)
}

const addHandlers = () => {
  $('#create-game').on('submit', onCreateGame)
  $('#index-game').on('submit', onIndexGame)
  $('#show-game').on('submit', onShowGame)
  $('#update-game-state').on('submit', onUpdateGameState)
}

module.exports = {
  addHandlers
}
