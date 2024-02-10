// SPDX-License-Identifier: MIT
pragma solidity >=0.7.5;

interface IFeeSharing {
    function assign(uint256 _tokenId) external returns (uint256);
}
