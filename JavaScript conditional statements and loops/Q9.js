function findArmstrongNumbers() {
    let armstrongNumbers = [];

    for (let number = 100; number <= 999; number++) {
        let sumOfCubes = 0;
        let temp = number;

        while (temp > 0) {
            let digit = temp % 10;
            sumOfCubes += Math.pow(digit, 3);
            temp = Math.floor(temp / 10);
        }

        if (sumOfCubes === number) {
            armstrongNumbers.push(number);
        }
    }

    return armstrongNumbers;
}

let armstrongNumbers = findArmstrongNumbers();
console.log("Armstrong numbers of 3 digits:", armstrongNumbers);
