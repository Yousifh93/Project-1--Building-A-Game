const letters = document.querySelectorAll(".letter")
const wordUnderline = document.querySelector("#words-underline")
const strikeElement = document.querySelector(".strikes")
const gameOverC = document.querySelector("#game-is-over")
const gameWinC = document.querySelector("#winner") // lowercase w to match HTML
const hintText = document.querySelector("#hint") // lowercase h to match HTML
const hangManImg = document.querySelector("#hangman") // lowercase h to match HTML
const restartGame = document.querySelector("#reset")

// this is an array of words to guess.
const Word = [
  "aberration",
  "banshee",
  "chainsaw",
  "dungeon",
  "eldritch",
  "fiend",
  "ghoul",
  "hex",
  "incubus",
  "jaws",
  "kraken",
  "lurker",
  "mummy",
  "necromancy",
  "ogre",
  "possession",
  "quarantine",
  "ritual",
  "specter",
  "tombstone",
  "unholy",
  "vex",
  "wraith",
  "xenomorph",
  "yeti",
  "zombie",
]
// this is an array of hints to help the player guess the word.
const HINT = [
  "a departure from normal",
  "a wailing spirit",
  "a killer's noisy tool",
  "a dark underground prison",
  "uncanny and sinister",
  "a cruel person or devil",
  "eats human corpses",
  "a magic curse",
  "a male demon",
  "a terrifying mouth",
  "a huge sea monster",
  "one who waits in hiding",
  "a wrapped dead body",
  "communicating with the dead",
  "a monstrous humanoid",
  "control by an evil spirit",
  "a state of isolation",
  "a dark ceremony",
  "a ghost or phantom",
  "a stone on a grave",
  "profane and evil",
  "to annoy or frustrate",
  "a ghost-like image",
  "a terrifying alien creature",
  "the abominable snowman",
  "a reanimated corpse",
]

// this selects words from the array of words.
let wordChooser = 0
// this is for an incorrect guess from the player.
let incorrectLetter = []
// this shows the hints for the player.
let selectorHint
// this randomly generates the words from the array list.
let selectorWord = ""
// this is for when a player picks up a letter.
let letterPick
//  this is a total number of chances the player has.
let strikes = 6
// this basically shows the word on the screen.
let displayWord = []

// this is a call functions for when the game starts.
function init() {
  randomWordPick()
  playGame()
  showHint()
}

const playGame = () => {
  // this shows the words that are in the word array.
  displayWord = []
  // this removes previous old letters and replace it when you want to play again
  wordUnderline.innerHTML = ""
  // this is a loop and its purpose is to push and match the words based on the underlines shown in the screen which is the number of letters of the word given.
  for (let i = 0; i < selectorWord.length; i++) {
    // this makes the the looping for each letter for the chosen word.
    // this loop is to match the letters with the underlines on the screen based on the word randomly given.
    displayWord.push("_")
    // this adds an underline for each letter on the screen based on the words length but this alone is not enough so need to create a P element for it.
    const pElement = document.createElement("p")
    // so by using the DOM, created a P element for the underline so to be able to print the underline and make it actually functional.
    pElement.textContent = "_"
    // this is for the underline to appear.
    wordUnderline.appendChild(pElement)
    // here the function appendchild is to print up the underlines it acts similar to a console.log.
  }
  // this is an HTML element, its purpose is to show and make the remaining strikes appear on the screen for the player.
  strikeElement.textContent = `strikes: ${strikes}`
  // $ means
}

// this is a random word generator that selects a random word from the words array list.
const randomWordPick = () => {
  wordChooser = Math.floor(Math.random() * Word.length)
  // here math floor would count and calculate the words array list randomly and math random will pick up a word randomly after based on the array list length.
  selectorWord = Word[wordChooser]
  // this prints the word that is chosen by the math.floor and math random for it to be displayed on the screen.

  console.log(selectorWord)
}

// this function is for having it pick the hints and match them with the appropriate words.
const showHint = () => {
  const hintIndex = Word.findIndex(function (oneWord) {
    // created a const called hintIndex and word.findindex ==> ( const word = { ) is to select a word and hint from the const word and hint so it matches up the word and hint together.
    return oneWord === selectorWord
    // this brings the const hints array list to match with the selected word array list
  })
  selectorHint = hintIndex
  // this will match the hints array list with the hint word array list
  hintText.textContent = HINT[hintIndex]
  // this will print up the hint that matches with the word given from the word array list
}

// this is to show and make the letters appear when the player selects the letters.
letters.forEach((oneLetter) => {
  oneLetter.addEventListener("click", (event) => {
    // added an eventlistner so whenever it clicks a letter it will display if its correct
    letterPick = oneLetter.id.toLowerCase()
    // this is for to make the letters chosen by lower case only
    if (selectorWord.includes(letterPick)) {
      // an if condition for a letter to be chosen only based on the word chosen on the screen
      showWord(letterPick)
      // this will print the letter if the correct letter is chosen
    } else {
      strikesPoints()
      // else it will add a strike condition to it.
    }
  })
})

// this function is made to show the underlines "_" for the letters.
const ShowUnderLines = () => {
  wordUnderline.innerHTML = ""
  // loop function made for the array of words.
  for (let i = 0; i < selectorWord.length; i++) {
    let pElement = document.createElement("p")
    // this so i can create a Paragraph element to be used to print and show the underlines
    pElement.textContent = "_"
    // to fill up the html with underlines
    wordUnderline.appendChild(pElement)
    // this basically prints the underlines
  }
}

// this to show the right chosen letter by the user.
const showWord = (letterPick) => {
  wordUnderline.innerHTML = ""
  selectorWord.split("").forEach((letter, idx) => {
    if (letter === letterPick) {
      displayWord[idx] = letter
    } // this is to make the underlines be replaced with letters. it wil take a word and the .split will take each letter and put it instead of the underlines.
  })
  displayWord.forEach((Element) => {
    // elements are the words
    let pElement = document.createElement("p")
    pElement.textContent = Element
    wordUnderline.appendChild(pElement)
  }) // this is for the word to be shown when its fully guessed and the game is won.
  gameWin()
}

const strikesPoints = () => {
  strikes -= 1
  // this is the number of strikes it will be decreased based on the player if an incorrect letter is picked and attached pictures will change until it reaches to the last.
  hangManImg.src = `images/strike-${strikes}.png` // this displays the hangman pictures based on the strikes order
  strikeElement.textContent = `Strikes Remaining ${strikes}` // this is done to show the remaining strikes on the screen

  gameOver()
}
//
const gameOver = () => {
  if (strikes === 0) {
    let gameOverText = document.createElement("p")
    // if the strikes reaches 0 created a p element to print out the word gameover like an alert shown in the screen to tell the player that he lost
    gameOverText.textContent = "Game is over!"
    gameOverC.appendChild(gameOverText)
    hintText.textContent = ""
  }
}

const gameWin = () => {
  // this is done for when a player guessed the full word before the strikes reaching 0 so created
  //
  let hasWon = displayWord.every((Element) => {
    return Element !== "_" // this will check if the underlines are filled with letters and the word is completed
  })
  if (hasWon) {
    let gameWinText = document.createElement("p")
    gameWinText.textContent = "win!"
    gameWinC.appendChild(gameWinText)
  }
  // its an if to create a paragraph p to display the message that the player has won on the screen
}
// this resets everything back to its starting shape when the button restart game is clicked.
const replayGame = () => {
  strikes = 6
  hangManImg.src = "images/Beginning.png"
  selectorHint = ""
  displayWord = []
  selectorWord = ""
  incorrectLetter = []
  wordUnderline.textContent = ""
  gameWinC.innerHTML = ""
  gameOverC.innerHTML = ""
  randomWordPick()
  playGame()
  showHint()
}
// this resets everything back to its starting shape when the button restart game is clicked.
restartGame.addEventListener("click", replayGame)
init()
