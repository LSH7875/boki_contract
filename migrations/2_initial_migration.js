const Migrations = artifacts.require("Boki");
const { BigNumber } = require("@ethersproject/bignumber");

module.exports = function (deployer) {
  // string memory _preRevealURI,
  //   address _withdrawalAddress,
  //   address _vrfCoordinator,
  //   address _linkAddress,
  //   bytes32 _chainlinkKeyHash,
  //   uint256 _chainlinkFee

  const _preRevealURI=`${process.env.PRE_REVEALED_URI}`;
  const _withdrawalAddress = "0xEA23Ad39C1502B5fa78F84FABCCA68e1aB7363a2"; //team_account1
  const _vrfCoordinator = "0xb3dCcb4Cf7a26f6cf6B120Cf5A73875B7BBc655B";
  const _linkAddress = "0x01BE23585060835E02B77ef475b0Cc51aA1e0709";
  const _chainlinkKeyHash = "0x2ed0feb3e7fd2022120aa84fab1945545a9f2ffc9076fd6156fa96eaff4c1311";
  const _chainlinkFee = BigNumber.from(String(10 ** 17));
  deployer.deploy(
    Migrations,
    _preRevealURI, 
    _withdrawalAddress,
    _vrfCoordinator, 
    _linkAddress, 
    _chainlinkKeyHash, 
    _chainlinkFee );
};
