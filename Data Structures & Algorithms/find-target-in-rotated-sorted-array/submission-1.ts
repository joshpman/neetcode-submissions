class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        if(nums.length==1) return nums[0]===target?0:-1;
        let low : number = 0;
        let high : number = nums.length-1;
        let targetIdx : number = -1;
        let mid : number = 0;
        while(low<high){
            mid = low + Math.floor((high-low)/2);
            if(nums[low]<nums[mid]){
                low = mid;
            }else{
                high = mid;
            }
        }
        let minIdx: number = mid + 1;
        if(target>=nums[minIdx] && target<=nums[nums.length-1]){
            low = minIdx;
            high = nums.length-1;
        }else{
            low = 0;
            high = minIdx-1;
        }
        while(low<=high){
            mid = low + Math.floor((high-low)/2);
        //console.log(`low ${low} mid: ${mid} high: ${high}`)
            if(target===nums[mid]){
              targetIdx = mid;
              break;  
            } else if (target<nums[mid]){
                high= mid-1;
            }else{
                low = mid+1;
            }
        }
        //console.log(`Final low ${low} mid: ${mid} high: ${high}`)
        return targetIdx;
    }
}

/*
Case 1: low<middle
Rotation of 0?

Case 2: low>middle

Case 3: high< middle 
Case 4:  high>middle

*/
