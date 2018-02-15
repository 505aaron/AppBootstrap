jest.mock("../configureStore");

import React from "react";
import { View, Text } from "react-native";
import renderer from "react-test-renderer";
import ShallowRenderer from "react-test-renderer/shallow";
import Bootstrap from "./Bootstrap";
const configureStore = require("../configureStore");

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

describe("Bootstrap", () => {
  let shallowRenderer;
  let store;
  let baseProps;

  beforeEach(() => {
    baseProps = {
      store: configureStore(),
      loading: <Loading />
    };

    shallowRenderer = new ShallowRenderer();
  });

  test("render", () => {
    shallowRenderer.render(
      <Bootstrap {...baseProps}>
        <Bootstrapped />
      </Bootstrap>
    );

    const tree = shallowRenderer.getRenderOutput();

    expect(tree.props).toEqual(
      expect.objectContaining({
        bootstrapComplete: false
      })
    );
  });
});
