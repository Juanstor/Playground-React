import { WINNER_COMBOS } from "../constants"

export const checkWinnerFrom = (boardToCheck) => {
    //revisamos todas las combinaciones ganadoras
    // para ver si x u o ganó
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if (
        boardToCheck[a] && // 0 = x u o
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        // si no hay ganador
        return boardToCheck[a]
      }
    }
    return null
  }