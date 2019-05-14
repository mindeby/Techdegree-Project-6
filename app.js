document.addEventListener('DOMContentLoaded', () => {


    const qwerty = document.getElementById('qwerty');
    const phrase = document.getElementById('phrase');
    var guessedTimes = 0;
    var missed = 0; //this variable will keep track of the number of guesses the player has missed. If 5 guesses missed he loses the game
    var rightAnswer = 0;
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

    //Attach a event listener to the “Start Game” button to hide the start screen overlay.
    overlay.addEventListener('click', (event) => { //listen for click events if the target is the reset button
      if(event.target.className === "btn__reset") {
        overlay.style.display = "none"; //hide the overlay if it happens
      }
    });


    function getRandomPhraseAsArray(arr) { //get a random phrase & split it
      const randomPhrase = arr[Math.floor(Math.random()* arr.length)];
      const randomPhraseSplit = randomPhrase.split("");
      return randomPhraseSplit;
    }

    splitPhrase = getRandomPhraseAsArray(phrases);

    const phraseArray = getRandomPhraseAsArray(phrases);




    function addPhraseToDisplay(arr){
      for (i=0; i < arr.length; i+=1) {
        const li = document.createElement('li');
        const ul = document.getElementById('phrase').querySelector('ul');
        li.append(arr[i]);
        ul.appendChild(li);
        if (li.textContent !== " "){
          li.classList.add("letter");
        } else {
          li.classList.add("spaced");
        }
      }
    }

    const lettersArray = document.getElementsByClassName('letter');


    addPhraseToDisplay(phraseArray);

    const guessedLetters =[];

    function checkLetter (keyboardButton){
        if (keyboardButton.textContent.toUpperCase() === lettersArray[i].textContent){
          lettersArray[i].classList.add("show");
          guessedLetters.push([i]);
          console.log("below should be guessed letters array");
          console.log(guessedLetters);
          return lettersArray[i];
        } else {
          return null;
        }
    }


    qwerty.addEventListener('click', (event) => {
      console.log("BEGIN LISTENER");
      if (event.target.tagName === 'BUTTON') {
        guessedTimes += 1;
        for (i=0; i < (lettersArray.length); i += 1) {
        event.target.classList.add("chosen");
        var letterFound = checkLetter(event.target);
          }
          if (letterFound !== null) {
            rightAnswer += 1;
            console.log(rightAnswer);
        }
      console.log("END LISTENER");
      missed = guessedTimes - rightAnswer;
      console.log(missed);
      }
    });

});
