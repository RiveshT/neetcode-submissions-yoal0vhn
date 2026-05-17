class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     * Writing brute force just to assimilate how we will eliminate duplicates in bruet force solution
     */
    threeSum(nums) {
        const tripletSet = new Set()
        const output = []

        for (let i = 0; i < nums.length; i++) {
            for (let j = i+1; j < nums.length; j++) {
                for (let k = j+1; k < nums.length; k++) {
                    if (nums[i] + nums[j] + nums[k] === 0) {
                        let triplet = [nums[i], nums[j], nums[k]]

                        triplet.sort((a, b) => a - b)

                        let sortedTriplet = triplet.join(',')

                        if (!tripletSet.has(sortedTriplet)) {
                            tripletSet.add(sortedTriplet)
                            output.push(triplet)
                        }
                    }
                }
            }
        }

        return output
    }
}
