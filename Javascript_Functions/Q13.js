function computeFactors(num) {
    if (num <= 0 || !Number.isInteger(num)) {
        return "Please enter a positive integer.";
    }

    let factors = [];

    for (let i = 1; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            factors.push(i); 

            if (i !== num / i) {
                factors.push(num / i);
            }
        }
    }

    factors.sort(function(a, b) {
        return a - b;
    });

    return factors;
}

let number = 28;
let result = computeFactors(number);
console.log(result); 
