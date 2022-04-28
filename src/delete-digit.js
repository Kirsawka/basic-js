const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = Array.from(n.toString());
  let maxElem = Math.max(...arr).toString();
  (arr.indexOf(maxElem) === 0) ? (delete arr[arr.indexOf(maxElem) + 1]) : (delete arr[arr.indexOf(maxElem) - 1]);
  let res = arr.filter(elem => typeof +elem === 'number');
  let str = '';
  res.forEach(item => str += item);
  return +str;
}

module.exports = {
  deleteDigit
};
