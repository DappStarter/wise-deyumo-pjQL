require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz entire sun food edge royal stick pupil coral light army gas'; 
let testAccounts = [
"0x997dad93b704a2eace4e358b8c0e9836b9cbb0147366834521ae80998f953aed",
"0x619d55f456c6af61d49677dd9974631c375c079a9b659a9918621e389b344979",
"0xc3e8348a0d061ea585bc3cf025fc8f3eaf7bcefec3f82d7abcad2486315ca51c",
"0xddabd2a5ec311917d2ab6d6c333b5615b92685b577b251ab531cc4ac32f24aa7",
"0xfd42e37a319e753ac7265f06af45a5630264b4571784c3d59876b10c77215b4c",
"0xc574ddfd16d2ca3195a94bb42f90dfa80537c9fad8136a875d9a9573b091c7bb",
"0x2c297a21bedbdb37022f86667cdd92ef7c6b78d5326029fb47a5df3debd64a82",
"0x285f6ed7280ed0409d7b6421b5f5d96166d82b374ae3150067726cca420cb496",
"0x15e7cd2189b5f033ba4b0f5e82b5d4b4ff9cf8c1b8dbdf4d9fae4c24694fdc61",
"0xd1e7eb7b8303d7e794084493c5f4d88afd6404ec288da310ece1681e1acaed4f"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

