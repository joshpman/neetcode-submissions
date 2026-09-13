class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        let maxRight : number[]=[];
        let maxLeft : number[]=[];
        let leftPtr : number = 1;
        let rightPtr : number = height.length-2;
        let volume : number = 0;
        maxRight[height.length-1] = 0;
        maxLeft[0]=0;
        while(leftPtr<height.length && rightPtr>=0){
          let curLeftMax = Math.max(height[leftPtr-1], maxLeft[leftPtr-1]);
          maxLeft[leftPtr++]=curLeftMax;

          let curRightMax = Math.max(height[rightPtr+1], maxRight[rightPtr+1]);
          maxRight[rightPtr--]=curRightMax;
        }
        //console.log(maxLeft);
        //console.log(maxRight);
        for(let i : number = 0; i<height.length; i++){
            let curVol : number = Math.min(maxLeft[i], maxRight[i]);
            //console.log(`Volume at ${i} is ${curVol}`);
            curVol=curVol>0&&curVol>=height[i]?curVol-height[i]:0;
            //console.log(`Volume at ${i} is ${curVol}`);
            volume+=curVol;
        }
        return volume;
    }
    
}
