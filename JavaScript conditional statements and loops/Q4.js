function findLargestAmongFive(num1, num2, num3, num4, num5) {
    let largestNumber = num1;

    if (num2 > largestNumber) {
        largestNumber = num2;
    }

    if (num3 > largestNumber) {
        largestNumber = num3;
    }

    if (num4 > largestNumber) {
        largestNumber = num4;
    }

    if (num5 > largestNumber) {
        largestNumber = num5;
    }

    console.log(`The largest number among ${num1}, ${num2}, ${num3}, ${num4}, and ${num5} is: ${largestNumber}`);
}

let num1 = 10;
let num2 = 25;
let num3 = -5;
let num4 = 7;
let num5 = 30;

findLargestAmongFive(num1, num2, num3, num4, num5);
