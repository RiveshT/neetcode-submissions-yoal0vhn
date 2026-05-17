class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxVolume = 0, l = 0, r = heights.length - 1

        while (l < r) {
            const volume = Math.min(heights[l], heights[r]) * (r - l)
            maxVolume = Math.max(maxVolume, volume)

            if (heights[l] < heights[r]) l++
            else r--
        }

        return maxVolume
    }
}
