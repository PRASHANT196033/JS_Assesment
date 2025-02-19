function isPrime(num) {
    if (num <= 1) {
        return false;
    }

    if (num <= 3) {
        return true;
    }

    if (num % 2 === 0 || num % 3 === 0) {
        return false;
    }

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) {
            return false;
        }
    }

    return true;
}

let number = 23;
if (isPrime(number)) {
    console.log(`${number} is a prime number`);
} else {
    console.log(`${number} is not a prime number`);
}
