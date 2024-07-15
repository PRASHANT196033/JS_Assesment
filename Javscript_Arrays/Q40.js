function array_range(start, length) {
    var result = [];
    for (var i = 0; i < length; i++) {
        result.push(start + i);
    }
    return result;
}

console.log(array_range(1, 4));  
console.log(array_range(-6, 4)); 
