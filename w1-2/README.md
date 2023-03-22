# w1-2作业

goerli网络

部署
合约: 0x1B7d15608A70ae91343145891e591A730719B861
HASH: 0x5b504aaeb0d1e9344bb2b738cb0a83dde366ba22da9749adb2191c1a3520506e

校验:
```
npx hardhat verify 0x1B7d15608A70ae91343145891e591A730719B861 "1000000000" --network goerli 

Nothing to compile
No need to generate any newer typings.
Successfully submitted source code for contract
contracts/Counter.sol:Counter at 0x1B7d15608A70ae91343145891e591A730719B861
for verification on the block explorer. Waiting for verification result...

Successfully verified contract Counter on Etherscan.
https://goerli.etherscan.io/address/0x1B7d15608A70ae91343145891e591A730719B861#code
```
RPC地址
https://chainlist.org/chain/5

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.ts
```
