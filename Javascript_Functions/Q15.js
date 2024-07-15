const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function computePower(base, exponent) {
    let result = base ** exponent;
    return result;
}

rl.question("Enter the base (b): ", function(baseInput) {
    rl.question("Enter the exponent (n): ", function(exponentInput) {
        let base = parseFloat(baseInput);
        let exponent = parseFloat(exponentInput);
        
        let powerResult = computePower(base, exponent);
        console.log(`Result of ${base}^${exponent} is:`, powerResult);

        rl.close();
    });
});
