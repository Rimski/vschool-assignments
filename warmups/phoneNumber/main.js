function phoneNumber(tel) {
    var lowerString = tel.toLocaleLowerCase().replace(/\W/g, "");
    if (lowerString.length === 7 || lowerString.length === 10 || lowerString.length === 11) {
        var numbers = { a: 2, b: 2, c: 3, d: 3, e: 3, f: 3, g: 4, h: 4, i: 4, j: 5, k: 5, l: 5, m: 6, n: 6, o: 6, p: 7, q: 7, r: 7, s: 7, t: 8, u: 8, v: 8, w: 9, x: 9, y: 9, z: 9
        }
        var translatedTel = "";
        for (var i = 0; i < lowerString.length; i++) {
            translatedTel += numbers[lowerString[i]];
        }
        return translatedTel;
    } else {
        return "not a number"
    }
};
console.log(phoneNumber("dx-eg--  efx"));