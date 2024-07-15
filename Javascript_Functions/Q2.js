function isPalindrome(str) {
    
    let cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

 
    let reversedStr = cleanStr.split('').reverse().join('');

    
    return cleanStr === reversedStr;
}


let str1 = "inmorphis";
console.log(isPalindrome(str1)); 

let str2 = "Experience ";
console.log(isPalindrome(str2)); 

let str3 = "Wow";
console.log(isPalindrome(str3)); 
