    /**Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.
Return the quotient after dividing dividend by divisor.
The integer division should truncate toward zero, which means losing its fractional part. For example, truncate(8.345) = 8 and truncate(-2.7335) = -2.
Note: Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231, 231 − 1]. For this problem, assume that your function returns 231 − 1 when the division result overflows. */

var divide = function(inputDividend, inputDivisor) {
    let dividend = Math.abs(inputDividend);
    let divisor = Math.abs(inputDivisor);
    
    if (inputDividend === 0 || dividend < divisor){
        return 0
    } else if (inputDivisor === -1 && inputDividend === -2147483648) {
        return 2147483647
    } else if (divisor === 1){
        return inputDivisor > 0 ? inputDividend : -inputDividend
    }
    
    return (function calculateResult(){
        let sign = (inputDivisor > 0 && inputDividend > 0) || (inputDivisor < 0 && inputDividend < 0) ? 1 : -1;
        let result = 0;
        let arr = [divisor];    //storing all the numbers starting from divisor to the dividend, calculating with lastNum * lastNum
        while (arr[arr.length - 1] < dividend){ 
            let lastNum = arr[arr.length - 1];
            arr.push(lastNum + lastNum);
        };
      
        for (let i = arr.length - 1; i >= 0; i--) {
            let currentNum = arr[i];
          if (dividend >= currentNum) {
            dividend -= currentNum;
            result += i === 0 ? 1 : 2 << (i - 1);
          }
        }

        return result * sign;
    })();
  };

// console.log(divide(-90, 3));