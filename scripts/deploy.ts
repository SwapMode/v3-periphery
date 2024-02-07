import {
  deployMigrator,
  deployPositionManager,
  deployQuoter,
  deployQuoterV2,
  deployRouter,
  deployTickLens,
  deployTokenPositionDescriptor,
} from './utils/contract.utils'

const hardhat = require('hardhat')

// ethers.utils.formatBytes32String("ETH")
const nativeCurrencyLabelBytes = '0x4554480000000000000000000000000000000000000000000000000000000000'
const WETH = '0x4200000000000000000000000000000000000006'
const FACTORY = '0x7274E56489Af755981db08089a41D213E7cad562'

async function main() {
  try {
    const signer = (await hardhat.ethers.getSigners())[0]
    // await deployRouter(FACTORY, WETH, signer)
    // await deployQuoterV2(FACTORY, WETH)
    // await deployTickLens()
    // await deployTokenPositionDescriptor(WETH, nativeCurrencyLabelBytes, NFTDescriptorLibrary)
    await deployPositionManager(FACTORY, WETH, '0x36d1Ab9DDD6b59e8F2c01F8e3E9D0AdEcA0E864d')
    // await deployMigrator(FACTORY, WETH, NonfungiblePositionManager, signer);
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

main()
