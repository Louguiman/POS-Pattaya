import React from "react";
import { shallow } from "enzyme";
import ItemsListRowUI from "./ItemsListRowUI";

describe("ItemsListRowUI", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ItemsListRowUI />);
    expect(wrapper).toMatchSnapshot();
  });
});
