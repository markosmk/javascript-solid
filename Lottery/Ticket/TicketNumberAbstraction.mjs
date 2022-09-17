'use strict';

class TicketNumberAbstraction {
  #number; // propiedad privada

  constructor(number) {
    // consultamos nuestra instancia del constructor
    if (this.constructor == 'TicketNumberAbstraction') {
      throw new Error('Abstract class cannot be instantiate');
    }
    this.#number = number;
  }

  get number() {
    return this.#number;
  }

  validateNumber(number) {
    throw new Error('Abstract method must be implements on concrete');
  }

  get tickNumber() {
    throw new Error('Abstract method must be implements on concrete');
  }
}

export { TicketNumberAbstraction };
