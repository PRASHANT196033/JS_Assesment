function firstNonRepeatedCharacter(str) {
    let charCount = {};

    for (let i = 0; i < str.length; i++) {
        let char = str.charAt(i);
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (let i = 0; i < str.length; i++) {
        let char = str.charAt(i);
        if (charCount[char] === 1) {
            return char;
        }
    }

    return null; 
}

let str = 'abacddbec';
let result = firstNonRepeatedCharacter(str);
console.log(result); 
