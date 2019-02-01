import { expectType } from 'tsd-check';
import cliBoxes, {BoxStyle, Boxes} from '.';

expectType<Boxes>(cliBoxes);

expectType<BoxStyle>(cliBoxes.classic);
expectType<BoxStyle>(cliBoxes.double);
expectType<BoxStyle>(cliBoxes['double-single']);
expectType<BoxStyle>(cliBoxes.round);
expectType<BoxStyle>(cliBoxes.single);
expectType<BoxStyle>(cliBoxes['single-double']);
