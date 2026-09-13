class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {
        let max : number = 0;
        for(let i : number = 0; i<piles.length; i++)
            max = piles[i]>max?piles[i]:max;

        let minRate : number = max;
        let lowerBound : number = 1;
        let upperBound : number = max;
        while(lowerBound<=upperBound){
            let midRate : number = lowerBound + Math.floor((upperBound-lowerBound)/2);
            let hoursConsumed : number = 0;
            for(let i : number = 0; i<piles.length; i++){
                hoursConsumed+=Math.ceil(piles[i]/midRate);
            }
            if(hoursConsumed<=h){
                //console.log(`Took ${hoursConsumed} hours with a rate of ${midRate}`)
               minRate = minRate>midRate?midRate:minRate;
               upperBound = midRate-1; 
            }else{
                //console.log(`Bad: Took ${hoursConsumed} hours with a rate of ${midRate}`)
                //console.log(`Lower Bound: ${lowerBound} Upper Bound: ${upperBound}`)
                lowerBound = midRate+1;
            }
        } 

        //console.log(`max is ${max}`);
        return minRate;
    }
}
