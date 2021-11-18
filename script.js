// Query Selectors
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
const displayBannerDraw = document.querySelector(".display-banner-draw");
const resetGame = document.querySelector(".reset__btn");
const backtoHome = document.querySelector(".back-to-home__btn");

// Global Variables
let playerOne;
let playerTwo;
let playerOneTurn = true;

// Player Name Function
const handleClick = () => {
  playerOne = playerOneName.value
  playerTwo = playerTwoName.value
  if (playerOne == "" || playerTwo == "" ) { 
    alert("Please enter your names!")
  } else if (playerOne != "" && playerTwo != "") {
    window.scrollTo(0, 1000)
  }
}
startGame.addEventListener("click", handleClick); 

// Main Function
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
    checkDraw();
  })
})

// Function for Winning Pattern One - [1, 2, 3]
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

// Function for Winning Pattern Two - [1, 4, 7]
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

// Function for Winning Pattern Three - [1, 5, 9]
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

// Function for Winning Pattern Four - [2, 5, 8]
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

// Function for Winning Pattern Five - [3, 5, 7]
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

// Function for Winning Pattern Six - [3, 6, 9]
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

// Function for Winning Pattern Seven - [4, 5, 6]
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

// Function for Winning Pattern Eight - [7, 8, 9]
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

// Draw Function
const checkDraw = () => {
  let fullGrid = "";
  ticTacToeSquares.forEach((square) => {
    fullGrid += square.innerHTML;
  })
  if (fullGrid.length === 9) { 
    displayDrawBanner();
  }
}

// Banner Functions - Player One Wins/Player Two Wins/Draw
const displayWinBannerOne = () => {
 displayBannerOne.innerHTML = `${playerOne} wins the game! Click reset to play again!`
 displayBannerOne.classList.add("show")
}

const displayWinBannerTwo = () => {
  displayBannerTwo.innerHTML = `${playerTwo} wins the game! Click reset to play again!`
  displayBannerTwo.classList.add("show")
 }

const displayDrawBanner = () => {
  displayBannerDraw.innerHTML = "It's a draw! Click reset to play again!"
  displayBannerDraw.classList.add("show")
}

// Reset Function
resetGame.addEventListener("click", () => { 
  ticTacToeSquares.forEach((square) => {
    square.innerHTML = "";
  })

  const playerOneWins = document.querySelectorAll(".player-one__wins")
  const playerTwoWins = document.querySelectorAll(".player-two__wins")

  for (let i = 0; i < playerOneWins.length; i ++) {
    playerOneWins[i].classList.remove("player-one__wins");
  }

  for (let i = 0; i < playerTwoWins.length; i ++) {
    playerTwoWins[i].classList.remove("player-two__wins");
  }
  
  displayBannerOne.classList.remove("show")
  displayBannerTwo.classList.remove("show")

  playerOneTurn = true;
})

// Back to Homepage Function
backtoHome.addEventListener("click", () => {
  location.reload();
})