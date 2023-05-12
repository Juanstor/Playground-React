import { useState } from 'react'
import confetti from "canvas-confetti"

import { Square } from './components/Square'
import { TURNS } from './constants'
import { checkWinnerFrom } from './logic/board'

function App() {
  const [board, setBoard] = useState(
    Array(9).fill(null)
    )
    const [turn, setTurn] = useState(TURNS.X)
    // null = no hay ganador, false = empate
    const [winner, setWinner] = useState(null)

    

    const resetGame = () => {
      setBoard(Array(9).fill(null))
      setTurn(TURNS.X)
      setWinner(null)
    }

    const checkEndGame = (newBoard) => {
      //revisamos si hay un empate
      //si no hay mas espacios vacios
      // en el tablero
      return newBoard.every((square) => square != null)
    }
    
    const updateBoard = (index) => {
      // no actualizamos esta posicion
      // si ya tiene algo = !null
      if (board[index] || winner) return
      // actualizar el tablero
      const newBoard = [...board]
      newBoard[index] = turn 
      setBoard(newBoard)
      // cambiar el turno
      const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
      setTurn(newTurn)
      //revisar si hay ganador
      const newWinner = checkWinnerFrom(newBoard)
      if (newWinner) {
        confetti()
        setWinner(newWinner)
      } else if (checkEndGame(newBoard)) {
        setWinner(false)// TODO> Check if game is over
    } 
    }

  return (
    <main className='board'>
    <h1>Tic Tac Toe from App</h1>
    <button onClick={resetGame}>Reiniciar el juego</button>
    <section className="game">
      {
        board.map((_, index) => {
          return (
            <Square
              key={index}
              index={index}
              updateBoard={updateBoard}
            >
              {board[index]}
            </Square>
          )
        })
      }
    </section>

    <section className="turn">
      <Square isSelected={turn === TURNS.X}>
        {TURNS.X}
      </Square>
      <Square isSelected={turn === TURNS.O}>
        {TURNS.O}
      </Square>
    </section>

    {
      winner != null && (
        <section className="winner">
          <div className="text">
            <h2>
              {
                winner === false
                ? 'Empate'
                : 'Ganó: '
              }
            </h2>

            <header className="win">
              {winner && <square>{winner}</square>}
            </header>

            <footer>
              <button onClick={resetGame}>Empezar de nuevo</button>
            </footer>
          </div>
        </section>
      )
    }
  </main>

  );
}

export default App;
