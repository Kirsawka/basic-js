const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
    let arr = [];
    let count = 1;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++;
        } else {
            arr.push(count, str[i]);
            count = 1;
        }
    }
    let newArr = arr.filter(elem => elem !== 1).join();
    let res = '';
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] !== ',') {
            res += newArr[i];
        }
    }
    return res;
}

module.exports = {
    encodeLine
};
