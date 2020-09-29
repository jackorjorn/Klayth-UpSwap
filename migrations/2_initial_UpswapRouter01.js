var UniswapV2Router= artifacts.require("UpswapV2Router02");

module.exports = function(deployer) {
  deployer.deploy(UniswapV2Router,"0x1DC7d8F2fEdF482D1FdDAC24E878EaAbfbB89707","0x41Dfc9fF023DA962c9652e2b379534c8ee3c2419");
};

