function generateCombinations(str) {
    let result = [];

    function recurse(current, index) {
     
        for (let i = index; i < str.length; i++) {
            
            recurse(current + str[i], i + 1);
        }
    }

    
    recurse('', 0);

    return result;
}


let str = 'dog';
let combinations = generateCombinations(str);
console.log(combinations);
