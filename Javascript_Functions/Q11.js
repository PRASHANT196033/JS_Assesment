function findSecondLowestAndGreatest(numbers) {
    numbers.sort(function(a, b) {
        return a - b;
    });

    let uniqueNumbers = [...new Set(numbers)];

    if (uniqueNumbers.length < 2) {
        return "Array does not have enough distinct numbers";
    }

    let secondLowest = uniqueNumbers[1];

    let secondGreatest = uniqueNumbers[uniqueNumbers.length - 2];

    return `${secondLowest},${secondGreatest}`;
}

let arr = [1, 2, 3, 4, 5];
let result = findSecondLowestAndGreatest(arr);
console.log(result); 
