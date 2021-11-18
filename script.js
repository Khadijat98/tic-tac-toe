// Query selectors
const playerOneName = document.querySelector("#player-one-name");
const playerTwoName = document.querySelector("#player-two-name");
const startGame = document.querySelector(".start__btn");
const ticTacToeSquares = document.querySelectorAll(".tic-tac-toe__square");
const ticTacToeInstruction = document.querySelector(".tic-tac-toe__instruction");
const winningPatternOne = document.querySelectorAll(".win-one");
const winningPatternTwo = document.querySelectorAll(".win-two");
const winningPatternThree = document.querySelectorAll(".win-three");
const winningPatternFour = document.querySelectorAll(".win-four");
const winningPatternFive = document.querySelectorAll(".win-five");
const winningPatternSix = document.querySelectorAll(".win-six");
const winningPatternSeven = document.querySelectorAll(".win-seven");
const winningPatternEight = document.querySelectorAll(".win-eight");
const displayBannerOne = document.querySelector(".display-banner-one");
const displayBannerTwo = document.querySelector("#display-banner-two");
const resetGame = document.querySelector(".reset__btn");
const backtoHome = document.querySelector(".back-to-home__btn");


// global variables for players
let playerOne;
let playerTwo;
let playerOneTurn = true;

// players enter name and this saves when a user clicks start
// const handleClick = () => {
//   playerOne = playerOneName.value
//   console.log(playerOne)
//   playerTwo = playerTwoName.value
//   console.log(playerTwo)
//   if (playerOne == "" || playerTwo == "" ) { 
//     alert("Please enter your names!")
//   }
// }
// startGame.addEventListener("click", handleClick); // how do i make this not run after the user clicks "ok" on the alert box?

// assign noughts to player one and crosses to player two
// need to fill the grid with noughts when player one clicks a square and with crosses when it's player two
// as soon as player one clicks a square, the "click anywhere on the grid to start text" disappears
ticTacToeSquares.forEach((square) => {
  square.addEventListener("click", (event) => {
    ticTacToeInstruction.classList.add("hide")
    if (playerOneTurn) {
      event.target.innerHTML = "O"
      playerOneTurn = false;
    } else {
      event.target.innerHTML = "X"
      playerOneTurn = true;
    }
    checkPatternOne();
    checkPatternTwo();
    checkPatternThree();
    checkPatternFour();
    checkPatternFive();
    checkPatternSix();
    checkPatternSeven();
    checkPatternEight();
  })
})

// need to identify when there's a winning pattern - vertical, horizontal or diagonal
// need the computer to be aware of all the possible winning combinations
// need the computer to determine if noughts are in the winning combo of squares or crosses
// need the computer to identify if player one wins or player two
// need to make the computer tell the players who wins - add orange line for player one and turquoise line for player two and display banner
// display banner
  //create a p tag in section 2 with a background, height and width that only displays after the player wins and disappears when the player clicks the page
// need to reset after a winning pattern has been achieved
// also need to consider the case of no-one winning i.e. a full grid and reset after this
// Winning patterns
//   [1, 2, 3] //patternOne
//   [1, 4, 7] //patternTwo
//   [1, 5, 9] //patternThree
//   [2, 5, 8] //patternFour
//   [3, 5, 7] //patternFive
//   [3, 6, 9] //patternSix
//   [4, 5, 6] //patternSeven
//   [7, 8, 9] //patternEight

const checkPatternOne = () => {
  let patternOneCombo = "";
  winningPatternOne.forEach((patternOne) => {
    patternOneCombo += patternOne.innerHTML;   
  })
  if (patternOneCombo == "OOO") {
    winningPatternOne.forEach((patternOne) => {
      patternOne.classList.add("player-one__wins")   
    })
    displayWinBannerOne();
  } else if (patternOneCombo == "XXX") {
      winningPatternOne.forEach((patternOne) => {
      patternOne.classList.add("player-two__wins")   
    })
    displayWinBannerTwo();
    }
}

const winningPattern = (winningPatternOne, winningPatternTwo) => {
  
}

const checkPatternTwo = () => {
  let patternTwoCombo = "";
  winningPatternTwo.forEach((patternTwo) => {
    patternTwoCombo += patternTwo.innerHTML;   
  })
  if (patternTwoCombo == "OOO") {
    winningPatternTwo.forEach((patternTwo) => {
      patternTwo.classList.add("player-one__wins")  
    })
    displayWinBannerOne(); 
  } else if (patternTwoCombo == "XXX") {
      winningPatternTwo.forEach((patternTwo) => {
        patternTwo.classList.add("player-two__wins")   
      })
    displayWinBannerTwo();
    }
}

const checkPatternThree = () => {
  let patternThreeCombo = "";
  winningPatternThree.forEach((patternThree) => {
    patternThreeCombo += patternThree.innerHTML;   
  })
  if (patternThreeCombo == "OOO") {
    winningPatternThree.forEach((patternThree) => {
      patternThree.classList.add("player-one__wins")   
    })
    displayWinBannerOne();
  } else if (patternThreeCombo == "XXX") {
      winningPatternThree.forEach((patternThree) => {
        patternThree.classList.add("player-two__wins")   
      })
    displayWinBannerTwo();
    }
}


const checkPatternFour = () => {
  let patternFourCombo = "";
  winningPatternFour.forEach((patternFour) => {
    patternFourCombo += patternFour.innerHTML;   
  })
  if (patternFourCombo == "OOO") {
    winningPatternFour.forEach((patternFour) => {
      patternFour.classList.add("player-one__wins")   
    })
    displayWinBannerOne();
  } else if (patternFourCombo == "XXX") {
      winningPatternFour.forEach((patternFour) => {
        patternFour.classList.add("player-two__wins")   
      })
    displayWinBannerTwo();
    }
}


const checkPatternFive = () => {
  let patternFiveCombo = "";
  winningPatternFive.forEach((patternFive) => {
    patternFiveCombo += patternFive.innerHTML;   
  })
  if (patternFiveCombo == "OOO") {
    winningPatternFive.forEach((patternFive) => {
      patternFive.classList.add("player-one__wins")   
    })
    displayWinBannerOne();
  } else if (patternFiveCombo == "XXX") {
      winningPatternFive.forEach((patternFive) => {
        patternFive.classList.add("player-two__wins")   
      })
    displayWinBannerTwo();
    }
}

const checkPatternSix = () => {
  let patternSixCombo = "";
  winningPatternSix.forEach((patternSix) => {
    patternSixCombo += patternSix.innerHTML;   
  })
  if (patternSixCombo == "OOO") {
    winningPatternSix.forEach((patternSix) => {
      patternSix.classList.add("player-one__wins")   
    })
    displayWinBannerOne();
  } else if (patternSixCombo == "XXX") {
      winningPatternSix.forEach((patternSix) => {
        patternSix.classList.add("player-two__wins")   
      })
    displayWinBannerTwo();
    }
}

const checkPatternSeven = () => {
  let patternSevenCombo = "";
  winningPatternSeven.forEach((patternSeven) => {
    patternSevenCombo += patternSeven.innerHTML;   
  })
  if (patternSevenCombo == "OOO") {
    winningPatternSeven.forEach((patternSeven) => {
      patternSeven.classList.add("player-one__wins")   
    })
    displayWinBannerOne();
  } else if (patternSevenCombo == "XXX") {
      winningPatternSeven.forEach((patternSeven) => {
        patternSeven.classList.add("player-two__wins")   
      })
    displayWinBannerTwo();
    }
}

const checkPatternEight = () => {
  let patternEightCombo = "";
  winningPatternEight.forEach((patternEight) => {
    patternEightCombo += patternEight.innerHTML;   
  })
  if (patternEightCombo == "OOO") {
    winningPatternEight.forEach((patternEight) => {
      patternEight.classList.add("player-one__wins")   
    })
    displayWinBannerOne();
  } else if (patternEightCombo == "XXX") {
      winningPatternEight.forEach((patternEight) => {
        patternEight.classList.add("player-two__wins")   
      })
    displayWinBannerTwo();
    }
}

const checkDraw = () => {
  ticTacToeSquares.forEach((square) => {
    let fullGrid = "";
    fullGrid += square.innerHTML;
    console.log(draw)
  })
}

// winning banner functions
const displayWinBannerOne = () => {
 displayBannerOne.innerHTML = "Player One wins the game! Click reset to play again!"
 displayBannerOne.classList.add("show")
}

const displayWinBannerTwo = () => {
  displayBannerTwo.innerHTML = "Player Two wins the game! Click reset to play again!"
  displayBannerTwo.classList.add("show")
 }

// when the player presses the reset button, progress is cleared and the game starts again. the "click anywhere" text reappears
resetGame.addEventListener("click", () => { // is there a way to clear the grid without doing a location reload?
  // location.reload();
  for (let i = 0; i <= 9; i++) {

  }
  ticTacToeSquares.forEach((square) => {
    square.innerHTML = "";
  })
})

// when the player presses back to the homepage, the game resets
backtoHome.addEventListener("click", () => {
  location.reload();
})


