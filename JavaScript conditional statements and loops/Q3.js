function sortThreeNumbers(num1, num2, num3) {
    let sortedNumbers;

    if (num1 >= num2 && num1 >= num3) {
        if (num2 >= num3) {
            sortedNumbers = [num1, num2, num3];
        } else {
            sortedNumbers = [num1, num3, num2];
        }
    } else if (num2 >= num1 && num2 >= num3) {
        if (num1 >= num3) {
            sortedNumbers = [num2, num1, num3];
        } else {
            sortedNumbers = [num2, num3, num1];
        }
    } else { 
        if (num1 >= num2) {
            sortedNumbers = [num3, num1, num2];
        } else {
            sortedNumbers = [num3, num2, num1];
        }
    }

    console.log(`Sorted numbers: ${sortedNumbers.join(', ')}`);
}

let num1 = 0;
let num2 = -1;
let num3 = 4;

sortThreeNumbers(num1, num2, num3);
