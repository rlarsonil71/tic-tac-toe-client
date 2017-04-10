'use strict'

const store = require('../store')

const gameLogic = require('../game/gameLogic')

const errorTextUponSignUpFailure = 'User has already signed up.  Please sign in.'
const errorTextUponIncorrectPasswordFailure = 'Password is incorrect.  Please type in correct password.'

const welcomeText = 'Welcome!!!'
const signUpOrSignInText = 'Please SIGN UP or SIGN IN!'
const startNewGameText = 'Please start a NEW GAME!'
const thankYouTextUponSignOutSuccess = 'Thank you for playing!!!'

const signUpSuccess = (ajaxResponse) => {
  // console.log('signUpSuccess ran!  Data is :', ajaxResponse)

  // Clear error text message in SIGN UP modal.
  $('#sign-up-footer').html(' ')

  // Hide the modal from displaying to the suer
  $('#mySignUpModal').modal('hide')

  // Upon successful user sign up, hide SIGN UP modal button
  $('#select-sign-up').hide()

  // Upon successful user sign up, show SIGN IN modal
  $('#mySignInModal').modal('show')
}

const signUpFailure = (error) => {
  // console.log('Sign-up failure! Error is :', error)
  console.error(error)

  // Display error text in SIGN UP modal footer back to user that the user
  //  has already signed up
  // NOTE: Front-end client (auth/events.js: onSignUp) checks for invalid
  //  password mismatch prior to submitting AJAX sign-up call so an invalid
  //  password mismatch will not get this far.
  $('#sign-up-footer').html(errorTextUponSignUpFailure)

  // If user closes out of SIGN UP modal, clear error text message.
  $('#close-sign-up-modal').on('click', function () {
    $('#sign-up-footer').html(' ')
  })

  // DELAY 2 seconds for user to read error text and then close SIGN UP modal
  //  and show SIGN IN modal.
  window.setTimeout(function () {
    // Hide the modal from displaying to the suer
    $('#mySignUpModal').modal('hide')
    $('#mySignInModal').modal('show')
  }, 2000)
}

const signInSuccess = (ajaxResponse) => {
  // console.log('signInSuccess ran!  Data is :', ajaxResponse)

  // Clear error text message in SIGN IN modal
  $('#sign-in-footer').html(' ')

  // Store user object
  store.user = ajaxResponse.user

  // console.log('ui.js: signInSuccess - store is: ', store)

  // Hide the SIGN IN modal from displaying to the suer
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

  // Set GUI status bar after user signs in
  const userString = 'Welcome ' + store.user.email + '!!!'
  document.getElementById('status-bar-1').innerHTML = userString
  document.getElementById('status-bar-2').innerHTML = startNewGameText

  gameLogic.initGameBoard()
}

const signInFailure = (error) => {
  // console.log('Sign-in failure!  Error is :', error)
  console.error(error)

  // Display error text in SIGN IN modal footer back to user to correct
  //  incorrect password
  $('#sign-in-footer').html(errorTextUponIncorrectPasswordFailure)

  // If user closes out of SIGN IN modal, clear error text message.
  $('#close-sign-in-modal').on('click', function () {
    $('#sign-in-footer').html(' ')
  })
}

const changePasswordSuccess = (ajaxResponse) => {
  // console.log('Password successfully changed')

  // Clear error text message in CHANGE PASSWORD modal
  $('#change-password-footer').html(' ')

  // Hide the CHANGE PASSWORD modal from displaying to the suer
  $('#myChangePasswordModal').modal('hide')
}

const changePasswordFailure = (error) => {
  // console.log('Change-Password failure!  Error is :', error)
  console.error(error)

  // Display error text in CHANGE PASSWORD modal footer back to user to correct
  //  incorrect original password
  $('#change-password-footer').html(errorTextUponIncorrectPasswordFailure)

  // If user closes out of CHANGE PASSWORD modal, clear error text message in
  //  CHANGE PASSWORD modal
  $('#close-change-password-modal').on('click', function () {
    $('#change-password-footer').html(' ')
  })
}

const signOutSuccess = () => {
  // console.log('signOutSuccess ran!  Nothing was returned')

  // OREO COOKIE!
  // console.log('store is: ', store)
  // Clear user
  store.user = null
  // console.log('store is: ', store)

  // Display thank you message in SIGN OUT modal footer
  $('#sign-out-footer').html(thankYouTextUponSignOutSuccess)

  // DELAY 3 seconds for user to read thank you text and then close SIGN OUT modal
  //  and update other modal buttons and game board
  window.setTimeout(function () {
    // Hide the SIGN OUT modal from displaying to the suer
    $('#mySignOutModal').modal('hide')

    // Upon successful user sign out, show SIGN UP modal button
    $('#select-sign-up').show()

    // Upon successful user sign out, show SIGN IN modal button
    $('#select-sign-in').show()

    // Upon successful user sign out, hide CHANGE PASSWORD modal button
    $('#select-change-password').hide()

    // Upon successful user sign out, hide SIGN OUT modal button
    $('#select-sign-out').hide()

    // Upon successful user sign out, hide CREATE GAME modal button
    $('#select-create-game').hide()

    // Set GUI status bar on game initialization
    document.getElementById('status-bar-1').innerHTML = welcomeText
    document.getElementById('status-bar-2').innerHTML = signUpOrSignInText

    gameLogic.initGameBoard()
  }, 3000)
}

const signOutFailure = (error) => {
  console.log('Sign-out failure!  Error is :', error)

  // Hide the SIGN OUT modal from displaying to the suer
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
