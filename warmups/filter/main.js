Array.prototype.myFilter = function(callback) {
    var array = this;
    var newArray = [];
     for (var i =0; i < array.length; i++) {
         if (callback(array[i])){
             newArray.push(array[i])
         }
     } 
    return newArray;
}

var numericArray = [8, 3, 4, 32, 1, 9, 3, 5, 42, 56];

var thisArray = numericArray.myFilter(function(elemnt) {
    return elemnt < 5;
})
console.log(thisArray);