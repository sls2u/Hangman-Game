//User makes choice
//computer makes choice
//capture choices
//compare choices to determine win/loss/or guess Again
//display result to the user



//variables
// var selectedLetter="";
var targetLetter//var will be defined later on
var guessedLetter //array for user to choose letter
var letters = ["a","b","c","d","e","f","g","h","i","j"];
//


//counter
var guessesLeft = 10;
var wins = 0;
var losses = 0;
var i = 0;


//Display start screen info
function startGame() {//startgame
  guessesLeft = 10;//asigns how many guesses to start with
  targetLetter =  letters[Math.floor(Math.random() * letters.length)];//computer choses letter at random to be guessed
  guessedLetter = [];//clear out all letters guessed
  console.log(targetLetter);

  // updateCounter();//calling counter functions

}

function updateCounter() {//named updateCounter function to keep track of wins and losses
    document.getElementById("wins").innerHTML = "Wins " + wins //documenting if user presses correct letter  pull from html id

    document.getElementByID("losses").innerHTML = "losses " + losses; //document user losess pull from html id

    document.getElementByID("guesses so far").innerHTML = "guesses so far" + "guesses so far"; // keep track of how many guesses pull from html id


}
// function startScreen() {
//     // var node = document.createElement("LI");
//     var wins = document.createTextNode("wins");
//     // node.appendChild(textnode);
//     document.getElementById("scoreboard").appendChild(wins);
//
// }


//alert pop up when user presses button



// document.onkeyup = function() {
//   var userGuess = String.fromCharCode(event.keyCode).toLowerCase();//taking in user guess
//   console.log(userGuess);
//
//
//   var computerGuess = letters[Math.floor(Math.random() * letters.length)];//function for computer pick random letter
//
// //   console.log(letter);
//
// if (userGuess == computerGuess) {
//   wins i++;
//   alert("You\ve guessed correctly" + "Good Job!");
//   guessesLeft = 10; //count stays the same
//
//
// // }
//
//
//
//
//
//
// // }
// //want computer to generate random letter//
//
// function randLetter() {
//     var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
//     var letter = letters[Math.floor(Math.random() * letters.length)];
//     console.log(letter);
//
// }
//       $('#letter').html(randLetter())
//
// // want enter to start game and box to prompt so user can input letter.//
// function myFunction() {
//     var user = prompt("Please enter one letter from A-J");
//     var guess = [];
//     if (guess!== letter) {
//       msg = "You Win";
//     } else {
//       msg = "Try Again";
//     }
// }
//   //
  // function myFunction() {
  //   document.getElementById('letterOptions');
//   document.getElementById('computerLetter').innerHTML = Math.random()* letterOptions.length;
//   return Math.random();
//   // console.log(y);
// })




// function letterOptions() {
//   guessedLetter = ('');
//   console.log(guessedLetter);
//
// }

















// var person = "player";
// console.log (person);
//
// var alreadyGuessed = []
// var wordLength =[]
//
// var wordChosen =[]
//
// var counter = 'x'--1;
//
// var wordBank = new Array;
// var currentLetterGuessed;
//
//
//





//create variables first decare everything you need to keep track up at the top

// var word = 'popcorn';
// var dashes = [];
// var alreadyGussed = [];
//
//
// for (var i =0; i < word.length; i++) {
//   dashes.push('-');
// }
//
// var currentResltEL = document.getElementById("current-result");
// var guessesDisplayEL = document.getElementByID('previous-guesses');
//
// currentResultEl.innerText = dashes.join('');
//
// document.onkeyup = function(event) {
//   var key = event.key;
//
// if (alreadyBuessed.index(key)
//
//   alreadyGussed.push(key);
//   gussessDisplayEL.innerText = alreadyBuessed.join('');
//   console.log("alreadyGussed") !==-1) {
//     return false;
//   }
// .split (' ').join(' ')
//
// //indexof
