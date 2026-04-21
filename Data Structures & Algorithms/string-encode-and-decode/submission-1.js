class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedStr = ""

        for (let str of strs) {
            encodedStr += str.length + "#" + str
        }

        return encodedStr
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const outputStrs = []

        let i = 0

        while(i < str.length) {
            let j = i
            while (str[j] !== "#") j++
            let len = parseInt(str.slice(i, j))
            outputStrs.push(str.slice(j+1, j+1+len))
            i = j + 1 + len
        }

        return outputStrs
    }
}
