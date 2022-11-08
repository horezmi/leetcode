/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * @param {number[]} prices
 * @return {number}
 */
const bestTimeToBuyAndSellStock = function (prices) {
  let buyDay = 0;
  let sellDay = 1;
  let profitMax = 0;

  while (sellDay < prices.length) {
    if (prices[sellDay] > prices[buyDay]) {
      profitMax =
        prices[sellDay] - prices[buyDay] > profitMax
          ? prices[sellDay] - prices[buyDay]
          : profitMax;
    } else {
      buyDay = sellDay;
    }
    sellDay++;
  }

  return profitMax;
};
