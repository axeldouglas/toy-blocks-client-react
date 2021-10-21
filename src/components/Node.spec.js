import { mount } from "enzyme";
import React from "react";
import { create } from "react-test-renderer";
import Node from "./Node";

describe("<Node />", () => {
  const toggleFn = jest.fn();
  const node = {
    url: "https://thawing-springs-53971.herokuapp.com",
    online: true,
    name: "",
    loading: false,
  };

  it("should handle onChange", () => {
    const wrapper = mount(
      <Node node={node} expanded={true} toggleNodeExpanded={toggleFn} />
    );
    wrapper.find("div[role='button']").simulate("click");
    expect(toggleFn).toBeCalled();
  });

  it("should match snapshot", () => {
    const component = create(
      <Node node={node} expanded={true} toggleNodeExpanded={toggleFn} />
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
