class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxVolume = 0
        let l = 0, r = heights.length - 1

        while (l < r) {
            let currentVolume = 1
            if (heights[l] < heights[r]) {
                currentVolume = heights[l] * (r - l)
                maxVolume = Math.max(currentVolume, maxVolume)
                l++
            }
            else if (heights[l] > heights[r]) {
                currentVolume = heights[r] * (r - l)
                maxVolume = Math.max(currentVolume, maxVolume)
                r--
            }
            else {
                currentVolume = heights[r] * (r - l)
                maxVolume = Math.max(currentVolume, maxVolume)
                l++
                r--
            }
        }

        return maxVolume
    }
}
