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
}