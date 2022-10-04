const repeatString = function(string, num) {
    let repeatedString = '';
    if(num >= 0) {
        for(i = 0; i < num; i++) {
            repeatedString = repeatedString.concat(string);
        }
    } else {
        repeatedString = "ERROR";
    }

    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
