    var avoidFlood = function(rains) {
        let dp = new Array(rains.length).fill(false); 
        let ans = new Array(rains.length); 

        for(let i = 0; i < rains.length; i++){
            let current = rains[i]; 
            if(current === -1) { ans[i] = -1; continue};
            if(current === 0){
                if(dp.includes(true)){
                    let index = dp.indexOf(true); 
                    dp[index] = false; 
                    ans[i] = rains[index]; 
                    rains[index] =  -1;
                } else{
                    let iteratedPart = rains.slice(0, i); 
                    let num = getLargestNum(iteratedPart);
                    rains[rains.indexOf(num)] =  -1;
                    ans[i] =  num === 0 ? 1 : num; 
                }
            } else{
                let fPart = rains.slice(0, i);
                let sPart = rains.slice(i+1); 
                    if(fPart.includes(current)){
                        dp[i] = true; 
                        break;
                    } else if(sPart.includes(current)){
                        dp[rains.lastIndexOf(current)] = true; 
                    }
                        ans[i] = -1; 
                }
        }


        function getLargestNum(arr){
            let largest = 0; 
            for (let i=0; i<=arr.length; i++){
                let x = arr[i];
            if(x > largest){
                largest = x;
            }
            }
            return largest;
        }

return dp.includes(true) ? [] : ans;
};
    console.log(avoidFlood([1,0,2,0,3,0,2,0,0,0,1,2,3]
        )) 