require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid gloom tape slab chest note shift pupil gloom enter blue talk'; 
let testAccounts = [
"0x19ec77e8729b9bbfa9397e72250a7863b32a71a3138b91c103b5015f366c3db8",
"0x6ce3a8ff98437a13155bd515e1a19fb69f986296fdf07f06062b3b0bfddb8ec8",
"0x8bcb3813982df62242c73ae99657f40db8fcafd362ff503dbab870c283a62929",
"0x23e0dcd049c31d84a877e1393668938c52a83aea5078c324838334dd493830d5",
"0x1fd5fc6ca811d4439d8ecf22cf59780b010f937b5b4c11fdd5fae20867d93ab3",
"0xe949d7dc1e8e2042e6d1e6f1b9e24116301be76037243d17798317448163ba00",
"0xb1e82c61bfaad1320cc8da9a9737f81bf10e4dfd28b4e43a0e92e3ecdf72def0",
"0xdc7a46be3cd687d52ad024efcaa3c0593c96d9a22300f6cdd4a150bcc0d16df0",
"0x9ac41602cb7cfa2c99564f9afe8cb3aa2b07e5bc5b750e184b08116098e7ad9d",
"0x192aa938f77996d5efa274e1ae0a64ac30c82faa606c9f1da33fd54552d76400"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
