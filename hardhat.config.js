require("@nomicfoundation/hardhat-toolbox");
require('@nomiclabs/hardhat-waffle');
require('@nomiclabs/hardhat-ethers');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {

  networks: {
    sepolia: {
      url: "https://sepolia.infura.io/v3/uPFsLmeJJMraQLuMogEFcZmCnTHU5Pc9",
      accounts: [`0x${}0x37012Cd693aEfBFcad470F768fB337e8A6f48181`],
    },
  },
  solidity: "0.8.28",
};
