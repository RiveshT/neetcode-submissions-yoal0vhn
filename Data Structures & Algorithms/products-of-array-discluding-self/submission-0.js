class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    // Brute force
    productExceptSelf(nums) {
        const outputArray = []
        for (let i = 0; i < nums.length; i++) {
            outputArray[i] = 1
            for (let j = 0; j < nums.length; j++) {
                if (i !== j) {
                    outputArray[i] = outputArray[i] * nums[j]
                }
            }
        }

        return outputArray
    }
}
