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
    console.log("Info below");
    li.append(arr[i]);
    console.log([i]);
    ul.appendChild(li);
    console.log(ul);
    if (li.textContent !== " "){
      li.classList.add("letter");
    }
  }
}

addPhraseToDisplay(phraseArray);

function checkLetter (letterButton){

}
