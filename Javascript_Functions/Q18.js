function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let middle = Math.floor((left + right) / 2);

        if (arr[middle] === target) {
            return middle; 
        } else if (arr[middle] < target) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    return -1;
}

let sortedArray = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
let target = 23;
let resultIndex = binarySearch(sortedArray, target);
console.log(`Index of ${target} in array:`, resultIndex); 
