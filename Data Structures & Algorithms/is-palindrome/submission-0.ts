class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let preparedStr : string = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
        let leftPtr : number = 0;
        let rightPtr : number = preparedStr.length-1;
//        console.log(`lptr has ${preparedStr.charAt(leftPtr)} and rightPtr has ${preparedStr.charAt(rightPtr)}`);
        while(leftPtr<=rightPtr)
            if(preparedStr.charAt(leftPtr++)!==preparedStr.charAt(rightPtr--)) return false;
        return true;
    }
}
