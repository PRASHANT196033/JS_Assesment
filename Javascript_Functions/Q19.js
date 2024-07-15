function largerThan(arr, number) {
    let result = arr.filter(element => element > number);
    return result;
}

let array = [1, 5, 10, 15, 20];
let threshold = 10;
let filteredArray = largerThan(array, threshold);
console.log(filteredArray); 
