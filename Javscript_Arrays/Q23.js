function difference(array1, array2) {
    var diff = array1.filter(item => !array2.includes(item));

    return diff;
}

console.log(difference([1, 2, 3], [100, 2, 1, 10])); 
console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]])); 
console.log(difference([1, 2, 3], [100, 2, 1, 10])); 
