function longestWord(string){
    // find the longest word
    var myArray = string.split(" ")
    //find the longest word 
    //for loop  
    
    for (var i = 0; i <myArray.length; i++){
        if (myArray[i].length > myArray[i++].length){
            return myArray[i];
            
        }else continue;
    }
}