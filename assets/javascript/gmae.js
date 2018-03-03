//have output for game for user instructions
//User makes choice
//computer makes choice
//capture choices
//compare choices to determine win/loss/or guess Again
//display result to the user


//variables
 // var selectedLetter="";
var targetLetter = "";//var will be defined later on
var guessedLetter = [] ; //array for user to choose letter
var letters = ["a","b","c","d","e","f","g","h","i","j"];//computer


//counter
var guessesLeft = 10;
var guesseSoFar =[];
var wins = 0;
var losses = 0;
var i = 0;



//Display start screen info
 function startGame() {//startgame
  guessesLeft = 10;//assigns how many guesses to start with
  targetLetter =  letters[Math.floor(Math.random() * letters.length)];//computer choses letter at random to be guessed
  guessedLetter = [];//clear out all letters guessed
  console.log(targetLetter);
 }

 startGame();


  document.onkeyup = function(event) {//function runs when a key is pressed by user

    var userGuess = String.fromCharCode(event.keyCode).toLowerCase() //function happens taking in user guess by keypress store info for later use
//   console.log(userGuess);
    guessedLetter.push(userGuess);//pushing user guess to gussesSoFar

    //compare guess against one another to determine results using conditional statements to determine results

  if (userGuess === targetLetter) {
            wins++;//increments by 1
            alert('You\'ve guesesed corrrectly!');
            startGame();
        }
        else if (userGuess !== targetLetter){
          guessesLeft--;
         alert('You didn\'t guess the correct letter. Let\'s try again.');
        }


        //   }

          // } else if (userGuess !== computerGuess){
          //   guessesLeft--; //decrementing the guesses left
          //
          // // } else  {
          // //  losses++; //increase by 1
          // //   alert('You didn\'t guess the correct letter. Try again.');
          // }
    //
    updatePage();
}




function updatePage() {//named updatePage to refresh  page function to keep track of wins and losses
    document.getElementById("wins").innerHTML = "wins " + wins //documenting if user presses correct letter  pull from html id

    document.getElementById("losses").innerHTML = "losses " + losses; //document user losess pull from html id

    document.getElementById("guessesSoFar").innerHTML = "guessesSoFar" + guessesSoFar; // keep track of how many guesses pull from html id

    document.getElementById("guessesLeft").innterHTML = "guessesLeft" + guessesLeft;
}



// // want enter to start game and box to prompt so user can input letter.//
//  function myFunction() {
//   var user = prompt("Please enter one letter from A-J");
// }
//   var guess = [];
// //     if (guess!== letter) {
// //       msg = "You Win";
// //     } else {
// //       msg = "Try Again";
// //     }
// // }
