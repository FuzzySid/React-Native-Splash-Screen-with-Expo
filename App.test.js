import React from 'react';
import renderer from 'react-test-renderer';

import WelcomeComponent from './WelcomeComponent';

describe('<WelcomeComponent />', () => {
  it('Gets Rendered', () => {
    const _WelcomeComponent = renderer.create(<WelcomeComponent />);
    const welcomeComponentTree=_WelcomeComponent.toJSON();
    expect(welcomeComponentTree).toMatchSnapshot();
  });
});