const { hre, ethers } = require("hardhat");

async function main() {
  const myToken = await ethers.getContractFactory("MyToken");
  console.log("Deploying MyToken Contract");
  const initialSupply = "1000000000000000000000000";

  const MYToken = await myToken.deploy(initialSupply);
  console.log("deployed contract with an address", await MYToken.getAddress());
}

main().catch((error) => {
  console.log(error);
  process.exitCode = 1;
});

// address - 0x05c36314e1484b3dE5ddFE6a7d7Ac98284ca0F05
