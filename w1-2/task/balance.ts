// import { ethers } from "hardhat";
import { task } from "hardhat/config";

task("balance", "获取用户余额")
.addParam("account", "用户地址")
.setAction(async (taskArgs, hre) => {
  const ethers = hre.ethers
  const balance = await ethers.provider.getBalance(taskArgs.account);
  console.log(ethers.utils.formatEther(balance), "ETH")
})

