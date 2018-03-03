//have output for game for user instructions
//User makes choice
//computer makes choice
//capture choices
//compare choices to determine win/loss/or guess Again
//display result to the user


//variables
 // var selectedLetter="";
var targetLetter ;//var will be defined later on
var guessedLetter ; //array for user to choose letter
var letters = ["a","b","c","d","e","f","g","h","i","j"];


//counter
var guessesLeft = 10;
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

  document.onkeyup = function(event) {//function runs when a key is pressed by user
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase() //function happens taking in user guess by keypress store info for later use
//   console.log(userGuess);
    var computerGuess = letters[Math.floor(Math.random() * letters.length)];//function for computer pick random letter from array

    //compare guess against one another to determine results using conditional statements to determine results
  letters.indexof(userGuess)  !== -1

  if (userGuess == computerGuess) {
            wins++;//increments by 1
            alert('You\'ve guesesed corrrectly!');
        }

        else (userGuess !== computerGuess) {
            guessLeft--; //decrease by 1
            alert('You didn\'t guess the correct letter. Try again.');
        }
      }




    // check results

    // write result to og
    updatePage();
}


    //         alert:("You\ve guessed correctly" + "Good Job!");
    //       }
    // }


function updatePage() {//named updatePage to refresh  page function to keep track of wins and losses
    document.getElementById("wins").innerHTML = "wins " + wins //documenting if user presses correct letter  pull from html id

    document.getElementById("losses").innerHTML = "losses " + losses; //document user losess pull from html id

    document.getElementById("guessesSoFar").innerHTML = "guessesSoFar" + guessesSoFar; // keep track of how many guesses pull from html id
}


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
