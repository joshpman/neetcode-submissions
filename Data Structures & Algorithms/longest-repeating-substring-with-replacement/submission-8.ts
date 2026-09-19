class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        let maxF : number = 0;
        let countSet = new Map<string, number>();
        let l : number = 0;
        let maxLen : number = 0;
        for(let r : number = 0; r<s.length;r++){
          countSet.set(s[r], (countSet.get(s[r]) || 0) + 1);
          maxF = Math.max(countSet.get(s[r]), maxF);
          while(r-l+1-maxF>k){
            countSet.set(s[l], countSet.get(s[l]) -1);
            l++;
          }
          maxLen = Math.max(r-l+1, maxLen);
        }
        return maxLen;
    }
}

    /*

        if(s.length<=k) return s.length;
        let sMap = new Map<string, number>();
        let l : number = 0;
        let r : number = 1;
        let uniquesRemaining : number = k;
        sMap.set(s.charAt(l), 1);
        sMap.set(s.charAt(r), 1);
        let mostFreqSym : string = s.charAt(l);
        let maxLen : number = 0;
        while(r<s.length){
          //console.log(`l ${l} r ${r} uniques ${uniquesRemaining} most freq ${mostFreqSym} curSym ${s.charAt(r)}: ${s}`);
            if(s.charAt(l)===s.charAt(r) || s.charAt(r)===mostFreqSym){
                if(sMap.has(s.charAt(r))){
                    let oldFreq : number = sMap.get(s.charAt(r));
                    sMap.set(s.charAt(r), oldFreq+1); 
                    if(oldFreq+1>sMap.get(mostFreqSym)){
                        mostFreqSym = s.charAt(r);
                    }
                }else{
                    sMap.set(s.charAt(r), 1);
                }
            maxLen = (r-l)+1>maxLen?(r-l)+1:maxLen;
//            console.log(`p1 max len is ${maxLen}`);
                r++;
            }else{
                if(uniquesRemaining===0){
                    let leftFreq : number = sMap.get(s.charAt(l));
                    sMap.set(s.charAt(l), leftFreq-1);
                    if(sMap.get(s.charAt(r))>sMap.get(mostFreqSym)){
                        mostFreqSym = s.charAt(r);
                    }
                    l++;
                }else{
                    if(sMap.has(s.charAt(r)) && r!==1){
                        let rightFreq: number = sMap.get(s.charAt(r));
                        sMap.set(s.charAt(r), rightFreq+1);
                        if(rightFreq+1>sMap.get(mostFreqSym)){
                            mostFreqSym = s.charAt(r);
                        }
                    }else{
                        sMap.set(s.charAt(r), 1);
                    }
            maxLen = (r-l)+1>maxLen?(r-l)+1:maxLen;
//            console.log(`p2 max len is ${maxLen}`);
                    r++;
                }
            }
            //console.log(`maxSym ${mostFreqSym},${sMap.get(mostFreqSym)}`);
            //console.log(sMap);
            uniquesRemaining=k-((r-l)-sMap.get(mostFreqSym));
        }
        //console.log(`final r ${r} l ${l} uniques Rem ${uniquesRemaining}`);
        return maxLen;
    }
*/