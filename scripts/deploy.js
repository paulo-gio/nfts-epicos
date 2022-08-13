const main = async () => {
    const nftContractFactory = await hre.ethers.getContractFactory('MeuNFT');
    const nftContract = await nftContractFactory.deploy();
    await nftContract.deployed();
    console.log("Contrato implantado para:", nftContract.address);
  
    let txn = await nftContract.makeAnEpicNFT()
    await txn.wait()
    console.log("Cunhado NFT #1")
  
    txn = await nftContract.makeAnEpicNFT()
    await txn.wait()
    console.log("Cunhado NFT #2")
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();