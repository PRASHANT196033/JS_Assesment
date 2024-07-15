let myColor = ["Red", "Green", "White", "Black"];

let output1 = myColor.join(",");
console.log(output1);  

let output2 = myColor.join(",").split(',').join(',');
console.log(output2);  

let output3 = myColor.join("+");
console.log(output3);  
