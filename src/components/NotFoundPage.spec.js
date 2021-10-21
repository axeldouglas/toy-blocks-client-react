import React from "react";
import { BrowserRouter } from "react-router-dom";
import { create } from "react-test-renderer";
import NotFoundPage from "./NotFoundPage";

describe("<NotFoundPage />", () => {
  it("should match snapshot", () => {
    const component = create(
      <BrowserRouter>
        <NotFoundPage />
      </BrowserRouter>
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
