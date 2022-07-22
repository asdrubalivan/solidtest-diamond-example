pragma solidity ^0.8.0;

library Library {
    struct Layout {
        uint256 test_val;
    }

    bytes32 internal constant STORAGE_SLOT = keccak256("asdrubalivan.Library");

    function layout() internal pure returns (Layout storage l) {
        bytes32 slot = STORAGE_SLOT;
        assembly {
            l.slot := slot
        }
    }
}

library Library2 {
    struct Layout {
        uint256 test_val;
    }

    bytes32 internal constant STORAGE_SLOT = keccak256("asdrubalivan.Library2");

    function layout() internal pure returns (Layout storage l) {
        bytes32 slot = STORAGE_SLOT;
        assembly {
            l.slot := slot
        }
    }
}
