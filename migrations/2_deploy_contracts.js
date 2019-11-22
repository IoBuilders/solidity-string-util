const StringUtil = artifacts.require('MockStringUtil');

module.exports = async function(deployer) {
  await deployer.deploy(StringUtil);
}
