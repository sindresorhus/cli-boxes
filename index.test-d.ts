import {expectType} from 'tsd';
import cliBoxes = require('./index.js');
import {BoxStyle, Boxes} from './index.js';

// TODO: Enable when targeting ESM.
// expectType<Boxes>(cliBoxes);

expectType<BoxStyle>(cliBoxes.classic);
expectType<BoxStyle>(cliBoxes.double);
expectType<BoxStyle>(cliBoxes.doubleSingle);
expectType<BoxStyle>(cliBoxes.round);
expectType<BoxStyle>(cliBoxes.bold);
expectType<BoxStyle>(cliBoxes.single);
expectType<BoxStyle>(cliBoxes.singleDouble);
expectType<BoxStyle>(cliBoxes.arrow);
