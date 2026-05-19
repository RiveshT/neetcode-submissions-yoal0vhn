class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    //Most optimised Solution with TC = O(n) and SC = O(1)
    isAlphaNumeric(ch) {
        if ((ch >= "a" && ch <= "z") ||
            (ch >= "A" && ch <= "Z") ||
            (ch >= "0" && ch <= "9")
        ) {
            return true
        }

        return false
    }

    isPalindrome(s) {
        let l = 0
        let r = s.length - 1

        while (l < r) {
            while (l < r && !this.isAlphaNumeric(s[l])) l++
            while (l < r && !this.isAlphaNumeric(s[r])) r--
            if (s[l].toLowerCase() !== s[r].toLowerCase()) return false
            l++
            r--
        }

        return true
    }
}
