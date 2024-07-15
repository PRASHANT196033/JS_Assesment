function higherOrderFunction(func) {
    console.log("Inside higherOrderFunction:");
    func();
}

function myFunction() {
    console.log("Hello from myFunction!");
}

higherOrderFunction(myFunction);
