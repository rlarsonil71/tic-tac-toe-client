'use strict'

const store = require('../store')

const errorTextUponSignUpFailure = 'Password is incorrect.  Please type in correct password.'

const signUpSuccess = (ajaxResponse) => {
  console.log('signUpSuccess ran!  Data is :', ajaxResponse)

  // Clear error text message.
  $('#sign-up-footer').html(' ')

  // Hide the modal from displaying to the suer
  $('#mySignUpModal').modal('hide')

  // Upon successful user sign up, hide SIGN UP modal button
  $('#select-sign-up').hide()

  // Upon successful user sign up, show SIGN IN modal
  $('#mySignInModal').modal('show')
}

const signUpFailure = (error) => {
  console.log('Sign-up failure! Error is :', error)
  console.error(error)

  // Display error text in SIGN UP modal footer back to user to correct
  //  incorrect password mismatch
  $('#sign-up-footer').html(errorTextUponSignUpFailure)

  // If user closes out of SIGN UP modal, clear error text message.
  $('#close-sign-up-modal').on('click', function () {
    $('#sign-up-footer').html(' ')
  })
}

const signInSuccess = (ajaxResponse) => {
  console.log('signInSuccess ran!  Data is :', ajaxResponse)
  // Store user object
  store.user = ajaxResponse.user

  console.log('ui.js: signInSuccess - store is: ', store)
  // Hide the modal from displaying to the suer
  $('#mySignInModal').modal('hide')

  // Upon successful user sign in, hide SIGN UP modal button
  $('#select-sign-up').hide()

  // Upon successful user sign in, hide SIGN IN modal button
  $('#select-sign-in').hide()

  // Upon successful user sign in, show CHANGE PASSWORD modal button
  $('#select-change-password').show()

  // Upon successful user sign in, show SIGN OUT modal button
  $('#select-sign-out').show()

  // Upon successful user sign in, show START NEW GAME modal button
  $('#select-create-game').show()
}

const signInFailure = (error) => {
  console.log('Sign-in failure!  Error is :', error)

  // Hide the modal from displaying to the suer
  $('#mySignInModal').modal('hide')
}

const changePasswordSuccess = (ajaxResponse) => {
  console.log('Password successfully changed')

  // Clear error text message.
  $('#change-password-footer').html(' ')

  // Hide the modal from displaying to the suer
  $('#myChangePasswordModal').modal('hide')
}

const changePasswordFailure = (error) => {
  console.log('Change-Password failure!  Error is :', error)

  // Display error text in CHANGE PASSWORD modal footer back to user to correct
  //  incorrect original password
  $('#change-password-footer').html(errorTextUponSignUpFailure)

  // If user closes out of CHANGE PASSWORD modal, clear error text message.
  $('#close-change-password-modal').on('click', function () {
    $('#change-password-footer').html(' ')
  })
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

  // Upon successful user sign out, show SIGN UP modal button
  $('#select-sign-up').show()

  // Upon successful user sign out, show SIGN IN modal button
  $('#select-sign-in').show()

  // Upon successful user sign out, hide CHANGE PASSWORD modal button
  $('#select-change-password').hide()

  // Upon successful user sign out, hide SIGN OUT modal button
  $('#select-sign-out').hide()
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
