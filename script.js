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
const displayBannerOne = document.querySelector(".display-banner__one");
const displayBannerTwo = document.querySelector(".display-banner__two");
const displayBannerDraw = document.querySelector(".display-banner__draw");
const resetGame = document.querySelector(".reset__btn");
const backtoHome = document.querySelector(".back-to-home__btn");

// Global Variables
let playerOne;
let playerTwo;
let playerOneTurn = true;

const winningPatterns = [
  winningPatternOne,
  winningPatternTwo,
  winningPatternThree,
  winningPatternFour,
  winningPatternFive,
  winningPatternSix,
  winningPatternSeven,
  winningPatternEight,
];

// Player Name Function
const handleClick = () => {
  playerOne = playerOneName.value
  playerTwo = playerTwoName.value
  if (playerOne === "" || playerTwo === "") {
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

    winningPatterns.forEach((winningPattern) => {
      checkWinningPatterns(winningPattern);
    })

    checkDraw();
  })
})

// Function for Getting a Pattern
const getPatternComboString = (winningPattern) => {
  let patternCombo = "";
  winningPattern.forEach((pattern) => {
    patternCombo += pattern.innerHTML;
  })
  return patternCombo;
}

// Function for Checking for a Winning Pattern
const checkWinningPatterns = (winningPattern) => {
  let patternCombo = getPatternComboString(winningPattern);

  if (patternCombo === "OOO") {
    winningPattern.forEach((pattern) => {
      pattern.classList.add("player-one__wins")
    })
    displayWinBanner(displayBannerOne, playerOne);
  } else if (patternCombo === "XXX") {
    winningPattern.forEach((pattern) => {
      pattern.classList.add("player-two__wins")  
    })
    displayWinBanner(displayBannerTwo, playerTwo);
  }
};

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

// Banner Functions - Player Wins / Draw
const displayWinBanner = (winningBanner, player) => {
  winningBanner.innerHTML = `${player} wins the game! Click reset to play again!`
  winningBanner.classList.add("show")
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

  for (let i = 0; i < playerOneWins.length; i++) {
    playerOneWins[i].classList.remove("player-one__wins");
  }

  for (let i = 0; i < playerTwoWins.length; i++) {
    playerTwoWins[i].classList.remove("player-two__wins");
  }
  
  displayBannerOne.classList.remove("show");
  displayBannerTwo.classList.remove("show");
  displayBannerDraw.classList.remove("show")

  ticTacToeInstruction.classList.remove("hide")

  playerOneTurn = true;

})

// Back to Homepage Function
backtoHome.addEventListener("click", () => {
  location.reload();
})