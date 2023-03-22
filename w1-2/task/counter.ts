// import { ethers } from "hardhat";
import { task } from "hardhat/config";

task("counter", "counter加1").setAction(async (taskArgs, hre) => {
  // const Counter = await ethers.getContractFactory("Counter")
  // const counter = Counter.attach("0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512")
  // console.log(counter.count())
  console.log(hre)
})