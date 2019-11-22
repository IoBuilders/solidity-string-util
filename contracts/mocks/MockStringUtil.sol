pragma solidity ^0.5.0;

import "../StringUtil.sol";


contract MockStringUtil {
    using StringUtil for string;

    function toHash(string calldata _s) external pure returns (bytes32) {
        return _s.toHash();
    }

    function isEmpty(string calldata _s) external pure returns (bool) {
        return _s.isEmpty();
    }
}
