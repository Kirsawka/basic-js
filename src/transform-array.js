const {NotImplementedError} = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {

    if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");

    let res = arr.slice();
    let discardNext = res.indexOf('--discard-next');
    let discardPrev = res.indexOf('--discard-prev');
    let doubleNext = res.indexOf('--double-next');
    let doublePrev = res.indexOf('--double-prev');

    if (res.includes('--discard-next')) {
        if ((res[discardNext] + 1) && typeof res[discardNext + 1] === 'number') {
            res.splice(discardNext + 1, 1);
        }
    }

    if (res.includes('--double-next')) {
        if (res[doubleNext + 1] && typeof res[doubleNext + 1] === 'number') {
            res[doubleNext] = res[doubleNext + 1];
        }
    }

    if (res.includes('--discard-prev')) {
        if (res[discardPrev - 1] && typeof res[discardPrev - 1] === 'number') {
            res.splice(discardPrev - 1, 1);
        }
    }

    if (res.includes('--double-prev')) {
        if (res[doublePrev - 1] && typeof res[doublePrev - 1] === 'number') {
            res[doublePrev] = res[doublePrev - 1];
        }
    }
    return res.filter(elem => elem !== '--discard-next' && elem !== '--discard-prev' && elem !== '--double-next' && elem !== '--double-prev');
}

module.exports = {
    transform
};
