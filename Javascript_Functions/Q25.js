function Longest_Country_Name(countryNames) {
    let longestName = '';
    let maxLength = 0;

    for (let i = 0; i < countryNames.length; i++) {
        let currentName = countryNames[i];
        
        if (currentName.length > maxLength) {
            longestName = currentName;
            maxLength = currentName.length;
        }
    }

    return longestName;
}

let countryNames = ["Australia", "Germany", "United States of America"];
let longestCountry = Longest_Country_Name(countryNames);
console.log(longestCountry); 
