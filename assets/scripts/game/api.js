'use strict'

const config = require('../config')
const store = require('../store')

const createGame = () => {
  // console.log('game/api.js (createGame)')

  // store.user is stored in ui.js -> signInSuccess
  return $.ajax({
    url: config.apiOrigin + '/games/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const indexGame = () => {
  // console.log('game/api.js (indexGame)')

  // store.user is stored in ui.js -> signInSuccess
  return $.ajax({
    url: config.apiOrigin + '/games/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const showGame = () => {
  // console.log('game/api.js (showGame)')

  // store.game is stored in games/ui.js -> createGameSuccess
  return $.ajax({
    url: config.apiOrigin + '/games/' + store.game.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateGameState = (data) => {
  // console.log('game/api.js (updateGameState) - (data is ', data)

  // store.game is stored in games/ui.js -> createGameSuccess
  return $.ajax({
    url: config.apiOrigin + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
      // AJAX or RAILS doesn't know what to do with 2nd header below
      // Content-Type: application/json
    },
    data
  })
}

module.exports = {
  createGame,
  indexGame,
  showGame,
  updateGameState
}
