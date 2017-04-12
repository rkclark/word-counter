/* eslint-disable padded-blocks */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import WordTableRow from '../../../src/app/components/home/WordTableRow';

describe('<WordTableRow />', () => {

  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      word: 'simples',
      count: 4,
      prime: false,
    };
    wrapper = shallow(<WordTableRow {...props} />);
  });

  it('renders successfully', () => {
    expect(wrapper).to.have.length(1);
  });

  it('renders a table row', () => {
    const table = wrapper.find('tr');
    expect(table).to.have.length(1);
  });

  it('renders table cells for word, count and prime', () => {
    const cells = wrapper.find('td');
    expect(cells.at(0).text()).to.equal('simples');
    expect(cells.at(1).text()).to.equal('4');
    expect(cells.at(2).text()).to.equal('false');
  });

});
