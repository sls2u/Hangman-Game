//variables
var selectedLetter="";
var pressedLetter = ["a","b","c","d","e","f","g","h","i","j"];
var letter = ["a","b","c","d","e","f","g","h","i","j"];



//counter
var guessesLeft = 10;
var wins = 0;
var losses = 0;
var i = 0;

for (var i = 0; i < guessesLeft; i++) {

}
//want computer to generate random letter//

function randLetter() {
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
    var letter = letters[Math.floor(Math.random() * letters.length)];
    console.log(letter);

}
      $('#letter').html(randLetter())

// want button to be pressed to show value of letter comp. generated letter//
function myFunction() {
    var user = prompt("Please enter one letter from A-J");
    if (user != null) {
        document.getElementById("userInput").innerHTML =
        "Hello " + person + "! How are you today?";
    }
}
  //
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
