import { mount } from "enzyme";
import React from "react";
import { Provider } from "react-redux";
import { create } from "react-test-renderer";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import Node from "./Node";

describe("<Node />", () => {
  const toggleFn = jest.fn();
  const blocks = [
    {
      id: "5",
      type: "blocks",
      attributes: {
        index: 1,
        timestamp: 1530679678,
        data: "The Human",
        "previous-hash": "IoVe8=",
        hash: "oHkxOJW=",
      },
    },
  ];

  const node = {
    url: "https://thawing-springs-53971.herokuapp.com",
    online: true,
    name: "",
    loading: false,
    blocks,
  };

  const middlewares = [thunk];
  const store = configureMockStore(middlewares)({});

  it("should handle onChange", () => {
    const wrapper = mount(
      <Provider store={store}>
        <Node node={node} expanded={false} toggleNodeExpanded={toggleFn} />
      </Provider>
    );
    wrapper.find("div[role='button']").simulate("click");
    expect(toggleFn).toBeCalled();
  });

  it("should match snapshot", () => {
    const component = create(
      <Provider store={store}>
        <Node node={node} expanded={true} toggleNodeExpanded={toggleFn} />
      </Provider>
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
