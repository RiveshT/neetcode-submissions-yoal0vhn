class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const numsMap = new Map()
        const outputArray = []

        for (let i = 0; i < nums.length; i++) {
            const complement = target - nums[i]

            if (numsMap.has(complement)) {
                    outputArray.push(i)
                    outputArray.push(numsMap.get(complement))
            }
            numsMap.set(nums[i], i)
        }

        return outputArray
    }
}
