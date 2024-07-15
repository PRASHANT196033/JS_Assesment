function sumAndProduct(arr) {
    var sum = 0;
    var product = 1;

    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];      
        product *= arr[i];  
    }

    return { sum: sum, product: product };
}

var integersArray = [1, 2, 3, 4, 5];
var result = sumAndProduct(integersArray);

console.log("Array:", integersArray);
console.log("Sum:", result.sum);       
console.log("Product:", result.product); 
