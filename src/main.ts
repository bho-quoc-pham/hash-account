import { Keyring, WsProvider, ApiPromise } from '@polkadot/api';
import { decodeAddress, encodeAddress } from '@polkadot/keyring';
// import { hexToU8a, isHex } from '@polkadot/util';


const address = '0xb3c62C1223B651950B37EF25e7d81F17f0295495';

function concatTypedArrays(a, b) {
  var c = new (a.constructor)(a.length + b.length);
  c.set(a, 0);
  c.set(b, a.length);
  return c;
}

async function hash(h160) {
  // for (let i = 0; i <= 256;i++) {
    let blake2 = require('blake2');
    var h = blake2.createHash('blake2b', { digestLength: 32});
    let bytes = concatTypedArrays(new TextEncoder().encode("evm:"), decodeAddress(h160));
    // console.log(bytes);
    h.update(Buffer.from(bytes));
    // console.log(h.digest())
    // const wsProvider = new WsProvider('ws://localhost:9944');
    // const api = await ApiPromise.create({ provider: wsProvider });
    // const keyring = new Keyring({ type: 'sr25519' });
    // console.log(keyring.createFromUri('//Alice').address);
    // const hexPair = keyring.addFromAddress(h.digest());
    // console.log(hexPair.address);
    // let i = 256;
    // console.log(i);
    const result = encodeAddress(h.digest());
    console.log(result);
}

hash(address);