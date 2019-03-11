import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import Sentence from "./Sentence";

it("renders without crashing", () => {
  const component = shallow(<Sentence />);
});
