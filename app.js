document.addEventListener('DOMContentLoaded', () => {


    const qwerty = document.getElementById('qwerty');
    const phrase = document.getElementById('phrase');
    var missed = 0; //this variable will keep track of the number of guesses the player has missed. If 5 guesses missed he loses the game
    var tries = 5;
    //Attach a event listener to the “Start Game” button to hide the start screen overlay.
    overlay.addEventListener('click', (event) => { //listen for click events if the target is the reset button
      if(event.target.className === "btn__reset") {
        overlay.style.display = "none"; //hide the overlay if it happens
      }
    });

    const phrases = [
                      "GAME OF THRONES",
                      "KILLING EVE",
                      "STRANGER THINGS",
                      "BLACK MIRROR",
                      "PATRIOT",
                      "SHAMELESS",
                      "WESTWORLD",
                      "THIS IS US",
                      "ORANGE IS THE NEW BLACK",
                      "BIG LITTLE LIES"
                    ];




    function getRandomPhraseAsArray(arr) { //get a random phrase & split it
      const randomPhrase = arr[Math.floor(Math.random()* arr.length)];
      const randomPhraseSplit = randomPhrase.split("");
      return randomPhraseSplit;
    }





    var phraseArray = getRandomPhraseAsArray(phrases); //GETS AN ARRAY OF CHARACTERS


    function addPhraseToDisplay(arr){
      for (i=0; i < arr.length; i+=1) {
        const li = document.createElement('li'); //create a list item for each
        const ul = document.getElementById('phrase').querySelector('ul');
        li.append(arr[i]); //put the character inside the list item
        ul.appendChild(li); //append list item to the phrase ul
        if (li.textContent !== " "){
          li.classList.add("letter");
        } else {
          li.classList.add("spaced");
        }
      }
    }

    addPhraseToDisplay(phraseArray); //this creates an li for each letter in the array and gives it a class


var lettersArray = document.getElementsByClassName('letter'); //gets all the elements with the class of letter


//Create a checkLetter Function
function checkLetter (keyboardButton) {
  var matchedLetter = null;
  for (var i = 0; i < lettersArray.length; i +=1 ) {
    if (keyboardButton.textContent.toUpperCase() === lettersArray[i].textContent){
      lettersArray[i].classList.add("show");
      matchedLetter = (lettersArray[i].textContent);
    }
  }
    return matchedLetter;
}

function checkWin(){
  var lettersShowing = document.getElementsByClassName('show');
  if (lettersShowing.length === lettersArray.length) {
    console.log("YOU WON");
    overlay.classList.add("win");
    overlay.style.display = "block";
  } else if (missed === 5 || missed > 5) {
    overlay.classList.add("lose");
    overlay.style.display = "block";
  } else {
    console.log("YOU HAVENT WON YET");
  }
}


qwerty.addEventListener('click', (event) => {
  console.log("function begins")
  if (event.target.tagName === 'BUTTON' && event.target.disabled != true) {

      event.target.disabled = true;

      event.target.classList.add("chosen");

      console.log(event.target);

      var letterFound = checkLetter(event.target);
      console.log("The value returned is " + letterFound);
      if (letterFound === null) {
        missed +=1;
        tries -= 1;
        console.log("You missed " + missed + " times");
        console.log("You still have " + tries + " tries");

    } else if (letterFound !== null) {

        console.log("congratz you found the letter " + letterFound);

    }

    console.log("function ends")
    checkWin();
  }
});


});
