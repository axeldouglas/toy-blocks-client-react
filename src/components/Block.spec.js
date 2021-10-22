import React from "react";
import { create } from "react-test-renderer";
import Block from "./Block";

describe("<Block />", () => {
  const block = {
    id: "5",
    type: "blocks",
    attributes: {
      index: 1,
      timestamp: 1530679678,
      data: "The Human",
      "previous-hash": "IoVe8=",
      hash: "oHkxOJW=",
    },
  };

  const blockEmpty = {
    attributes: {
      data: "",
    },
  };

  it("should match empty data snapshot", () => {
    const component = create(<Block block={blockEmpty} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("should match snapshot", () => {
    const component = create(<Block block={block} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
