import React, { Component } from "react";
import svgs from "./svgs/index.js";
import "./Icon.css";

export default class Icon extends Component {
  renderSvg(Svg) {
    return <Svg />;
  }
  render() {
    const { onIconClick, icon } = this.props;
    return (
      <div className="Icon-wrapper">
        <div onClick={onIconClick} className="Icon">
          {svgs[icon.svg] && this.renderSvg(svgs[icon.svg])}
        </div>
        <div className="Icon-footer">{icon.name}</div>
      </div>
    );
  }
}
