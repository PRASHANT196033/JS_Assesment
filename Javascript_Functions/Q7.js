function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;

    str = str.toLowerCase();

    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

let str = 'The quick brown fox';
let vowelCount = countVowels(str);
console.log(vowelCount); 
