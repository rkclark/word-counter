/* eslint-disable padded-blocks */

import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import App from '../../src/app/components/App';

const wrapper = shallow(<App />);

describe('<App />', () => {

  it('renders successfully', () => {
    expect(wrapper).to.have.length(1);
  });

});
