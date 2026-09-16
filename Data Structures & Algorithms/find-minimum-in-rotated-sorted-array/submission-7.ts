class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {
        if(nums[0]<=nums[nums.length-1]) return nums[0];
        let low : number = 0;
        let high : number = nums.length-1;
        let min : number = nums[0];
        let mid : number = 0;
        while(low<high){
            mid = low + Math.floor((high-low)/2);
        console.log(`mid idx is ${mid}, low is ${low} and high is ${high}`);
        console.log(`mid val: ${nums[mid]}, low val ${nums[low]} and high ${nums[high]}`);
            if(nums[low]<nums[mid]){
                low = mid;
            }else{
         //       console.log("else")
                high=mid;
            } 
        }
        //console.log(`min idx is ${mid}, low is ${low} and high is ${high}`);
        return nums[mid+1];
    }
}



/*

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
*/