var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

function findMostFrequent(arr) {
    var freqMap = {};
    var maxFreq = 0;
    var mostFreqItem = null;

    arr.forEach(function(item) {
        if (freqMap[item] === undefined) {
            freqMap[item] = 1;
        } else {
            freqMap[item]++;
        }

        if (freqMap[item] > maxFreq) {
            maxFreq = freqMap[item];
            mostFreqItem = item;
        }
    });

    return `${mostFreqItem} ( ${maxFreq} times )`;
}

var result = findMostFrequent(arr1);

console.log(result);
