'use strict';

import { TicketNumberAbstraction } from './TicketNumberAbstraction.mjs';

class SimpleTicketNumber extends TicketNumberAbstraction {
  #numberFormatter;
  constructor(number, numberFormatter) {
    super(number, numberFormatter);
    this.#numberFormatter = numberFormatter;

    this.validateNumber();
  }

  get ticketNumber() {
    return this.#numberFormatter.formatPaddingZeros(this.number, TICKET_NUMBER_LENGTH);
  }

  //
  // formatNumberAsStringPaddingZeros () {

  // }

  validateNumber(number) {
    if (this.number < MIN_TICKET_NUMBER || this.number > MAX_TICKET_NUMBER) {
      throw new Error('The ticket number are not valid value');
    }
  }
}

export { SimpleTicketNumber };
