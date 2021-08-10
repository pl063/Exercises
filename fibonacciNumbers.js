  /*The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,
F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
Given n, calculate F(n).*/
//* Runtime - 	72 ms, Memory Usage - 38.8 MB
  
  var fib = function(n) { //! map = {num: numSum}
    if(n === 0){return 0}
    else if(n === 1){return 1}; 
    let output;  
    let map = new Map(); 
    map.set(0, 0); 
    map.set(1, 1); 

    for(let i = 2; i < n; i++){
        if(!map.has(i)){
            let fibSum = helper(i); 
            map.set(i, fibSum);
        }
    }
    
    output = map.get(n - 1) + map.get(n - 2);
    return output; 

        function helper(x){
            if(map.has(x)){
                return map.get(x); 
            }
            let res = helper(x - 1) + helper(x - 2); 
            return res; 
        }
    };
    // console.log(fib(0))