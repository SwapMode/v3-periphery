import {
  deployMigrator,
  deployPositionManager,
  deployQuoterV2,
  deployRouter,
  deployTickLens,
  deployTokenPositionDescriptor,
} from './utils/contract.utils'

const hardhat = require('hardhat')

// ethers.utils.formatBytes32String("ETH")
const nativeCurrencyLabelBytes = '0x4554480000000000000000000000000000000000000000000000000000000000'
const WETH = '0x4200000000000000000000000000000000000006'
const FACTORY = '0xD4f08b675270DFD9FedAeA5E6a879a945BE80d1d'
const PROTOCOL_TOKEN = '0xFDa619b6d20975be80A10332cD39b9a4b0FAa8BB'

async function main() {
  try {
    const signer = (await hardhat.ethers.getSigners())[0]
    // await deployRouter(FACTORY, WETH, PROTOCOL_TOKEN, signer)
    // await deployQuoterV2(FACTORY, WETH, PROTOCOL_TOKEN)
    // await deployTickLens()
    // await deployTokenPositionDescriptor(WETH, nativeCurrencyLabelBytes, NFTDescriptorLibrary)
    // await deployPositionManager(FACTORY, WETH, '0x36d1Ab9DDD6b59e8F2c01F8e3E9D0AdEcA0E864d', PROTOCOL_TOKEN)
    // await deployMigrator(FACTORY, WETH, NonfungiblePositionManager, signer);
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

main()
