var Web3 = require('web3');
const INFURA_PROVIDER_URL =
  'kovan.infura.io/v3/ebe4d04169c4443ebe87905060aa16eb';

//window is global only inside the browser
let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  web3 = new Web3(window.web3.currentProvider);
  console.log('MetaMask is running.');
} else {
  // If loaded not in browser, or if metakamask in not running...
  const provider = new Web3.providers.HttpProvider(INFURA_PROVIDER_URL);
  web3 = new Web3(provider);
  console.log('metamask is not running');
}
//need error handling since web3 would be undefined
export default web3;
