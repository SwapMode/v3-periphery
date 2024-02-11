import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers'
import { ethers } from 'hardhat'

export async function deployTickLens() {
  const TickLens = await ethers.getContractFactory('TickLens')
  const instance = await TickLens.deploy()
  await instance.deployed()
  console.log('TickLens at: ' + instance.address)

  return instance
}

export async function deployRouter(factory: string, WETH: string, protocolToken: string, signer: SignerWithAddress) {
  const SwapRouter = await ethers.getContractFactory('SwapRouter', signer)
  const router = await SwapRouter.deploy(factory, WETH, protocolToken)
  await router.deployed()
  console.log('SwapRouter at: ' + router.address)

  return router
}

// address _factory,
// address _WETH9,
// address _nonfungiblePositionManager
export async function deployMigrator(
  factory: string,
  WETH: string,
  _nonfungiblePositionManager: string,
  signer: SignerWithAddress
) {
  const V3Migrator = await ethers.getContractFactory('V3Migrator', signer)
  const instance = await V3Migrator.deploy(factory, WETH, _nonfungiblePositionManager)
  await instance.deployed()
  console.log('V3Migrator at: ' + instance.address)

  return instance
}

export async function deployQuoterV2(factory: string, WETH: string, protocolToken: string) {
  const QuoterV2 = await ethers.getContractFactory('QuoterV2')
  const quote = await QuoterV2.deploy(factory, WETH, protocolToken)
  await quote.deployed()
  console.log('QuoterV2 at: ' + quote.address)

  return quote
}

export async function deployTokenPositionDescriptor(
  WETH: string,
  nativeCurrencyLabelBytes: string,
  NFTDescriptor?: string
) {
  // Link the library
  if (!NFTDescriptor) {
    const descriptor = await ethers.getContractFactory('NFTDescriptor')
    const instance = await descriptor.deploy()
    await instance.deployed()
    console.log('NFTDescriptor library delpoyed at: ' + instance.address)

    NFTDescriptor = instance.address
  }

  const Factory = await ethers.getContractFactory('NonfungibleTokenPositionDescriptor', {
    libraries: {
      NFTDescriptor,
    },
  })
  const instance = await Factory.deploy(WETH, nativeCurrencyLabelBytes)
  await instance.deployed()
  console.log('NonfungibleTokenPositionDescriptor deployed at: ' + instance.address)

  return instance
}

export async function deployPositionManager(
  factory: string,
  WETH: string,
  tokenDescriptor: string,
  protocolToken: string
) {
  const Factory = await ethers.getContractFactory('NonfungiblePositionManager')
  const instance = await Factory.deploy(factory, WETH, tokenDescriptor, protocolToken)
  await instance.deployed()
  console.log('NonfungiblePositionManager deployed at: ' + instance.address)

  return instance
}
