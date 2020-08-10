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

    describe('_getSumofSquaresOfFirstNaturalNumbers', () => {
        it('should return sum of the squares of the first n natural numbers', () => {
            const result = _sut._getSumofSquaresOfFirstNaturalNumbers(10);
            expect(result).toBe(385);
        })
    })

    describe('_getSquareOfSumOfFirstNaturalNumbers', () => {
        it('should return square of the sum of the first n natural numbers', () => {
            const result = _sut._getSquareOfSumOfFirstNaturalNumbers(10);
            expect(result).toBe(3025);
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

    describe('solutionOfProblem5', () => {
        it('should return the correct solution', () => {
            const resultProblem5 = _sut.solutionOfProblem5;
            expect(resultProblem5).toBe(232792560);
        })
    })

    describe('solutionOfProblem6', () => {
        it('should return the correct solution', () => {
            const resultProblem6 = _sut.solutionOfProblem6;
            expect(resultProblem6).toBe(25164150);
        })
    })
});
