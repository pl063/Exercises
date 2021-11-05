//Problem for Hacker Rank
//I make an array to store all costs to convert the given inputMatrix into any of allMagicSquares (there are 8 possible 3x3 magic squares) 
//and then I return the minimum cost :)

    function formAMagicSquare(inputMatrix){
        let allMagicSquares = [
            [[8, 1, 6], [3, 5, 7], [4, 9, 2]],
            [[6, 1, 8], [7, 5, 3], [2, 9, 4]],
            [[4, 9, 2], [3, 5, 7], [8, 1, 6]],
            [[2, 9, 4], [7, 5, 3], [6, 1, 8]], 
            [[8, 3, 4], [1, 5, 9], [6, 7, 2]],
            [[4, 3, 8], [9, 5, 1], [2, 7, 6]], 
            [[6, 7, 2], [1, 5, 9], [8, 3, 4]], 
            [[2, 7, 6], [9, 5, 1], [4, 3, 8]],
            ]
        let allCosts = [];

        for(let square of allMagicSquares){
            let currentCost = 0; 
            for(let row = 0; row<3; row++){
                for(let cur = 0; cur < 3; cur++){
                    let inputNum = inputMatrix[row][cur]; 
                    let squareNum = square[row][cur];
                    if(inputNum !== squareNum){
                        currentCost += Math.abs(inputNum - squareNum);
                    }
                }
            }
            allCosts.push(currentCost);
        }
        return Math.min(...allCosts); 
    }
    // console.log(formAMagicSquare([[4, 9, 2], [3, 5, 7], [8, 1, 5]]))