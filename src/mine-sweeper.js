const {NotImplementedError} = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
    let arr = matrix.map((item) => [...item]);

    let heigth = matrix.length - 1;

    for (let i = 0; i <= heigth; i++) {
        let width = matrix[i].length - 1;
        for (let j = 0; j <= width; j++) {
            let counter = 0;

            let minK = i - 1 <= 0 ? 0 : i - 1;
            let minN = j - 1 <= 0 ? 0 : j - 1;
            let maxK = i + 1 >= heigth ? heigth : i + 1;
            let maxN = j + 1 >= width ? width : j + 1;

            for (let k = minK; k <= maxK; k++) {
                for (let n = minN; n <= maxN; n++) {
                    if (matrix[k][n] === true) {
                        counter++;
                    }
                }
            }
            if (matrix[i][j] === true) {
                counter--;
            }
            arr[i][j] = counter;
        }
    }
    return arr;
}

module.exports = {
    minesweeper
};
