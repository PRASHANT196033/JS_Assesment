function retrievePropertyValue(array) {
    return array.filter(Boolean); 
}

var sampleArray = [NaN, 0, 15, false, -22, '', undefined, 47, null];
var result = retrievePropertyValue(sampleArray);
console.log(result); 
