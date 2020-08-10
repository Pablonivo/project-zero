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

    get solutionOfProblem4(): number {
        this._start();
        let result = this._getHighestPalindromeNumberAsProductOfTwoNumbersBelowMax(1000);
        this._end();
        return result;
    }

    get solutionOfProblem5(): number {
        this._start();
        let result = this._getSmallestNumberThatIsEvenlyDivisbleByNumbersFromOneToMax(20);
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

    _getHighestPalindromeNumberAsProductOfTwoNumbersBelowMax(max: number): number {
        let highestPalinedromeNumberFound = 1;

        for (let i = 1; i < max; i++) {
            for (let j = i; j < max; j++) {
                let product = i * j;
                if (this._mathHelper.isPalindromeNumber(product) && product > highestPalinedromeNumberFound){
                    highestPalinedromeNumberFound = product;
                }
            }
        }

        return highestPalinedromeNumberFound;
    }

    _getSmallestNumberThatIsEvenlyDivisbleByNumbersFromOneToMax(max: number) {
        let requiredPrimeFactorsInNumberWeAreLookingFor = new Map<number, number>(); 
        let numberWeAreLookingFor = 1;

        for (let i = 2; i < max; i++) {
            let primeFactorizationSmallerNumber = this._mathHelper.getPrimeFactorization(i);

            for (let [prime, numberOfTimesInNumber] of primeFactorizationSmallerNumber){
                if (!requiredPrimeFactorsInNumberWeAreLookingFor.has(prime)
                    || (requiredPrimeFactorsInNumberWeAreLookingFor.has(prime) && requiredPrimeFactorsInNumberWeAreLookingFor.get(prime) < numberOfTimesInNumber)){
                    requiredPrimeFactorsInNumberWeAreLookingFor.set(prime, numberOfTimesInNumber);
                }
            }
        }

        for (let [prime, numberOfTimesInNumber] of requiredPrimeFactorsInNumberWeAreLookingFor){
            numberWeAreLookingFor *= Math.pow(prime, numberOfTimesInNumber);
        }

        return numberWeAreLookingFor;
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