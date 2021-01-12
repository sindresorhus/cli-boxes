import {expectType} from 'tsd';
import cliBoxes = require('.');
import {BoxStyle, Boxes, BoxStyleAll} from '.';

expectType<Boxes>(cliBoxes);

expectType<BoxStyle>(cliBoxes.classic);
expectType<BoxStyle>(cliBoxes.double);
expectType<BoxStyle>(cliBoxes.doubleSingle);
expectType<BoxStyle>(cliBoxes.round);
expectType<BoxStyle>(cliBoxes.bold);
expectType<BoxStyle>(cliBoxes.single);
expectType<BoxStyle>(cliBoxes.singleDouble);
expectType<BoxStyleAll>(cliBoxes.arrow);
