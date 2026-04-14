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
            const difference = target - nums[i]

            if(numsMap.has(difference)) {
                outputArray.push(numsMap.get(difference))
                outputArray.push(i)
            }

            numsMap.set(nums[i], i)
        }

        return outputArray
    }
}
