function amountToCoins(amount, coins) {
    if (amount === 0) {
        return []; 
    }

    let result = [];

    for (let coin of coins) {
        while (coin <= amount) {
            result.push(coin); 
                        amount -= coin;   
        }
    }

    return result;
}

let amount = 46;
let coins = [25, 10, 5, 2, 1];
let result = amountToCoins(amount, coins);
console.log(result); 
