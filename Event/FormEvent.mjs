'use strict';

(() => {
  let section_custom = document.querySelector('#lottery_ticket_form .custom_lottery');
  let option = document.querySelectorAll('[name=card_type]');

  option.forEach((radio) => {
    radio.addEventListener('change', (event) => {
      if (radio.value == 'custom') {
        section_custom.classList.remove('disabled-component');
        section_custom.querySelector('input').disabled = false;
      } else {
        section_custom.classList.add('disabled-component');
        section_custom.querySelector('input').disabled = true;
      }
    });
  });

  document.querySelector('#lottery_ticket_form').addEventListener('submit', (event) => {
    event.preventDefault();

    import('../Form/FormHandler.mjs').then((module) => {
      let form = new module.FormHandler(event.target, ['lottery_number', 'card_type']);
      let dataInput = form.getValuesAsKeyValue();
      // console.log(dataInput);
      let numberBet = null;
      if (dataInput.card_type === 'auto') {
        numberBet = numberGenerator.generateRandom(MIN_TICKET_NUMBER, MAX_TICKET_NUMBER);
      } else {
        numberBet = dataInput.lottery_number;
      }
      console.log(dataInput);

      import('../Lottery/Ticket/SimpleTicketNumber.mjs').then((module) => {
        window.ticket = new module.SimpleTicketNumber(numberBet, numberFormatter);

        if (ticket) {
          document.querySelector('#lottery_start > button').disabled = false;
        }

        let ticket_html = document.createElement('span');
        ticket_html.innerHTML = ticket.ticketNumber;

        document.querySelector('#ticket_number').innerHTML = ticket_html.outerHTML;
      });
    });
  });

  document.querySelector('#lottery_start').addEventListener('submit', (event) => {
    event.preventDefault();

    lottery.startLottery();
    let prizedNumber = lottery.getPrizedNumber();

    import('../Lottery/Prized/FullNumberTicketPrized.mjs').then((module) => {
      window.numberPrized = new module.FullNumberTicketPrized(ticket, prizedNumber);
      let result = numberPrized.isTicketPrized();
      let number_prized_html = document.createElement('span');
      number_prized_html.innerHTML = prizedNumber + (result !== true ? '' : ' Premio!!! 🥳');
      number_prized_html.style = result !== true ? 'color:black' : 'color:lime';

      document.querySelector('#lottery_result').innerHTML = number_prized_html.outerHTML;
    });
  });
})();
