    var rob = function(nums) {
        let previousNumberRob = 0; 
        let nextNumberRob = 0; 

        for(let currentNumber of nums){
            let currentSum = Math.max(currentNumber + previousNumberRob, nextNumberRob); 
            previousNumberRob = nextNumberRob; 
            nextNumberRob = currentSum; 
        }
        return nextNumberRob; 
    };
    console.log(rob([2,1,0,2]))