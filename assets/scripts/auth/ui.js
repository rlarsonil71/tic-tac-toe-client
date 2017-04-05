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

const signOutSuccess = () => {
  console.log('signOutSuccess ran!  Nothing was returned')

  // OREO COOKIE!
  console.log('store is: ', store)
  // Clear user
  store.user = null
  console.log('store is: ', store)
}

const signOutFailure = (error) => {
  console.log('Sign-out failure!  Error is :', error)
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
