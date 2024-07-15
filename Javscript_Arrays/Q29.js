function num_string_range(start, end, step) {
    var result = [];

    var startCode = start.charCodeAt(0);
    var endCode = end.charCodeAt(0);

    for (var i = startCode; i <= endCode; i += step) {
        result.push(String.fromCharCode(i)); 
    }

    return result;
}

console.log(num_string_range('a', 'z', 2));
