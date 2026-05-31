class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minPriceSoFar = prices[0], output = 0

        for (let i = 0; i < prices.length; i++) {
            minPriceSoFar = Math.min(prices[i], minPriceSoFar)
            const profit = prices[i] - minPriceSoFar
            output = Math.max(output, profit)
        }

        return output
    }
}
