import React from 'react';
import { mount } from 'enzyme';
import App from '../../src/App';

describe('App', () => {
  it('renders greet', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('#title').text())
      .toContain('Welcome to Restauranto!');
  });
});
