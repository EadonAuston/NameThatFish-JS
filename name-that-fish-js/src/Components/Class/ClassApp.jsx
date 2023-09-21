import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";
import { Images } from "../../assets/images";

export class ClassApp extends Component {
  state = {
    incorrectCount: 0,
    correctCount: 0,
    fishWordBank: ["trout", "salmon", "tuna", "shark"],
    showResults: false,
  };

  addToCount = (correctOrWrong) => {
    correctOrWrong
      ? this.setState({ correctCount: this.state.correctCount + 1 })
      : this.setState({ incorrectCount: this.state.incorrectCount + 1 });
  };

  decrementWordBank = () => {
    let tempArray = [...this.state.fishWordBank];
    tempArray.shift();
    console.log(tempArray);
    this.setState({ fishWordBank: tempArray });
  };

  showTheResults = () => {
    this.setState({ showResults: !this.state.showResults });
  };

  render() {
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
    return (
      <div>
        {!this.state.showResults ? (
          <>
            <ClassScoreBoard
              fishWordBank={this.state.fishWordBank}
              incorrectCount={this.state.incorrectCount}
              correctCount={this.state.correctCount}
            />
            <ClassGameBoard
              showTheResults={this.showTheResults}
              addToCount={this.addToCount}
              decrementWordBank={this.decrementWordBank}
              initialFishes={initialFishes}
            />
          </>
        ) : (
          <ClassFinalScore correctCount={this.state.correctCount} />
        )}
      </div>
    );
  }
}
