import { MathHelper } from '../math-helper/math-helper';

export class ProjectEulerHelper{
    _mathHelper = new MathHelper();
    _startTime: number;
    _endTime: number;
    _numberOfMillisecondsUsedForLastComputation: number;

    get solutionOfProblem1(): number {
        this._start();
        let result = this._getSumOfMultiplesOfNumbersBelowMax([3, 5], 1000);
        this._end();
        return result;
    }

    get solutionOfProblem2(): number {
        this._start();
        let result = this._mathHelper.generateFibonacciSequenceUpToAndIncludingMax(4000000)
            .filter(x => x % 2 === 0)
            .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        this._end();
        return result
    }

    get solutionOfProblem3(): number {
        this._start();
        let result = Math.max(...this._mathHelper.getListOfPrimeFactors(600851475143));
        this._end();
        return result;
    }
    
    _getSumOfMultiplesOfNumbersBelowMax(numbers: number[], max: number): number {
        var multiplesList = [];

        for (let number of numbers){
            var multiples = this._mathHelper.getMultiplesOfNumberBelowMax(number, max);
            multiplesList = [...new Set(multiplesList.concat(multiples))]
        }

        return multiplesList.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    }

    private _start(): void {
        this._startTime = performance.now();
    }

    private _end(): void {
        this._endTime = performance.now();
        // We are for now only interested in the number of milliseconds, so we use round to ignore arbitrary high precision.
        this._numberOfMillisecondsUsedForLastComputation = Math.round(this._endTime - this._startTime);
    }
}