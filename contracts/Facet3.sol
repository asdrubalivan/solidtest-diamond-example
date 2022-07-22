pragma solidity ^0.8.0;

import {Library, Library2} from "./Library.sol";

contract Facet3 {
    function getValFacet3() public view returns (uint256) {
        return Library.layout().test_val;
    }

    function getValLibrary2Facet3() public view returns (uint256) {
        return Library2.layout().test_val;
    }

    function upgradedDiamond() public pure returns (string memory) {
        return "Upgraded";
    }
}
