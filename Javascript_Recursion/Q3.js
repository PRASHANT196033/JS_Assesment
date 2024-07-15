function range(x, y) {
    if (y <= x) {
        return "Invalid range. Ensure y is greater than x.";
    }

    let result = [];
    for (let i = x; i < y; i++) {
        result.push(i);
    }
    return result;
}

let integersInRange = range(2, 9);
console.log(integersInRange); 
