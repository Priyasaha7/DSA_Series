// Best Time to Buy and Sell Stock (Single Transaction)

// Given an array prices where prices[i] is the stock price on day i:

// Choose one day to buy
// Choose a later day to sell
// Return the maximum profit possible
// If no profit possible → return 0

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let min = prices[0];
  let maxProfit = 0;

  for (i = 1; i < prices.length; i++) {
    if (prices[i] - min > maxProfit) {
      maxProfit = prices[i] - min;
    }

    if (prices[i] < min) {
      min = prices[i];
    }
  }
  return maxProfit;
};
