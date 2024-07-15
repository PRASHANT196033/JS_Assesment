function union(array1, array2) {
    var set = new Set();

    array1.forEach(item => {
        set.add(item);
    });

    array2.forEach(item => {
        set.add(item);
    });

    return Array.from(set);
}

console.log(union([1, 2, 3], [100, 2, 1, 10])); 
