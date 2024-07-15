function sumMultiplesOf3And5(limit) {
    let sum = 0;

    for (let i = 1; i < limit; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }

    return sum;
}

let limit = 1000;

let result = sumMultiplesOf3And5(limit);

console.log(`Sum of multiples of 3 and 5 under ${limit}: ${result}`);
