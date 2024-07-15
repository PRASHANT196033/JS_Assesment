function identityMatrix(n) {
    let matrix = [];

    for (let i = 0; i < n; i++) {
        let row = [];
        
        for (let j = 0; j < n; j++) {
            if (i === j) {
                row.push(1);
            } else {
                row.push(0);
            }
        }
        
        matrix.push(row);
    }

    return matrix;
}

let n = 4;
let result = identityMatrix(n);
console.log(result);
