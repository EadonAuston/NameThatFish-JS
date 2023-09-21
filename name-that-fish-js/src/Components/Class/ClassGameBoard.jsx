import { Component } from "react";
import "./styles/game-board.css";

export class ClassGameBoard extends Component {
  state = {
    guess: "",
    fishIndex: 0,
    nextFishToName: this.props.initialFishes[0],
  };

  preventRefresh(e) {
    e.preventDefault();
    this.submitGuess(this.state.guess);
  }

  submitGuess(answer) {
    answer === this.state.nextFishToName.name
      ? this.props.addToCount(true)
      : this.props.addToCount(false);

    this.setState({ fishIndex: this.state.fishIndex + 1 }, () => {
      if (this.state.fishIndex === this.props.initialFishes.length) {
        this.props.showTheResults();
      }
      this.setState({
        nextFishToName: this.props.initialFishes[this.state.fishIndex],
        guess: "",
      });
    });
    this.props.decrementWordBank();
  }

  render() {
    const { nextFishToName } = this.state;
    return (
      <div id="game-board">
        <div id="fish-container">
          <img src={nextFishToName.url} alt={nextFishToName.name} />
        </div>
        <form id="fish-guess-form" onSubmit={(e) => this.preventRefresh(e)}>
          <label htmlFor="fish-guess">What kind of fish is this?</label>
          <input
            type="text"
            name="fish-guess"
            value={this.state.guess}
            onChange={(e) => {
              this.setState({ guess: e.target.value });
            }}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
