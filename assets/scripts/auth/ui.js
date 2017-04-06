'use strict'

const store = require('../store')

const signUpSuccess = (data) => {
  console.log('signUpSuccess ran!  Data is :', data)

  // Hide the modal from displaying to the suer
  $('#mySignUpModal').modal('hide')
}

const signUpFailure = (error) => {
  console.log('Sign-up failure! Error is :', error)
  console.error(error)

  // Hide the modal from displaying to the suer
  $('#mySignUpModal').modal('hide')
}

const signInSuccess = (response) => {
  console.log('signInSuccess ran!  Data is :', response)
  // Store user object
  store.user = response.user

  console.log('ui.js: signInSuccess - store is: ', store)
  // Hide the modal from displaying to the suer
  $('#mySignInModal').modal('hide')
}

const signInFailure = (error) => {
  console.log('Sign-in failure!  Error is :', error)

  // Hide the modal from displaying to the suer
  $('#mySignInModal').modal('hide')
}

const changePasswordSuccess = (data) => {
  console.log('Password successfully changed')

  // Hide the modal from displaying to the suer
  $('#myChangePasswordModal').modal('hide')
}

const changePasswordFailure = (error) => {
  console.log('Change-Password failure!  Error is :', error)

  // Hide the modal from displaying to the suer
  $('#myChangePasswordModal').modal('hide')
}

const signOutSuccess = () => {
  console.log('signOutSuccess ran!  Nothing was returned')

  // OREO COOKIE!
  console.log('store is: ', store)
  // Clear user
  store.user = null
  console.log('store is: ', store)

  // Hide the modal from displaying to the suer
  $('#mySignOutModal').modal('hide')
}

const signOutFailure = (error) => {
  console.log('Sign-out failure!  Error is :', error)

  // Hide the modal from displaying to the suer
  $('#mySignOutModal').modal('hide')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
