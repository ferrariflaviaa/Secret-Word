/* eslint-disable no-mixed-operators */
import { useEffect, useState } from 'react'
import './App.css'
import { StartScreen } from './Components/StartScreen'
import { wordsList } from './Data/words'
import { Game } from './Components/Game'
import { GameOver } from './Components/GameOver'

const stages = [
  { id: 1, name: 'start' },
  { id: 2, name: 'game' },
  { id: 3, name: 'end' },
]

const guessesQty = 3;

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words, setWords] = useState(wordsList)
  const [pickedWord, setPickedWord] = useState('')
  const [pickedCategory, setPickedCategory] = useState('')
  const [letters, setLetters] = useState([])

  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guesses, setGuesses] = useState(3)
  const [score, setScore] = useState(0)

  const pickWordCategory = () => {
    //pink a random category
    const categories = Object.keys(words)
    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)]

    //pink a random word
    const word =
      words[category][Math.floor(Math.random() * Object.keys(category).length)]

    return { word, category }
  }
  //starts the secret word game
  const startGame = () => {
    //pick word pick category
    const { word, category } = pickWordCategory()

    //create an array of letter
    let wordLetters = word.split('')

    wordLetters = wordLetters.map((l) => l.toLowerCase())
    setPickedCategory(category)
    setPickedWord(word)
    setLetters(wordLetters)
    setGameStage(stages[1].name)
  }

  //process the letter input
  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toString().toLowerCase()

    //check if letter has already been utilized
    if (
      (guessedLetters && guessedLetters.includes(normalizedLetter)) ||
      (wrongLetters && wrongLetters.includes(normalizedLetter))
    ) {
      return
    }

    //push guessed letter or remove a chance
    if (letters && letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        letter,
      ])
    } else {
      console.log('erro')
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter,
      ])

      setGuesses((actualGuesses) => actualGuesses - 1)
    }
  }

  //restarts the game
  const retry = () => {
    setScore(0)
    setGuesses(guessesQty)
    setGameStage(stages[0].name)
  }

  //clear letters state
  const clearLettersStates = () => {
    setGuessedLetters([])
    setWrongLetters([])
  }

  //check if guesses ended
  useEffect(() => {
    if (guesses === 0) {
      //game over and reset all states
      clearLettersStates()
      setGameStage(stages[2].name)
    }
  }, [guesses])

  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen startGame={startGame} />}
      {gameStage === 'game' && (
        <Game
          verifyLetter={verifyLetter}
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
        />
      )}
      {gameStage === 'end' && <GameOver retry={retry} />}
    </div>
  )
}

export default App
