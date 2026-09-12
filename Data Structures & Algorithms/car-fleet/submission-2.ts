class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number {
        const mappedArr = position.map((value,index)=>({value, index}));
        const rankings = [...mappedArr].sort((a,b)=>b.value-a.value);

        let fleets = 1;
        let firstArrivalTime = (target - rankings[0].value)/speed[rankings[0].index];
       // console.log(`First arrival is at ${firstArrivalTime}`);
        let timeStack:number[]=[firstArrivalTime];
        for(let i : number = 1; i<rankings.length; i++){
           let idealArrivalTime = (target-rankings[i].value)/speed[rankings[i].index];
           if(idealArrivalTime>timeStack[timeStack.length-1]){
            timeStack.push(idealArrivalTime);
            fleets++;
           }
        }
        //console.log(rankings);
        return fleets;
    }
}
