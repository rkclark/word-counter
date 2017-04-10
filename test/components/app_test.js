/* eslint-disable padded-blocks */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import App from '../../src/app/components/App';
import Header from '../../src/app/components/common/Header';

describe('<App />', () => {

  let child;
  let props;
  let wrapper;

  beforeEach(() => {
    child = <h1>Child</h1>;
    props = {
      children: child,
    };
    wrapper = shallow(<App {...props} />);
  });

  it('renders successfully', () => {
    expect(wrapper).to.have.length(1);
  });

  it('renders a <Header />', () => {
    expect(wrapper.contains(<Header />)).to.equal(true);
  });

  it('renders children passed as props', () => {
    expect(wrapper.contains(child)).to.equal(true);
  });

});
