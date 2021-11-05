
//Problem from hackerrank.com - Sherlock and the Valid String
function isValid (s) {
    let sOut = ["NO", "YES"]; 
    let charsObj = {};
    let hasDeleted = false;

    for(let char of s){
        if(charsObj[char]){
            charsObj[char]++;
        } else{
            charsObj[char] = 1; 
        }
    }

    let allCounts = Object.values(charsObj);
    let commonCount; 
    for(let i = 0; i < allCounts.length; i++){
        let count = allCounts[i];
        if(i === 0){
            commonCount = count; 
        } else if(commonCount !== count){ //invalid character
            if(i === 1){
                if(commonCount - 1 === 0){hasDeleted = true; commonCount = count}
                else{return sOut[0]}
            } else if(count - 1 === commonCount && !hasDeleted){
                hasDeleted = true;
            } else if(count === 1 && !hasDeleted){hasDeleted = true;}
            else{
                return sOut[0]; 
            }
        } 
    }
  return sOut[1]; 
}
    // console.log(isValid("aaaaabc"))