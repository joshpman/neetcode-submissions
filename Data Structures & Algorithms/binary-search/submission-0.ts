class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let idx : number = -1;
        let high : number = nums.length-1;
        let low : number = 0;
        while(low<=high){
            let midPoint : number = low + Math.floor((high-low)/2);
            if(nums[midPoint]===target){
                idx = midPoint;
                break;
            }else if(nums[midPoint]<target){
                low = midPoint+1;
            }else{
                high=midPoint-1;
            }
        }
        
        return idx;
    }
}
