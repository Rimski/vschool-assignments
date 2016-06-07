function luckySum(x, y, z) {
    var myArray = [x, y, z];
    var count = 0;
    for (var i = 0; i < myArray.length; i++) {
        if (myArray[i] === 13) {
            break;
        } else {
            count += myArray[i];
        }
    }
    return count;
}
console.log(luckySum(4, 13, 5));