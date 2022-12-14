import '@typechain/hardhat'
import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-etherscan'
import '@nomiclabs/hardhat-waffle'
import '@nomiclabs/hardhat-solhint'
import 'solidity-coverage'
import 'hardhat-gas-reporter'
import * as dotenv from 'dotenv'

const PATH_TO_HARDHAT_ENV = `${__dirname}/.env`
dotenv.config({ path: PATH_TO_HARDHAT_ENV })

const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY
const PRIVATE_KEY = process.env.PRIVATE_KEY
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY
const COIN_MARKET_CAP_API_KEY = process.env.COIN_MARKET_CAP_API_KEY

module.exports = {
  solidity: '0.8.9',
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`${PRIVATE_KEY}`],
    },
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`${PRIVATE_KEY}`],
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  gasReporter: {
    enabled: true,
    currency: 'USD',
    coinmarketcap: COIN_MARKET_CAP_API_KEY,
    token: 'ETH',
  },
}
