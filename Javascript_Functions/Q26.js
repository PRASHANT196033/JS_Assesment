function longestSubstringWithoutRepeatingCharacters(str) {
    let maxLength = 0; 
    let start = 0; 
    let longestSubstring = ''; 

    let charSet = new Set();

    for (let i = 0; i < str.length; i++) {
        let char = str.charAt(i);

        while (charSet.has(char)) {
            charSet.delete(str.charAt(start));
            start++;
        }

        charSet.add(char);
        if (i - start + 1 > maxLength) {
            maxLength = i - start + 1;
            longestSubstring = str.slice(start, i + 1);
        }
    }

    return longestSubstring;
}

let inputString = "abcabcbb";
let longestSubstr = longestSubstringWithoutRepeatingCharacters(inputString);
console.log(longestSubstr); 
