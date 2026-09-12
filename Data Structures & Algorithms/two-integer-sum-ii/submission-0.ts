class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let resIdx : number[] = [];
        let leftPtr : number = 0;
        let rightPtr : number = numbers.length-1;
        while(leftPtr<=rightPtr){
            let sum = numbers[leftPtr]+numbers[rightPtr];
            if(sum===target){
                resIdx = [leftPtr+1, rightPtr+1];
                break;
            }else if(sum<target){
                leftPtr++;
            }else{
                rightPtr--;
            }
        }

        return resIdx;
    }
}
