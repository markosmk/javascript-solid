'use strict';

class NumberFormatter {
  formatPaddingZeros(value, numberLength) {
    let num = value ? value.toString() : '';
    return num.padStart(numberLength, '0');
  }
}

export { NumberFormatter };
