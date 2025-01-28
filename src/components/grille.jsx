import Cell from "./cell";
import { useGameStore } from "../store/store";

const Grid = () => {
  const { grid, playTurn } = useGameStore();

  return (
    <div className="grid grid-cols-3 gap-2">
      {grid.map((value, index) => (
        <Cell key={index} value={value} onClick={() => playTurn(index)} />
      ))}
    </div>
  );
};

export default Grid;
