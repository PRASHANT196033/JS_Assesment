function countLetterOccurrences(str) {
    let counts = {};

    str = str.toLowerCase();

    for (let char of str) {
        if (/[a-z]/.test(char)) {
           
            counts[char] = (counts[char] || 0) + 1;
        }
    }

    return counts;
}

let string = "Hello World";
let letterCounts = countLetterOccurrences(string);

for (let letter in letterCounts) {
    console.log(`${letter}: ${letterCounts[letter]}`);
}
