import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';

import Header from '../../components/Header';

Enzyme.configure({ adapter: new Adapter() });

describe('<Header />', () => {
	it('Should renders the Header component', () => {
    const wrapper = shallow(<Header />);

		expect(wrapper.find('header')).to.have.lengthOf(1);
		expect(wrapper.find('.icon-search')).to.have.lengthOf(1);
		expect(wrapper.find('h1').text()).to.equal('Search projects informations');
		expect(wrapper.find('h1')).to.have.lengthOf(1)
	});
})
