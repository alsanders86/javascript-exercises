const removeFromArray = function(array, item) {
    const args = Array.from(arguments);

    // console.log(args[1]);
    for(j = 1; j < args.length; j++) {
        for (i = 0; i < array.length; i++) {
            if(args[j] === array[i]) {
                array.splice(i, 1);
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
