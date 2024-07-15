function capitalizeWords(str) {
    let words = str.split(' ');

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }

    return words.join(' ');
}


let str = 'the quick brown fox';
let capitalizedStr = capitalizeWords(str);
console.log(capitalizedStr); 
