import React from 'react';
import renderer from 'react-test-renderer';

import Splash from './index';

it('renders without crashing', () => {
  const rendered = renderer.create(<Splash />).toJSON();
  expect(rendered).toBeTruthy();
});
