function countOccurrences(str, letter) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === letter) {
            count++;
        }
    }

    return count;
}

let str = 'w3resource.com';
let letter = 'o';
let result = countOccurrences(str, letter);
console.log(result); 
