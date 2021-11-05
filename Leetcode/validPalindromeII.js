/*Given a string s, return true if the s can be palindrome after deleting at most one character from it. */

    var validPalindrome = function(s) {
        let isModified = false;
        let bool; 
        let result = validate(s);
        let t=0

        function validate(st){
            let reversedStr = st.split("").reverse().join(""); 
            for(let i = 0; i < st.length; i++){
                if(reversedStr[i] !== st[i] && !isModified){
                    let str = reversedStr.split("");
                    str.splice(i, 1); 
                    isModified = true;
                    validate(str.join(""));
                } else if(reversedStr === st){
                    bool = true; 
                    break;
                } else{
                    bool = false; 
                    break;
                }
            }   
            s = "";
            return bool; 
    }
        
    };
    

    console.log(validPalindrome("abc"))