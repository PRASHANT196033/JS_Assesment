function sumOfSquares(vector) {
    var sum = 0;

    for (var i = 0; i < vector.length; i++) {
        var square = vector[i] * vector[i];

        sum += square;
    }

    return sum;
}

var numericVector = [3, 4, 5, 6];
var result = sumOfSquares(numericVector);

console.log("Vector:", numericVector);
console.log("Sum of squares:", result); 
