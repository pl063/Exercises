    /*Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
    Runtime: 80 ms,  Memory Usage: 50.2 MB*/

    var isPalindrome = function(s) {
        let validCharPattern = /^[a-z0-9]+$/i; 
        let filteredChars = s.split("").filter(char => char.match(validCharPattern)); 
        let reversed = [...filteredChars].reverse().join(""); 
        return filteredChars.join("").toLowerCase()  === reversed.toLowerCase()
    };

    // console.log(isPalindrome("race a car"))


 