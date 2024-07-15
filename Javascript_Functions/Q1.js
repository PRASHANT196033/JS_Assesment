function reverseNumber(num) {
   
    let numStr = num.toString();

    
    let reversedStr = numStr.split('').reverse().join('');

 
    let reversedNum = parseInt(reversedStr);

    return reversedNum;
}

let x = 546738;
let reversed = reverseNumber(x);
console.log(reversed); 
