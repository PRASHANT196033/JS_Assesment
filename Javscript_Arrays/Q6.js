function insertDashes(number) {
    let str = number.toString();
    let result = [];

    for (let i = 0; i < str.length; i++) {
        if (str[i] % 2 === 0 && str[i+1] % 2 === 0) {
            result.push(str[i], '-');
        } else {
            result.push(str[i]);
        }
    }

    return result.join('');
}

console.log(insertDashes(135468)); 
