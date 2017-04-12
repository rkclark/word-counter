/* eslint-disable padded-blocks */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import ResultsContainer from '../../../src/app/components/home/ResultsContainer';

describe('<ResultsContainer />', () => {

  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      countedWords: {
        test: 4,
        meerkat: 5,
        simples: 1,
      },
    };
    wrapper = shallow(<ResultsContainer {...props} />);
  });

  it('renders successfully', () => {
    expect(wrapper).to.have.length(1);
  });

});
