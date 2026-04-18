class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const numsMap = new Map()
        let outputArray = []

        for (let i = 0; i < nums.length; i++) {
            if (numsMap.has(nums[i])) {
                numsMap.set(nums[i], numsMap.get(nums[i]) + 1)
            }
            else {
                numsMap.set(nums[i], 1)
            }
        }

        let entriesArray = [...numsMap.entries()]

        entriesArray.sort((a, b) => b[1] - a[1])

        for (let i = 0; i < k; i++) {
            outputArray.push(entriesArray[i][0])
        }

        return outputArray

    }
}
