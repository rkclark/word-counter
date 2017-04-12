/* eslint-disable padded-blocks, no-unused-expressions */
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

  it('passes countedWords array and loading boolean to ResultsContainer', () => {
    const container = wrapper.find(ResultsContainer);
    expect(container.prop('countedWords')).to.be.a('array');
    expect(container.prop('loading')).to.be.a('boolean');
  });

  describe('#setCountedWords', () => {
    it('updates countedWords state', () => {
      const testData = { word: 'simples', count: 4, prime: false };
      wrapper.instance().setCountedWords([testData]);
      expect(wrapper.state('countedWords')).to.contain(testData);
    });
    it('sets loading to false', () => {
      const testData = { word: 'simples', count: 4, prime: false };
      wrapper.instance().setCountedWords([testData]);
      expect(wrapper.state('loading')).to.be.false;
    });
  });

  describe('#processTextFile', () => {

    let date;
    let string;
    let file;
    let stub;

    beforeEach(() => {
      date = new Date();
      string = 'test Test tesT! This IS a TEST. It /n is not a very fUn string. ////. 2324.'; //eslint-disable-line
      file = new File([string], 'test.txt', { type: 'text/plain', lastModified: date });
      stub = sinon.stub(WordCounter.prototype, 'returnWordCountArray');
    });

    it('calls returnWordCountArray on instance of WordCounter', () => {
      wrapper.instance().processTextFile(file);
      expect(stub.called).to.equal(true);
      stub.restore();
    });

    it('calls sets loading state to true', () => {
      wrapper.instance().processTextFile(file);
      expect(wrapper.state('loading')).to.be.true;
      stub.restore();
    });
  });

});
