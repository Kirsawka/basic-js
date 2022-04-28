const {NotImplementedError} = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
    if (str == null) str = 'null';
    if (options.addition === null) options.addition = "null";
    if (options.separator === undefined) options.separator = "+";
    if (options.additionSeparator === undefined) options.additionSeparator = "|";

    let arrNew = [];
    if (options.additionRepeatTimes && typeof options.additionRepeatTimes === "number") {
        for (let i = 0; i < options.additionRepeatTimes; i++) {
            arrNew.push(options.addition);
        }
    } else {
        arrNew.push(options.addition);
    }
    let tempStr = arrNew.join(options.additionSeparator);

    if (options.additionRepeatTimes && typeof options.additionRepeatTimes === "number") {
        for (let i = 0; i < options.additionRepeatTimes; i++) {
            options.addition += options.addition;
        }
    }

    let arr = [];
    if (options.repeatTimes && typeof options.repeatTimes === "number") {
        for (let i = 0; i < options.repeatTimes; i++) {
            arr.push(str + tempStr);
        }
    } else {
        arr.push(str + tempStr);
    }

    if (options.addition) {
        str += options.addition;
    }
    return arr.join(options.separator);
}

module.exports = {
    repeater
};
