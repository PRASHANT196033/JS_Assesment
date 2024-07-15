function isPerfectNumber(number) {
    if (number <= 1) {
        return false; 
    }

    let sum = 0;
    
    for (let i = 1; i <= number / 2; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }

    return sum === number;
}

console.log(isPerfectNumber(6));   
console.log(isPerfectNumber(28));  
console.log(isPerfectNumber(496)); 
console.log(isPerfectNumber(8128));
console.log(isPerfectNumber(10));  
