function removeFalsyValues(array) {
    var falsyValues = [null, 0, "", false, undefined, NaN];

    var filteredArray = array.filter(function(value) {
        return !falsyValues.includes(value);
    });

    return filteredArray;
}

var sampleArray = [NaN, 0, 15, false, -22, '', undefined, 47, null];
var result = removeFalsyValues(sampleArray);
console.log(result); 
