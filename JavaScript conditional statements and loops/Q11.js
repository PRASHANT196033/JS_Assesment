function computeGCD(a, b) {
    if (a <= 0 || b <= 0 || !Number.isInteger(a) || !Number.isInteger(b)) {
        return null;
    }

    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }

    return a;
}

let num1 = 36;
let num2 = 60;
let gcd = computeGCD(num1, num2);

console.log(`The GCD of ${num1} and ${num2} is: ${gcd}`);
