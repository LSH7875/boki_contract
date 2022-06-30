const Migrations = artifacts.require("Migrations");

module.exports = function (deployer) {
  // string memory _preRevealURI,
  //   address _withdrawalAddress,
  //   address _vrfCoordinator,
  //   address _linkAddress,
  //   bytes32 _chainlinkKeyHash,
  //   uint256 _chainlinkFee
  deployer.deploy(Migrations);
};
