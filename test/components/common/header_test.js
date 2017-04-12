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

  it('renders a h1', () => {
    const nav = wrapper.find('h1');
    expect(nav).to.have.length(1);
  });

});
