import React from "react";
import { shallow } from "enzyme";
import Dashboard from "./Dashboard";

describe("Dashboard", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper).toMatchSnapshot();
  });
});
