function gcd(a, b) {
    if (a <= 0 || b <= 0) {
        return "Inputs must be positive integers.";
    }

    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }

    return a;
}

let num1 = 24;
let num2 = 36;
let result = gcd(num1, num2);
console.log(`The GCD of ${num1} and ${num2} is: ${result}`); 
