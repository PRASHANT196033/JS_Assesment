function rangeBetween(start, end) {
    var result = [];
    for (var i = start; i <= end; i++) {
        result.push(i);
    }
    return result;
}

console.log(rangeBetween(4, 7));  
console.log(rangeBetween(-4, 7)); 
