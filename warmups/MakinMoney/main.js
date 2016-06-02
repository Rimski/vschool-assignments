function formatMoney(x) {
    var myString = x.toString();
    //put a dot infront of the last two numbers
    var lastTwo = "." + myString.slice(-2)
    var myArray = myString.split("");
    myArray.splice(-2, 2)
    var reverseArray = myArray.reverse();

    //after the dot add commas every three
    for (var i = 0; i > myArray.length; i + 3) {
        console.log(i);
        // adding a comma every three
        reverseArray.splice(i, 0, ",");
        // adding comma to count
        i++;
    }

    //    var moneyArray = myString.split(\d{3});
    reverseArray.reverse();
    var moneyString = "$" + reverseArray.join("") + lastTwo;
    return (moneyString);
    //    add a $ to the front
}

console.log(formatMoney(123456789)) // returns $1,234,567.89