function nthLargest(arr, n) {
    arr.sort(function(a, b) {
        return b - a; 
    });

    return arr[n - 1];
}

console.log(nthLargest([43, 56, 23, 89, 88, 90, 99, 652], 4)); 
