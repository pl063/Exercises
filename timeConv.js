//Problem is from Hacker Rank - Time Conversion

    function timeConversion(sIn){
        let inputFormat = sIn.substr(sIn.length - 2, 2); 
        sIn = sIn.replace(inputFormat, "");
        let temp = sIn.split(":");
        let result = [];
        let [hours, minutes, seconds] = temp; 
        if(inputFormat === "AM"){
            if(Number(hours) + 12 === 24){
                result[0] = "00";
            }
          else { return temp.join(":") } //result = temp
        } else{
            if(hours == "12"){
                result[0] = hours; 
            }
            else{
                result[0] = +hours + 12; 
            }
        }
        result[1] = minutes; 
        result[2] = seconds;
        return result.join(":");
    }

    console.log(timeConversion("12:05:45PM"))