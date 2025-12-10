import test from 'ava';
import {check, format} from 'prettier';
import config from './index.js';

test('exports an object as "default"', t => {
	t.is(typeof config, 'object');
});

test('"check" can use the config', async t => {
	t.is(await check('const x = 1;\n', {...config, parser: 'typescript'}), true);
	t.is(await check('const x = 1\n', {...config, parser: 'typescript'}), false);
});

test('"format" can use the config', async t => {
	t.is(
		await format('const x = 1', {...config, parser: 'typescript'}),
		'const x = 1;\n',
	);
});
