function binarySearch(items, target) {
    var startIndex = 0;
    var endIndex = items.length - 1;

    while (startIndex <= endIndex) {
        var middleIndex = Math.floor((startIndex + endIndex) / 2);

        if (items[middleIndex] === target) {
            return middleIndex; 
        } else if (items[middleIndex] < target) {
            startIndex = middleIndex + 1; 
        } else {
            endIndex = middleIndex - 1; 
        }
    }

    return -1; 
}

var items = [1, 2, 3, 4, 5, 7, 8, 9];
console.log(binarySearch(items, 1)); 
console.log(binarySearch(items, 5)); 
console.log(binarySearch(items, 6)); 
