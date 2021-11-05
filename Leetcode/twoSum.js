/*Given an array of integers numbers and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.*/

var twoSum = function(nums, target) {
    let result = [];
        {
            for(let currentNumber of nums){
                addEachNumber(currentNumber, nums.indexOf(currentNumber));
                if(result.length){
                    break;
                }
            }
                function addEachNumber(number, index){
                    for(let i = index+1; i < nums.length; i++){
                        let current = nums[i];
                        let currentSum = current + number;

                        if(currentSum == target){ 
                            return result.push(index, i);
                        }
                    }
                }
        }
    return result; 
};
// console.log(twoSum([3,2,3], 5));  Expected output: [0; 1];