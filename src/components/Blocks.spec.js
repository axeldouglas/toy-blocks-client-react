import { mount } from "enzyme";
import React from "react";
import { create } from "react-test-renderer";
import { CircularProgress } from "@material-ui/core";
import Blocks from "./Blocks";

describe("<Blocks />", () => {
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
    url: "https://localhost:3003",
    online: true,
    name: "Node 1",
    loading: false,
    loadingBlocks: false,
    blocks,
  };

  const nodeLoading = {
    url: "https://localhost:3003",
    online: true,
    name: "Node 1",
    loading: false,
    loadingBlocks: true,
    blocks: [],
  };

  const nodeEmpty = {
    url: "https://localhost:3003",
    online: true,
    name: "Node 1",
    loading: false,
    loadingBlocks: false,
    blocks: [],
  };

  it("should contain <CircularProgress />", () => {
    const wrapper = mount(<Blocks node={nodeLoading} />);

    expect(wrapper.find(CircularProgress).length).toEqual(1);
  });

  it("should match empty data snapshot", () => {
    const component = create(<Blocks node={nodeEmpty} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("should match snapshot", () => {
    const component = create(<Blocks node={node} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
