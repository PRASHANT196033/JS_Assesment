function swapCase(str) {
    var swapped = '';
    
    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        
        if (char === char.toUpperCase()) {
            swapped += char.toLowerCase();
        } else {
            swapped += char.toUpperCase();
        }
    }
    
    return swapped;
}

var input = 'The Quick Brown Fox';
var output = swapCase(input);

console.log(output);  
