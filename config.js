const { ether, BN } = require("@openzeppelin/test-helpers");

let config = {};

config.timer = {
  startTime: 1598543940,
  hardCapTimer: 172800,
  softCap: ether("500"),
};

config.redeemer = {
  redeemBP: 200,
  redeemInterval: 3600,
  bonusRangeStart: [
    ether("0"),
    ether("20"),
    ether("60"),
    ether("140"),
    ether("300"),
    ether("620"),
    ether("1260"),
    ether("2540"),
    ether("3322")
  ],
  bonusRangeBP: [
    5000,
    4000,
    3000,
    2000,
    1000,
    500,
    250,
    0
  ],
};

config.presale = {
  maxBuyPerAddress: ether("25"),
  maxBuyWithoutWhitelisting: ether("25"),
  uniswapEthBP: 7500,
  lidEthBP: 500,
  referralBP: 250,
  hardcap: ether("3322"),
  token: "0x7fe380fed13742f14b5649ec73f79c2e404f62b7",
  uniswapRouter: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
  lidFund: "0xb63c4F8eCBd1ab926Ed9Cb90c936dffC0eb02cE2",
  uniswapTokenBP: 2500,
  presaleTokenBP: 3800,
  tokenDistributionBP: {
    project: 3000,
    team: 700,
  },
};

module.exports = config;
