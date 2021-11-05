    //https://www.hackerrank.com/challenges/birthday-cake-candles/problem

    function birthdayCakeCandles(candles) {
        let maxHeight = Math.max(...candles); 
        let count = 0;
        for(let i = 0; i < candles.length; i++){
            if(candles[i] === maxHeight){count++}
        }
        console.log(count)
    }
    birthdayCakeCandles([3, 2, 1, 3]);