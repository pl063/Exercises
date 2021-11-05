//Decrypt messages encrypted with my solution to the https://www.hackerrank.com/challenges/encryption/problem
    function decrypt(message){
        //get the grind 
        let messageArr = message.split(" "); 
        let decrypted = []; 
        let rowCount = messageArr.length, colCount = messageArr[0].length; 
        for(let col = 0; col < colCount; col++){
            for(let row = 0; row < rowCount; row++){
                decrypted.push(messageArr[row][col]);
            }
        }
        return decrypted.join(" "); 
    }
    console.log(decrypt("it ae mo")); 