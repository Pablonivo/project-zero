import { MathHelper } from '../math-helper/math-helper';

export class ProjectEulerHelper{
    _mathHelper = new MathHelper();

    get solutionOfProblem1(): number {
        return this._getSumOfMultiplesOfNumbersBelowMax([3, 5], 1000);
    }

    get solutionOfProblem2(): number {
        return this._mathHelper.generateFibonacciSequenceUpToAndIncludingMax(4000000)
            .filter(x => x % 2 === 0)
            .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    }
    
    _getSumOfMultiplesOfNumbersBelowMax(numbers: number[], max: number): number {
        var multiplesList = [];

        for (let number of numbers){
            var multiples = this._mathHelper.getMultiplesOfNumberBelowMax(number, max);
            multiplesList = [...new Set(multiplesList.concat(multiples))]
        }

        return multiplesList.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    }
}