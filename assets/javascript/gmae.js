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

// 1. have output information player to chose letters A-J to guess the letter
// 2. Problem- how to get user input
// 2. solution- Get userinput by using keypress to store information in var for later use.

//function is run everytime someone presses a key
document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(userGuess)//taking in user guess
    var computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)]; //computer selects random letter
    guessesSoFar.push(userGuess); //pushing user guess to guesses so far


            if (userGuess == computerGuess) {
                wins++;
                alert('You are Psychic!');
                guessesLeft = 13; //reseting the guesses back to 9 so that the user can play again
                guessesSoFar.length = 0; //this removes everything from the guesses so far array, so that the guesses from the previous round don't show
            }
            else if (guessesLeft == 0){
                losses++;
                alert('You didn\'t guess the correct letter. You lost. Let\'s try again.');
                guessesLeft = 13;
                guessesSoFar.length = 0;
            }
            else if (userGuess !== computerGuess){
                guessesLeft--; //decrementing the guesses left
            }
            // Taking the tallies and displaying them in HTML
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
            "</p>"
            ;
            // Placing the html into the game ID
            document.querySelector('#game').innerHTML = html;
        }

    document.onkeyup = function(event) {
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase(); //taking in user guess
        var computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)]; //computer selects random letter
        guessesSoFar.push(userGuess); //pushing user guess to guesses so far
        if (userGuess == computerGuess) {
            wins++;
            alert('Way to go! You\'ve guesesed corrrectly. You Won!');
            guessesLeft = 9; //reseting the guesses back to 9 so that the user can play again
            guessesSoFar.length = 0; //this removes everything from the guesses so far array, so that the guesses from the previous round don't show
        }
        else if (guessesLeft == 0){
            losses++;
            alert('You didn\'t guess the correct letter. You lost. Let\'s try again.');
            guessesLeft = 9;
            guessesSoFar.length = 0;
        }
        else if (userGuess !== computerGuess){
            guessesLeft--; //decrementing the guesses left
        }
        // Taking the tallies and displaying them in HTML
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
        "</p>"
        ;
        // Placing the html into the game ID
        document.querySelector('#game').innerHTML = html;
    }





  var computerGuess = computer(computerChoice);
  console.log(computerGuess)

  if (userGuess === computerGuess) {
    wins++; //increments by 1
    alert('You are psychic!')
  } else if (userGuess !== computerChoice) {
    remainingGuesses++;
    alert("keep guessing")
    document.getElementById("winScore").innerHTML = (winScore.length);
    userGuess.push(userGuess);
    document.getElementById("remainingGuesses").innerHTML = (remainingGuesses);
    (winScorea++);

}


<script type="text/javascript">
    var wins = 0;
    var losses = 0;
    var guessesLeft = 13;
    var guessesSoFar = []; // array to push user choices to
    var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']; //list of letters to choose from

    document.onkeyup = function(event) {
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase(); //taking in user guess
        var computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)]; //computer selects random letter
        guessesSoFar.push(userGuess); //pushing user guess to guesses so far

    //     }
    //     // Taking the tallies and displaying them in HTML
    //     var html = "<h1>The Psychic Game</h1>" +
    //     "<p>Guess what letter I'm thinking of!</p>" +
    //     "<p>Total Wins: " +
    //     wins +
    //     "</p>" +
    //     "<p>Total Losses: " +
    //     losses +
    //     "</p>" +
    //     "<p>Guesses Left: " +
    //     guessesLeft +
    //     "</p>" +
    //     "<p>Your Guesses so far: " +
    //     guessesSoFar +
    //     "</p>"
    //     ;
    //     // Placing the html into the game ID
    //     document.querySelector('#game').innerHTML = html;
    // }









//when user presesses key it saves to userGuess variable

//3. problem- get the choice from the computer
//3.solution- create an array  that lists all of the options. for Commputer to andonmly choose a choice from this array.

// //Computer randonly choses a choice from the options array.
// var computerChoice = ["a","b","c","d","e","f","g","h","i","j"];
// //
// //   //random computer letter choice to pick from.  This is the computers choice.
//  var computerGuess=  computerChoice[Math.floor(Math.random() * computerChoice.length)];
//  console.log(computerGuess)

//4. problem- We now have user guess and computer guess.  How to compare both and dtermine the results.
//4. solution- Use if/else conditional statmentsin order to determine the result.
//This logic determines win/loss/letters tracked and how many guesses are left.
//
// if(userGuess === computerChoice){
//         wins++;
//         alert('you are Psychic')
//     }
//   else if {
//       guesseSoFar--;
//       alert('try again')
//   }
//
//   if(guesseSoFar === 0){
//       losses++;
//       alert('you lose please play again')
//   }
// }





//     if (userGuess === computerGuess) {
//             wins++;
//             alert('You are Pyschic!');
//             // guessesLeft = 9; //reseting the guesses back to 9 so that the user can play again
//             // guessesSoFar.length = 0; //this removes everything from the guesses so far array, so that the guesses from the previous round don't show
//         }
//         else if (guessesLeft !== 0){
//             losses++;
//             alert('You didn\'t guess the correct letter. You lost. Let\'s try again.');
//             guessesLeft = 9;
//             guessesSoFar.length = 0;
//         }
//         else if (userGuess !== computerGuess){
//             guessesLeft--; //decrementing the guesses left
// //         }
// //
// //
//         var html = "<h1>The Psychic Game</h1>" +
//                 "<p>Guess what letter I'm thinking of!</p>" +
//                 "<p>Total Wins: " +
//                 wins +
//                 "</p>" +
//                 "<p>Total Losses: " +
//                 losses +
//                 "</p>" +
//                 "<p> numberOfGuesses " +
//                 numberOfGuesses +
//                 "</p>" +
//                 "<p>remainingGuesses: " +
//                 remainingGuesses +
//                 "</p>"
//                 ;
//                 // Placing the html into the game ID
//                 document.querySelector('#game').innerHTML = html;
//
// }
//
//
// //4. problem- We now have user guess and computer guess.  How to compare both and dtermine the results.
// //4. solution- Use if/else conditional statmentsin order to determine the result.
// //This logic determines win/loss/letters tracked and how many guesses are left.
//    // while (userGuess !== computerGuess) {
//    //     userGuess = String.fromCharCode(event.keyCode).toLowerCase();
//    //     gussesSoFar++;
//    //
//    //     if (gussesLeft < 10) {
//    //
//    //     }
//    //   }
//
//     //   wins++;
//     //   alert("You\'re Psychic!");
//     //   guessesLeft = 10; //reseting the guesses back to 9 so that the user can play again
//     // userGuess.push = 0; //this removes everything from the guesses so far array, so that the guesses from the previous round don't show
//
//     //
//     // else if (userGuess !== computerGuess) {
//     // // userGuess.push ;
//     //   alert("Try again!");
//   //   // }
//   //
//   //   else if (guessesLeft !== computerGuess) {
//   //     guessesLeft--;
//   //     alert("Try Again!")
//   //
//   //   }
//   //
//   //   else if (guessesLeft < 10) {
//   //     losses++;
//   //     alert('You Lost, Please play again')
//   //
//   //   }
//   //   updateScoreboard();
//   //
//   // }
//
// //
// // // //5.problem- once the conition is met do something with the results
// // // //5.solution- create a function to keep track of score
// //
// // function updateScoreboard (win, loss, guessesLeft, guesseSoFar) {
// //  var score = "Wins: " + win + "Losses: " + losses + "remainingGuesses: " + remainingGuesses + "numberOfGuesses " + "numberOfGuesses";
// //  }
//
//
// //
// //   // document.getElementById("wins").innerHTML = "wins " + wins //documenting if user presses correct letter  pull from html id
// //   // document.getElementById("losses").innerHTML = "losses " + losses; //document user losess pull from html id
// //   // document.getElementById("numberOfGuesses").textHTML = "numberOfGuesses" + numberOfGuesses; // keep track of how many guesses pull from html id
// //   // document.getElementById("remainingGuesses").textHTML = "remainingGuesses" + remainingGuesses;
// // //6.problem- display results to browser
// // //6. solution- create a variale to store a string with data from results of game.  Display data using a query selector
// // var html =
// // "<h1>The Psychic Game</h1>" + "<p>Guess what letter I'm thinking of!</p>" + "<p id="wins"> Wins: </p>" + "<p id="losses"> Losses: </p>" + "<p id="numberOfGuesses"> Number of Guesses: </p>
// // " + "<p id ="remainingGuesses">Current Guesses: </p>";
// // document.getElementById("game").innerHTML = html;
// // }
//
//
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// // //
// // // //Display start screen info
// // //  function startGame() {//startgame
// // //   guessesLeft = 10;//assigns how many guesses to start with
// // //   letters =  letters[Math.floor(Math.random() * letters.length)];//computer choses letter at random to be guessed
// // //    guesseSoFar = [];//clear out all letters guessed
// // //   console.log(letters);
// // //
// // //  // function updatePage() {//named updatePage to refresh  page function to keep track of wins and losses
// // //  //     document.getElementById("wins").innerHTML = "wins " + wins //documenting if user presses correct letter  pull from html id
// // //  //
// // //  //     document.getElementById("losses").innerHTML = "losses " + losses; //document user losess pull from html id
// // //  //
// // //  //     document.getElementById("guessesSoFar").innerHTML = "guessesSoFar" + guessesSoFar; // keep track of how many guesses pull from html id
// // //  //
// // //  //     document.getElementById("guessesLeft").innterHTML = "guessesLeft" + guessesLeft;
// // //  // }
// // // }
// // // startGame();
// // //
// // //       document.onkeyup = function(event){   //start listening to events
// // //         userGuess = String.fromCharCode(event.keyCode).toLowerCase();//when user presesses key it saves to userGuess variable
// // //         var letters = letters[Math.floor(Math.random() * letters.length)];//computer picks random letter
// // //         // userGuess.push(userGuess);//pushing user guess to gussesSoFar
// // //       }
// // //
// // //
// // //
// // //         if (userGuess === targetLetter) {
// // //             wins++;//increments by 1
// //             alert('You\'ve guesesed corrrectly!');
// //
// //         }
// //         else if (userGuess !== targetLetter){
// //           guessesLeft--;
// //          alert('You didn\'t guess the correct letter. Let\'s try again.');
// //         }
// //
// //
// //         if(userGuess !== letters){
// //           alert('Please Try Again!')
// //           guessesLeft--;
// //         userGuess =[];//array to store users guesses each round
// //       }
// //
// //       // if (guesseSoFar.indexOf(userGuess) < 0 && Letters.indexOf(userGuess) >= 0) {
// //     	// 	guessesSoFar[guesseSoFar.length]=userGuess;
// //       //   userGuess--;
// //       // }
// //
// //
// //
// //
// //       // }
// //       //
// //       // else if (userGuess === letters) {
// //       //   wins ++;
// //       //   alert('You are Psychic !')
// //       // }
// //       //
// //
// //     // }
// //
// //
// // //
// // // document.onload = function(){
// // //
// // // }
// //     // if (userGuess === targetLetter) {
// //     //           wins++;//increments by 1
// //     //           alert('You\'ve guesesed corrrectly!');
// //     //           startGame();
// //     //       }
// //     //       else if (userGuess !== targetLetter){
// //     //         guessesLeft--;
// //     //        alert('You didn\'t guess the correct letter. Let\'s try again.');
// //     //       }
// //     //
// //     //     }
// //
// // //
// // //
// // //   if (userGuess == letters) {
// // //               wins++;
// // //               alert('Congrats! You\'ve guesesed corrrectly. You Win!');
// // //               guessesLeft = 9; //reseting the guesses back to 9 so that the user can play again
// // //               guessesSoFar.length = 0; //this removes everything from the guesses so far array, so that the guesses from the previous round don't show
// // //           }
// // //
// // //       else if {
// // //
// // //       }
// // //
// // //
// // //
// // // }
// //
// //
// //
// //
// //
// //   // document.onkeyup = function(event) {//function runs when a key is pressed by user
// //   //   var userGuess = String.fromCharCode(event.keyCode).toLowerCase() //function happens taking in user guess by keypress store info for later use
// //   //   console.log(userGuess);
// //   //   guessedLetter.push(userGuess);//pushing user guess to gussesSoFar
// //
// // //     //compare guess against one another to determine results using conditional statements to determine results
// // //
// // //   if (userGuess === targetLetter) {
// // //             wins++;//increments by 1
// // //             alert('You\'ve guesesed corrrectly!');
// // //             startGame();
// // //         }
// // //          else if (userGuess !== targetLetter) {
// // //            alert('Keep Trying');
// // //         }
// // //
// // //       while (userGuess !== targetLetter) {
// // //         userGuess--;
// // //       }
// // //         // else if (userGuess !== targetLetter){
// // //         //   guessesLeft===0;
// // //         //   alert ('you lost');
// // //         //
// // //         // }
// // //
// // //
// // //
// // //
// // //         //   }
// // //
// // //           // } else if (userGuess !== computerGuess){
// // //           //   guessesLeft--; //decrementing the guesses left
// // //           //
// // //           // // } else  {
// // //           // //  losses++; //increase by 1
// // //           // //   alert('You didn\'t guess the correct letter. Try again.');
// // //           // }
// // //     //
// // //     updatePage();
// // // }
// // //
// // // //
// // ////have output for game for user instructions
//User makes choice
//computer makes choice
//capture choices
//compare choices to determine win/loss/or guess Again
//display result to the user

//variables
var computerChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]; //random computer letter choice to pick from
var userGuess = new Array();
var winScore = [0];
var lossesScore = [0];
var remainingGuesses = ['10', '9', '8', '7', '6', '5', '4', '3', '2', '1', '0']


// 1. have output information player to chose letters A-J to guess the letter
// 2. Problem- how to get user input
// 2. solution- Get userinput by using keypress to store information in var for later use.

//function is run everytime someone presses a key

function computer(computerChoice) {
  return computerChoice[Math.floor(Math.random() * computerChoice.length)];
  console.log(computerGuess)
}

document.onkeyup = function(event) {
  //determines what key is pressed.
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
  console.log(userGuess)
  // var computerChoice = ["a","b","c","d","e","f","g","h","i","j"];
  var computerGuess = computer(computerChoice);
  console.log(computerGuess)

  if (userGuess === computerGuess) {
    wins++; //increments by 1
    alert('You are psychic!')
  } else if (userGuess !== computerChoice) {
    remainingGuesses++;
    alert("keep guessing")
    document.getElementById("winScore").innerHTML = (winScore.length);
    userGuess.push(userGuess);
    document.getElementById("remainingGuesses").innerHTML = (remainingGuesses);
    (winScorea++);
  } else if {
    alert("keep guessing");
    document.getElementById("lossesScore").innerHTML = (lossesScore.length);
    userGuess.push(userGuess);
    document.getElementById("userGuess").innerHTML = (userGuess);
    numGuess--;
    document.getElementById("remainingGuesses").innerHTML = (remainingGuesses);
  } else(guessesLeft === 0) {
    alert(' You lost.');
    guessesLeft = 9;
    guessesSoFar.length = 0;
  }
}









//when user presesses key it saves to userGuess variable

//3. problem- get the choice from the computer
//3.solution- create an array  that lists all of the options. for Commputer to andonmly choose a choice from this array.

// //Computer randonly choses a choice from the options array.
// var computerChoice = ["a","b","c","d","e","f","g","h","i","j"];
// //
// //   //random computer letter choice to pick from.  This is the computers choice.
//  var computerGuess=  computerChoice[Math.floor(Math.random() * computerChoice.length)];
//  console.log(computerGuess)

//4. problem- We now have user guess and computer guess.  How to compare both and dtermine the results.
//4. solution- Use if/else conditional statmentsin order to determine the result.
//This logic determines win/loss/letters tracked and how many guesses are left.
//
// if(userGuess === computerChoice){
//         wins++;
//         alert('you are Psychic')
//     }
//   else if {
//       guesseSoFar--;
//       alert('try again')
//   }
//
//   if(guesseSoFar === 0){
//       losses++;
//       alert('you lose please play again')
//   }
// }





//     if (userGuess === computerGuess) {
//             wins++;
//             alert('You are Pyschic!');
//             // guessesLeft = 9; //reseting the guesses back to 9 so that the user can play again
//             // guessesSoFar.length = 0; //this removes everything from the guesses so far array, so that the guesses from the previous round don't show
//         }
//         else if (guessesLeft !== 0){
//             losses++;
//             alert('You didn\'t guess the correct letter. You lost. Let\'s try again.');
//             guessesLeft = 9;
//             guessesSoFar.length = 0;
//         }
//         else if (userGuess !== computerGuess){
//             guessesLeft--; //decrementing the guesses left
// //         }
// //
// //
//         var html = "<h1>The Psychic Game</h1>" +
//                 "<p>Guess what letter I'm thinking of!</p>" +
//                 "<p>Total Wins: " +
//                 wins +
//                 "</p>" +
//                 "<p>Total Losses: " +
//                 losses +
//                 "</p>" +
//                 "<p> numberOfGuesses " +
//                 numberOfGuesses +
//                 "</p>" +
//                 "<p>remainingGuesses: " +
//                 remainingGuesses +
//                 "</p>"
//                 ;
//                 // Placing the html into the game ID
//                 document.querySelector('#game').innerHTML = html;
//
// }
//
//
// //4. problem- We now have user guess and computer guess.  How to compare both and dtermine the results.
// //4. solution- Use if/else conditional statmentsin order to determine the result.
// //This logic determines win/loss/letters tracked and how many guesses are left.
//    // while (userGuess !== computerGuess) {
//    //     userGuess = String.fromCharCode(event.keyCode).toLowerCase();
//    //     gussesSoFar++;
//    //
//    //     if (gussesLeft < 10) {
//    //
//    //     }
//    //   }
//
//     //   wins++;
//     //   alert("You\'re Psychic!");
//     //   guessesLeft = 10; //reseting the guesses back to 9 so that the user can play again
//     // userGuess.push = 0; //this removes everything from the guesses so far array, so that the guesses from the previous round don't show
//
//     //
//     // else if (userGuess !== computerGuess) {
//     // // userGuess.push ;
//     //   alert("Try again!");
//   //   // }
//   //
//   //   else if (guessesLeft !== computerGuess) {
//   //     guessesLeft--;
//   //     alert("Try Again!")
//   //
//   //   }
//   //
//   //   else if (guessesLeft < 10) {
//   //     losses++;
//   //     alert('You Lost, Please play again')
//   //
//   //   }
//   //   updateScoreboard();
//   //
//   // }
//
// //
// // // //5.problem- once the conition is met do something with the results
// // // //5.solution- create a function to keep track of score
// //
// // function updateScoreboard (win, loss, guessesLeft, guesseSoFar) {
// //  var score = "Wins: " + win + "Losses: " + losses + "remainingGuesses: " + remainingGuesses + "numberOfGuesses " + "numberOfGuesses";
// //  }
//
//
// //
// //   // document.getElementById("wins").innerHTML = "wins " + wins //documenting if user presses correct letter  pull from html id
// //   // document.getElementById("losses").innerHTML = "losses " + losses; //document user losess pull from html id
// //   // document.getElementById("numberOfGuesses").textHTML = "numberOfGuesses" + numberOfGuesses; // keep track of how many guesses pull from html id
// //   // document.getElementById("remainingGuesses").textHTML = "remainingGuesses" + remainingGuesses;
// // //6.problem- display results to browser
// // //6. solution- create a variale to store a string with data from results of game.  Display data using a query selector
// // var html =
// // "<h1>The Psychic Game</h1>" + "<p>Guess what letter I'm thinking of!</p>" + "<p id="wins"> Wins: </p>" + "<p id="losses"> Losses: </p>" + "<p id="numberOfGuesses"> Number of Guesses: </p>
// // " + "<p id ="remainingGuesses">Current Guesses: </p>";
// // document.getElementById("game").innerHTML = html;
// // }
//
//
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// // //
// // // //Display start screen info
// // //  function startGame() {//startgame
// // //   guessesLeft = 10;//assigns how many guesses to start with
// // //   letters =  letters[Math.floor(Math.random() * letters.length)];//computer choses letter at random to be guessed
// // //    guesseSoFar = [];//clear out all letters guessed
// // //   console.log(letters);
// // //
// // //  // function updatePage() {//named updatePage to refresh  page function to keep track of wins and losses
// // //  //     document.getElementById("wins").innerHTML = "wins " + wins //documenting if user presses correct letter  pull from html id
// // //  //
// // //  //     document.getElementById("losses").innerHTML = "losses " + losses; //document user losess pull from html id
// // //  //
// // //  //     document.getElementById("guessesSoFar").innerHTML = "guessesSoFar" + guessesSoFar; // keep track of how many guesses pull from html id
// // //  //
// // //  //     document.getElementById("guessesLeft").innterHTML = "guessesLeft" + guessesLeft;
// // //  // }
// // // }
// // // startGame();
// // //
// // //       document.onkeyup = function(event){   //start listening to events
// // //         userGuess = String.fromCharCode(event.keyCode).toLowerCase();//when user presesses key it saves to userGuess variable
// // //         var letters = letters[Math.floor(Math.random() * letters.length)];//computer picks random letter
// // //         // userGuess.push(userGuess);//pushing user guess to gussesSoFar
// // //       }
// // //
// // //
// // //
// // //         if (userGuess === targetLetter) {
// // //             wins++;//increments by 1
// //             alert('You\'ve guesesed corrrectly!');
// //
// //         }
// //         else if (userGuess !== targetLetter){
// //           guessesLeft--;
// //          alert('You didn\'t guess the correct letter. Let\'s try again.');
// //         }
// //
// //
// //         if(userGuess !== letters){
// //           alert('Please Try Again!')
// //           guessesLeft--;
// //         userGuess =[];//array to store users guesses each round
// //       }
// //
// //       // if (guesseSoFar.indexOf(userGuess) < 0 && Letters.indexOf(userGuess) >= 0) {
// //     	// 	guessesSoFar[guesseSoFar.length]=userGuess;
// //       //   userGuess--;
// //       // }
// //
// //
// //
// //
// //       // }
// //       //
// //       // else if (userGuess === letters) {
// //       //   wins ++;
// //       //   alert('You are Psychic !')
// //       // }
// //       //
// //
// //     // }
// //
// //
// // //
// // // document.onload = function(){
// // //
// // // }
// //     // if (userGuess === targetLetter) {
// //     //           wins++;//increments by 1
// //     //           alert('You\'ve guesesed corrrectly!');
// //     //           startGame();
// //     //       }
// //     //       else if (userGuess !== targetLetter){
// //     //         guessesLeft--;
// //     //        alert('You didn\'t guess the correct letter. Let\'s try again.');
// //     //       }
// //     //
// //     //     }
// //
// // //
// // //
// // //   if (userGuess == letters) {
// // //               wins++;
// // //               alert('Congrats! You\'ve guesesed corrrectly. You Win!');
// // //               guessesLeft = 9; //reseting the guesses back to 9 so that the user can play again
// // //               guessesSoFar.length = 0; //this removes everything from the guesses so far array, so that the guesses from the previous round don't show
// // //           }
// // //
// // //       else if {
// // //
// // //       }
// // //
// // //
// // //
// // // }
// //
// //
// //
// //
// //
// //   // document.onkeyup = function(event) {//function runs when a key is pressed by user
// //   //   var userGuess = String.fromCharCode(event.keyCode).toLowerCase() //function happens taking in user guess by keypress store info for later use
// //   //   console.log(userGuess);
// //   //   guessedLetter.push(userGuess);//pushing user guess to gussesSoFar
// //
// // //     //compare guess against one another to determine results using conditional statements to determine results
// // //
// // //   if (userGuess === targetLetter) {
// // //             wins++;//increments by 1
// // //             alert('You\'ve guesesed corrrectly!');
// // //             startGame();
// // //         }
// // //          else if (userGuess !== targetLetter) {
// // //            alert('Keep Trying');
// // //         }
// // //
// // //       while (userGuess !== targetLetter) {
// // //         userGuess--;
// // //       }
// // //         // else if (userGuess !== targetLetter){
// // //         //   guessesLeft===0;
// // //         //   alert ('you lost');
// // //         //
// // //         // }
// // //
// // //
// // //
// // //
// // //         //   }
// // //
// // //           // } else if (userGuess !== computerGuess){
// // //           //   guessesLeft--; //decrementing the guesses left
// // //           //
// // //           // // } else  {
// // //           // //  losses++; //increase by 1
// // //           // //   alert('You didn\'t guess the correct letter. Try again.');
// // //           // }
// // //     //
// // //     updatePage();
// // // }
// // //
// // // //
// // //
