function array_filled(length, value) {
    var filledArray = [];
    for (var i = 0; i < length; i++) {
        filledArray.push(value);
    }
    return filledArray;
}

console.log(array_filled(6, 0));  
console.log(array_filled(4, 11)); 
