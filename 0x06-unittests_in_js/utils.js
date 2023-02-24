const Utils = {
    calculateNumber(type, a, b) {
        firstInt = Math.round(a);
        secondInt = Math.round(b);
        if (type === 'DIVIDE') {
            if (secondInt === 0) {
                console.log('Error');
                return 'Error';
            }
            console.log(firstInt / secondInt);
            return firstInt / secondInt;
        }
        else if (type === 'SUBTRACT') {
            console.log(firstInt - secondInt);
            return firstInt - secondInt;
        }
        else if (type === 'SUM') {
            console.log(firstInt + secondInt);
            return firstInt + secondInt;
        }
    }
};

module.exports = Utils;