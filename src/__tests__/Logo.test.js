import React from 'react';
import {shallow} from 'enzyme';

import Logo from '../components/Logo';

describe("component <Logo />", () => {
  test("should contain logo image", () => {
    const wrapper = shallow(<Logo />);
    expect(wrapper.find('img').exists()).toBeTruthy();
  });
});