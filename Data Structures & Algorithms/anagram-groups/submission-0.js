class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    sortString(strs) {
        return strs.split('').sort().join('')
    }

    groupAnagrams(strs) {
        const strMap = new Map()

        for (let i = 0; i < strs.length; i++) {
            if (strMap.has(this.sortString(strs[i]))) {
                strMap.get(this.sortString(strs[i])).push(strs[i])
            }
            else {
                strMap.set(this.sortString(strs[i]), [strs[i]])
            }
        }

        return [...strMap.values()]
    }
}
