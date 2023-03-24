const playerChoice = document.querySelectorAll('.choice1');
const choiceDisplay = document.getElementById('choice-display');

//create factory function
function createPlayers(symbol, playerNumber){
  return {
    playerNumber,
    symbol,
    logValue(){
      console.log(`${this.playerNumber} symbol is ${this.symbol}`);
    }
  }
}

  const boardGrid = document.querySelectorAll('.index');

  const boardModule = (function(){ 
    //first method
    function displayPlayersInfo(player1, player2){
      console.log(player1.logValue(), player2.logValue());
      }
    //second method
    function board(){
      boardGrid.forEach(element => {
        element.addEventListener('click', e => {
          clickedGrid = e.target.dataset.value;
          console.log(clickedGrid);
        });
        return{board};
      });
    }
    return{displayPlayersInfo, board};
  })();



function getPlayersChoice(){
  playerChoice.forEach( choice =>{
    choice.addEventListener('click', e => {
      const indexValue = e.target.value;
      if(indexValue === 'x'){
        player1 = createPlayers(indexValue, 'player1');
        player2 = createPlayers('o', 'player2');
        playerChoice[1].disabled = true;
      }  
      else{
        player2 = createPlayers(indexValue, 'player2');
        player1 = createPlayers('x', 'player1');
        playerChoice[0].disabled = true; 
      }
      boardModule.displayPlayersInfo(player1, player2);
      boardModule.board(); // Call the board function here
    });
  });
}

function gameLogic(){
  getPlayersChoice();
}

gameLogic();


  