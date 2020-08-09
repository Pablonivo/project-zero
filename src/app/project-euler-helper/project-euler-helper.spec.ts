import { ProjectEulerHelper } from './project-euler-helper';

describe('ProjectEulerHelper', () => {
    const _sut = new ProjectEulerHelper(); 

    describe('getSumOfMultiplesOfNumbersBelowMax', () => {
        it('should return sum of the list of the multiples of the numbers below the max parameter', () => {
            const result = _sut._getSumOfMultiplesOfNumbersBelowMax([3, 5], 10);
            expect(result).toBe(23);
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
});
