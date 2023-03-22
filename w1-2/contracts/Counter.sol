// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Counter {
    uint public counter;
    address public owner;

    constructor(uint total) {
        counter = total;
        owner = msg.sender;
    }

    function count() public {
        require(msg.sender == owner, "invalid call");
        counter = counter + 1;
        console.log(counter);
    }

    function add(uint x) public {
        counter += x;
    }
}
