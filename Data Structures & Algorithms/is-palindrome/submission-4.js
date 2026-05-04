class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const cleanS = s.toLowerCase().replace(/[^a-z0-9]/g, "");
        const cleanSLength = cleanS.length;

        for (let i = 0; i < cleanSLength / 2; i++) {
            if (cleanS[i] !== cleanS[cleanSLength - (i + 1)]) return false;
        }

        return true;
    }
}
