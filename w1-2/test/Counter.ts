import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("部署合约", function () {
  async function deployOneYearLockFixture() {
    const total = 1_000_000_000;

    const [owner, otherAccount] = await ethers.getSigners();

    const Token = await ethers.getContractFactory("Counter");
    const token = await Token.deploy(total);

    return { token, owner, otherAccount, total };
  }
  before(async function() {
    await function() {
      console.log("before init")
    }
  })
  it("所有者调用count()", async function () {
    const { token, owner, total } = await loadFixture(deployOneYearLockFixture);
    let tx = await token.count()
    // console.log(tx) // 交易的信息
    
    expect(await token.counter()).to.equal(total+1);
  });

  it("其他地址调用counter", async function () {
    const { token, owner, otherAccount,total } = await loadFixture(deployOneYearLockFixture);
    let result = token.connect(otherAccount).count(); // 不用等待其完成
    await expect(result).to.be.revertedWith("invalid call");
    // await expect(token.connect(otherAccount).count()).to.be.revertedWith("invalid call");
    expect(await token.counter()).to.equal(total);
  });
});
