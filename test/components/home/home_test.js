/* eslint-disable padded-blocks */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Home from '../../../src/app/components/home/Home';
import FileInputContainer from '../../../src/app/components/home/FileInputContainer';
import ResultsContainer from '../../../src/app/components/home/ResultsContainer';
import WordCounter from '../../../src/app/helpers/wordCounter';

describe('<Home />', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Home />);
  });

  it('renders successfully', () => {
    expect(wrapper).to.have.length(1);
  });

  it('renders a FileInputContainer', () => {
    const container = wrapper.find(FileInputContainer);
    expect(container).to.have.length(1);
  });

  it('passes processTextFile function to FileInputContainer', () => {
    const container = wrapper.find(FileInputContainer);
    expect(container.prop('processTextFile')).to.be.a('function');
  });

  it('renders a ResultsContainer', () => {
    const container = wrapper.find(ResultsContainer);
    expect(container).to.have.length(1);
  });

  it('passes countedWords array to FileInputContainer', () => {
    const container = wrapper.find(ResultsContainer);
    expect(container.prop('countedWords')).to.be.a('array');
  });

  describe('#setCountedWords', () => {
    it('updates countedWords state', () => {
      const testData = { word: 'simples', count: 4, prime: false };
      wrapper.instance().setCountedWords([testData]);
      expect(wrapper.state('countedWords')).to.contain(testData);
    });
  });

  describe('#processTextFile', () => {
    it('calls returnWordCountArray on instance of WordCounter', () => {
      const date = new Date();
      const string = 'test Test tesT! This IS a TEST. It /n is not a very fUn string. ////. 2324.'; //eslint-disable-line
      const file = new File([string], 'test.txt', { type: 'text/plain', lastModified: date });
      const stub = sinon.stub(WordCounter.prototype, 'returnWordCountArray');
      wrapper.instance().processTextFile(file);
      expect(stub.called).to.equal(true);
      stub.restore();
    });
  });

});
