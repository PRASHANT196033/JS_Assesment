function findPairIndices(numbers, target) {
    var map = {}; 

    for (var i = 0; i < numbers.length; i++) {
        var complement = target - numbers[i]; 

        if (map.hasOwnProperty(complement)) {
            return [map[complement], i];
        }

        map[numbers[i]] = i;
    }

    return null;
}

var numbers = [10, 20, 10, 40, 50, 60, 70];
var target = 50;
var result = findPairIndices(numbers, target);

if (result !== null) {
    console.log(result.join(', ')); 
} else {
    console.log("No such pair found");
}
