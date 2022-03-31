
const HDwalletProvider = require("@truffle/hdwallet-provider");

const mnemonic = "";



















module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {

    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    
    ropsten : {
      provider : function () {
        return new HDwalletProvider(mnemonic,"https://ropsten.infura.io/v3/34ffcb4ac96340bd95e318e9081929a6")
      },
          network_id : 3,
          gasPrice : 30000000000
		           //20000000000, 20gwei
      }

  }
  };