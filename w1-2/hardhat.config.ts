import { HardhatUserConfig, task } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

import "./task/balance"
import "dotenv/config";
const pk = process.env.PRIVATE_KEY!
const rpc = process.env.INFURA_RPC!


const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.18",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    }
  },
  networks: {
    local: {
      url: "http://127.0.0.1:8545",
      chainId: 31337,
      gas: 1200000
    },
    goerli: {
      url: rpc,
      chainId: 5,
      accounts:[
        pk
      ]
    }
  },
  etherscan: {
    apiKey: process.env.API_KEY!
  }
};

export default config;
