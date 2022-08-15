require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  paths: {
    artifacts: "./backend/artifacts",
    sources: "./backend/contracts",
    cache: "./backend/cache",
    tests: "./backend/test"
  },
  defaultNetwork: "ganache",
  networks: {
    ganache: {
      url: "http://127.0.0.1:7545",
      // accounts: [privateKey1, privateKey2, ...]
    }
  },
};
