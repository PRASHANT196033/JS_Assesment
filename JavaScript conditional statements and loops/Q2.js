function findProductSign(a, b, c) {
    let product = a * b * c;

    let sign;
    if (product > 0) {
        sign = "+";
    } else if (product < 0) {
        sign = "-";
    } else {
        sign = "zero";
    }

    console.log(`The sign is ${sign}`);
}

let num1 = 3;
let num2 = -7;
let num3 = 2;

findProductSign(num1, num2, num3);
