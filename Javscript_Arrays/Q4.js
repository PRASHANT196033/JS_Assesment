function last(arr, n = 1) {
    if (!Array.isArray(arr) || n <= 0) {
        return [];
    }

    return arr.slice(-n);
}

console.log(last([7, 9, 0, -2]));     
console.log(last([7, 9, 0, -2], 3));   
console.log(last([7, 9, 0, -2], 6));   
