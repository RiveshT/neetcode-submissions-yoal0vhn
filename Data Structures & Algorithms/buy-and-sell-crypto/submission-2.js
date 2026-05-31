class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    // Two pointers (Sliding window approach)

    maxProfit(prices) {
        let l = 0, r = 1, maxProfit = 0

        while (r < prices.length) {
            if (prices[l] < prices[r]) {
                const profit = prices[r] - prices[l]
                maxProfit = Math.max(profit, maxProfit)
            }
            else {
                l = r
            }
            
            r++
        }

        return maxProfit
    }
}
