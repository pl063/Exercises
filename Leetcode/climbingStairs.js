/*Get the minimum  count of combinations to climb stairs. You can only climb 1 or 2 steps at a time.
Input: stairsCount(Number), Output: combinationCount(Number)*/


var climbStairs = function(n) {
        let stairsCount = n; 
        let climbingCombinations = []; 

        let res = [];
        while(stairsCount > 0){
            if(stairsCount - 2 >= 0){
                res.push(2); 
                stairsCount -= 2; 
            } else if(stairsCount - 2 < 0){
                res.push(1);
                stairsCount -= 1; 
            }  
            let currentSum = res.reduce((a, b) => a + b);
            if(currentSum === n){
                climbingCombinations.push(res);
                res = []; 
            }
        } 
        
        return climbingCombinations.length;
    };

    // console.log(climbStairs(4));
