function longest_common_starting_substring(strings) {
    if (strings.length === 0) {
        return ""; 
    }

    var shortest = strings.reduce(function(prev, current) {
        return prev.length < current.length ? prev : current;
    });

    for (var i = 0; i < shortest.length; i++) {
        for (var j = 1; j < strings.length; j++) {
            if (strings[j][i] !== shortest[i]) {
                return shortest.slice(0, i); 
            }
        }
    }

    return shortest; 
}

console.log(longest_common_starting_substring(['go', 'google'])); 
console.log(longest_common_starting_substring(['flow', 'flight', 'flower'])); 
console.log(longest_common_starting_substring(['dog', 'cat', 'bird'])); 
