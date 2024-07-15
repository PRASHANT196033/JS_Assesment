function array_Clone(arr) {
    if (!Array.isArray(arr)) {
        return null;  
    }

    let newArr = arr.slice(0);

    for (let i = 0; i < newArr.length; i++) {
        if (Array.isArray(newArr[i])) {
            newArr[i] = array_Clone(newArr[i]);
        }
    }

    return newArr;
}

console.log(array_Clone([1, 2, 4, 0]));     
console.log(array_Clone([1, 2, [4, 0]]));   
