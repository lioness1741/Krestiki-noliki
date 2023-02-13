let players = ["x", "o"];
let activePlayer = 0;
let board;

let stepX = [];
let stepO = [];
let cellCount = 0;

let winnerPosition = [
  ["0", "0", "0", "1", "0", "2"],
  ["1", "0", "1", "1", "1", "2"],
  ["2", "0", "2", "1", "2", "2"],
  ["0", "0", "1", "0", "2", "0"],
  ["0", "1", "1", "1", "2", "1"],
  ["0", "2", "1", "2", "2", "2"],
  ["0", "2", "1", "1", "2", "0"],
  ["0", "0", "1", "1", "2", "2"]
];

function startGame() {
  board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ];
  activePlayer = players[Math.floor(Math.random() * 2)];
  console.log("Первым начинает игрок: " + activePlayer);

  renderBoard(board);
  cellCount = 0;
}

function click(numberRow, numberCol) {
  board[numberRow][numberCol] = activePlayer;

  renderBoard(board);
  cellCount++;
  if (cellCount === 9) {
    alert("Ничья");
  }
  if (activePlayer === players[0]) {
    stepX.push(numberRow);
    stepX.push(numberCol);
  } else if (activePlayer === players[1]) {
    stepO.push(numberRow);
    stepO.push(numberCol);
  }
  console.log(stepX);
  console.log(stepO);
}

function showWinner() {
  let showWinList;
  for (let i = 0; i < winnerPosition.length; i++) {
    let winnerArr = winnerPosition[i];
    let position = [];
    for (let j = 0; j < winnerArr.length; j++) {
      if (j % 2 == 0) {
        let firstW = winnerArr[j];
        secondW = winnerArr[j - 1];
        position.push(board[firstW][secondW]);
      }
    }
    if (position[0] == position[1] && position[1] == position[2] && position[2] !== "") {

      if (position[0] == players[0] && position[1] == players[0] && position[2] == players[0]) {
        showWinList = 'выиграл игрок ' + players[0];
      } else {
        showWinList = 'выиграл игрок ' + players[1];
      }
    }
    return showWinList;
  }
  return null;
}
