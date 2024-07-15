function longestPalindromicSubstring(s) {
    if (!s || s.length === 0) return "";

    let result = [];

    function expandAroundCenter(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            result.push(s.substring(left, right + 1));
            left--;
            right++;
        }
    }

    for (let i = 0; i < s.length; i++) {
        expandAroundCenter(i, i);

        expandAroundCenter(i, i + 1);
    }

    let longest = "";
    for (let str of result) {
        if (str.length > longest.length) {
            longest = str;
        }
    }

    return longest;
}

let inputString = "bananas";
let longestPalindrome = longestPalindromicSubstring(inputString);
console.log(longestPalindrome); 
