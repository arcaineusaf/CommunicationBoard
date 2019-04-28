import React, { Component } from "react";
import icons from "./icons";
import Sentence from "./Sentence";
import Icon from "./Icon";
import Upload from "./Upload";
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

  getCustomIcons() {
    const files = localStorage.getItem("aac.files");
    if (!files) {
      return null;
    }

    const filesArray = files.split(",");
    return filesArray.map(file => (
      <div className="App-img-wrapper">
        <img
          className="App-img"
          src={localStorage.getItem(`aac.file.${file}`)}
        />
      </div>
    ));
  }

  renderIcons() {
    return icons
      .map(icon => (
        <Icon icon={icon} onIconClick={this.onIconClick.bind(this, icon)} />
      ))
      .concat(this.getCustomIcons())
      .concat([<Upload imageAdded={() => this.setState(this.state)} />]);
  }

  render() {
    return (
      <div className="App">
        <Sentence
          sentence={this.state.sentence}
          onIconClick={this.onSentenceIconClick.bind(this)}
        />
        <div className="App-body">{this.renderIcons()}</div>
        <div>
          Icons made by{" "}
          <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
            Freepik
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>{" "}
          is licensed by{" "}
          <a
            href="http://creativecommons.org/licenses/by/3.0/"
            title="Creative Commons BY 3.0"
            target="_blank"
          >
            CC 3.0 BY
          </a>
        </div>
      </div>
    );
  }
}

export default App;
