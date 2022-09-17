'use strict';

class FormHandlerAbstraction {
  #form;
  #elements;
  #data;

  constructor(form, elements) {
    if (this.constructor === 'FormHandlerAbstraction') {
      throw new Error('Abstract class cannot be instantiated');
    }
    this.#form = form;
    this.#elements = elements;
  }

  get form() {
    return this.#form;
  }

  get elements() {
    return this.#elements;
  }

  get data() {
    return this.#data;
  }

  set data(dataInput) {
    this.#data = dataInput;
  }

  getValuesAsKeyValue() {
    throw new Error('Abstract method must be implements on concrete');
  }
}

export { FormHandlerAbstraction };
