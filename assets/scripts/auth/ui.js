'use strict'

const store = require('../store')

const signUpSuccess = (data) => {
  console.log('signUpSuccess ran!  Data is :', data)
}

const signUpFailure = (error) => {
  console.log('Sign-up failure! Error is :', error)
  console.error(error)
}

const signInSuccess = (response) => {
  console.log('signInSuccess ran!  Data is :', response)
  // Store user object
  store.user = response.user
}

const signInFailure = (error) => {
  console.log('Sign-in failure!  Error is :', error)
}

const changePasswordSuccess = (data) => {
  console.log('Password successfully changed')
}

const changePasswordFailure = (error) => {
  console.log('Change-Password failure!  Error is :', error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  // signOutSuccess,
  // signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
