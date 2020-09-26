const WKLayToken = artifacts.require("WKLAY");
const UpswapFactory = artifacts.require("UpswapV2Factory");
const UpswapRouter = artifacts.require("UpswapV2Router02");

module.exports = async function (deployer) {
  deployer.deploy(WKLayToken).then(function() {
    return deployer.deploy(UpswapFactory, "0x221100820290D88791F99C444b086DF481A00540").then(function(){
      return deployer.deploy(UpswapRouter, UpswapFactory.address, WKLayToken.address);
    });
  });
};
