/* eslint-disable padded-blocks */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Home from '../../../src/app/components/home/Home';

describe('<Home />', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Home />);
  });

  it('renders successfully', () => {
    expect(wrapper).to.have.length(1);
  });

  it('renders a container div', () => {
    const container = wrapper.find('.container');
    expect(container).to.have.length(1);
  });

});