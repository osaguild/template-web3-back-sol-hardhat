# template-web3-back-sol-hardhat

template repository for web3 back-end using solidity and hardhat

# stacks

| stack                | category     | description                          |
| -------------------- | ------------ | ------------------------------------ |
| solidity             | dev          | language of smart contract           |
| hardhat              | dev          | smart contract framework             |
| ethers               | dev          | javascript library for dapps         |
| typechain            | build        | provide abi to front-end test        |
| waffle               | test         | testing framework for smart contract |
| mocha                | test         | testing framework for bdd / tdd      |
| chai                 | test         | assertion library                    |
| hardhat-gas-reporter | test         | ethereum gas reporter                |
| solidity-coverage    | test         | coverage tool                        |
| solhint              | static check | linter for solidity                  |
| eslint               | static check | linter for javascript / typescript   |
| prettier             | static check | fix style automatically              |
| husky                | static check | prevent to commit non checked code   |

# how to use this template?

- update `xxx` on package.json
- check your test targets
  - template has two jest config which are `jest.jsdom.config.js` and `jest.node.config.js`. if you need both config you don't need to fix anything. but you need only one, you should delete another config and fix `test` script command on package.json.
    - `jest.jsdom.config.js` : for react component
    - `jest.node.config.js` : for typescript library which run on node module
- delete sample code on `./src`
  - `./src/components/Button` : sample react component and test code.
  - `./src/lib/script` : sample typescript library and test code.

# release to npm

If you release to npm, you should run below commands

```yarn
yarn rollup
yarn login
yarn publish
```
