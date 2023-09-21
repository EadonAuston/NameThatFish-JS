import "./styles/game-board.css";
import { useState } from "react";

export function FunctionalGameBoard({
  addToCount,
  decrementWordBank,
  showTheResults,
  initialFishes,
}) {
  const [guess, setGuess] = useState("");
  const [fishIndex, setFishIndex] = useState(0);
  const [nextFishToName, setNextFishToName] = useState(initialFishes[0]);

  const submitGuess = (answer) => {
    answer === nextFishToName.name ? addToCount(true) : addToCount(false);

    if (fishIndex === initialFishes.length - 1) {
      showTheResults();
    }

    setFishIndex(fishIndex + 1);
    setNextFishToName(initialFishes[fishIndex + 1]);
    setGuess("");
    console.log(decrementWordBank);
    decrementWordBank();
  };

  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={nextFishToName.url} alt={nextFishToName.name} />
      </div>
      <form
        id="fish-guess-form"
        onSubmit={(e) => {
          e.preventDefault();
          submitGuess(guess);
        }}>
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          type="text"
          name="fish-guess"
          value={guess}
          onChange={(e) => {
            setGuess(e.target.value);
          }}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
