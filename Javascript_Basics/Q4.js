
function calculateTriangleArea(a, b, c) {
    
    let s = (a + b + c) / 2;

   
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    return area;
}
let side1 = 5;
let side2 = 6;
let side3 = 7;


let triangleArea = calculateTriangleArea(side1, side2, side3);


console.log("Area of the triangle with sides", side1, ",", side2, ",", side3, "is:", triangleArea);
