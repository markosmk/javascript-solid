'use strict';

//interface cannot instanciated
class RollerInterface {
  constructor() {
    if (this.constructor == 'RollerInterface') {
      throw new Error('Abstract class cannot be instantiated');
    }
  }

  fillRollerWithValues(min, max, step) {
    throw new Error('Abstract method must be implements on concrete');
  }
  turnRoller(turnsNumber) {
    throw new Error('Abstract method must be implements on concrete');
  }
  extractAdward() {
    throw new Error('Abstract method must be implements on concrete');
  }
}

export { RollerInterface };
