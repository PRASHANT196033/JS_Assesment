Array.prototype.binarySearch = function(target) {
    let left = 0;
    let right = this.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (this[mid] === target) {
            return mid;
        }

        if (this[mid] < target) {
            left = mid + 1;
        } else { 
            right = mid - 1;
        }
    }

    return -1;
};

let sortedArray = [0, 1, 2, 3, 4, 5, 6];
let target = 5;
let index = sortedArray.binarySearch(target);

if (index !== -1) {
    console.log(`Target ${target} found at index ${index}`);
} else {
    console.log(`Target ${target} not found in array`);
}
