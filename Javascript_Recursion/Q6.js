function generateFibonacci(n) {
    if (n <= 0) {
        return [];
    } else if (n === 1) {
        return [0];
    } else if (n === 2) {
        return [0, 1];
    }

    let fibonacciSeries = [0, 1]; 

    for (let i = 2; i < n; i++) {
        let nextFibonacci = fibonacciSeries[i - 1] + fibonacciSeries[i - 2];
        fibonacciSeries.push(nextFibonacci);
    }

    return fibonacciSeries;
}

let n = 10;
let fibonacciNumbers = generateFibonacci(n);
console.log(`First ${n} Fibonacci numbers:`, fibonacciNumbers);
