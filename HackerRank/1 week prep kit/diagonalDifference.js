//https://www.hackerrank.com/challenges/one-week-preparation-kit-diagonal-difference/problem?h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-two

    function diagonalDifference(arr) {
        let n = arr.length; 
        let diagonalsSums = {
            left_to_right: 0,
            right_to_left: 0
        }; 
        
        for(let i = 0; i < n; i++){
            diagonalsSums.left_to_right += arr[i][i]; 
            diagonalsSums.right_to_left += arr[i][n - i - 1]
        }

        return Math.abs(diagonalsSums.left_to_right - diagonalsSums.right_to_left); 
    }
    console.log(diagonalDifference([[11, 2, 4],
                        [4, 5, 6],
                        [10, 8, -12]]))