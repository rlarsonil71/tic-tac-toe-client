'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onCreateGame = function (event) {
  event.preventDefault()
  console.log('create-game ran!')

  const data = getFormFields(this)
  api.createGame(data)
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

const onIndexGame = function (event) {
  event.preventDefault()
  console.log('index-game ran!')

  const data = getFormFields(this)
  api.indexGame(data)
    .then(ui.indexGameSuccess)
    .catch(ui.indexGameFailure)
}

const addHandlers = () => {
  $('#create-game').on('submit', onCreateGame)
  $('#index-game').on('submit', onIndexGame)
}

module.exports = {
  addHandlers
}
