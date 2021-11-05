    function flippingMatrix(matrix) {
        let lengthOfQuadrant = matrix.length / 2; 
        let maxSum = 0;
        if(matrix.length === 1){return Math.max(matrix[0][0], matrix[0][1], matrix[1][0], matrix[1][1])};
        
        for(let i = 0; i < matrix.length; i++){
          let col =[];
           getCol(col, i);
           if()
        }

            function getCol(col, i){
                for(let row of matrix){
                    col.push(row[i]); 
                }
            }
    }
    // let row = matrix[i]; 
    // if(row[0] < row[row.length - 1]){ //reverse row
    //     row.reverse(); 
    // }
    flippingMatrix([[112, 42, 83, 119],
                     [56, 125, 56, 49], 
          [15, 78, 101, 43], [62, 98, 114, 108]]
      )