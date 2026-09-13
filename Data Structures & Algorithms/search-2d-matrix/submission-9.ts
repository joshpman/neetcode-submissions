class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
       let lowRow : number = 0; 
       let highRow : number = matrix.length - 1;
       let midRow : number = lowRow + Math.floor((highRow-lowRow)/2);
       while(lowRow<=highRow){
       midRow = lowRow + Math.floor((highRow-lowRow)/2);
            let lowRange: number = matrix[midRow][0];
            let highRange : number = matrix[midRow][matrix[0].length-1];
            console.log(`low is ${lowRange} and high is ${highRange} is row ${midRow}`)
            if(lowRange===target || highRange===target) return true;
            if(target<=highRange && target>=lowRange){
               break; 
            }
            if(target > highRange){
                lowRow = midRow+1;
            }else {
               highRow = midRow -1;
            }
       }
       //if(lowRow>highRow) return false;
       console.log(`Checking row ${midRow}`);
       let lowCol : number = 0;
       let highCol : number = matrix[midRow].length-1;
       while(lowCol<=highCol){
            let midpoint : number = lowCol + Math.floor((highCol-lowCol)/2);
            let val : number = matrix[midRow][midpoint];
            if(val<target){
                lowCol = midpoint + 1;
            }else if(val>target){
                highCol = midpoint - 1;
            }else if(val===target){
                return true;
            }
       }
       return false;
    }
}
