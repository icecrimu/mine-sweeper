import { createBoard } from "./minesweeper.js"

const BOARD_SIZE = 10
const NUMBER_OF_MINES = 5

const board = createBoard(BOARD_SIZE, NUMBER_OF_MINES)

console.log(board)

const boardElement = document.querySelector(".board")
boardElement.style.setProperty("--size", BOARD_SIZE)
board.forEach(row => {
  row.forEach(tile => {
    boardElement.append(tile.element)
  })
})
