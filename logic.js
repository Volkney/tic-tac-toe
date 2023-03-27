const playerChoice = document.querySelectorAll('.choice1');
const choiceDisplay = document.getElementById('choice-display');
const winnerDisplay = document.getElementById('winner-display');
const playAgain = document.getElementById('play-again');
const container = document.querySelector('.board-container'); // get the container element
const indices = container.querySelectorAll('.index'); // get all the index elements inside the container
let gameEnded = false;


const Player = (symbol, playerNumber, player1, player2) => {
  const getSymbol = () => symbol;
  const getNumber = () => playerNumber;
  //factory function
  const Game = ((player1, player2) => {
    let currentPlayer = player1;
    // add a variable to keep track of the number of moves made
    let movesMade = 0;
    //first module
    const getBoard = () => {
      const indexValues = [];
      indices.forEach(index => {
        indexValues.push(index.getAttribute('data-value'));
      });
      return indexValues;
    };
    //second module
    const switchPlayers = () => {
      if(!player1 || !player2) {
        return console.log('player not defined'); // players not yet defined
      }
      if(currentPlayer === player1){
        currentPlayer = player2;
        choiceDisplay.textContent = `Current Player: ${currentPlayer.getSymbol()}`;
      } else {
        currentPlayer = player1;
        choiceDisplay.textContent = `Current Player: ${currentPlayer.getSymbol()}`;
      }
    };
    //third module
    const updateBoard = () => {
      gameEnded = false;
      if (!player1 || !player2) {
        return console.log('player not defined'); // players not yet defined
      } else {
        let board = getBoard();
        indices.forEach(element => {
          const handleClick = (e) => {
            const clickedGrid = e.target.dataset.value;
            if (!gameEnded) {
              for (let i = 0; i < board.length; i++) {   
                           
                if (clickedGrid === board[i] && indices[i].textContent === '') {
                  console.log(`this is clicknumber ${i}`);//this could be use as a turn counter
                  indices[i].textContent = currentPlayer.getSymbol();
                  board[i] = currentPlayer.getSymbol();
                  console.log(board); 
                  checkWin(board);
                  switchPlayers();
                }  
              }           
            }
          };
          element.addEventListener('click', handleClick);
        });
      }
    };
  //fourth module


  // modify checkWin function to check for a tie
  const checkWin = (board) => {
    const winningIndices = [
      // horizontal
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      // vertical
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      // diagonal
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < winningIndices.length; i++) {
      const [a, b, c] = winningIndices[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        // declare the winner
        console.log(`${currentPlayer.getNumber()} wins!`);
        winnerDisplay.textContent = `${currentPlayer.getNumber()} wins!`;
        choiceDisplay.style.display = 'none';
        gameEnded = true;
        return;
      }
    }
    movesMade++;
    if (movesMade === 9) {
      checkForTie(board); // call checkForTie function
    }
  };
  //fifth module
  const checkForTie = (board) => {
    if (!board.includes('')) {
      console.log(`Nobody wins!`);
      winnerDisplay.textContent = `Nobody wins!`;
      choiceDisplay.remove();
      gameEnded = true;
      return true;
    }
    return false;
  };

  //sixth module
  const resetBoard = () => {
    playAgain.addEventListener('click', () => {
      location.reload();
    });
  };
  
  

  updateBoard();  //for this to run the whole modules
  resetBoard();
  //checkForTie();
  return {
    getBoard,
    checkWin,
    updateBoard,
    switchPlayers
    
    };
  });
  return {
    getNumber,
    getSymbol,
    Game,
    player1,
    player2
  };
};

//checks for parameters to feed information into the facotry function
function getPlayersChoice() {
  let player1;
  let player2;

  playerChoice.forEach(choice => {
    choice.addEventListener('click', e => {

      const indexValue = e.target.value;
      if (indexValue === 'X') {
        player1 = Player(indexValue, 'Player 1');
        player2 = Player('O', 'Player 2');
        player1.Game(player1, player2); // call Game function with player1 and player2 objects as arguments
        playerChoice[1].disabled = true;
      } else {
        player1 = Player(indexValue, 'Player 1');
        player2 = Player('X', 'Player 2');
        player2.Game(player1, player2); // call Game function with player1 and player2 objects as arguments
        playerChoice[0].disabled = true;
      }
      // display the current player and their symbol
      choiceDisplay.textContent = `Current Player: ${player1.getNumber()} with ${player1.getSymbol()}`;
      return { player1, player2 };
    });
  });
}






getPlayersChoice();


