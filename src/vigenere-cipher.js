const {NotImplementedError} = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {

    constructor(type = true) {
        this.type = type;
    }

    let
    alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    encrypt(str, key) {
        if (!str || !key) throw new Error('Incorrect arguments!');

        let keyArr = [];
        let encryptedArr = [];

        for (let i = 0; i < key.length; i++) {
            if (this.alphabet.includes(key.toUpperCase()[i])) {
                keyArr.push(this.alphabet.indexOf(key.toUpperCase()[i]));
            } else {
                keyArr.push(str[i]);
            }
        }

        let j = 0;
        for (let i = 0; i < str.length; i++) {
            if (this.alphabet.includes(str.toUpperCase()[i])) {
                let mod = (this.alphabet.indexOf(str.toUpperCase()[i]) + keyArr[j]) % 26;
                encryptedArr.push((this.alphabet)[mod]);
                j++;
                if (j === keyArr.length) {
                    j = 0;
                }
            } else {
                encryptedArr.push(str[i]);
            }
        }
        return !this.type ? encryptedArr.reverse().join('') : encryptedArr.join('');
    }

    decrypt(str, key) {

        if (!str || !key) throw new Error('Incorrect arguments!');
        let keyArr = [];
        let decryptedArr = [];

        for (let i = 0; i < key.length; i++) {
            if (this.alphabet.includes(key.toUpperCase()[i])) {
                keyArr.push(this.alphabet.indexOf(key.toUpperCase()[i]));
            } else {
                keyArr.push(str[i]);
            }
        }

        let j = 0;
        for (let i = 0; i < str.length; i++) {
            if (this.alphabet.includes(str.toUpperCase()[i])) {

                let mod = (this.alphabet.indexOf(str.toUpperCase()[i]) - keyArr[j]) % 26;

                while (mod < 0) {
                    mod = (mod + 26) % 26;
                }

                decryptedArr.push((this.alphabet)[mod]);
                j++;
                if (j === keyArr.length) {
                    j = 0;
                }
            } else {
                decryptedArr.push(str[i]);
            }
        }

        return !this.type ? decryptedArr.reverse().join("") : decryptedArr.join("");

    }
}

module.exports = {
    VigenereCipheringMachine
};
