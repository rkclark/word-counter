/* eslint-disable padded-blocks, no-unused-expressions */
import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import FileInputConfirmation from '../../../src/app/components/home/FileInputConfirmation';

describe('<FileInputConfirmation />', () => {

  let wrapper;
  let props;
  let processTextFileSpy;

  describe('When props.textFile contains text file data', () => {

    beforeEach(() => {
      processTextFileSpy = sinon.spy();
      props = {
        textFile: [
          { name: 'test.txt' },
        ],
        processTextFile: processTextFileSpy,
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

    it('calls sendTextFileForProcessing when Go button is clicked', () => {
      const onButtonClick = sinon.spy(FileInputConfirmation.prototype, 'sendTextFileForProcessing');
      const component = mount(<FileInputConfirmation {...props} />);
      component.find('button').simulate('click');
      expect(onButtonClick).to.have.property('callCount', 1);
    });

    describe('#sendTextFileForProcessing', () => {
      it('calls props.processTextFile', () => {
        wrapper.instance().sendTextFileForProcessing('test');
        expect(processTextFileSpy.called).to.equal(true);
      });
    });

  });

  describe('When props.textFile is empty', () => {

    beforeEach(() => {
      props = {
        textFile: [],
        processTextFile: () => {},
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
