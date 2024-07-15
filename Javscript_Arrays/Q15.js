var color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
var o = ["th","st","nd","rd"];

function getOrdinalSuffix(position) {
    if (position >= 11 && position <= 13) {
        return "th"; 
    } else {
        var lastDigit = position % 10;
        return o[lastDigit];
    }
}

for (var i = 0; i < color.length; i++) {
    var position = i + 1;
    var ordinalSuffix = getOrdinalSuffix(position);
    console.log(`${position}${ordinalSuffix} choice is ${color[i]}.`);
}
