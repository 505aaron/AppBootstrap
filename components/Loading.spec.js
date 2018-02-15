import React from 'react';
import renderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';
import Loading from './Loading';

describe('Loading', () => {
  let shallowRenderer;
  let baseProps;

  beforeEach(() => {
    baseProps = {};

    shallowRenderer = new ShallowRenderer();
  });

  test('render', () => {
    shallowRenderer.render(
      <Loading {...baseProps} />,
    );

    const tree = shallowRenderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });
});
