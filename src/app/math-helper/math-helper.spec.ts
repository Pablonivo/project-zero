import { MathHelper } from './math-helper';

describe('MathHelper', () => {
    const _sut = new MathHelper(); 

    describe('getMultiplesOfNumberBelowMax', () => {
        it('should return a list of the multiples of the number below the max parameter', () => {
            const result = _sut.getMultiplesOfNumberBelowMax(3, 10);
            expect(result).toEqual([3, 6, 9]);
        })
    })

    describe('generateFibonacciSequenceUpToAndIncludingMax', () => {
        it('should return a list of the first Fibonacci numbers which are not higher than the max parameter', () => {
            const result = _sut.generateFibonacciSequenceUpToAndIncludingMax(22);
            expect(result).toEqual([1, 2, 3, 5, 8, 13, 21]);
        })
    })
});
