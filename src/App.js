import { useState } from 'react'
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

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words, setWords] = useState(wordsList)
  const [pickedWordm, setPickedWord] = useState('')
  const [pickedCategory, setPickedCategory] = useState('')
  const [letters, setLetters] = useState([])

  const pickWordCategory = () => {
    //pink a random category
    const categories = Object.keys(words);
    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)];

    //pink a random word
    const word =
      words[category][Math.floor(Math.random() * Object.keys(category).length)]

    return {word, category}
  }
  //starts the secret word game
  const startGame = () => {
    //pick word pick category
    const { word, category } = pickWordCategory()

    //create an array of letter
    // let wordLetters = word.split("")
    let wordLetters = word.split("");

    wordLetters = wordLetters.map((l) => l.toLowerCase());
    setPickedCategory(category);
    setPickedWord(word);
    setLetters(wordLetters);
    setGameStage(stages[1].name)
  }

  //process the letter input
  const verifyLetter = () => {
    setGameStage(stages[2].name)
  }

  //restarts the game
  const retry = () => {
    setGameStage(stages[0].name)
  }

  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen startGame={startGame} />}
      {gameStage === 'game' && <Game verifyLetter={verifyLetter} />}
      {gameStage === 'end' && <GameOver retry={retry} />}
    </div>
  )
}

export default App
