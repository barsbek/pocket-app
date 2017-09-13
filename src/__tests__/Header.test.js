import React from 'react';
import { shallow } from 'enzyme';

import Header from '../components/Header';
import Logo from '../components/Logo';

describe("<Header />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Header />);
  });

  test("should have class header", () => {
    expect(wrapper.hasClass('header')).toBeTruthy();
  });

  test("should contain <Logo />", () => {
    expect(wrapper.contains(<Logo />)).toBeTruthy();
  });
});