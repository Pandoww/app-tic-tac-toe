const Cell = ({ value, onClick }) => {
    return (
      <button
        onClick={onClick}
        className="w-20 h-20 text-2xl font-bold flex items-center justify-center border border-gray-500"
      >
        {value}
      </button>
    );
  };
  
  export default Cell;
  