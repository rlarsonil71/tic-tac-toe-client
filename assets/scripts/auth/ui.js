'use strict'

// const store = require('../store')

const signUpSuccess = (data) => {
  console.log('signUpSuccess ran!  Data is :', data)
}

const signUpFailure = (error) => {
  console.log('Sign-up failure! Error is :', error)
  console.error(error)
}

module.exports = {
  signUpSuccess,
  signUpFailure
  // signInSuccess,
  // signInFailure,
  // signOutSuccess,
  // signOutFailure,
  // changePasswordSuccess,
  // changePasswordFailure
}
