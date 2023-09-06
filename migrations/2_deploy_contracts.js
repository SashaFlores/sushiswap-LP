const SushiToken = artifacts.require('SushiToken.sol')
const MasterChef = artifacts.require('MasterChef.sol')

module.exports = async function(deployer) {
  // Deploy Sushi Token
  await deployer.deploy(SushiToken)
  const sushiToken = await SushiToken.deployed()

  // Deploy Masterchef Contract
  await deployer.deploy(
    MasterChef,
    sushiToken.address,
    // Your address where you get sushi tokens - should be a multisig
    process.env.DEV_ADDRESS, 
    // Number of tokens rewarded per block, e.g., 100
    web3.utils.toWei(process.env.TOKENS_PER_BLOCK), 
    // Block number when token mining starts
    process.env.START_BLOCK, 
    // Block when bonus ends
    process.env.BONUS_END_BLOCK 
  )

  // Make Masterchef contract token owner
  const masterChef = await MasterChef.deployed()
  await sushiToken.transferOwnership(masterChef.address)

  // Add Liquidity pool for rewards
  await masterChef.add(
    process.env.ALLOCATION_POINT,
    process.env.LP_TOKEN_ADDRESS,
    false
  )
  
  
  console.log(`\nPaste this ${sushiToken.address} into contractAddresses/sushi`)
  console.log(`\nPaste this ${masterChef.address} into contractAddresses/masterChef`)

  // Add more liquidity pools here upon deployment, or add them later manually
}
