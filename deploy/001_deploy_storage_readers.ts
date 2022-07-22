
import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const { diamond } = hre.deployments;
    const { deployer, diamondAdmin } = await hre.getNamedAccounts();

    await diamond.deploy("DiamondTest", {
        from: deployer,
        owner: diamondAdmin,
        facets: ["Facet1", "Facet2", "Facet3"],
        log: true
    })
};

export default func;