//https://www.hackerrank.com/challenges/one-week-preparation-kit-plus-minus/problem?h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-one

    function plusMinus(arr) {
       let positiveCount = 0, negativeCount = 0, zerosCount = 0;
       let arrLength = arr.length; 
       for(let i = 0; i < arrLength; i++){
           let current = arr[i]; 
           if(current < 0){negativeCount++}
           else if(current > 0){positiveCount++}
           else if(current === 0){zerosCount++}
       }
       logFractions(positiveCount, negativeCount, zerosCount);

        function logFractions(...counts){
                for(let i = 0; i < 3; i++){
                    console.log((counts[i]/arrLength).toFixed(6));
                }
            }
    }
    // console.log(plusMinus([-4, 3, -9, 0, 4 ,1]))