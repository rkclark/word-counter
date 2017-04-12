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

  it('renders a container div', () => {
    const container = wrapper.find('.container');
    expect(container).to.have.length(1);
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

  it('passes countedWords object to FileInputContainer', () => {
    const container = wrapper.find(ResultsContainer);
    expect(container.prop('countedWords')).to.be.a('object');
  });

  describe('#setCountedWords', () => {
    it('updates countedWords state', () => {
      wrapper.instance().setCountedWords({ simples: 4 });
      expect(wrapper.state('countedWords')).to.contain({ simples: 4 });
    });
  });

  describe('#processTextFile', () => {
    it('calls returnWordCountObject on instance of WordCounter', () => {
      const date = new Date();
      const string = 'test Test tesT! This IS a TEST. It /n is not a very fUn string. ////. 2324.'; //eslint-disable-line
      const file = new File([string], 'test.txt', { type: 'text/plain', lastModified: date });
      const stub = sinon.stub(WordCounter.prototype, 'returnWordCountObject');
      wrapper.instance().processTextFile(file);
      expect(stub.called).to.equal(true);
      stub.restore();
    });
  });

});
