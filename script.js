console.log("Hey hey you linked me!");

let opponentChoices = ["Rock", "Paper", "Scissors"];

let myChoices = ["Rock", "Paper", "Scissors"];

let playGame = function() {
    //this window prompt will have opponent enter their selection
    var opponentChoices = window.prompt("Enter R, P, or S:");

    //this will end the game if cancel is pressed
    if (!opponentChoices) {
       return; 
    }
}