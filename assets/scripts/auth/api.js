'use strict'

const config = require('../config')
// const store = require('../store')

const signUp = (data) => {
  console.log('api.js: Inside signUp function')
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    // data: data  (Same thing!)
    data
  })
}

module.exports = {
  signUp
  // signIn,
  // signOut,
  // changePassword
}
