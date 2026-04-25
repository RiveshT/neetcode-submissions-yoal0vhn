class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const leftArr = []
        const rightArr = []
        const output = []
        let leftNum = 1
        let rightNum = 1

        for (let i = 0; i < nums.length; i++) {
            if (i === 0) {
                leftArr[i] = 1
            }
            else {
               leftArr[i] = nums[i-1] * leftNum 
               leftNum = leftArr[i] 
            }
        }

        for (let i = nums.length - 1; i >= 0; i--) {
            if (i === nums.length - 1) {
                rightArr[nums.length - 1] = 1
            }
            else {
                rightArr[i] = nums[i+1] * rightNum
                rightNum = rightArr[i]
            }
        }

        for (let i = 0; i < nums.length; i++) {
            output[i] =  leftArr[i] * rightArr[i]
        }

        return output
    }
}
