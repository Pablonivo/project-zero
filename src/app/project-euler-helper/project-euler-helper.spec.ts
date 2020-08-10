import { ProjectEulerHelper } from './project-euler-helper';

describe('ProjectEulerHelper', () => {
    const _sut = new ProjectEulerHelper(); 

    describe('_getSumOfMultiplesOfNumbersBelowMax', () => {
        it('should return sum of the list of the multiples of the numbers below the max parameter', () => {
            const result = _sut._getSumOfMultiplesOfNumbersBelowMax([3, 5], 10);
            expect(result).toBe(23);
        })
    })

    describe('_getHighestPalindromeNumberAsProductOfTwoNumbersBelowMax', () => {
        it('should highest palindrome number as product of two numbers below max', () => {
            const result = _sut._getHighestPalindromeNumberAsProductOfTwoNumbersBelowMax(100);
            expect(result).toBe(9009);
        })
    })

    describe('_getSmallestNumberThatIsEvenlyDivisbleByNumbersFromOneToMax', () => {
        it('should return smallest number that is evenly divisble by numbers from one to max', () => {
            const result = _sut._getSmallestNumberThatIsEvenlyDivisbleByNumbersFromOneToMax(10);
            expect(result).toBe(2520);
        })
    })

    describe('solutionOfProblem1', () => {
        it('should return the correct solution', () => {
            const resultProblem1 = _sut.solutionOfProblem1;
            expect(resultProblem1).toBe(233168);
        })
    })

    describe('solutionOfProblem2', () => {
        it('should return the correct solution', () => {
            const resultProblem2 = _sut.solutionOfProblem2;
            expect(resultProblem2).toBe(4613732);
        })
    })

    describe('solutionOfProblem3', () => {
        it('should return the correct solution', () => {
            const resultProblem3 = _sut.solutionOfProblem3;
            expect(resultProblem3).toBe(6857);
        })
    })

    describe('solutionOfProblem4', () => {
        it('should return the correct solution', () => {
            const resultProblem4 = _sut.solutionOfProblem4;
            expect(resultProblem4).toBe(906609);
        })
    })
});
