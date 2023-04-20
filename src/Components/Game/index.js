import React from 'react'

const Game = ({ verifyLetter }) => {
  return (
    <div className="game">
      <p className="points">
        <span>Pontuação: 000</span>
      </p>
      <h1>Adivinhe a palavra</h1>
      <h3>
        Diga sobre a palavra: <span>Diga...</span>
      </h3>
      <div className="wordContainer">
        <span className="letter">A</span>
        <span className="blankSquare"></span>
      </div>
      <div className="blankSquare">
        <p>Tente adivinhar uma letra da palavra</p>
        <form>
        <input
            type="text"
            name="letter"
            maxLength="1"
            required
          />
          <button>Jogar</button>
        </form>
      </div>
      <div className='wrongLettersContainer'>
      <p>Letras já utilizadas:</p>
      <span>a</span>
      </div>
    </div>
  )
}

export { Game }
