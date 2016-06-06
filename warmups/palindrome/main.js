function isPalendrome(string) {
    var lowerString = string.toLocaleLowerCase().replace(/[^a-z]/g, "");
    var stringArray = lowerString.split("");
    var reverseString = stringArray.reverse("");
    var joinString = reverseString.join("");
    console.log(joinString);
    if (lowerString === joinString) {
        return true;
    } else {return false}
}


console.log(isPalendrome("skylee"));