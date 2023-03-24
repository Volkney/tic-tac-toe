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

function gameBoard(player1, player2){
  //some code
  console.log(player1, player2);
  console.log(player1.logValue(), player2.logValue());

}

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
      gameBoard(player1, player2);
    });
  });
}

function gameLogic(){
  getPlayersChoice();
}

gameLogic();


  