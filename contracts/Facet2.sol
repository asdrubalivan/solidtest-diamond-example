pragma solidity ^0.8.0;

import {Library} from "./Library.sol";

contract Facet2 {
    function setValFacet2(uint256 _val) public {
        Library.layout().test_val = _val;
    }

    function getValFacet2() public view returns (uint256) {
        return Library.layout().test_val;
    }
}
