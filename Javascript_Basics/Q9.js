function daysUntilNextChristmas() {
    
    let currentDate = new Date();

 
    let currentYear = currentDate.getFullYear();

    let nextChristmas;
    if (currentDate.getMonth() === 11 && currentDate.getDate() > 25) {
       
        nextChristmas = new Date(currentYear + 1, 11, 25);
    } else {
   
        nextChristmas = new Date(currentYear, 11, 25);
    }

   
    let timeDiff = nextChristmas.getTime() - currentDate.getTime();

    
    let daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

    return daysDiff;
}


let daysLeft = daysUntilNextChristmas();
console.log(`Days left until next Christmas: ${daysLeft}`);
