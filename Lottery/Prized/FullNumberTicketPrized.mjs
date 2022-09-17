'use strict';

import { TicketPrizedAbstraction } from './TicketPrizedAbstraction.mjs';

class FullNumberTicketPrized extends TicketPrizedAbstraction {
  isTicketPrized() {
    return this.prizedNumber == this.ticket.ticketNumber;
  }
}

export { FullNumberTicketPrized };
