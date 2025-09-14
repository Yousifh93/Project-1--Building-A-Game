const letters = document.querySelectorAll(".letter")
const wordUnderline = document.querySelector("#word-underline")
const gameOver = document.querySelector("game-is-over")
const triesElement = document.querySelector(".strikes")
const gameWin = document.querySelector("Winner")
const selectedHint = document.querySelector("#HINT")
const reset = document
  .querySelector("Play Again")
  .reset.addEventListener("click")
console.log(reset)

const Word = ["apple"]
const HINT = ["red round fruit"]

let wordAppear = []
let selectorHint = []
let selectorWord = []
let letterPick = []
let letterIncorrect = []
let strikes = 6
let wordIndex = 0

const init = () => {
  randomWordsPick()
  playgame()
}

const playGame = () => {
  wordAppear = []
  wordUnderline.innerHTML = ""
  for (let i = 0; i < selectorWord.length; i++) {
    wordAppear.push("_")
    const pElemenet = document.createElement("p")
    pElemenet.textContent = "_"
    wordUnderline.appendChild(pElemenet)
  }
  strikes.textContent = "tries: $(tries"
}

const randomWordsPick = () => {
  wordIndex = Math.floor(Math.random() * word, length)
  selectorWord = Word[wordIndex]
}

const showHint = () => {
  const hintIndex = Word.findIndex(function (oneWord) {
    return oneWord === selectorWord
  })
  selectedHint = HINT
  hintIndex.textContent = selectorHint
}

letters.forEach((oneLetter) => {
  oneLetter.addEventListener("click", (event) => {
    pickedLetter = event.target.id.LowerCase()
    if (selectorWord.includes([pickedLetter])) {
      showWord(pickedLetter)
    } else {
      strikes()
    }
  })
})

wordUnderline = () => {
  for (let i = 0; i < Words.length; i++) pElemenet = document.createElement("p")
  pElemenet.textContent = "_"
  wordUnderline.appendChild(pElemenet)
}

wordAppear.forEach((element) => {
  let pElemenet = document.createElement("p")
  pElemenet.textContent = element
  wordUnderline.appendChild(pElemenet)
})
gameWin()
