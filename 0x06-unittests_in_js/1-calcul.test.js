const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('Math operations', () => {
    describe('Summation', () => {
        it('Returns 6', () => {
            assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
        });
    });
    describe('Subtraction', () => {
        it('Returns -4', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
        });
    });
    describe('Division', () => {
        it('Returns 0.2', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
        });
    });
    describe('Division', () => {
        it('Returns Error', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
        });
    });
});