function flatten(array) {
    return array.reduce(function(acc, current) {
        return acc.concat(Array.isArray(current) ? flatten(current) : current);
    }, []);
}

var nestedArray = [1, [2], [3, [[4]]], [5, 6]];
console.log(flatten(nestedArray)); 
