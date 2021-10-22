import React from "react";
import { shallow } from "enzyme";
import Status from "./Status";

describe("<Status />", () => {
  it("should status be loading", () => {
    const wrapper = shallow(<Status loading={true} online={false} />);

    expect(wrapper.text()).toContain("LOADING");
  });

  it("should status be online", () => {
    const wrapper = shallow(<Status loading={false} online={true} />);

    expect(wrapper.text()).toContain("ONLINE");
  });

  it("should status be offline", () => {
    const wrapper = shallow(<Status loading={false} online={false} />);

    expect(wrapper.text()).toContain("OFFLINE");
  });
});
