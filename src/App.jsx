import Grid from "./components/grille";
import { useGameStore } from "./store/store";

const App = () => {
  const { resetGame, resetScores, scores, winner, currentPlayer } = useGameStore();

  return (
    <div className="app">
      <h1>Tic-Tac-Toe</h1>

      {/* Affichage des scores */}
      <div className="scores">
        <h2>Score</h2>
        <p>Joueur X : {scores.X}</p>
        <p>Joueur O : {scores.O}</p>
      </div>

      {/* Affichage du joueur courant */}
      <h2>
        {winner
          ? winner === "Draw"
            ? "Égalité ! 🤝"
            : `Le joueur ${winner} a gagné ! 🎉`
          : `Au tour de : ${currentPlayer} !`}
      </h2>

      {/* Grille du jeu */}
      <Grid />

      {/* Boutons */}
      <button id="reset" onClick={resetGame}>
        Réinitialiser la partie
      </button>
      <button id="reset" onClick={resetScores}>
        Réinitialiser les scores
      </button>
    </div>
  );
};

export default App;
