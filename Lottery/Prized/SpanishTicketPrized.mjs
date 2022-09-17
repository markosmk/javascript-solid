'use strict';

import { TicketPrizedAbstraction } from './TicketPrizedAbstraction.mjs';

class SpanishTicketPrized extends TicketPrizedAbstraction {
  isTicketPrized() {
    return this.isFullMatch() || this.isLastThreeNumberMatch();
  }

  isFullMatch() {
    return this.prizedNumber === this.ticket.ticketNumber;
  }

  isLastThreeNumberMatch() {
    let lastThreePrized = this.prizedNumber.slice(-3);
    let lastThreeTicket = this.ticket.ticketNumber.slice(-3);
    return lastThreePrized === lastThreeTicket;
  }
}

export { SpanishTicketPrized };
