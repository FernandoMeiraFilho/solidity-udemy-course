const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
const { interface, bytecode } = require('../compile');
const INITIAL_MESSAGE = 'Hello World!';

let accounts;
let inbox;

beforeEach( async () => {
    // Get a list of all the accounts
    accounts = await web3.eth.getAccounts();

    // Use one of these accounts to deploy
    // the contract
    inbox = await new web3.eth.Contract(JSON.parse(interface))
      .deploy({ data: bytecode,
                arguments: [INITIAL_MESSAGE] })
      .send({ from: accounts[0],
              gas: '1000000' });

});

describe('Inbox', ()=> {
    it('deploys a contract', () =>{
        assert.ok(inbox.options.address);
    });
    
    it('has default message', async () =>{
        const message = await inbox.methods.message().call();
        assert.equal(message, INITIAL_MESSAGE);
    });

    it('can change the message', async () => {
        const newMessage = 'This is new!';
        await inbox.methods.setMessage(newMessage).send({ from: accounts[0]});
        const message = await inbox.methods.message().call();
        assert.equal(message, newMessage);
    });
});

