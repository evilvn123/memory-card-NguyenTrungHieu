import Board from "./components/Board";
import cards from "./data/cards";

function App() {
  return (
    <div className="app-container">
      <button className="restart"
        onClick={() => {
          window.location.reload();
        }}
      >
        RESTART
      </button>
      <Board cards={cards} />
    </div>
  );
}

export default App;
