import test from 'ava';
import cliBoxes from './index.js';

test('main', t => {
	t.is(typeof cliBoxes, 'object');
	t.is(cliBoxes.single.topLeft, '┌');
	t.is(cliBoxes.arrow.left, '→');
});
