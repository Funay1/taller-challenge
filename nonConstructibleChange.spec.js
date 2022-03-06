const { it, expect, describe } = require('@jest/globals');
const { minimunInvalidAmountOfChange } = require('./nonConstructibleChange');

describe('coins test suit', () => {
    it('test case 1', () => {
        const coins = [5, 7, 1, 1, 2, 3, 22];

        const result = minimunInvalidAmountOfChange({ coins });

        expect(result).toBe(20);
    });

    it('test case 2', () => {
        const coins = [1, 1, 1, 1, 1];

        const result = minimunInvalidAmountOfChange({ coins });

        expect(result).toBe(6);
    });

    it('test case 3', () => {
        const coins = [1, 5, 1, 1, 1, 10, 15, 20, 100];

        const result = minimunInvalidAmountOfChange({ coins });

        expect(result).toBe(55);
    });
});
