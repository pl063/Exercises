//Problem from hackerrank.com - https://www.hackerrank.com/challenges/encryption/problem

    function encryption(s) {
        let inputArr = s.split(" "); 
        let L = (inputArr.length > 1) ? inputArr.length : inputArr[0].length; 
        let squaredLength = Math.sqrt(L); 
        let flooredL = Math.floor(squaredLength);
        let ceiledL = Math.ceil(squaredLength); 
        let dimensions = [];

       let rowCount = flooredL; //starting values
       let colCount = rowCount; 

       if(rowCount * colCount >= L){
           dimensions.push(rowCount, colCount); 
       } else{
            let tempCol = rowCount + 1; 
            let tempRow = rowCount;
            while(tempCol * tempRow < L){
                if(tempRow > tempCol){
                    break
                } else{
                    tempRow++; 
                }

                if(tempRow * tempCol >= L){
                    break; 
                }

                if(tempCol > ceiledL){
                    break
                } else{
                    tempCol++; 
                }
            }
            dimensions.push(tempRow, tempCol)
       } 

       [rowCount, colCount] = dimensions;  //final values
       //Generate a grind
       let grind = [];
       let sIndex = 0; 
       let str = inputArr.join("");
       for(let i = 0; i < rowCount; i++){
            grind[i] = [];  
                for(let j = 0; j < colCount; j++){
                    let char = str[sIndex++];
                    if(j === 0){grind[i] = ""};
                    if(char === undefined){break}
                    else{  grind[i] += char;}
                }
       }

       //Encrypt the grind
        let output = []; 
        let charIndex = 0; 
        while(charIndex < colCount){
            output[charIndex] = ""; 
            for(let row = 0; row < rowCount; row++){
              let char = grind[row][charIndex]; 
              if(char !== undefined){output[charIndex] += char}
            }
            charIndex++; 
        }
        
       return output.join(" ");
    }

    // console.log(encryption("feedthedog"))