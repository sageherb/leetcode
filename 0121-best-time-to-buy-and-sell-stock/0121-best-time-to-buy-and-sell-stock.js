/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let min = prices[0];
  let max = 0;
  let diff = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
      max = 0;
    } else {
      max = max < prices[i] ? prices[i] : max;
      diff = diff < max - min ? max - min : diff;
    }
  }

  return diff;
};