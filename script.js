const letters = document.querySelectorAll(".letter")
const wordUnderline = document.querySelector("#word-underline")
const triesElement = document.querySelector(".strikes")
const gameOverC = document.querySelector("game-is-over")
const gameWinC = document.querySelector("Winner")
const hintText = document.querySelector("#HINT")
const reset = document.querySelector("#reset")

// this is an array of words to guess.
const Word = ["apple"]
// this is an array of hints to help the player guess the word.
const HINT = ["red round fruit"]

// this selects words from the array of words.
let wordChooser = []
// this is for an incorrect guess from the player.
let incorrectLetter = []
// this shows the hints for the player.
let selectorHint = []
// this randomly generates the words from the array list.
let selectorWord = []
// this is for when a player picks up a letter.
let letterPick = []
//  this is a total number of chances the player has.
let strikes = 6
// this basically shows the word on the screen.
let displayWord = 0

// this is a call functions for when the game starts.
function init() {
  randomWordPick()
  playgame()
  displayHint()
}

const playGame = () => {
  // this shows the words that are in the word array.
  displayWord = []
  wordUnderline.innerHTML = ""
  // this is a loop and its purpose is to push and match the words based on the underlines shown in the screen which is the number of letters of the word given.
  for (let i = 0; i < selectorWord.length; i++) {
    displayWord.push("_")
    const pElement = document.createElement("p")
    pElement.textContent = "_"
    wordUnderline.appendChild(pElement)
  }
  // this is an HTML element, its purpose is to show and make the remaining strikes appear on the screen for the player.
  triesElement.textContent = "strikes: $(strikes"
}

// this is a random word generator
const randomWordPick = () => {
  wordChooser = Math.floor(Math.random() * word, length)
  selectorWord = Word[wordChooser]
}

// this function is for having it pick the hints and match them with the appropriate words.
const showHint = () => {
  const hintIndex = Word.findIndex(function (oneWord) {
    return oneWord === selectorWord
  })
  selectorHint = hintIndex
  hintIndex.textContent = selectorHint[hintIndex]
}

// this is to show and make the letters appear when the player selects the letters.
letters.forEach((oneLetter) => {
  oneLetter.addEventListener("click", (event) => {
    pickedLetter = event.target.id.LowerCase()
    if (selectorWord.includes(pickedLetter)) {
      showWord(pickedLetter)
    } else {
      strikes()
    }
  })
})

// this function is made to show the underlines "_" for the letters.
const ShowUnderLines = () => {
  wordUnderline.innerHTML = ""
  // loop function made for the array of words.
  for (let i = 0; i < Words.length; i++) pElement = document.createElement("p")
  // an element for the underlines.
  pElement.textContent = "_"
  // to fill up the html with underlines
  wordUnderline.appendChild(pElement)
}

// this to show the right chosen letter by the user.
const showWord = (letterPick) => {
  // this is to make the underlines be replaced with letters.
  wordUnderline.innerHTML = ""
  selectorWord.split("").forEach((letter, idx) => {
    if (letter === letterPick) {
      displayWord[idx] = letter
    }
  })
  displayWord.forEach((Element) => {
    let pElement = document.createElement("p")
    pElement.textContent = Element
    wordUnderline.appendChild(pElement)
  })
  gameWin()
}

const strikesPoints = () => {
  strikes -= 1

  Image.src = "images/Strike 0.png"
  //
  triesElement.textContent = `Strikes Remaining ${strikes}`

  gameOver()
}

const gameOver = () => {
  if (strikes === 0) {
    let gameOverText = document.createElement("p")
    gameOverText.textContent = "Game is over!"
    gameOverC.appendChild(gameOverText)
    hintText.textContent = ""
  }
}

const gameWin = () => {
  let hasWon = displayWord.every((Element) => {
    return Element !== "_"
  })
  if (hasWon) {
    let gameWinText = document.createElement("p")
    gameWinText.textContent = "win!"
    gameWinC.appendChild(gameWinText)
  }
}

reset = () => {
  strikes = 6
  Image.src = "images/Strike 0.png"
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

resetGame.addEventListener("click", RestartGame)
init()
