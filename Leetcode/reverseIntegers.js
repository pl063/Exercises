/*Given a signed 32-bit integer x, return x with its digits reversed. 
If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0. */
var reverse = function(x) {
    let reversedInt = Number(String(Math.abs(x)).split("").reverse().join(""));
    if(reversedInt > 0x7FFFFFFF){ //using constant to check if the integer is 32-bit
        return 0;
    }
    return x < 0 ? -reversedInt : reversedInt; 
};
// console.log(reverse(-123));