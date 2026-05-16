class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const sortedNums = nums.sort((a, b) => a - b)
        const output = []

        for (let i = 0; i < sortedNums.length; i++) {
            if (i > 0 && nums[i] === nums[i-1]) continue
            
            let l = i+1
            let r = sortedNums.length - 1

            while (l < r) {
                if (nums[i] + nums[l] + nums[r] < 0) l++
                else if (nums[i] + nums[l] + nums[r] > 0) r--
                else {
                    output.push([nums[i], nums[l], nums[r]])
                    l++ 
                    r--
                    while (l < r && nums[l] === nums[l-1]) l++
                    while (l < r && nums[r] === nums[r+1]) r--
                }
            }
        }

        return output
    }
}
