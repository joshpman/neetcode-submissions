class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        if(s.length<=1) return s.length;
        let strSet = new Set<string>();
        let longest : number = 0;
        let l : number = 0;
        let r : number = 1;
        strSet.add(s.charAt(l));
        let curStrLen : number = 0;
        while(r<s.length){
//            console.log(`cur chat is ${s.charAt(r)}`);
            if(!strSet.has(s.charAt(r))){
               curStrLen = r-l+1;
               strSet.add(s.charAt(r));
               longest = Math.max(longest,curStrLen); 
               r++;
            }else{
                while(strSet.has(s.charAt(r))){
                    strSet.delete(s.charAt(l++));
                }
            }

        }
        return longest;
    }
}
