function difference(arr1, arr2) {
    var combinedArray = [...new Set([...arr1, ...arr2])];
    combinedArray.sort((a, b) => a - b);
    return combinedArray;
}

console.log(difference([1, 2, 3], [100, 2, 1, 10])); 

console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));  

console.log(difference([1, 2, 3], [100, 2, 1, 10]));  
