/* eslint-disable padded-blocks */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import FileInputContainer from '../../../src/app/components/home/FileInputContainer';
import Dropzone from 'react-dropzone';

describe('<FileInputContainer />', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<FileInputContainer />);
  });

  it('renders successfully', () => {
    expect(wrapper).to.have.length(1);
  });

  it('renders a Dropzone', () => {
    const dropzone = wrapper.find(Dropzone);
    expect(dropzone).to.have.length(1);
  });

  it('Sets Dropzone to only accept a single file', () => {
    const dropzone = wrapper.find(Dropzone);
    expect(dropzone.prop('multiple')).to.equal(false);
  });

  it('Sets Dropzone to only accept a .txt files', () => {
    const dropzone = wrapper.find(Dropzone);
    expect(dropzone.prop('accept')).to.equal('text/plain');
  });

});
