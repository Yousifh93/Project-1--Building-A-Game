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
  wordUnderline.innerHTML = ""
  // this is a loop and its purpose is to push and match the words based on the underlines shown in the screen which is the number of letters of the word given.
  for (let i = 0; i < selectorWord.length; i++) {
    displayWord.push("_")
    const pElement = document.createElement("p")
    pElement.textContent = "_"
    wordUnderline.appendChild(pElement)
  }
  // this is an HTML element, its purpose is to show and make the remaining strikes appear on the screen for the player.
  strikeElement.textContent = `strikes: ${strikes}`
}

// this is a random word generator
const randomWordPick = () => {
  wordChooser = Math.floor(Math.random() * Word.length)
  selectorWord = Word[wordChooser]
  console.log(selectorWord)
}

// this function is for having it pick the hints and match them with the appropriate words.
const showHint = () => {
  const hintIndex = Word.findIndex(function (oneWord) {
    return oneWord === selectorWord
  })
  selectorHint = hintIndex
  hintText.textContent = HINT[hintIndex]
}

// this is to show and make the letters appear when the player selects the letters.
letters.forEach((oneLetter) => {
  oneLetter.addEventListener("click", (event) => {
    letterPick = oneLetter.id.toLowerCase()
    if (selectorWord.includes(letterPick)) {
      showWord(letterPick)
    } else {
      strikesPoints()
    }
  })
})

// this function is made to show the underlines "_" for the letters.
const ShowUnderLines = () => {
  wordUnderline.innerHTML = ""
  // loop function made for the array of words.
  for (let i = 0; i < selectorWord.length; i++) {
    let pElement = document.createElement("p")
    // an element for the underlines.
    pElement.textContent = "_"
    // to fill up the html with underlines
    wordUnderline.appendChild(pElement)
  }
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

  hangManImg.src = `images/strike-${strikes}.png` // fixed: use hangManImg not image
  strikeElement.textContent = `Strikes Remaining ${strikes}`

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

restartGame.addEventListener("click", replayGame)
init()
