import { MathHelper } from '../math-helper/math-helper';

export class ProjectEulerHelper{
    _mathHelper = new MathHelper();
    _startTime: number;
    _endTime: number;
    _numberOfMillisecondsUsedForLastComputation: number;
    
    readonly _1000digitStringForProblem8 = '7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450';

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

    get solutionOfProblem6(): number {
        this._start();
        let n = 100;
        let result = this._getSquareOfSumOfFirstNaturalNumbers(n) - this._getSumofSquaresOfFirstNaturalNumbers(n);
        this._end();
        return result;
    }

    get solutionOfProblem7(): number {
        this._start();
        let result = this._mathHelper.getNthPrime(10001);
        this._end();
        return result;
    }

    get solutionOfProblem8(): number {
        this._start();
        let result = this._getLargestProductOfNAdjacentDigitsOfStringOfNumbers(this._1000digitStringForProblem8, 13);
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

    _getSumofSquaresOfFirstNaturalNumbers(limit: number) {
        let sum = 0;

        for (let i = 1; i <= limit; i++) {
            sum += i*i;
        }

        return sum;
    }

    _getSquareOfSumOfFirstNaturalNumbers(limit: number) {
        let sum = limit * (limit + 1) / 2;
        return sum * sum;
    }

    _getLargestProductOfNAdjacentDigitsOfStringOfNumbers(stringOfNumbers: string, numberOfAdjacentDigits: number) {
        let largestProduct = 0;

        for(let startingNumberProduct = 0; startingNumberProduct <= stringOfNumbers.length - numberOfAdjacentDigits; startingNumberProduct++) {
            let currentProduct = 1;

            for (let j = startingNumberProduct; j < startingNumberProduct + numberOfAdjacentDigits; j++) {
                currentProduct *= +stringOfNumbers.charAt(j);
            }

            if (currentProduct > largestProduct) {
                largestProduct = currentProduct;
            }
        }

        return largestProduct
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