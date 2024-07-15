function shuffleArray(array) {
    var shuffledArray = array.slice();

    for (var i = shuffledArray.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1)); 

        var temp = shuffledArray[i];
        shuffledArray[i] = shuffledArray[j];
        shuffledArray[j] = temp;
    }

    return shuffledArray;
}

var originalArray = [1, 2, 3, 4, 5];
var shuffledArray = shuffleArray(originalArray);

console.log("Original Array:", originalArray);
console.log("Shuffled Array:", shuffledArray);
