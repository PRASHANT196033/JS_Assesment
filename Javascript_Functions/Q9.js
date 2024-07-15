function getType(value) {
    return typeof value;
}

console.log(getType(42));           
console.log(getType('Hello'));      
console.log(getType(true));         
console.log(getType({}));           
console.log(getType(function() {})); 
console.log(getType(undefined));    
