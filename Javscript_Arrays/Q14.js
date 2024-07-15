function removeDuplicatesIgnoreCase(arr) {
    var uniqueItems = new Set();

    arr.map(item => item.toLowerCase()).forEach(item => uniqueItems.add(item));

    var uniqueArray = Array.from(uniqueItems);

    return uniqueArray;
}

var arr = ['Apple', 'banana', 'APPLE', 'Orange', 'Banana', 'orange'];
var uniqueItems = removeDuplicatesIgnoreCase(arr);

console.log("Original Array:", arr);
console.log("Array with duplicates removed (ignore case):", uniqueItems);
