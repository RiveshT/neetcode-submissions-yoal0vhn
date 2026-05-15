class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodeStr = ""

        for (const str of strs) {
            encodeStr += str.length + "#" + str
        }

        return encodeStr
    }

    /**
     * @param {string} str
     * @returns {string[]}
     * 5#Hello5#World
     */ 
    decode(str) {
        let i = 0
        const output = []

        while (i < str.length) {
            let j = i
            while (str[j] !== "#") j++
            let len = parseInt(str.slice(i, j))
            output.push(str.slice(j+1, j+1+len))
            i = j+1+len
        }

        return output
    }
}
