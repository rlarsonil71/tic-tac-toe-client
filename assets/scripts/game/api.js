'use strict'

const config = require('../config')
const store = require('../store')

// const signUp = (data) => {
//   // console.log('api.js: Inside signUp (data is ' + data + ')')
//
//   return $.ajax({
//     url: config.apiOrigin + '/sign-up',
//     method: 'POST',
//     // data: data  (Same thing!)
//     data
//   })
// }

// const signIn = (data) => {
//   // console.log('api.js: Inside signIn (data is ' + data + ')')
//
//   return $.ajax({
//     url: config.apiOrigin + '/sign-in',
//     method: 'POST',
//     // data: data  (Same thing!)
//     data
//   })
// }

// const changePassword = (data) => {
//   console.log('api.js: Inside changePassword (data is ' + data + ')')
//
//   // store.user is stored in ui.js -> signInSuccess
//   return $.ajax({
//     url: config.apiOrigin + '/change-password/' + store.user.id,
//     method: 'PATCH',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//       // AJAX or RAILS doesn't know what to do with 2nd header below
//       // Content-Type: application/json
//     },
//     data
//   })
// }

// const signOut = () => {
//   console.log('api.js: Inside signOut')
//
//   // store.user is stored in ui.js -> signInSuccess
//   return $.ajax({
//     url: config.apiOrigin + '/sign-out/' + store.user.id,
//     method: 'DELETE',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }

const createGame = () => {
  console.log('api.js: Inside createGame')

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
  console.log('api.js: Inside indexGame')

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
  console.log('api.js: Inside showGame')

  // store.game is stored in games/ui.js -> createGameSuccess
  return $.ajax({
    url: config.apiOrigin + '/games/' + store.game.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createGame,
  indexGame,
  showGame
}
