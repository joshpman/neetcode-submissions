    type Entry = {
        str: string;
        time: number;
    };
class TimeMap {
       keyStore: Map<string, Entry[]>; 
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key: string, value: string, timestamp: number): void {
        if(this.keyStore.has(key)){
            let oldArr : Entry[] = this.keyStore.get(key);
            oldArr.push({str: value, time: timestamp});
            this.keyStore.set(key, oldArr);
        }else{
            this.keyStore.set(key, [{str: value, time: timestamp}]);
        }
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key: string, timestamp: number): string {
        if(this.keyStore.has(key)){
            let allEntries : Entry[] = this.keyStore.get(key);
            //console.log(allEntries);
            if(allEntries[allEntries.length-1].time<=timestamp) return allEntries[allEntries.length-1].str;
            let timestampArr : number[] = allEntries.map(entry=>entry.time);
            let low : number = 0;
            let high : number = timestampArr.length-1;
            let mid : number = 0;
            let timeIdx : number = 0;
            if(timestampArr[0]>timestamp) return "";
            
            while(low<=high){
                let mid : number = low + Math.floor((high-low)/2);
                //console.log(`Checking idx ${low} ${mid} ${high}`);
                if(timestampArr[mid]<=timestamp){
                    low = mid+1; 
                    timeIdx = timestampArr[timeIdx]<timestampArr[mid]?mid:timeIdx;
//                    timeIdx = timestampArr[timeIdx]<timestampArr[mid]?mid:timeIdx;
                }else if(timestampArr[mid]>timestamp){
 //                   timeIdx = timestampArr[timeIdx]<timestampArr[mid]?mid:timeIdx;
                    high = mid-1;
                }
            }
            //console.log(`Final idx: ${mid} and timeidx ${timeIdx}`);
            return allEntries[timeIdx].str;
        }else{
            return "";
        }
    }
}
