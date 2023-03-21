## Pseudo Code for TTT

### <mark>Factory</mark> functions for objects that will like to be reproduced 

#### *createPlayer*. What do players need to have?
* name 
* symbol
* something to let the player know what his information was

### <mark>Modular</mark> objects that will **not** like to be reproduced 

#### *gameBoard*. What does the gameboard need to have?
* board layour 
* the current player playing

#### possible functions within the gameboard

| checkWinner | startGame | MakeMove |   getBoard    | getCurrentPlayer|
| -------- | -------- | -------- |-------- |-------- |
| status of the game     | initialize the game and set first player     | update the board|return a copy of the current player object | return the current player object



