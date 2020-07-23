const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
    'attitude wheel party mammal tip alley idle neck truly reason gloom attitude',
    'https://rinkeby.infura.io/v3/7db44780f6f343aa85ba2c8c194fb029'
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy a free account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
        .deploy({
            data: '0x' + compiledFactory.bytecode
        }) // add 0x bytecode
        .send({
            from: accounts[0]
        }); // remove 'gas'

    console.log('Contract deployed to', result.options.address)

};

deploy();