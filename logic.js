const player1choice = document.querySelectorAll('.choice1');
const choiceDisplay = document.getElementById('choice-display');

const getPlayerChoice = function(){
  const players = {
    player1: {
      symbol: '',
    },
    player2: {
      symbol: '',
    },
  };

  const setPlayerSymbols = function(player1Symbol) {
    players.player1.symbol = player1Symbol;
    if(player1Symbol === 'x'){
      player1choice[1].disabled = true;
      players.player2.symbol = 'o';
    }
    else{
      player1choice[0].disabled = true;
      players.player2.symbol = 'x';
    }
    choiceDisplay.innerText = `Player 1 is ${players.player1.symbol.toUpperCase()} and player 2 ${players.player2.symbol.toUpperCase()}`;
  };

  const getPlayer1Symbol = function() {
    return players.player1.symbol;
  };

  const getPlayer2Symbol = function() {
    return players.player2.symbol;
  };

  const getPlayers = function() {
    return players;
  };

  player1choice.forEach(boton => {
    boton.addEventListener('click', e => {
      setPlayerSymbols(e.target.value);
    });
  });

  return {
    getPlayers,
    getPlayer1Symbol,
    getPlayer2Symbol,
  };
};




getPlayerChoice();

const gameLogic = (gameboard, getPlayers, getPlayer1Symbol, getPlayer2Symbol) => {
  const game = getPlayerChoice();
    console.log(game.getPlayers()); // logs the players object
    console.log(game.getPlayer1Symbol()); // logs the symbol of player 1
    console.log(game.getPlayer2Symbol()); // logs the symbol of player 2
    // Variable to keep track of current player
    let currentPlayer = game.getPlayer1Symbol();
    // Function to switch to the other player
    const switchPlayer = () => {
      if (currentPlayer === game.getPlayer1Symbol) {
        currentPlayer = game.getPlayer2Symbol;
      } else {
        currentPlayer = game.getPlayer1Symbol;
      }
    };
    
  
    boardIndex = document.querySelectorAll('.index');
  function getIndexClicked() {
    boardIndex.forEach(i => {
      i.addEventListener('click', e => {
        const indexValue = e.target.dataset.value;
        console.log(indexValue);
        i.innerText = game.getPlayer1Symbol();
        switchPlayer();
      });
    });
  }

  
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
gameLogic();