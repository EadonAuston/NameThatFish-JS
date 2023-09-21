import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { Images } from "../../assets/images";
import { useState } from "react";

export function FunctionalApp() {
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [fishWordBank, setFishWordBank] = useState([
    "trout",
    "salmon",
    "tuna",
    "shark",
  ]);
  const [showResults, setShowResults] = useState(false);

  const initialFishes = [
    {
      name: "trout",
      url: Images.trout,
    },
    {
      name: "salmon",
      url: Images.salmon,
    },
    {
      name: "tuna",
      url: Images.tuna,
    },
    {
      name: "shark",
      url: Images.shark,
    },
  ];

  const addToCount = (correctOrWrong) => {
    correctOrWrong
      ? setCorrectCount(correctCount + 1)
      : setIncorrectCount(incorrectCount + 1);
  };

  const decrementWordBank = () => {
    let tempArray = [...fishWordBank];
    tempArray.shift();
    console.log(tempArray);
    setFishWordBank(tempArray);
  };

  const showTheResults = () => {
    setShowResults(true);
  };
  return (
    <div>
      {!showResults ? (
        <>
          <FunctionalScoreBoard
            fishWordBank={fishWordBank}
            incorrectCount={incorrectCount}
            correctCount={correctCount}
          />
          <FunctionalGameBoard
            showTheResults={showTheResults}
            addToCount={addToCount}
            decrementWordBank={decrementWordBank}
            initialFishes={initialFishes}
          />
        </>
      ) : (
        <FunctionalFinalScore correctCount={correctCount} />
      )}
    </div>
  );
}
