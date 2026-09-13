class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        let outputTriplets : number[][] = [];
        nums.sort((a,b) => a-b);
        let lftPtr : number = 1;
        let rightPtr : number = nums.length-1;
        let startingNumSet = new Set<number>();
        for(let i : number = 0; i<nums.length-2; i++){
        if(startingNumSet.has(nums[i])) continue;
        startingNumSet.add(nums[i]);
           let tVal : number = -nums[i];
           lftPtr = i+1;
           rightPtr = nums.length-1; 
           while(lftPtr<rightPtr){
            let sum : number = nums[lftPtr]+nums[rightPtr];
           let curTriplet : number[] = [nums[i]];
            if(sum===tVal){
                curTriplet.push(nums[lftPtr]);
                curTriplet.push(nums[rightPtr]);
                if(nums[lftPtr]===nums[lftPtr+1] && lftPtr+1<rightPtr){
                    lftPtr++;
                    continue;
                }
                outputTriplets.push(curTriplet);
                lftPtr++;
                    continue;
            }else if(sum<tVal){
                lftPtr++;
            }else{
                rightPtr--;
            }
           }
        }
        return outputTriplets;
    }
}
