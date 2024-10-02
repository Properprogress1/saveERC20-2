import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const tokenAddress = "0x80D9453de8c53e6F1F9e20b1dEcDf7568Ea0910F";

const SaveERC20Module = buildModule("SaveERC20Module", (m) => {

const save = m.contract("SaveERC20", [tokenAddress]);

    return { save };
});

export default SaveERC20Module;

// Deployed SaveERC20: 0xD410219f5C87247d3F109695275A70Da7805f1b1

// contract: 0x13fD2f9302dB768F5fC34459e1687DD5D58Eba24