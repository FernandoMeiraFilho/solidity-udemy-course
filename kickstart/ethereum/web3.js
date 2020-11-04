import Web3 from "web3";

let web3;

if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
  // we are on the browser and metamask is injected
  console.log(typeof window !== "undefined");
  console.log(typeof window.web3 !== "undefined");
  web3 = new Web3(window.web3.currentProvider);
  console.log("we have provider! ");
} else {
  //We are on the server/nodeJS * OR * the user it's not using metamask
  const provider = new Web3.providers.HttpProvider(
    "https://rinkeby.infura.io/v3/7db44780f6f343aa85ba2c8c194fb029"
  );
  web3 = new Web3(provider);
  console.log("we DONT have provider! ");
}

export default web3;
