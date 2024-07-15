function sortString(str) {
    return str.split('').sort().join('');
}

let str = 'webmaster';
let sortedStr = sortString(str);
console.log(sortedStr); 
