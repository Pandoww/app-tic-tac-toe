import Grid from "./components/grille";
import { useGameStore } from "./store/store";

const App = () => {
  const { currentPlayer, winner, isDraw, resetGame } = useGameStore();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Jeu de Tic-Tac-Toe</h1>
      {!winner && !isDraw && (
        <h2 className="text-2xl mb-4">Joueur courant : {currentPlayer}</h2>
      )}
      {winner && <h2 className="text-2xl mb-4">🎉 {winner} a gagné ! 🎉</h2>}
      {isDraw && <h2 className="text-2xl mb-4">Match nul ! 🤝</h2>}
      <Grid />
      <button id="reset"
        onClick={resetGame}
        
      >
        Réinitialiser le jeu
      </button>
    </div>
  );
};

export default App;
