import React, { Component } from "react";
import icons from "./icons";
import Sentence from "./Sentence";
import Icon from "./Icon";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      sentence: []
    };
  }

  onSentenceIconClick(icon) {
    this.setState({
      sentence: this.state.sentence.filter(word => word.name !== icon.name)
    });
  }

  onIconClick(icon) {
    this.setState({
      sentence: this.state.sentence.concat([icon])
    });
  }

  renderIcons() {
    return icons.map(icon => (
      <Icon icon={icon} onIconClick={this.onIconClick.bind(this, icon)} />
    ));
  }

  render() {
    return (
      <div className="App">
        <Sentence
          sentence={this.state.sentence}
          onIconClick={this.onSentenceIconClick.bind(this)}
        />
        <div>{this.renderIcons()}</div>
      </div>
    );
  }
}

export default App;
