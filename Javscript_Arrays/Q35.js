function getRandomItem(array) {
    var randomIndex = Math.floor(Math.random() * array.length);

    return array[randomIndex];
}

var array = [1, 2, 3, 4, 5];
console.log(getRandomItem(array)); 
