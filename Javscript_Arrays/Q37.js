function array_filled(length, value) {
    var filledArray = [];
    for (var i = 0; i < length; i++) {
        filledArray.push(value);
    }
    return filledArray;
}

console.log(array_filled(3, 'default value'));  
console.log(array_filled(4, 'password')); 
