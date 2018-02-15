import React from "react";
import { View, Text } from "react-native";
import ShallowRenderer from "react-test-renderer/shallow";
import Bootstrapper from "./BootstrapSwitch";

const Loading = () => (
  <View>
    <Text>Loading Screen</Text>
  </View>
);
const Bootstrapped = () => (
  <View>
    <Text>Loaded!</Text>
  </View>
);

describe("BootstrapSwitch", () => {
  let shallowRenderer;
  let baseProps;

  beforeEach(() => {
    baseProps = {
      loading: <Loading />
    };

    shallowRenderer = new ShallowRenderer();
  });

  test("render - loading", () => {
    shallowRenderer.render(
      <Bootstrapper {...baseProps}>
        <Bootstrapped />
      </Bootstrapper>
    );

    const tree = shallowRenderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });

  test("render - bootstrapped", () => {
    shallowRenderer.render(
      <Bootstrapper {...baseProps} boostrapComplete>
        <Bootstrapped />
      </Bootstrapper>
    );

    const tree = shallowRenderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });
});
