import { expect } from 'chai';

import { handleUrl } from '../../utils/handleUrl';

describe('Handle URL function', () => {
	let company: string;
	
	beforeEach(() => {
		company = 'Netflix';
	})

	it('Should return null if there is not a good value', () => {
		expect(handleUrl('')).to.have.null;
	});

	it('Should return the value if there is not base url', () => {
		expect(handleUrl('Netflix')).to.equal(company);
		expect(handleUrl('123')).to.equal('123');
		expect(handleUrl('abcd')).to.equal('abcd');
	});

	it('Should return company name from a base url', () => {
		expect(handleUrl('https://github.com/Netflix')).to.equal(company);
		expect(handleUrl('https://github.com/Facebook')).to.equal('Facebook');
		expect(handleUrl('https://github.com/Airbnb')).to.equal('Airbnb');
	});
})
