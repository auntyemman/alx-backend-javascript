const chai = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('Math operations', () => {
    describe('Summation', () => {
        it('Returns 6', () => {
            chai.expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
        });
    });
    describe('Subtraction', () => {
        it('Returns -4', () => {
            chai.expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
        });
    });
    describe('Division', () => {
        it('Returns 0.2', () => {
            chai.expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
        });
    });
    describe('Division', () => {
        it('Returns Error', () => {
            chai.expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
        });
    });
});