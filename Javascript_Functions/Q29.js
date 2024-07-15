function getFunctionName(func) {
    // If the function has a name property, return it
    if (func.name) {
        return func.name;
    }

    let funcString = func.toString().trim();
    let name = funcString.substr(9, funcString.indexOf('(') - 9);
    return name || 'Anonymous function';
}

function myFunction() {
}
const arrowFunction = () => {
};

console.log(getFunctionName(myFunction)); 
console.log(getFunctionName(arrowFunction)); 
