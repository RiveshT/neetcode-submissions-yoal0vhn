class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const cleanS = s.toLowerCase().replace(/[^a-z0-9]/g, "")
        const sLength = cleanS.length

        console.log(cleanS)

        for (let i = 0; i < sLength/2; i++) {
            if (sLength % 2 === 0) {
                if (cleanS[i] === cleanS[sLength - (i + 1)]) {
                    continue
                }
                else {
                    return false
                }
            } 
            else {
                if (cleanS[i] === cleanS[sLength - (i + 1)]) {
                    continue
                }
                else {
                    return false
                }
            }

        }

        return true
    }
}
