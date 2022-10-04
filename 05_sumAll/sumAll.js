const sumAll = function(x, y) {
    let smallNum;
    let bigNum;
    let sum = 0;

    if(x < 0 || y < 0) {
        return "ERROR";
    }

    if(typeof x !== "number" || typeof y !== "number") {
        return "ERROR";
    }
    
    if(x > y) {
        smallNum = y;
        bigNum = x;
    } else if (y < x) {
        smallNum = x;
        bigNum = y;
    } else {
        smallNum = x;
        bigNum = y
    }

    const args = Array.from(arguments);

    for(i = smallNum; i <= bigNum; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
