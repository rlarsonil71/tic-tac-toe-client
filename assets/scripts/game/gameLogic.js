'use strict'

const api = require('./api')
const ui = require('./ui')

let gameBoardArray = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']

const playerXWinsString = 'Player X WINS!!!'
const playerOWinsString = 'Player O WINS!!!'
const gameTiedString = 'TIE GAME!!'
const startNewGameText = 'Please start a NEW GAME!'
const playerAnotherGameString = 'Play another game?'

// Requirement:  First player is 'X'
let playerToken = 'X'
const currentCellPosition = -1
let isCurrentGameActive = true
let validMoveCounter = 0   // Used to determine if game was a tie
let foundWinningGameBoard = false
let foundTiedGameBoard = false

const gameDelta = {
  'game': {
    'cell': {
      'index': currentCellPosition,  // positions 0-8 (3x3 grid)
      'value': playerToken           // values: 'X', 'O', ' '
    },
    'over': false   // If current game is over: over=true, else over=false
  }
}

const processClick = function (event, cellPosition, cellValue) {
  if (isCurrentGameActive) {
    if (isValidClick(event, cellPosition, cellValue)) {
      // console.log('game/gameLogic.js (processClick) : isValidClick is TRUE!')

      foundWinningGameBoard = checkforWinningGameBoard()

      if (foundWinningGameBoard === false) {
        foundTiedGameBoard = checkForTiedGameBoard()
      } else {
        // FOUND WINNER!
        // Set GUI status bar to reflect that player WON the game!
        if (playerToken === 'X') {
          document.getElementById('status-bar-1').innerHTML = playerXWinsString
        } else {
          document.getElementById('status-bar-1').innerHTML = playerOWinsString
        }
        document.getElementById('status-bar-2').innerHTML = playerAnotherGameString
      }

      if (foundTiedGameBoard) {
        document.getElementById('status-bar-1').innerHTML = gameTiedString
        document.getElementById('status-bar-2').innerHTML = startNewGameText
      }

      if ((foundWinningGameBoard) || (foundTiedGameBoard)) {
        isCurrentGameActive = false
      } else {
        processNextPlayersTurn()
      }
    }
  }
}

const isValidClick = function (event, cellPosition, cellValue) {
  // console.log('game/gameLogic.js (isValidClick) ran!')
  // console.log('game/gameLogic.js (isValidClick) : Cell (Pos/Value): ', cellPosition, '/', cellValue)

  if (cellValue === ' ') {
    // console.log('game/gameLogic.js (isValidClick) : Cell is empty')

    // Load game board array
    gameBoardArray[cellPosition] = playerToken

    // Show playerToken in cellPosition on game board using jQuery for
    //  the query ID selector element of the cellPosition
    const gameBoardCellIdName = '#game-board-cell-' + cellPosition
    $(gameBoardCellIdName).text(playerToken)

    // Stage gameDelta object to update back-end via game API
    gameDelta.game.cell.index = cellPosition
    gameDelta.game.cell.value = playerToken

    if ((foundWinningGameBoard) || (foundTiedGameBoard)) {
      gameDelta.game.over = true
      isCurrentGameActive = false
    } else {
      gameDelta.game.over = false
    }

    // Send gameDelta object to GAME API (update-game-state)
    api.updateGameState(gameDelta)
      .then(ui.updateGameStateSuccess)
      .catch(ui.updateGameStateFailure)

    // Increment valid move counter
    validMoveCounter++

    return true
  } else {
    return false
  }
}

const processNextPlayersTurn = function () {
  // Toggle playerToken to next token
  if (playerToken === 'X') {
    playerToken = 'O'

    // Display to user in status bar that it is player O's turn
    document.getElementById('status-bar-1').innerHTML = "Player O's TURN!"
  } else {
    playerToken = 'X'

    // Display to user in status bar that it is player X's turn
    document.getElementById('status-bar-1').innerHTML = "Player X's TURN!"
  }
}

const initGameBoard = function () {
  $('#game-board-cell-0').text('T')
  $('#game-board-cell-1').text('I')
  $('#game-board-cell-2').text('C')
  $('#game-board-cell-3').text('T')
  $('#game-board-cell-4').text('A')
  $('#game-board-cell-5').text('C')
  $('#game-board-cell-6').text('T')
  $('#game-board-cell-7').text('O')
  $('#game-board-cell-8').text('E')

  // Reset playerToken to 'X' as it is a requirement that player 'X' always goes first
  playerToken = 'X'
}

const clearGameBoard = function () {
  // console.log('game/gameLogic.js (clearGameBoard) ran!')

  isCurrentGameActive = true
  // console.log('game/gameLogic.js (clearGameBoard) isCurrentGameActive: ', isCurrentGameActive)

  // Clear 'X' and 'O' from each cellPosition on game board (3x3)
  for (let cellPosition = 0; cellPosition < gameBoardArray.length; cellPosition++) {
    const gameBoardCellIdName = '#game-board-cell-' + cellPosition
    $(gameBoardCellIdName).text(' ')
  }

  // Display to user in status bar that it is player X's turn
  document.getElementById('status-bar-1').innerHTML = "Player X's TURN!"

  // Reset playerToken to 'X' as it is a requirement that player 'X' always goes first
  playerToken = 'X'
  validMoveCounter = 0
  foundWinningGameBoard = false
  foundTiedGameBoard = false

  // Clear gameBoardArray
  gameBoardArray = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
}

const checkforWinningGameBoard = function () {
  let foundWin = false

  // debugger

  // console.log('game/gameLogic.js (checkforWinningGameBoard) -- playerToken: ', playerToken)
  // console.log('game/gameLogic.js (checkforWinningGameBoard) -- gameBoardArray: ', gameBoardArray)
  // console.log('game/gameLogic.js (checkforWinningGameBoard) -- isCurrentGameActive: ', isCurrentGameActive)

  if (isCurrentGameActive) {
    if (didPlayerXWinGame()) {
      // Display to user in status bar that player X won the game!
      document.getElementById('status-bar-1').innerHTML = playerXWinsString
      foundWin = true
    }

    if (didPlayerOWinGame()) {
      // Display to user in status bar that player O won the game!
      document.getElementById('status-bar-1').innerHTML = playerOWinsString
      foundWin = true
    }
  }

  return foundWin
}

const didPlayerXWinGame = function () {
  let isWinner = false

  if (
    // Check horizontals
    ((gameBoardArray[0] === 'X') && (gameBoardArray[1] === 'X') && (gameBoardArray[2] === 'X')) ||
    ((gameBoardArray[3] === 'X') && (gameBoardArray[4] === 'X') && (gameBoardArray[5] === 'X')) ||
    ((gameBoardArray[6] === 'X') && (gameBoardArray[7] === 'X') && (gameBoardArray[8] === 'X')) ||
    // Check verticals
    ((gameBoardArray[0] === 'X') && (gameBoardArray[3] === 'X') && (gameBoardArray[6] === 'X')) ||
    ((gameBoardArray[1] === 'X') && (gameBoardArray[4] === 'X') && (gameBoardArray[7] === 'X')) ||
    ((gameBoardArray[2] === 'X') && (gameBoardArray[5] === 'X') && (gameBoardArray[8] === 'X')) ||
    // Check diagonals
    ((gameBoardArray[0] === 'X') && (gameBoardArray[4] === 'X') && (gameBoardArray[8] === 'X')) ||
    ((gameBoardArray[2] === 'X') && (gameBoardArray[4] === 'X') && (gameBoardArray[6] === 'X'))) {
    isWinner = true
    return isWinner
  } else {
    return isWinner
  }
}

const didPlayerOWinGame = function () {
  let isWinner = false

  if (
    // Check horizontals
    ((gameBoardArray[0] === 'O') && (gameBoardArray[1] === 'O') && (gameBoardArray[2] === 'O')) ||
    ((gameBoardArray[3] === 'O') && (gameBoardArray[4] === 'O') && (gameBoardArray[5] === 'O')) ||
    ((gameBoardArray[6] === 'O') && (gameBoardArray[7] === 'O') && (gameBoardArray[8] === 'O')) ||
    // Check verticals
    ((gameBoardArray[0] === 'O') && (gameBoardArray[3] === 'O') && (gameBoardArray[6] === 'O')) ||
    ((gameBoardArray[1] === 'O') && (gameBoardArray[4] === 'O') && (gameBoardArray[7] === 'O')) ||
    ((gameBoardArray[2] === 'O') && (gameBoardArray[5] === 'O') && (gameBoardArray[8] === 'O')) ||
    // Check diagonals
    ((gameBoardArray[0] === 'O') && (gameBoardArray[4] === 'O') && (gameBoardArray[8] === 'O')) ||
    ((gameBoardArray[2] === 'O') && (gameBoardArray[4] === 'O') && (gameBoardArray[6] === 'O'))) {
    isWinner = true
    return isWinner
  } else {
    return isWinner
  }
}

const checkForTiedGameBoard = function () {
  if ((validMoveCounter === 9) && (foundWinningGameBoard === false)) {
    return true
  } else return false
}

module.exports = {
  processClick,
  initGameBoard,
  clearGameBoard
}
