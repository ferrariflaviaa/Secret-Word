import React from 'react'
import './styles.css'
const GameOver = ({ retry, score }) => {
  return (
    <div className="gameover">
      <h1>Fim do jogo</h1>
      <h2>
        A sua pontuação: <span>{score}</span>
      </h2>
      <button onClick={retry}>Reniciar jogo</button>
    </div>
  )
}

export { GameOver }
