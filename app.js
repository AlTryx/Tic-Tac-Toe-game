const gameBoard = document.querySelector('#gameboard')
const infoDisplay = document.querySelector('#info')
const startCells = [
    "", "", "",
    "", "", "",
    "", "", "",
]

infoDisplay.textContent = "Circle goes first"

function createBoard() {
    startCells.forEach((cell, index) => {
       const cellElement = document.createElement("div")
       cellElement.classList.add("square")
       gameBoard.append(cellElement)
       const circleElement = document.createElement("div")
       circleElement.classList.add('circle')
       cellElement.append(circleElement)
    })
}
createBoard()

