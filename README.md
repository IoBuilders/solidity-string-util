# solidity-string-util

[![Build Status](https://travis-ci.org/IoBuilders/solidity-string-util.svg?branch=master)](https://travis-ci.org/IoBuilders/solidity-string-util)
[![Coverage Status](https://coveralls.io/repos/github/IoBuilders/solidity-string-util/badge.svg?branch=master)](https://coveralls.io/github/IoBuilders/solidity-string-util?branch=master)
[![npm](https://img.shields.io/npm/v/solidity-string-util.svg)](https://www.npmjs.com/package/solidity-string-util)

A simply Solidity library for common string operations.

## Install

```
npm install solidity-string-util
```

## Usage

To write your custom contracts, import it and attach it to the string type:

```solidity
pragma solidity ^0.5.0;

import 'solidity-string-util/contracts/StringUtil.sol';

contract YourContract {
    using StringUtil for string;

    // your custom code
}
```

> You need an ethereum development framework for the above import statements to work! Check out these guides for [Truffle], [Embark] or [Buidler].

Please see the [Solidity documentation on libraries](https://solidity.readthedocs.io/en/v0.5.13/contracts.html#using-for) for more details on how to work with libraries.

## Available functions

| Function name | Description                                        |
| ------------- | -------------------------------------------------- |
| toHash        | Returns the `keccak256` hash of a string           |
| isEmpty       | Returns true if a string is empty, false otherwise |

## Tests

To run the unit tests execute `npm test`.

## Code coverage

To run the code coverage simply execute `npm run coverage`.

[Truffle]: https://truffleframework.com/docs/truffle/quickstart
[Embark]: https://embark.status.im/docs/quick_start.html
[Buidler]: https://buidler.dev/guides/#getting-started
