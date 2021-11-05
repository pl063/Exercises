//https://www.hackerrank.com/challenges/one-week-preparation-kit-lonely-integer/problem?h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-two

    function lonelyinteger(a) {
        let arr = a.sort((a, b) => a - b);
        for (let i = 0; i < arr.length; i+=2){
            if(i + 1 >= arr.length){
                return arr[i];
            } else if(arr[i] !== arr[i + 1]){
                return arr[i]
            }
        }
    }
    console.log(lonelyinteger([1, 2, 3, 4, 1, 2, 3]))