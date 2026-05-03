class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) return 0

        const numsSet = new Set(nums)
        let longest = 1

        for (let num of numsSet) {
            if (!numsSet.has(num - 1)) {
                let count = 1
                let start = num

                while (numsSet.has(start + 1)) {
                    start += 1
                    count += 1
                }

                longest = Math.max(longest, count)
            }
        }

        return longest
    }
}
