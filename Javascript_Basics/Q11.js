
function celsiusToFahrenheit(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}


function fahrenheitToCelsius(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5/9;
    return celsius;
}


let celsius = 60;
let fahrenheit = 140;

console.log(`${celsius}°C is ${celsiusToFahrenheit(celsius)}°F`);
console.log(`${fahrenheit}°F is ${fahrenheitToCelsius(fahrenheit)}°C`);
