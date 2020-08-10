export class MathHelper {
    getMultiplesOfNumberBelowMax(number: number, max: number): number[] {
        var multiples = [];
        for (let i = 1; i * number < max; i++) {
            multiples.push(i * number);
        }
        return multiples;
    }

    generateFibonacciSequenceUpToAndIncludingMax(max: number): number[] {
        var fibonacciSequence = [1, 2];
        while (fibonacciSequence[fibonacciSequence.length - 1] + fibonacciSequence[fibonacciSequence.length - 2] <= max) {
            fibonacciSequence.push(fibonacciSequence[fibonacciSequence.length - 1] + fibonacciSequence[fibonacciSequence.length - 2]);
        }
        return fibonacciSequence;
    }

    /**
     * Returns a list of prime factors, where a prime can occur more than once. 
     */
    getListOfPrimeFactors(number: number): number[] {
        let listOfPrimeFactors = [];
        let i = 2;

        while (number !== 1) {
            if (number % i === 0){
                number /= i;
                listOfPrimeFactors.push(i);
            }
            else {
                i++;
            }
        }
        return listOfPrimeFactors;
    }

    getPrimeFactorization(number: number): Map<number, number> {
        let listOfPrimeFactors = new Map<number, number>();
        let i = 2;

        while (number !== 1) {
            if (number % i === 0){
                if (listOfPrimeFactors.has(i)){
                    listOfPrimeFactors.set(i, listOfPrimeFactors.get(i) + 1);
                }
                else {
                    listOfPrimeFactors.set(i, 1);
                }
                number /= i;
            }
            else {
                i++;
            }
        }

        return listOfPrimeFactors;
    }

    isPalindromeNumber(number: number): boolean {
        let numberToString = number.toString();
        let stringLength = numberToString.length;

        for (let i = 0; i < stringLength; i++){
            if (numberToString[i] != numberToString[stringLength - i - 1]){
                return false;
            }
        }

        return true;
    }
}