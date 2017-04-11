/* eslint-disable padded-blocks, no-unused-expressions */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import FileInputConfirmation from '../../../src/app/components/home/FileInputConfirmation';

describe('<FileInputConfirmation />', () => {

  let wrapper;
  let props;

  describe('When props.textFile contains text file data', () => {

    beforeEach(() => {
      props = {
        textFile: [
          { name: 'test.txt' },
        ],
      };
      wrapper = shallow(<FileInputConfirmation {...props} />);
    });

    it('renders successfully', () => {
      expect(wrapper).to.have.length(1);
    });

    it('renders a ready message with the file name', () => {
      const message = wrapper.find('.ready-message');
      expect(message.html()).to.contain('test.txt');
    });

    it('renders a Go! button', () => {
      const button = wrapper.find('button');
      expect(button.html()).to.contain('Go!');
    });

  });

  describe('When props.textFile is empty', () => {

    beforeEach(() => {
      props = {
        textFile: [],
      };
      wrapper = shallow(<FileInputConfirmation {...props} />);
    });

    it('renders successfully', () => {
      expect(wrapper).to.have.length(1);
    });

    it('renders an empty div', () => {
      const div = wrapper.find('div');
      expect(div.text()).to.equal('');
    });

  });

});
