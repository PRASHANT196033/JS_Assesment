function findLongestWord(str) {
    let words = str.split(' ');

    let longestWord = '';
    let maxLength = 0;

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > maxLength) {
            maxLength = words[i].length;
            longestWord = words[i];
        }
    }

    return longestWord;
}

let str = 'Web Development Tutorial';
let longestWord = findLongestWord(str);
console.log(longestWord); 
