import { ethers } from "hardhat";

async function main() {
    const web3CXITokenAddress = "0x80D9453de8c53e6F1F9e20b1dEcDf7568Ea0910F";
    const web3CXI = await ethers.getContractAt("IERC20", web3CXITokenAddress);

    const saveERC20ContractAddress = "0x13fD2f9302dB768F5fC34459e1687DD5D58Eba24";
    const saveERC20 = await ethers.getContractAt("ISaveERC20", saveERC20ContractAddress);

    // Approve savings contract to spend token
    const approvalAmount = ethers.parseUnits("1000", 18);

    const approveTx = await web3CXI.approve(saveERC20, approvalAmount);
    approveTx.wait();

    const contractBalanceBeforeDeposit = await saveERC20.getContractBalance();
    console.log("Contract balance before :::", contractBalanceBeforeDeposit);

    const depositAmount = ethers.parseUnits("150", 18);
    const depositTx = await saveERC20.deposit(depositAmount);

    console.log(depositTx);

   



    // Withdrawal Interaction

    depositTx.wait();

  const contractBalanceAfterDeposit = await saveERC20.getContractBalance();

  console.log("Contract balance after :::", contractBalanceAfterDeposit);

  // Withdrawal Interaction
  console.log("______________Withdrawing funds_______________");

  const withdrawAmount = ethers.parseUnits("100", 18);
  const withdrawTx = await saveERC20.withdraw(withdrawAmount);

  console.log(withdrawTx);

  withdrawTx.wait();
  console.log(
    "Contract balance after withdrawing:::",
    contractBalanceAfterDeposit
  );
    
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});


