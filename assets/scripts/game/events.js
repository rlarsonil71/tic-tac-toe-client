'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const gameLogic = require('./gameLogic')

// AJAX Game Event Handler Functions
const onCreateGame = function (event) {
  event.preventDefault()
  // console.log('create-game ran!')

  // New game so clear out all cells on game board
  gameLogic.clearGameBoard()

  // Don't need to use data object here!
  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

const onIndexGame = function (event) {
  event.preventDefault()
  // console.log('index-game ran!')

  // Don't need to use data object here!
  api.indexGame()
    .then(ui.indexGameSuccess)
    .catch(ui.indexGameFailure)
}

const onShowGame = function (event) {
  event.preventDefault()
  // console.log('show-game ran!')

  // Don't need to use data object here!
  api.showGame()
    .then(ui.showGameSuccess)
    .catch(ui.showGameFailure)
}

const onUpdateGameState = function (event) {
  event.preventDefault()
  // console.log('update-game-state ran!')

  const data = getFormFields(this)
  api.updateGameState(data)
    .then(ui.updateGameStateSuccess)
    .catch(ui.updateGameStateFailure)
}

// Game Board Event Handler Functions
const onClickBoard = function (event) {
  event.preventDefault()
  // console.log('game/events.js (onClickBoard) - Event: ', event)
  // console.log('game/events.js (onClickBoard) - Event Target: ', event.target)
  // console.log('game/events.js (onClickBoard) - Event Target Id: ', event.target.id)

  // Get cell position of user click on game board
  const targetIdString = event.target.id  // Last character is cellPosition
  const cellPosition = targetIdString.substr(targetIdString.length - 1)
  // console.log('game/events.js (onClickBoard): Cell Position: ', cellPosition)

  // Get cell value of user click on game board
  // console.log('game/events.js (onClickBoard): THIS: ', $(this))
  const cellValue = $(this).text()
  // console.log('game/events.js (onClickBoard): Cell Value: ', cellValue)

  gameLogic.processClick(event, cellPosition, cellValue)
}

const addHandlers = () => {
  // Set up event handler to create new game modal
  $('#create-game').on('submit', onCreateGame)

  // Set up event handlers for temporary simulation modals to test GAME API
  //  AJAX calls
  $('#index-game').on('submit', onIndexGame)
  $('#show-game').on('submit', onShowGame)
  $('#update-game-state').on('submit', onUpdateGameState)

  // Set up game board event handlers for each game board cell (3x3)
  for (let cellPosition = 0; cellPosition < 9; cellPosition++) {
    const gameBoardCellIdName = '#game-board-cell-' + cellPosition
    $(gameBoardCellIdName).on('click', onClickBoard)
  }
}

module.exports = {
  addHandlers
}
