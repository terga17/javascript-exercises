const palindromes = function (string) {
    const lowerStr = string.toLowerCase().split("");
    var reversedStr = lowerStr.reverse().join("");
    return string === reversedStr;
    
};

// Do not edit below this line
module.exports = palindromes;
