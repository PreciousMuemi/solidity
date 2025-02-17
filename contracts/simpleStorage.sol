//create a contract that stores a number and allows it to be retrieved or updated.

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleStorage {
    uint256 storedNumber;

    // Set a number
    function set(uint256 _number) public {
        storedNumber = _number;
    }

    // Get the stored number
    function get() public view returns (uint256) {
        return storedNumber;
    }
}
