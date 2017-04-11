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
    const input = wrapper.find(Dropzone);
    expect(input).to.have.length(1);
  });

});
