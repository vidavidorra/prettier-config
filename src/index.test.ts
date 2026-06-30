import test from 'ava';
import {check, format} from 'prettier';
import config from './index.js';

test('exports an object as "default"', (t) => {
  t.is(typeof config, 'object');
});

test('"check" can use the config', async (t) => {
  t.true(await check('const x = 1;\n', {...config, parser: 'typescript'}));
  t.false(await check('const x = 1\n', {...config, parser: 'typescript'}));
});

test('"format" can use the config', async (t) => {
  t.is(
    await format('const x = 1', {...config, parser: 'typescript'}),
    'const x = 1;\n',
  );
});
