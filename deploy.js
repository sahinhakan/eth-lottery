const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'sign avocado carpet bus want lyrics dune bacon coil again race inner',
    'https://rinkeby.infura.io/v3/805fbf4cb1bf4238a4440d8125afbb14'
);
const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('Account:', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data: bytecode })
        .send({ from: accounts[0], gas: '1000000' });

    console.log(`Contract deployed to ${result.options.address}`);
};

deploy();