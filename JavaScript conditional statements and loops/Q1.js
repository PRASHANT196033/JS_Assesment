function findLargerNumber(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

let num1 = 15;
let num2 = 7;

let largerNumber = findLargerNumber(num1, num2);
console.log(`The larger number between ${num1} and ${num2} is: ${largerNumber}`); 
