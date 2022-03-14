import capitalize from "../src/capitalize.mjs";
import { strict as assert } from 'assert';

assert.equal(capitalize('hello'), 'Hello');
assert.equal(capitalize('hello world'), 'Hello world');
assert.equal(capitalize(''), '');

console.log('Все тесты пройдены!');