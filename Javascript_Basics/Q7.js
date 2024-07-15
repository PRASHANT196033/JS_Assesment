function findFirstJanSunday() {
    let years = [];

    for (let year = 2014; year <= 2050; year++) {
        let date = new Date(year, 0, 1); 

        if (date.getDay() === 0) {
            years.push(year); 
        }
    }

    return years;
}

let yearsWithJan1stSunday = findFirstJanSunday();

if (yearsWithJan1stSunday.length > 0) {
    console.log("1st January is a Sunday in the following years between 2014 and 2050:");
    console.log(yearsWithJan1stSunday.join(", "));
} else {
    console.log("No year found between 2014 and 2050 where 1st January is a Sunday.");
}
