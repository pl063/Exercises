//https://www.hackerrank.com/challenges/one-week-preparation-kit-mini-max-sum/problem?h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-one
    
    function miniMaxSum(arr) {
      arr = arr.sort((a, b) => b - a); 
      let maxSum = arr.slice(0, 4).reduce((a, b) => a + b); 
      let minSum = arr.slice(1).reduce((a, b) => a + b); 
      console.log(`${minSum} ${maxSum}`); 
    }
    miniMaxSum([1, 2, 3, 4, 5])