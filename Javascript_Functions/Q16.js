function extractUniqueCharacters(str) {
    let seen = {}; 
    let result = ''; 
    
    for (let i = 0; i < str.length; i++) {
        let char = str.charAt(i);
        
        if (!seen[char]) {
            seen[char] = true;
            result += char;
        }
    }
    
    return result;
}

let string = "thequickbrownfoxjumpsoverthelazydog";
let uniqueChars = extractUniqueCharacters(string);
console.log(uniqueChars); 
