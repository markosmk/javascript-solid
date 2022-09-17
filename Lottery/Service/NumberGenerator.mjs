'use strict';

class NumberGenerator {
  generateRandom(minNumber, maxNumber) {
    let randomNumber = Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
    return randomNumber;
  }
}

export { NumberGenerator };
