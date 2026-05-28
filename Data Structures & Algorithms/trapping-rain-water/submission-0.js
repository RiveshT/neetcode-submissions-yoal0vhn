class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        const maxLeft = []

        for (let j = 0; j < height.length; j++) {
            if (j === 0) {
                maxLeft[j] = height[j]
            }
            else {
                maxLeft[j] = Math.max(maxLeft[j-1], height[j])
            }
        }

        const maxRight = []

        for (let k = height.length-1; k >= 0; k--) {
            if (k === height.length-1) {
                maxRight[k] = height[k]
            }
            else {
                maxRight[k] = Math.max(maxRight[k+1], height[k])
            }
        }

        let output = 0

        for (let i = 0; i < height.length; i++) {
            let waterLevel = Math.min(maxLeft[i], maxRight[i]) - height[i]
            output += waterLevel
        }

        return output
    }
}
