class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    // Most optimized approach using O(1) space with two pointers

    trap(height) {
        let l = 0, r = height.length - 1, output = 0
        let leftMax = height[l], rightMax = height[r]

        while (l < r) {
            if (leftMax < rightMax) {
                l++
                leftMax = Math.max(leftMax, height[l])
                output += leftMax - height[l]
            }
            else {
                r--
                rightMax = Math.max(rightMax, height[r])
                output += rightMax - height[r]
            }
        }

        return output
    }
}
