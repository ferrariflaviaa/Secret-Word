import React from 'react'
import './styles.css'
const GameOver = ({ retry }) => {
  return (
    <div className="gameover">
      <h1>Fim do jogo</h1>
      <h2>
        A sua pontuação: <span>0</span>
      </h2>
      <button onClick={retry}>Resetar jogo</button>
    </div>
  )
}

export { GameOver }
