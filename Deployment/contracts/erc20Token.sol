// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {
    constructor(uint initialSuppy) ERC20("Rajat Singh", "RAJ") {
        _mint(msg.sender, initialSuppy);
    }
}
