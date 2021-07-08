  /*Given an integer n. Each number from 1 to n is grouped according to the sum of its digits. 
   Return how many groups have the largest size. */
   var countLargestGroup = function(n) {
      let allGroups = {};
      
      for(let i = 1; i <= n; i++){
         let currentInt = i; 
         let sumOfDigits = String(currentInt).split("").map(x => Number(x)).reduce((a, b) => a + b);

         if(allGroups[sumOfDigits]){
            allGroups[sumOfDigits].push(currentInt);
         } else{
            allGroups[sumOfDigits] = []; 
            allGroups[sumOfDigits].push(currentInt); 
         };
      };

   let largestSize = 0; 
   let largestGroupsCount = 0; 

      for(let [key, group] of Object.entries(allGroups)){
         let currentSize = group.length;
         if( currentSize > largestSize){
            largestSize = currentSize;
         }
      }

      for(let [key, group] of Object.entries(allGroups)){
         if(group.length === largestSize){
            largestGroupsCount++;
         }
      }

   return largestGroupsCount;
   };

   // console.log(countLargestGroup(101)) Expected output: 1