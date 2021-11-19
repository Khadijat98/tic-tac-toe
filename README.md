# Tic-Tac-Toe
**Made By Khadijat Oyeleye**

This is a Javascript-based game designed with HTML 5, SCSS and made functional with Javascript ES6.

This project was created in week 4 of the _nology course. The aim was to gain more experience in solving open-ended problems and in using Javascript.

### Javascript Description
**Query Selectors**
Selectors were created for the name input boxes, start, reset and back to homepage buttons, the tic tac toe grid & instruction, the winning pattern combinations and the display banners for announcing the winner or a draw.

**Variables**
The variables that were set were for player one, player two and player one's turn, which was initialised at true, as this would be the player who would start first.

**Player Name Function**
This created a function which would save the names the two players input on the home page when the start button was clicked. If no names were entered, an alert showed asking for names to be entered and if names were entered, the page would jump to the next page after the start button was clicked.

**Main Function**
This filled in the individual tic-tac-toe squares, when clicked, with an "O" if it was player one's turn. It then set player one's turn to false, indicating player two's turn and filled in a square with an "X" before setting player one's turn to true. It then called in the check functions for checking if a winning pattern of squares had been selected or if no wins were achieved after a full grid of squares were selected, indicating a draw.

**Function for Getting a Pattern**
This created an empty string and added the value of the square that was selected to this string, which had a max length of three, concatenating the "Xs" and "Os".

**Function for Checking for a Winning Pattern**
This used the previous function to determine which player had one the game, based on the values of the selected squares. If the overall combination of strings was equal to "OOO", player one was the winner, so the winning pattern of squares was highlighted with orange and a banner congratulating them by name was displayed. If the overall combination of strings was equal to "XXX", this indicated player two's win. The winning combination of squares was highlighted turquoise and a banner congratulating this player by name was displayed.

The tic-tac-toe grid was numbered as follows:
[1, 2, 3
4, 5, 6
7, 8, 9]

The winning pattern combinations were as follows:
[1, 2, 3]
[1, 4, 7]
[1, 5, 9]
[2, 5, 8]
[3, 5, 7]
[3, 6, 9]
[4, 5, 6]
[7, 8, 9]

**Draw Function**
Similarly to the function for the winning patterns, these concatenated the "Xs" and "Os" to an empty string which had a max length of 9 i.e. the full grid. If all squares on the grid were selected, this signified no wins, so a banner informing the players of a draw was displayed.

**Banner Functions**
These displayed a banner telling player one or player two by name they had won the game, or that a draw had been achieved, depending on the outcome of the game.

**Reset Function**
This reset the game, after the reset button was clicked, by clearing the squares of their values and highlighted colours, removing the banner displayed on the screen and setting player one's turn to true, so they would start first.

**Back to Homepage Function**
This reloaded the game and took the user back to the homepage after the back to home page button was clicked.

**Known Bugs**
There are no known bugs as of 19/11/2021.

**Summary**
Overall, I am very happy with what I managed to achieve with this project. I managed to implement most of the features I wanted to add, and I was able to break down the problem better than I could with the calculator, making it easier for me to write the functions I needed, particularly for the winning patterns. I was also able to refactor the code for the winning patterns and the display banners for the winners with assistance. In the future, I would like to be able to write more general functions from the beginning of a project, so that I can condense the code I write and easily reuse functions. For the game, I would like to add the ability to keep score so the players can easily keep track.