function findDuplicates(array) {
    var duplicates = [];
    var seen = new Set();

    for (var i = 0; i < array.length; i++) {
        var value = array[i];

        if (seen.has(value)) {
            if (!duplicates.includes(value)) {
                duplicates.push(value);
            }
        } else {
            seen.add(value);
        }
    }

    return duplicates;
}

var array1 = [1, 2, 3, 4, 2, 5, 6, 3, 7, 8, 1];
var array2 = ['a', 'b', 'c', 'b', 'd', 'e', 'a', 'f'];

console.log("Duplicates in array1:", findDuplicates(array1)); 
console.log("Duplicates in array2:", findDuplicates(array2)); 
