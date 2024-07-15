function remove_array_element(arr, element) {
    return arr.filter(function(value) {
        return value !== element;
    });
}

console.log(remove_array_element([2, 5, 9, 6], 5)); 
console.log(remove_array_element([2, 5, 9, 6], 3)); 