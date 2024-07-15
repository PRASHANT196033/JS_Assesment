function filter_array_values(arr) {
    return arr.filter(function(value) {
        return value !== false && value !== null && value !== 0 && value !== '';
    });
}

console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));
