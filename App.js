'use strict';
import './env.mjs';
import './Event/FormEvent.mjs';
import { NumberGenerator } from './Lottery/Service/NumberGenerator.mjs';
import { NumberFormatter } from './Lottery/Service/NumberFormatter.mjs';
import { NumbersLottery } from './Lottery/NumbersLottery.mjs';
import { NumberRoller } from './Lottery/Roller/NumberRoller.mjs';

window.numberGenerator = new NumberGenerator();
window.numberFormatter = new NumberFormatter();
window.roller = new NumberRoller(numberFormatter, numberGenerator);
window.lottery = new NumbersLottery(roller);

lottery.prepareLottery();
