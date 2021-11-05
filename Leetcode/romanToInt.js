    /*Given a roman numeral, convert it to an integer.*/
    var romanToInt = function(s){
        let equalInteger = 0; 
            {       
                const romanSymbols = {
                    M: 1000, 
                    CM: 900, 
                    D: 500, 
                    CD: 400,
                    C: 100, 
                    XC: 90,
                    L: 50,
                    XL: 40, 
                    X: 10, 
                    IX: 9, 
                    V: 5, 
                    IV: 4,
                    I: 1
                }
                let symbolsArr = s.split(""); 

                for(let index = 0; index < symbolsArr.length; index++){
                    let currentSymbol = symbolsArr[index]; 
                    let currentSymbolIntValue = romanSymbols[currentSymbol];

                    let nextSymbol = symbolsArr[index + 1]; 
                    let nextSymbolIntValue = romanSymbols[nextSymbol]; 

                    if(currentSymbolIntValue >= nextSymbolIntValue){
                        equalInteger += currentSymbolIntValue;
                    } else if(currentSymbolIntValue < nextSymbolIntValue){
                        equalInteger -= currentSymbolIntValue;
                    } else if(currentSymbolIntValue && !nextSymbolIntValue){
                        equalInteger += currentSymbolIntValue;
                    }
                }
            }
        return equalInteger; 
    }
    // console.log(romanToInt('IV'));