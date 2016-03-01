import test from 'ava';
import m from './';

test(t => {
	t.is(typeof m, 'object');
	t.is(m.single.topLeft, '┌');
});
