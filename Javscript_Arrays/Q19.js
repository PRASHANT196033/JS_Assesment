function computeSumOfArrays(array1, array2) {
    var maxLength = Math.max(array1.length, array2.length);
    var result = [];

    for (var i = 0; i < maxLength; i++) {
        var value1 = array1[i] || 0;
        var value2 = array2[i] || 0;

        var sum = value1 + value2;

        result.push(sum);
    }

    return result;
}

var array1 = [1, 0, 2, 3, 4];
var array2 = [3, 5, 6, 7, 8, 13];

var output = computeSumOfArrays(array1, array2);
console.log(output); 
