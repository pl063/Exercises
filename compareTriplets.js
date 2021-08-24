//Problem from HackerRank - Compare the Triplets

    function compareTriplets(aliceTriplets, bobTriplets) {
        aliceTriplets = aliceTriplets.map(x => Number(x)); 
        bobTriplets = bobTriplets.map(x => Number(x)); 
        let alicePoints = 0, bobPoints = 0

        for(let i=0; i<3; i++){
            if(aliceTriplets[i] > bobTriplets[i]){
                alicePoints++;
            } else if(bobTriplets[i] > aliceTriplets[i]){
                bobPoints++;
            } 
        }
        return [alicePoints, bobPoints]; 
    }

    // console.log(compareTriplets("17 28 30",
    //                             "99 16 8"))