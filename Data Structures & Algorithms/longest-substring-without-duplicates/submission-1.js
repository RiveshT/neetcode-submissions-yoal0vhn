class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let l = 0, r = 0, maxSize = 0
        const sSet = new Set()

        while (r < s.length) {
            if (!sSet.has(s[r])) {
                sSet.add(s[r])
                r++
            }
            else {
                sSet.delete(s[l])
                l++
            }

            maxSize = Math.max(maxSize, sSet.size)
        }

        return maxSize
    }
}
