import React, { Component } from "react";
import "./Icon.css";

export default class Icon extends Component {
  render() {
    const { onIconClick, icon } = this.props;
    return (
      <div className="Icon-wrapper">
        <div onClick={onIconClick} className="Icon">
          <svg />
        </div>
        <div className="Icon-footer">{icon.name}</div>
      </div>
    );
  }
}
