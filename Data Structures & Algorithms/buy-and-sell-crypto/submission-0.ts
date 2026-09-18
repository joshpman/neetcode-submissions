class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let minLeft : number[] = [0, prices[0]];
        let max : number = 0;
        for(let i : number = 2; i<prices.length; i++){
           minLeft[i] = Math.min(minLeft[i-1], prices[i-1]); 
        }
        for(let j : number = prices.length-1; j>0; j--){
            let profit : number = prices[j]-minLeft[j];
            max = Math.max(profit, max);
        }
        console.log(minLeft);
        return max;
    }
}
