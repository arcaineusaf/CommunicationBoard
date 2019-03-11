import React, { Component } from "react";
import Icon from "./Icon";
import "./Sentence.css";

export default class Sentence extends Component {
  play() {
    this.props.sentence.forEach(word => {
      const msg = new SpeechSynthesisUtterance(word.speech);
      window.speechSynthesis.speak(msg);
    });
  }
  render() {
    return (
      <div className="sentence">
        {this.props.sentence.map(icon => (
          <Icon
            icon={icon}
            onIconClick={this.props.onIconClick.bind(null, icon)}
          />
        ))}
        <button onClick={this.play.bind(this)}>Say</button>
      </div>
    );
  }
}
