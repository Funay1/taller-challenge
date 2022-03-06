const { it, expect, describe } = require('@jest/globals');
const { sortedSquaredArray } = require('./sortedSquaredArray');

describe('test suit', () => {
    it('test case 1', () => {
        const array = [1, 2, 3, 5, 6, 8, 9];

        const result = sortedSquaredArray({ array });

        expect(result).toEqual([1, 4, 9, 25, 36, 64, 81]);
    });
    it('test case 2', () => {
        const array = [-2, -1];

        const result = sortedSquaredArray({ array });

        expect(result).toEqual([1, 4]);
    });
    it('test case 3', () => {
        const array = [-10, -5, 0, 5, 10];

        const result = sortedSquaredArray({ array });

        expect(result).toEqual([0, 25, 25, 100, 100]);
    });
});
