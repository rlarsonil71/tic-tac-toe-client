'use strict'

// const store = require('../store')

const createGameSuccess = (ajaxResponse) => {
  console.log('createGameSuccess ran!  Data is :', ajaxResponse)

  // Hide the modal from displaying to the suer
  $('#myCreateGameModal').modal('hide')
}

const createGameFailure = (error) => {
  console.log('Create Game failure! Error is :', error)
  console.error(error)

  // Hide the modal from displaying to the suer
  $('#myCreateGameModal').modal('hide')
}

// const signInSuccess = (ajaxResponse) => {
//   console.log('signInSuccess ran!  Data is :', ajaxResponse)
//   // Store user object
//   store.user = ajaxResponse.user
//
//   console.log('ui.js: signInSuccess - store is: ', store)
//   // Hide the modal from displaying to the suer
//   $('#mySignInModal').modal('hide')
// }
//
// const signInFailure = (error) => {
//   console.log('Sign-in failure!  Error is :', error)
//
//   // Hide the modal from displaying to the suer
//   $('#mySignInModal').modal('hide')
// }
//
// const changePasswordSuccess = (ajaxResponse) => {
//   console.log('Password successfully changed')
//
//   // Hide the modal from displaying to the suer
//   $('#myChangePasswordModal').modal('hide')
// }
//
// const changePasswordFailure = (error) => {
//   console.log('Change-Password failure!  Error is :', error)
//
//   // Hide the modal from displaying to the suer
//   $('#myChangePasswordModal').modal('hide')
// }
//
// const signOutSuccess = () => {
//   console.log('signOutSuccess ran!  Nothing was returned')
//
//   // OREO COOKIE!
//   console.log('store is: ', store)
//   // Clear user
//   store.user = null
//   console.log('store is: ', store)
//
//   // Hide the modal from displaying to the suer
//   $('#mySignOutModal').modal('hide')
// }
//
// const signOutFailure = (error) => {
//   console.log('Sign-out failure!  Error is :', error)
//
//   // Hide the modal from displaying to the suer
//   $('#mySignOutModal').modal('hide')
// }

module.exports = {
  createGameSuccess,
  createGameFailure
  // signInSuccess,
  // signInFailure,
  // changePasswordSuccess,
  // changePasswordFailure,
  // signOutSuccess,
  // signOutFailure
}
