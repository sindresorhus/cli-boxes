import {expectType} from 'tsd';
import cliBoxes, {BoxStyle, Boxes} from './index.js';

expectType<Boxes>(cliBoxes);
expectType<BoxStyle>(cliBoxes.classic);
expectType<BoxStyle>(cliBoxes.double);
expectType<BoxStyle>(cliBoxes.doubleSingle);
expectType<BoxStyle>(cliBoxes.round);
expectType<BoxStyle>(cliBoxes.bold);
expectType<BoxStyle>(cliBoxes.single);
expectType<BoxStyle>(cliBoxes.singleDouble);
expectType<BoxStyle>(cliBoxes.arrow);
