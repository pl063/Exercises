    var canJump = function(nums) {
        if(nums.length === 1){
            return isLastIndexReached = true; 
        }
        let distance = 0; 
        for(let i = 0; i<nums.length; i++){
            distance = Math.max(distance, nums[i]); 
            if(distance == 0 && i!==nums.length-1){
                return false; 
            }
            distance--; 
        }
        return true
    };

    // console.log(canJump([1]));