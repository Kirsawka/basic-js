const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
    let arr1 = Array.from(s1);
    let arr2 = Array.from(s2);
    let res = 0;

    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i])) {
            res++;
            delete arr2[arr2.indexOf(arr1[i])];
        }
    }
    return res;
}

module.exports = {
    getCommonCharacterCount
};
