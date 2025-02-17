async function main() {
    // Get the ContractFactory and Signers here
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
  
    // Compile and deploy the contract
    const SimpleStorage = await ethers.getContractFactory("SimpleStorage");
    const simpleStorage = await SimpleStorage.deploy();
  
    console.log("SimpleStorage contract deployed to:", simpleStorage.address);
  }
  
  // Run the main function
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  