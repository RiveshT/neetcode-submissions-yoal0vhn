class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    sortString(str) {
        return str.split('').sort().join()
    }

    groupAnagrams(strs) {
        const strMap = new Map()

        for(let i = 0; i < strs.length; i++) {
            const sortedString = this.sortString(strs[i])

            if (strMap.has(sortedString)) {
                strMap.get(sortedString).push(strs[i])
            }
            else {
                strMap.set(sortedString, [strs[i]])
            }
        }

        return [...strMap.values()]
    }
}
