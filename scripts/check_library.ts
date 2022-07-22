// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";

async function main() {
    // Hardhat always runs the compile task when running scripts with its command
    // line interface.
    //
    // If this script is run directly using `node` you may want to call compile
    // manually to make sure everything is compiled
    // await hre.run('compile');

    // We get the contract to deploy
    // const greeter_contract: ContractWithLibrary = await ethers.getContract("ContractWithLibrary");
    // console.log(await greeter_contract.functions.setValue(100))
    // console.log(await greeter_contract.functions.getValue())

    // const reader_contract: ReaderLibrary = await ethers.getContract("ReaderLibrary");
    // console.log(await reader_contract.functions.getValue())
    const diamond = await ethers.getContract("DiamondTest");
    console.log("Facet 1", await diamond.functions.getValFacet1())
    // console.log("Facet 1, set", await diamond.functions.setValFacet1(20))
    console.log("Facet 2", await diamond.functions.getValFacet2())
    // console.log("Facet 2, set", await diamond.functions.setValFacet2(50))
    console.log("Facet 1", await diamond.functions.getValFacet1())

    console.log("Facet 3", await diamond.functions.getValFacet3())

    console.log("Upgraded", await diamond.functions.upgradedDiamond())
    console.log("Upgraded", await diamond.functions.getValLibrary2Facet3())


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
