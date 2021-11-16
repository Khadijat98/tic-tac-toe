// Query selectors
const playerOneName = document.querySelector("#player-one-name");
const playerTwoName = document.querySelector("#player-two-name");
const startGame = document.querySelector(".start__btn");
const ticTacToeSquares = document.querySelectorAll(".tic-tac-toe__square");
const ticTacToeInstruction = document.querySelector(".tic-tac-toe__instruction");


// Home
// Players enter name - need to identify which box is attached to which player. Need this to:
  // tell player one by name to click the grid to start
  // assign noughts and crosses to the players
  // fill in empty p tags in scoreboard on game page
  // to drop banners congratulating the players after they win a point and after they win the whole game



  // global variables for players
  let playerOne;
  let playerTwo;

  // function for home page form inputs
  const handleClick = () => {
    playerOne = playerOneName.value
    console.log(playerOne)
    playerTwo = playerTwoName.value
    console.log(playerTwo)
  }

  startGame.addEventListener("click", handleClick);

   ticTacToeSquares.forEach((square) => {
      square.addEventListener("click", (event) => {
        ticTacToeInstruction.classList.add("hide")
          // if (playerOne) {
          //   event.target.innerHTML = "X"
          // } else {
          //   event.target.innerHTML = "O"
          // }

          playerOne = event.target.innerHTML;
          playerTwo = event.target.innerHTML;

          if (playerOne) {
            event.target.innerHTML = "O"
          } else {
            event.target.innerHTML = "X"
          }
      })
   })
  
  
 // assign noughts to player one and crosses to player two
   
  

// Game
// need to assign noughts to player one and crosses to player two
// noughts are orange and crosses are turquoise
// need to fill the grid with noughts when player one clicks a square and with crosses when it's player two
// as soon as player one clicks a square, the "click anywhere on the grid to start text" disappears
// need to identify when there's a winning pattern - vertical, horizontal or diagonal
// need to identify who has won a point
// need to drop a banner identifying the player by name and telling them they won a point
// need to update the scoreboard after each point
// need to drop a banner identifying the player by name when a player is the first to win five points 
// need to reset the game after this (extra - drop a banner saying "Would you like to play again? and give the option to either say yes or no. yes resets the game and no takes the players back to the home page")
// when the player presses the reset button, progress is cleared and the game starts again. the "click anywhere" text reappears
// Banners
  // "Player name" it's your turn!
  // "Player name" wins 1 point!
  // "Player name" wins the game! Congratulations!!