# SushiSwap Liquidity Pool

This is a client project to participate in Liquidity pool on [SushiSwap](https://www.sushi.com/) and leverage exposure by staking Sushi token.

There is a simulating test of the project performed on [PancakeSwap](https://pancakeswap.finance/) since it's available on Binance Testnet at [PancakeSwap Factory](https://testnet.bscscan.com/address/0x6725F303b657a9451d8BA641348b6761A6CC7a17#code) and [Pancake Router](https://testnet.bscscan.com/address/0xd99d1c33f9fc3444f8101754abc46c52416550d1#code) before going live on mainnet.

### 🔧 Preconfiguration
1. Install dependencies ```npm i```
2. Install truffle globally ```npm i -g truffle```
3. Compile contracts ```truffle compile```


### 📃 Instructions to deploy on BSC
1. Get Test BNB [link](https://testnet.binance.org/faucet-smart)
2. Create&Add liquidity pool on PancakeSwap
</br>```truffle exec scripts/create_lp.js --network bsc_testnet```
</br>```...and then follow log instructions```
3. Migrate Contracts to BSC
</br>```truffle migrate --reset --network bsc_testnet```
</br>```...and then follow log instructions```

### 📃 Instructions to deploy on ETH
1. Get LP Token address [instructions](https://www.reddit.com/r/CryptoCurrency/comments/jm1wah/how_to_provide_liquidity_on_uniswap_and_stake_lp/)


2. Add it to .env `LP_TOKEN_ADDRESS`

3. Check the latest block on etherscan.

4. Add to that number ~1000 blocks and put this number in .env `START_BLOCK`.

5. In .env `END_BLOCK` add higher number than `START_BLOCK`.

7. Migrate contracts to ETH
</br>```truffle migrate --reset --network ethereum```
</br>```...and then follow log instructions```


