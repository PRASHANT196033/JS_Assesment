function findLeapYears(startYear, endYear) {
    var leapYears = [];

    for (var year = startYear; year <= endYear; year++) {
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            leapYears.push(year); 
        }
    }

    return leapYears;
}

var startYear = 2000;
var endYear = 2024;
var leapYears = findLeapYears(startYear, endYear);

console.log(`Leap years between ${startYear} and ${endYear}:`);
console.log(leapYears);
