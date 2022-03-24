require("@nomiclabs/hardhat-waffle");
require('dotenv').config();
const { ALCHEMY_API_URL, PRIVATE_KEYS } = process.env;
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: {
      chainId: 1337
    },
    kovan: {
      url: " ", //  ALCHEMY_API_URL to replace url
      accounts: []  //`0x$[PRIVATE_KEY]`
    }
  }
};
