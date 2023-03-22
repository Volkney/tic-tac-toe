const player1choice = document.querySelectorAll('.choice1');
const player2choice = document.querySelectorAll('.choice2');
const choiceDisplay = document.getElementById('choice-display');

const getPlayerChoice = function(){
player1choice.forEach(boton => {
  boton.addEventListener('click', e => {
    let player1Symbol = e.target.value;
    console.log(player1Symbol);
    let player2Symbol = '';
    if(player1Symbol === 'x'){
    	player1choice[1].disabled = true;
      player2choice[0].disabled = true;
      player2Symbol = 'o'
    }
    else{
    	player1choice[0].disabled = true;
      player2choice[1].disabled = true;
       player2Symbol = 'x';
    }
    choiceDisplay.innerText = `Player 1 is ${player1Symbol.toUpperCase()} and player 2 ${player2Symbol.toUpperCase()}`;
  	});
	});
};
getPlayerChoice();

function createPlayer(playerName, chosenSymbol){
  player = {
    playerName: playerName,
    chosenSymbol: chosenSymbol,
    displayInfo: function(){
      return console.log(`$(this.playerName) chose $(chosenSymbol)`);
    }
  }
  return {player};
}

//var player1 = createPlayer("John", "X");
//var player2 = createPlayer("Jane", "O");

//player1.player.displayInfo(); // Outputs "John chose X"
//player2.player.displayInfo(); // Outputs "Jane chose O"

//gameboard module

const gameBoard = (() =>{
  board = ['', '', '',
           '', '', '',
           '', '', '']
  
  getBoard = () => board;
  
  resetBoard = () => board = ['', '', '',
                              '', '', '',
                              '', '', '']
   const updateBoard = (index, chosenSymbol) => {
    board[index] = symbol;
  };
  const winningCombos = [      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
  const checkWin = (symbol) =>{
  for (let i = 0; i < winningCombos.length; i++) {
      const [a, b, c] = winningCombos[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
  }
});

const gameLogic = (gameboard, player1, player2) => {
  
  // Variable to keep track of current player
  let currentPlayer = player1;
  
  // Function to switch to the other player
  const switchPlayer = () => {
  if (currentPlayer === player1) {
    currentPlayer = player2;
  } else {
    currentPlayer = player1;
  }
};
  
  // Function to handle a player's move
  const makeMove = (index) => {
    // Get the symbol of the current player
    const symbol = currentPlayer.chosenSymbol;
    
    // Check if the index is valid
    if (index < 0 || index >= 9) {
      console.log("Invalid index");
      return;
    }
    
    // Check if the index is already occupied
    if (gameboard.getBoard()[index] !== '') {
      console.log("Index already occupied");
      return;
    }
    
    // Update the game board
    gameboard.updateBoard(index, symbol);
    
    // Check for a winner
    const winner = gameboard.checkWin(symbol);
    if (winner) {
      console.log(currentPlayer.playerName + " wins!");
      return;
    }
    
    // Switch to the other player
    switchPlayer();
  };
  
  return { makeMove };
};






