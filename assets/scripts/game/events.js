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

const addHandlers = () => {
  $('#create-game').on('submit', onCreateGame)
}

module.exports = {
  addHandlers
}
