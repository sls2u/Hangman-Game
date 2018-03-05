//have output for game for user instructions
//User makes choice
//computer makes choice
//capture choices
//compare choices to determine win/loss/or guess Again
//display result to the user

//variables
var wins = 0;
var losses = 0;
var guessesLeft = 13;
var guessesSoFar = []; // array to push user choices to
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']; //list of letters to choose from

// have output information player to chose letters A-J to guess the letter
// Problem- how to get user input
// solution- Get userinput by using keypress to store information in var for later use.

//function is run everytime someone presses a key
document.onkeyup = function(event) {
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase(); //factoring random user guess
  console.log(userGuess)
  //directing computer to pick random letters using math.random function
  var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]; //computer function that selects random letter
  guessesSoFar.push(userGuess); //adding user guess to guesses so far

//logic conditionals for score keeping
  if (userGuess == computerGuess) { //user guess equals to computer guess
    wins++;//increase win by +1
    alert('You are Psychic!') //Either you are a fortune teller and should play the loto or you were lucky
    guessesLeft = 13; //reseting the guesses back to 13 to start again
    guessesSoFar.length = 0; //empty current string back to 0 (reset)
  }
  else if (guessesLeft == 0) { //user guessed too many times and counter equals 0
  losses++;//increase loss count +1
  alert('You lost. Please play again.')
  guessesLeft = 13; //reseting the guesses back to 13 to start again
  guessesSoFar.length = 0;//empty current string back to 0 (reset)
  }

  else if (userGuess !== computerGuess) {//userGuess does not match the computer guess
  guessesLeft--; //counting down the guesses 1 at a time
  alert('Keep trying!')
  }

// Taking the conditioanls and displaying in HTML
  var html = "<h1>The Psychic Game</h1>" +
  "<p>Guess what letter I'm thinking of!</p>" +
  "<p>Total Wins: " +
  wins +
  "</p>" +
  "<p>Total Losses: " +
  losses +
  "</p>" +
  "<p>Guesses Left: " +
  guessesLeft +
  "</p>" +
  "<p>Your Guesses so far: " +
  guessesSoFar +
  "</p>";
// Placing the html into the game ID
document.querySelector('#game').innerHTML = html;
}
