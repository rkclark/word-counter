/* eslint-disable padded-blocks */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Header from '../../../src/app/components/common/Header';

describe('<Header />', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Header />);
  });

  it('renders successfully', () => {
    expect(wrapper).to.have.length(1);
  });

  it('renders a nav', () => {
    const nav = wrapper.find('nav');
    expect(nav).to.have.length(1);
  });

});
