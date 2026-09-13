class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights: number[]): number {
        let largest : number = 0;
        let areaStck = [{height: heights[0], index:0}];
        let tmpMax : number = 0;
        let prevIdx : number = 0;
        for(let i : number = 1; i<heights.length; i++){
            prevIdx = i;
                while(areaStck.length > 0 && heights[i]<areaStck[areaStck.length-1].height){
                   tmpMax = (i-areaStck[areaStck.length-1].index) * areaStck[areaStck.length-1].height;
                   prevIdx = areaStck[areaStck.length-1].index;
                   areaStck.pop();
             //      console.log(`tmpMax is ${tmpMax}`);
                   if(tmpMax>largest) largest = tmpMax;
                }
                areaStck.push({height: heights[i], index: prevIdx});
        }
//        console.log(areaStck);
        while(areaStck.length>0){
            let finalWidth : number = heights.length;
            let tmpMax = (finalWidth - areaStck[areaStck.length-1].index) * areaStck[areaStck.length-1].height;
 //                  console.log(`tmpMax in outro is ${tmpMax}`);
            if(tmpMax>largest) largest = tmpMax;
            areaStck.pop()
        }

        return largest;
    }
}
