async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Interacting with the contract using account:", deployer.address);
  
    // Get the deployed contract instance
    const contractAddress = "your_contract_address_here";  // Replace with the deployed address
    const SimpleStorage = await ethers.getContractFactory("SimpleStorage");
    const simpleStorage = await SimpleStorage.attach(contractAddress);
  
    // Set a number
    const tx1 = await simpleStorage.set(42);
    await tx1.wait();
    console.log("Stored number updated to 42");
  
    // Get the stored number
    const storedNumber = await simpleStorage.get();
    console.log("Stored number is:", storedNumber.toString());
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  