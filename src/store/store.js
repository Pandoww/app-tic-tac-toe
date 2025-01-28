import { create } from "zustand";

const initialGrid = Array(9).fill(null); // grille tic tac toe

export const useGameStore = create((set) => ({
  grid: initialGrid,
  currentPlayer: "X",
  winner: null,
  isDraw: false,

  playTurn: (index) =>
    set((state) => {
      if (state.grid[index] || state.winner) return state; // Case déjà occupée ou jeu terminé
      const newGrid = [...state.grid]; //copie de la grille avec nouvelle case
      newGrid[index] = state.currentPlayer;

      const winner = checkWinner(newGrid);
      const isDraw = !newGrid.includes(null) && !winner;

      return {
        grid: newGrid,
        currentPlayer: winner ? state.currentPlayer : state.currentPlayer === "X" ? "O" : "X",
        winner,
        isDraw,
      };
    }),

  resetGame: () =>
    set({
      grid: initialGrid,
      currentPlayer: "X",
      winner: null,
      isDraw: false,
    }),
}));

// conditions de victoire
const checkWinner = (grid) => {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const [a, b, c] of winningCombos) {
    if (grid[a] && grid[a] === grid[b] && grid[a] === grid[c]) {
      return grid[a];
    }
  }
  return null;
};
