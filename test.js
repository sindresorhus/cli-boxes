import test from 'ava';
import cliBoxes from '.';

test('main', t => {
	t.is(typeof cliBoxes, 'object');
	t.is(cliBoxes.single.topLeft, '┌');
});
