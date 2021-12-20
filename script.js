console.log("Hey hey you linked me!");
let wins = 0;
let ties = 0;
let losses = 0;

let options = ["R", "P", "S"];

let playGame = function () {
  //this window prompt will have opponent enter their selection
  var opponentChoice = window.prompt("Enter R, P, or S:");

  //this will end the game if cancel is pressed
  if (!opponentChoice) {
    return;
  }

  //used .toUpperCase method to compare inputs easier
  userChoice = userChoice.toUpperCase();

  //Math.random will allow for a random index to be selected from array
  var index = Math.floor(Math.random() * options.length);
  var computerChoice = options[index];

  window.alert("The computer chose " + computerChoice);

  //this if statement is if user and opponent selects same choice
  if (userChoice === opponentChoice) {
    ties++;
    window.alert("It's a tie!");
  } else if (
    (userChoice === "R" && opponentChoice === "S") ||
    (userChoice === "P" && opponentChoice === "R") ||
    (userChoice === "S" && opponentChoice === "p")
  ) {
  }
};

//this will initiate the game
playGame();
