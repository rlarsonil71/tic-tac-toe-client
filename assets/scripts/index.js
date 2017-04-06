'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')

const authEvents = require('./auth/events.js')

// On document ready
$(() => {
  setAPIOrigin(location, config)
  console.log('index.js: Inside Tic Tac Toe Game (on document ready)')
  $('#select-sign-up').on('click', function () {
    $('#mySignUpModal').modal('show')
  })
  authEvents.addHandlers()
})
