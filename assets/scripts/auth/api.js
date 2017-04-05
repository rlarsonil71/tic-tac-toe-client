'use strict'

const config = require('../config')
const store = require('../store')

const signUp = (data) => {
  console.log('api.js: Inside signUp function')
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    // data: data  (Same thing!)
    data
  })
}

const signIn = (data) => {
  // console.log('not here?')
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    // data: data  (Same thing!)
    data
  })
}

const changePassword = (data) => {
  console.log('Inside changePassword (data is ' + data + ')')

  // store.user is stored in ui.js -> signInSuccess
  return $.ajax({
    url: config.apiOrigin + '/change-password/' + store.user.id,
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
  signUp,
  signIn,
  // signOut,
  changePassword
}
