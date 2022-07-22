pragma solidity ^0.8.0;

import {Library} from "./Library.sol";

contract Facet1 {
    function setValFacet1(uint256 _val) public {
        Library.layout().test_val = _val;
    }

    function getValFacet1() public view returns (uint256) {
        return Library.layout().test_val;
    }
}
