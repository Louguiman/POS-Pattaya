import React from "react";
import { shallow } from "enzyme";
import MenuLayout from "./MenuLayout";

describe("MenuLayout", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<MenuLayout />);
    expect(wrapper).toMatchSnapshot();
  });
});
