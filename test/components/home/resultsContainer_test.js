/* eslint-disable padded-blocks */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import ResultsContainer from '../../../src/app/components/home/ResultsContainer';

describe('<ResultsContainer />', () => {

  let props;
  let wrapper;

  describe('With empty countedWords object', () => {
    beforeEach(() => {
      props = {
        countedWords: {},
      };
      wrapper = shallow(<ResultsContainer {...props} />);
    });

    it('renders successfully', () => {
      expect(wrapper).to.have.length(1);
    });

    it('renders an empty div', () => {
      const div = wrapper.find('div');
      expect(div.text()).to.equal('');
    });

  });

  describe('With populated countedWords object', () => {

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

    it('renders a table', () => {
      const table = wrapper.find('table');
      expect(table).to.have.length(1);
    });

  });



});
