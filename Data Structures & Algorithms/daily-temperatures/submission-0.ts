class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        console.log("At the very top")
        let results : number[] = Array(temperatures.length).fill(0);
        let stack : number[] = [0];
        let curIdx=0;
        while(stack.length>0){
           let nextVal = temperatures[++curIdx];
           //console.log(stack);
           //console.log(`Top of stack temp is ${temperatures[stack[stack.length-1]]} and curIdx temp is ${temperatures[curIdx]}`)
           while(temperatures[stack[stack.length-1]]<nextVal){
            results[stack[stack.length-1]]=curIdx-stack.pop();
           }
           if(curIdx<temperatures.length){
            stack.push(curIdx);
           }else{
            while(stack.length>0){
                stack.pop();
            }
           }
        }
       return results; 
    }
}
/*
Example: [30,39,2,17,40,17]
Output: [1,3,1,1,0]

Reversed Temps: [17,40,17,2,39,30]

*/