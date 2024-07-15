const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function generateRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}


function guessNumberGame() {
 
    let randomNumber = generateRandomNumber();

 
    rl.question("Guess a number between 1 and 10: ", (userInput) => {
       
        let userGuess = parseInt(userInput);

   
        if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
            console.log("Please enter a valid number between 1 and 10.");
         
            guessNumberGame();
            return;
        }

        
        if (userGuess === randomNumber) {
            console.log("Good Work! You guessed the correct number.");
        } else {
            console.log(`Not matched. The number was ${randomNumber}. Try again!`);
        }

      
        rl.close();
    });
}

guessNumberGame();
