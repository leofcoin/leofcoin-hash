const test = require('tape');
const hash = require('./');

const stringHex512 = '0eab42de4c3ceb9235fc91acffe746b29c29a8c366b7c60e4e67c466f36a4304c00fa9caf9d87976ba469bcbe06713b435f091ef2769fb160cdab33d3670680e';
const objectHex512 = 'd69c0abec6115a77e8769ad9d3f08b4416ab5666cebb1bdebc2a307b5c465d9740eec410b11ff108ddebdd53e9b9eb7c9b41835846b8037dc94eeabc930275f2';
const hexHex512 = 'c82667e4dfddb965af84bac04baed63295c52d464510fcd1d22136953a3456fea8b89a37808c30fa998f0322f5fe10da29cb6d08b4776203935014e7785515f5';

test('string to hash', tape => {
  tape.plan(1);
  const buffer = hash.keccak('leofcoin-hash');
  tape.equal(stringHex512, buffer.toString('hex'));
});

test('object to hash', tape => {
  tape.plan(1);
  const buffer = hash.keccak({name: 'leofcoin-hash'});
  tape.equal(objectHex512, buffer.toString('hex'));
})

test('hex to hash', tape => {
  tape.plan(1);
  const buffer = hash.keccak(stringHex512);
  tape.equal(hexHex512, buffer.toString('hex'));
})
