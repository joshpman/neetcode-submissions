class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {
        let min : number = nums[0];
        let low : number = 0;
        let high : number = nums.length-1;
        let mid : number = 0;
        while(low<high){
            mid = low + Math.floor((high-low)/2);
            let midVal : number = nums[mid];
            let l : number = nums[low];
            let r : number = nums[high];
       //     console.log(`l: ${l} r: ${r} mid: ${midVal}`)
       //     console.log(`low: ${low} high: ${high} mididx: ${mid}`)
            if(l < r && midVal < r){
                min = l<min?l:min;
                low = mid +1;
            }else if(l > r && midVal > r){
                min = r<min?r:min;
                low = mid +1;
            }else if(l < midVal && l < r){
                min = l<min?l:min;
                high = mid-1;
            }else if(l > midVal && l >r){
                min = r<min?r:min;
                high = mid-1;
            }else{
                high = mid - 1;
              //  console.log("hit last block")
            }
        }
       // console.log(`Found low: ${low} and high: ${high} and mid: ${mid}`)
            min = nums[low+1]<min?nums[low+1]:min;
        return min;
/*
Case 1: l & mid are greater than r, so we can move l to mid to find cut
Case 2: l & mid are less than r, move l to mid to find cut
Case 3: l is less than mid and r, move r down to mid
Case 4: l is greater than mid and r, move r down to mid

Once l and r cross, we should have our cut point located

*/
    }
}


