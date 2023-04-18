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
  console.log(words)

  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen />}
      {gameStage === 'game' && <Game />}
      {gameStage === 'end' && <GameOver />}
    </div>
  )
}

export default App
