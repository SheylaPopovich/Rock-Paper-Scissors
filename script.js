let wins = 0;
let ties = 0;
let losses = 0;

//an array consisting of options for user to pick from
let options = ["R", "P", "S"];

let playGame = function () {
  //this window prompt will have opponent enter their selection
  let userChoice = window.prompt("Enter R, P, or S:");

  //this will end the game if cancel is pressed
  if (!opponentChoice) {
    return;
  }

  //used .toUpperCase method to compare inputs easier
  userChoice = userChoice.toUpperCase();

  //Math.random will allow for a random index to be selected from array
  let index = Math.floor(Math.random() * options.length);
  let computerChoice = options[index];

  window.alert("The computer chose " + computerChoice);

  //this if statement is if user and opponent selects same choice
  if (userChoice === computerChoice) {
    ties++;
    window.alert("It's a tie!");
  } else if (
    (userChoice === "R" && computerChoice === "S") ||
    (userChoice === "P" && computerChoice === "R") ||
    (userChoice === "S" && computerChoice === "p")
  ) {
    wins++;
    window.alert("You win!");

    //if the conditions above failed assume player lost
  } else {
    losses++;
    window.alert("You lost!");
  }
  //this will show games stats
  window.alert(
    "Stats:\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties
  );

  //this will ask the user if they want to play again
  let playAgain = window.confirm("Play again?");

  if (playAgain) {
    playGame();
  }
};

//this will initiate the game
playGame();
