document.addEventListener('DOMContentLoaded', () => {


    const qwerty = document.getElementById('qwerty');
    const phrase = document.getElementById('phrase');
    const missed = 0; //this variable will keep track of the number of guesses the player has missed. If 5 guesses missed he loses the game
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
    const lettersArray = document.getElementsByClassName('letter');


    overlay.addEventListener('click', (event) => {
      if(event.target.className === "btn__reset") {
        overlay.style.display = "none";
      }
    });

    function getRandomPhraseAsArray(arr) {
      const randomPhrase = arr[Math.floor(Math.random()* arr.length)];
      const splitPhrase = randomPhrase.split("");
      return splitPhrase;
    }

    const phraseArray = getRandomPhraseAsArray(phrases);

    function addPhraseToDisplay(arr){
      for (i=0; i < arr.length; i+=1) {
        const li = document.createElement('li');
        const ul = document.getElementById('phrase').querySelector('ul');
        li.append(arr[i]);
        ul.appendChild(li);
        if (li.textContent !== " "){
          li.classList.add("letter");
        }
      }
    }

    const guessedLetters =[];

    addPhraseToDisplay(phraseArray);


    console.log(lettersArray.length);

    function checkLetter (keyboardButton){

        console.log("LETTER ARRAY is")
        console.log(lettersArray[i].textContent)
        if (lettersArray[i].textContent === keyboardButton.textContent.toUpperCase()){
          lettersArray[i].classList.add("show");
          guessedLetters.push([i]);
          return lettersArray[i];
        } else {
          return null;
        }
    }


    qwerty.addEventListener('click', (event) => {
      if (event.target.tagName === 'BUTTON') {
        for (i=0; i < (lettersArray.length); i += 1) {
        event.target.classList.add("chosen");
        console.log("was a button pushed?");
        console.log(event.target.textContent);
        var letterFound = checkLetter(event.target);
        console.log("logs letter found?");
        console.log(letterFound);
        }
      }
    });



});
