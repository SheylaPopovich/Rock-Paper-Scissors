console.log("Hey hey you linked me!");
let wins = 0;
let ties = 0;
let losses= 0;



let options = ["R", "P", "S"];

let playGame = function() {
    //this window prompt will have opponent enter their selection
    var opponentChoice = window.prompt("Enter R, P, or S:");

    //this will end the game if cancel is pressed
    if (!opponentChoice) {
       return; 
    }

    //used .toUpperCase method to compare inputs easier 
    userChoice = userChoice.toUpperCase();


}

//this will initiate the game 
playGame()