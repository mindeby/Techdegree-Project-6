document.addEventListener('DOMContentLoaded', () => {


    const qwerty = document.getElementById('qwerty');
    const phrase = document.getElementById('phrase');
    var missed = 0; //this variable will keep track of the number of guesses the player has missed. If 5 guesses missed he loses the game

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
    var guessedLetters =[];


    function checkLetter (keyboardButton){
        if (keyboardButton.textContent.toUpperCase() === lettersArray[i].textContent){
          lettersArray[i].classList.add("show");
          guessedLetters.push(lettersArray[i].textContent);
          console.log(guessedLettersUnique);
          return lettersArray[i].textContent;
        } else {
          return null;
        }
    }

    var guessedLettersUnique = guessedLetters.filter(function(elem, index, self) {
    return index === self.indexOf(elem);
    })
var matches = guessedLettersUnique.length;
var guesses = 0;
var lives = 5;

    qwerty.addEventListener('click', (event) => {
                console.log("BEGIN LISTENER");
      if (event.target.tagName === 'BUTTON' && event.target.disabled != true) {
        for (i=0; i < (lettersArray.length); i += 1) {
        event.target.disabled = true;
        event.target.classList.add("chosen");
        var letterFound = checkLetter(event.target);
        console.log("BELOW IS LETTER FOUND");
        console.log(letterFound);
          }
          guesses +=1;
          console.log("END LISTENER");
          console.log("NUMBER OF GUESSES");
          console.log(guesses);
          console.log("NUMBER OF matches");
          console.log(matches);
          missed = (guesses) - (matches);
          console.log("missed");
          console.log(missed);
          console.log(guessedLettersUnique);

      }
    });



});
