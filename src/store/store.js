import { create } from "zustand";

export const useGameStore = create((set) => ({
  grid: Array(9).fill(null), // Grille 3x3 initiale
  currentPlayer: "X", // Joueur courant
  winner: null, // Gagnant actuel
  scores: { X: 0, O: 0 }, // Scores des joueurs

  // Action : Jouer un tour
  playTurn: (index) => {
    set((state) => {
      if (state.grid[index] !== null || state.winner) return state; // Empêche de jouer sur une case déjà occupée ou si la partie est terminée

      const newGrid = [...state.grid];
      newGrid[index] = state.currentPlayer;

      const winner = checkWinner(newGrid); // Vérifie si quelqu'un a gagné
      let newScores = { ...state.scores };

      // Si un gagnant est trouvé, on met à jour les scores
      if (winner) {
        newScores[winner]++;
      }

      return {
        grid: newGrid,
        currentPlayer: state.currentPlayer === "X" ? "O" : "X", // Alterne les joueurs
        winner,
        scores: newScores,
      };
    });
  },

  // Action : Réinitialiser la partie
  resetGame: () =>
    set(() => ({
      grid: Array(9).fill(null),
      currentPlayer: "X",
      winner: null,
    })),

  // Action : Réinitialiser les scores
  resetScores: () =>
    set(() => ({
      scores: { X: 0, O: 0 },
    })),
}));

// Fonction pour vérifier les conditions de victoire
const checkWinner = (grid) => {
  const winningCombinations = [
    [0, 1, 2], // Lignes horizontales
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], // Colonnes verticales
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], // Diagonales
    [2, 4, 6],
  ];

  for (const [a, b, c] of winningCombinations) {
    if (grid[a] && grid[a] === grid[b] && grid[a] === grid[c]) {
      return grid[a]; // Retourne "X" ou "O" en cas de victoire
    }
  }

  return grid.includes(null) ? null : "Draw"; // Retourne "Draw" si égalité
};
