import { ethers } from "hardhat";

async function main() {
  const total = 1_000_000_000;

  const Token = await ethers.getContractFactory("Counter");
  const token = await Token.deploy(total);

  await token.deployed();

  console.log(
    `Counter deployed to ${token.address}`
  );

  await token.add(10)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
