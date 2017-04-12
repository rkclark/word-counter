/* eslint-disable padded-blocks, no-unused-expressions */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import FileInputContainer from '../../../src/app/components/home/FileInputContainer';
import FileInputConfirmation from '../../../src/app/components/home/FileInputConfirmation';
import Dropzone from 'react-dropzone';

describe('<FileInputContainer />', () => {

  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      processTextFile: () => {},
    };
    wrapper = shallow(<FileInputContainer {...props} />);
  });

  it('renders successfully', () => {
    expect(wrapper).to.have.length(1);
  });

  it('renders a Dropzone', () => {
    const dropzone = wrapper.find(Dropzone);
    expect(dropzone).to.have.length(1);
  });

  it('sets Dropzone to only accept a single file', () => {
    const dropzone = wrapper.find(Dropzone);
    expect(dropzone.prop('multiple')).to.equal(false);
  });

  it('sets Dropzone to only accept a .txt files', () => {
    const dropzone = wrapper.find(Dropzone);
    expect(dropzone.prop('accept')).to.equal('text/plain');
  });

  it('renders a FileInputConfirmation', () => {
    const conf = wrapper.find(FileInputConfirmation);
    expect(conf).to.have.length(1);
  });

  it('passes textFile state to FileInputConfirmation', () => {
    const conf = wrapper.find(FileInputConfirmation);
    expect(conf.prop('textFile')).to.be.a('array');
  });

  it('passes processTextFile function to FileInputConfirmation', () => {
    const conf = wrapper.find(FileInputConfirmation);
    expect(conf.prop('processTextFile')).to.be.a('function');
  });

  describe('#onDrop', () => {
    it('updates textFile state if file is accepted', () => {
      wrapper.instance().onDrop(['accepted'], []);
      expect(wrapper.state('textFile')).to.contain('accepted');
    });

    it('does not update textFile state if file is rejected', () => {
      wrapper.instance().onDrop([], ['rejected']);
      expect(wrapper.state('textFile')).to.be.empty;
    });
  });

});
