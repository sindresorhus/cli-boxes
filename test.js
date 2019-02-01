import test from 'ava';
import m from '.';

test('single box', t => {
	t.is(typeof m, 'object');
	t.is(m.single.topLeft, '┌');
});
