class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let max : number = 0;
        let lftPtr : number = 0;
        let rightPtr : number = heights.length-1;
        while(lftPtr<rightPtr){
            let curArea : number = (rightPtr-lftPtr)*Math.min(heights[lftPtr], heights[rightPtr]);
            if(curArea>max) max = curArea;
            if(heights[lftPtr]<heights[rightPtr]){
                lftPtr++;
            }else{
                rightPtr--;
            }
        }
        return max;
    }
}
