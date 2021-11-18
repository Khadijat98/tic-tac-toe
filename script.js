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
const resetGame = document.querySelector(".reset__btn");
const backtoHome = document.querySelector(".back-to-home__btn");


// global variables for players
let playerOne;
let playerTwo;
let playerOneTurn = true;

// players enter name and this saves when a user clicks start
const handleClick = () => {
  playerOne = playerOneName.value
  console.log(playerOne)
  playerTwo = playerTwoName.value
  console.log(playerTwo)
  if (playerOne == "" || playerTwo == "" ) { 
    console.log(playerOne)
    alert("Please enter your names!")
  }
}
startGame.addEventListener("click", handleClick); // how do i make this not run after the user clicks "ok" on the alert box?

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
    alert(`${playerOne} wins the game! Congratulations!!`)
    winningPatternOne.forEach((patternOne) => {
      patternOne.classList.add("player-one__wins")   
    })
    alert("Click reset to play again!")
    }
    else if (patternOneCombo == "XXX") {
      setTimeout = () => {alert(`${playerTwo} wins the game! Congratulations!!`), 2000} // why doesn't this work?
      winningPatternOne.forEach((patternOne) => {
      patternOne.classList.add("player-two__wins")   
    })
      alert("Click reset to play again!")
    }
}

const checkPatternTwo = () => {
  let patternTwoCombo = "";
  winningPatternTwo.forEach((patternTwo) => {
    patternTwoCombo += patternTwo.innerHTML;   
  })
  if (patternTwoCombo == "OOO") {
    alert(`${playerOne} wins the game! Congratulations!!`)
    winningPatternTwo.forEach((patternTwo) => {
      patternTwo.classList.add("player-one__wins")   
    })
    alert("Click reset to play again!")
    } else if (patternTwoCombo == "XXX") {
      alert(`${playerTwo} wins the game! Congratulations!!`)
      winningPatternTwo.forEach((patternTwo) => {
        patternTwo.classList.add("player-two__wins")   
      })
        alert("Click reset to play again!")
    }
}

const checkPatternThree = () => {
  let patternThreeCombo = "";
  winningPatternThree.forEach((patternThree) => {
    patternThreeCombo += patternThree.innerHTML;   
  })
  if (patternThreeCombo == "OOO") {
    alert(`${playerOne} wins the game! Congratulations!!`)
    winningPatternThree.forEach((patternThree) => {
      patternThree.classList.add("player-one__wins")   
    })
    alert("Click reset to play again!")
    } else if (patternThreeCombo == "XXX") {
      alert(`${playerTwo} wins the game! Congratulations!!`)
      winningPatternThree.forEach((patternThree) => {
        patternThree.classList.add("player-two__wins")   
      })
        alert("Click reset to play again!")
    }
}

// add colours to everything below
const checkPatternFour = () => {
  let patternFourCombo = "";
  winningPatternFour.forEach((patternFour) => {
    patternFourCombo += patternFour.innerHTML;   
  })
  console.log(patternFourCombo)
  if (patternFourCombo == "O"+"O"+"O") {
    alert(`${playerOne} wins the game! Congratulations!!`)
    location.reload();
    } else if (patternFourCombo == "X"+"X"+"X") {
      alert(`${playerOne} wins the game! Congratulations!!`)
      location.reload();
    }
}

const checkPatternFive = () => {
  let patternFiveCombo = "";
  winningPatternFive.forEach((patternFive) => {
    console.dir(patternFive)
    patternFiveCombo += patternFive.innerHTML;   
  })
  console.log(patternFiveCombo)
  if (patternFiveCombo == "O"+"O"+"O") {
    console.log("player one wins")
    alert(`${playerOne} wins the game! Congratulations!!`)
    location.reload();
    } else if (patternFiveCombo == "X"+"X"+"X") {
      console.log("player two wins")
      alert(`${playerOne} wins the game! Congratulations!!`)
      location.reload();
    }
}

const checkPatternSix = () => {
  let patternSixCombo = "";
  winningPatternSix.forEach((patternSix) => {
    console.dir(patternSix)
    patternSixCombo += patternSix.innerHTML;   
  })
  console.log(patternSixCombo)
  if (patternSixCombo == "O"+"O"+"O") {
    console.log("player one wins")
    alert(`${playerOne} wins the game! Congratulations!!`)
    location.reload();
    } else if (patternSixCombo == "X"+"X"+"X") {
      console.log("player two wins")
      alert(`${playerOne} wins the game! Congratulations!!`)
      location.reload();
    }
}

const checkPatternSeven = () => {
  let patternSevenCombo = "";
  winningPatternSeven.forEach((patternSeven) => {
    console.dir(patternSeven)
    patternSevenCombo += patternSeven.innerHTML;   
  })
  console.log(patternSevenCombo)
  if (patternSevenCombo == "O"+"O"+"O") {
    console.log("player one wins")
    alert(`${playerOne} wins the game! Congratulations!!`)
    location.reload();
    } else if (patternSevenCombo == "X"+"X"+"X") {
      console.log("player two wins")
      alert(`${playerOne} wins the game! Congratulations!!`)
      location.reload();
    }
}

const checkPatternEight = () => {
  let patternEightCombo = "";
  winningPatternEight.forEach((patternEight) => {
    console.dir(patternEight)
    patternEightCombo += patternEight.innerHTML;   
  })
  console.log(patternEightCombo)
  if (patternEightCombo == "O"+"O"+"O") {
    console.log("player one wins")
    alert(`${playerOne} wins the game! Congratulations!!`)
    location.reload();
    } else if (patternEightCombo == "X"+"X"+"X") {
      console.log("player two wins")
      alert(`${playerOne} wins the game! Congratulations!!`)
      location.reload();
    }
}

const checkDraw = () => {

}

resetGame.addEventListener("click", () => {
  location.reload();
})

backtoHome.addEventListener("click", () => {
  location.reload();
})


    
  

// Game
// when the player presses back to the homepage, the game resets
// when the player presses the reset button, progress is cleared and the game starts again. the "click anywhere" text reappears
// Banners
  // "Player name" it's your turn!
  // "Player name" wins the game! Congratulations!!

