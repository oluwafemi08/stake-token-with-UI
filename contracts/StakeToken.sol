// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./Token.sol";

contract StakeToken {

string public name = "StakeToken";
address private owner;
Token public token;

address[] stakeHolders;


mapping(address => uint256) stakeBalance;
mapping(address => bool) hasStaked;

constructor(address _token) public {
token = _token;
owner = msg.sender;

}

}