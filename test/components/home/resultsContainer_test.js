/* eslint-disable padded-blocks */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import ResultsContainer from '../../../src/app/components/home/ResultsContainer';
import WordTableRow from '../../../src/app/components/home/WordTableRow';

describe('<ResultsContainer />', () => {

  let props;
  let wrapper;

  describe('With empty countedWords object', () => {
    beforeEach(() => {
      props = {
        countedWords: [],
        loading: false,
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
        countedWords: [
          { word: 'test', count: 4, prime: false },
          { word: 'meerkat', count: 5, prime: true },
          { word: 'simples', count: 1, prime: true },
        ],
        loading: false,
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

    it('renders WordTableRows inside table', () => {
      const table = wrapper.find('table');
      const rows = table.find(WordTableRow);
      expect(rows).to.have.length(3);
    });

    it('passes word, count and prime props to WordTableRow', () => {
      const table = wrapper.find('table');
      const rows = table.find(WordTableRow);
      expect(rows.at(0).prop('word')).to.be.a('string');
      expect(rows.at(0).prop('count')).to.be.a('number');
      expect(rows.at(0).prop('prime')).to.be.a('boolean');
    });

  });

  describe('With loading set to true', () => {

    beforeEach(() => {
      props = {
        countedWords: [],
        loading: true,
      };
      wrapper = shallow(<ResultsContainer {...props} />);
    });

    it('renders successfully', () => {
      expect(wrapper).to.have.length(1);
    });

    it('renders a loading icon', () => {
      const img = wrapper.find('img');
      expect(img.html()).to.contain('loading-icon.svg');
    });

  });

});
