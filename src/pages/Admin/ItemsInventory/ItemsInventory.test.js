import React from "react";
import { shallow } from "enzyme";
import ItemsInventory from "./ItemsInventory";

describe("ItemsInventory", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ItemsInventory />);
    expect(wrapper).toMatchSnapshot();
  });
});
