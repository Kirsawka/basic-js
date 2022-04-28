const {NotImplementedError} = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
    arr: [],
    getLength() {
        this.arr.length;
    },
    addLink(value) {
        if (value === undefined) {
            this.arr.push('()');
        } else {
            this.arr.push(`( ${value} )`);
        }
        return this;
    },
    removeLink(position) {
        if (typeof position === 'number' && this.arr[position] && position === Math.trunc(position) && position > 0) {
            this.arr.splice(this.arr.indexOf(this.arr[position - 1]), 1);
            return this;
        } else {
            this.arr.splice(0, this.arr.length);
            throw new Error('You can\'t remove incorrect link!');
        }
    },
    reverseChain() {
        this.arr.reverse();
        return this;
    },
    finishChain() {
        let str = '';
        str = this.arr.join('~~');
        this.arr.splice(0, this.arr.length);
        return str;
    }
};

module.exports = {
    chainMaker
};
